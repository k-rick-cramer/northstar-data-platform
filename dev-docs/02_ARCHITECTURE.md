# 02 - Architecture

## Core domains

### Source systems
1. PostgreSQL/RDS operational database
2. REST shipping/payment-style API
3. CSV warehouse/inventory batch files
4. JSON website/customer events
5. Optional DynamoDB operational metadata

### Ingestion patterns
- Full batch
- Incremental API extraction
- CDC
- Event streaming
- File-triggered ingestion
- Scheduled ingestion

### Lake layers

```text
s3://<bucket>/raw/<source>/year=YYYY/month=MM/day=DD/
s3://<bucket>/staging/<domain>/year=YYYY/month=MM/day=DD/
s3://<bucket>/curated/<domain>/year=YYYY/month=MM/day=DD/
s3://<bucket>/quarantine/<domain>/reason=<reason>/...
s3://<bucket>/published/<dataset>/...
```

### Analytical and transformation layer
- Glue Data Catalog for lake metadata
- Athena for serverless lake SQL
- Glue/PySpark for large-scale engineering transformations
- Apache Iceberg for at least one curated lakehouse domain
- Redshift Serverless for warehouse workloads
- Redshift Spectrum for selected S3/Iceberg datasets where appropriate
- dbt for Redshift-centered analytical models, tests, snapshots, macros, documentation, and marts
- Star schema with SCD history and multiple fact types

## Core infrastructure diagram

```text
                         INTERNET / PORTFOLIO
                                  |
                            CloudFront/Site
                                  |
                         Cognito (live only)
                                  |
                             API Gateway
                                  |
                               Lambda
                                  |
              +-------------------+-------------------+
              |                                       |
        Demo Controller                         Read-only Metrics
              |                                       |
          EventBridge                           CloudWatch APIs
              |
      +-------+--------------------+
      |                            |
 Kinesis                    ECS/Fargate
      |                  containerized simulator/
 Firehose/Lambda            utility workloads
      |                            |
      +-------------+--------------+
                    |
                  S3 RAW
                    |
             Glue Catalog/Crawler
                    |
              Glue / PySpark
             /              \
      Quarantine       S3 Curated
                       Parquet/Iceberg
                         /        \
                    Athena      Redshift
                                  |
                                 dbt
                                  |
                         dimensions/facts/marts
                                  |
                           Published Analytics

Terraform provisions the AWS infrastructure.
Docker packages selected workloads; ECR stores images.
```


## Tool responsibility boundaries

| Tool | Primary responsibility | Explicit non-responsibility |
|---|---|---|
| Glue/PySpark | Large-scale data engineering transforms, lake standardization, validation, deduplication, Parquet/Iceberg output | Not the primary business-mart framework |
| Redshift | Analytical warehouse/serving engine | Not the raw ingestion engine |
| dbt | SQL analytical transformation, dependency graph, tests, docs, snapshots/incremental marts | Not heavy raw Spark processing |
| Docker | Reproducible packaging/runtime for selected workloads | Not AWS infrastructure provisioning |
| ECR + ECS/Fargate | Store/run containerized Northstar workloads | Not a replacement for Lambda/Glue where serverless functions/jobs fit better |
| Terraform | Primary reproducible AWS infrastructure definition | Not data transformation/business logic |
| Iceberg | Open table format for selected curated lakehouse data | Not a separate compute engine |

## Platform scope

The core platform is AWS-first. Databricks and Snowflake are intentionally excluded from the planned build. Kafka/MSK remains a focused comparison lab because streaming concepts matter, but Kinesis is the core streaming implementation.

## Disposable coverage labs

Labs reuse Northstar schemas, data, and security conventions.

| Lab | Purpose |
|---|---|
| EC2/EBS/VPC | Server control, SSH, AMI/instance types, security groups, gp2/gp3 concepts |
| EFS | Shared network filesystem and mount-target/security behavior |
| EMR | Run a PySpark transformation outside Glue and compare |
| Kafka/MSK | Reimplement a Northstar event stream and compare with Kinesis |
| Aurora | Compare standard RDS, Aurora, Serverless, read scaling, zero-ETL concept |
| DynamoDB/DAX | Access-pattern design, capacity, streams, cache comparison |
| Cache/NoSQL recognition | ElastiCache, MemoryDB, Keyspaces architecture notes/labs |
| Redshift admin | COPY/UNLOAD, distribution/sort, snapshots, KMS grants, Spectrum, streaming |
| Networking | public/private subnets, endpoints, NAT/IGW, TLS, DNS behavior |

## Architecture decision requirement

Each major service needs an ADR containing:
- requirement;
- selected option;
- alternatives considered;
- cost;
- security;
- operational burden;
- failure modes;
- when the alternative would be better.
