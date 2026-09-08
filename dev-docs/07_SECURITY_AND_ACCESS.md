# 07 - Security and Access

## IAM principles

- Root account not used for routine work.
- Human and service identities separated.
- Least-privilege roles.
- Resource-scoped policies wherever practical.
- Trust policies documented.
- Temporary credentials preferred.
- No long-lived AWS credentials in browser/client code.
- Service roles explicit.
- STS/web identity concepts demonstrated.

## KMS

Encrypt at rest where appropriate:
- S3
- Redshift
- databases
- selected logs/backups

Coverage includes regional key considerations and snapshot-copy grants where applicable.

## Secrets Manager

Store:
- database credentials;
- API credentials;
- simulator/private service secrets.

No secrets in:
- source control;
- frontend bundles;
- plaintext config.

## Cognito reviewer access

Public users do not need accounts.

Live reviewers:
- account created/approved administratively;
- email used as login identity;
- role/group claim controls capabilities;
- expiration stored server-side;
- automated expiry disables access.

Roles:
- Public
- Reviewer
- InteractiveReviewer
- Admin

## API protection

```text
Browser -> Cognito JWT -> API Gateway authorizer -> Lambda
```

Backend independently enforces authorization. Hiding buttons is not security.

## Networking

Project must demonstrate and document:
- VPC;
- public/private subnets;
- availability zones;
- security groups;
- ports;
- DNS/DNS TTL;
- VPC endpoints;
- PrivateLink concept/use where sensible;
- NAT/Internet Gateway concepts;
- SSL/TLS and HTTPS;
- certificates;
- SSH only in disposable EC2 lab.

## Demo safety

- input ranges clamped;
- rate limits/throttles;
- maximum event generation;
- cooldowns;
- cost-sensitive operations require server-side eligibility;
- no arbitrary query/code execution;
- no console credentials.

## Audit

CloudTrail is optional if course scope warrants it, but security-sensitive admin actions should be observable and documented.
