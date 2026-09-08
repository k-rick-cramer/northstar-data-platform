resource "aws_s3_bucket" "portfolio" {
  bucket_prefix = "northstar-portfolio-"

  tags = {
    Project   = "Northstar"
    Component = "Portfolio"
    ManagedBy = "Terraform"
  }
}

resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_cloudfront_origin_access_control" "portfolio" {
  name                              = "northstar-portfolio-oac"
  description                       = "Allows CloudFront to securely access the private Northstar portfolio bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "portfolio_url_rewrite" {
  name    = "northstar-portfolio-url-rewrite"
  runtime = "cloudfront-js-2.0"
  comment = "Rewrites clean portfolio URLs to their exported index.html objects"
  publish = true

  code = <<-EOT
    function handler(event) {
      var request = event.request;
      var uri = request.uri;

      if (uri.endsWith("/")) {
        request.uri = uri + "index.html";
      } else if (!uri.includes(".")) {
        request.uri = uri + "/index.html";
      }

      return request;
    }
  EOT
}

data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "portfolio" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Northstar professional portfolio"
  default_root_object = "index.html"
  aliases             = ["rickcramer.dev"]
  price_class         = "PriceClass_100"

  origin {
    domain_name              = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id                = "northstar-portfolio-s3"
    origin_access_control_id = aws_cloudfront_origin_access_control.portfolio.id
  }

  default_cache_behavior {
    target_origin_id       = "northstar-portfolio-s3"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = [
      "GET",
      "HEAD",
    ]

    cached_methods = [
      "GET",
      "HEAD",
    ]

    compress        = true
    cache_policy_id = data.aws_cloudfront_cache_policy.caching_optimized.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.portfolio_url_rewrite.arn
    }
  }

  custom_error_response {
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 10
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.portfolio.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    Project   = "Northstar"
    Component = "Portfolio"
    ManagedBy = "Terraform"
  }
}

data "aws_iam_policy_document" "portfolio_bucket" {
  statement {
    sid    = "AllowCloudFrontReadOnly"
    effect = "Allow"

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.portfolio.arn}/*",
    ]

    principals {
      type = "Service"

      identifiers = [
        "cloudfront.amazonaws.com",
      ]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"

      values = [
        aws_cloudfront_distribution.portfolio.arn,
      ]
    }
  }
}

resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  policy = data.aws_iam_policy_document.portfolio_bucket.json
}

data "aws_route53_zone" "portfolio" {
  name         = "rickcramer.dev"
  private_zone = false
}

resource "aws_acm_certificate" "portfolio" {
  domain_name       = "rickcramer.dev"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Project   = "Northstar"
    Component = "Portfolio"
    ManagedBy = "Terraform"
  }
}

resource "aws_route53_record" "portfolio_certificate_validation" {
  for_each = {
    for dvo in aws_acm_certificate.portfolio.domain_validation_options :
    dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = data.aws_route53_zone.portfolio.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.record]
}

resource "aws_acm_certificate_validation" "portfolio" {
  certificate_arn = aws_acm_certificate.portfolio.arn

  validation_record_fqdns = [
    for record in aws_route53_record.portfolio_certificate_validation :
    record.fqdn
  ]
}

resource "aws_route53_record" "portfolio_ipv4" {
  zone_id = data.aws_route53_zone.portfolio.zone_id
  name    = "rickcramer.dev"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "portfolio_ipv6" {
  zone_id = data.aws_route53_zone.portfolio.zone_id
  name    = "rickcramer.dev"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.portfolio.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio.hosted_zone_id
    evaluate_target_health = false
  }
}
