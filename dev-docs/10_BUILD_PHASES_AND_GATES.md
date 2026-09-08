# 10 - Build Phases and Gates

## Phase 0 - Safety and repository foundation
Build:
- AWS billing budget/alerts
- non-root working identity
- Git repo
- Python environment
- naming/tagging conventions
- project-status workflow

Exit gate:
- no root routine use;
- budget controls exist;
- repo is clean and documented.

## Phase 1 - Professional portfolio shell
Build:
- Home
- About Me placeholder/content framework
- photo slot
- resume page/download slot
- Projects
- Northstar overview
- GitHub/LinkedIn/contact

Exit gate:
- deployable public shell;
- no live AWS dependency required.

## Phase 2 - Synthetic company locally
Build:
- deterministic generator
- PostgreSQL schema locally
- CSV/JSON outputs
- dirty-data scenarios
- tests

Exit gate:
- same seed reproduces same core dataset;
- referential integrity is measurable;
- bad-data rate configurable.

## Phase 2B - Docker foundation
Build:
- Dockerfile for simulator
- local container execution
- environment/config handling
- ECR repository
- ECS/Fargate deployment for one bounded simulator workload

Exit gate:
- same simulator tests pass locally and in the container;
- image is reproducibly built;
- ECR/ECS path works;
- no credentials/secrets are baked into the image.

## Phase 3 - S3 data lake
Build:
- raw/staging/curated/quarantine buckets/prefixes
- versioning/encryption/lifecycle
- partition conventions
- upload historical data

Exit gate:
- documented S3 layout;
- lifecycle and encryption verified.

## Phase 4 - Catalog + Athena
Build:
- Glue database/tables/crawler
- partitions
- Athena queries
- CSV vs Parquet scan comparison

Exit gate:
- data is queryable;
- cost/scan evidence recorded.

## Phase 5 - Python/API ingestion
Build:
- REST source
- paginated extraction
- retries/rate limits
- Secrets Manager
- checkpoints
- boto3
- tests

Exit gate:
- safe incremental rerun;
- no duplicate outputs.

## Phase 6 - RDS/PostgreSQL + CDC
Build:
- RDS PostgreSQL
- security/connectivity
- DMS CDC
- insert/update/delete cases

Exit gate:
- changes arrive downstream correctly;
- connectivity/security documented.

## Phase 7 - Glue/PySpark transformation
Build:
- validation
- dedup
- joins
- partitioned Parquet
- bookmarks
- skew/performance lab

Exit gate:
- repeatable Glue job;
- bad data separated;
- PySpark tests pass.

## Phase 8 - Data quality framework
Build:
- completeness/validity/uniqueness/consistency/freshness
- reconciliation
- row-count anomalies
- schema-change handling

Exit gate:
- quality results persisted and shown publicly.

## Phase 9 - Dimensional model
Build:
- dimensions
- facts
- surrogate keys
- SCD2
- incremental facts
- snapshot fact

Exit gate:
- business questions answerable from analytical model.

## Phase 10 - Redshift
Build:
- Redshift Serverless
- COPY/UNLOAD
- distribution/sort experiments
- materialized views
- Spectrum
- warehouse performance evidence

Exit gate:
- clean/conformed warehouse sources loaded;
- architecture tradeoffs documented.

## Phase 10B - dbt analytical engineering
Build:
- dbt project targeting Redshift
- sources and staging models
- fact/dimension/business-mart models
- `ref()` dependency graph
- tests
- incremental model
- snapshot/history example
- Jinja/macro example
- generated docs/lineage

Exit gate:
- `dbt build` succeeds against project environment;
- tests prove key model assumptions;
- docs show model lineage;
- dbt and PySpark responsibilities are non-duplicative.

## Phase 11 - Orchestration
Build:
- Step Functions workflow
- EventBridge scheduling
- Airflow DAG
- MWAA proof or cost-controlled lab
- retries/backfills/failure paths

Exit gate:
- multi-step pipeline can recover and backfill.

## Phase 12 - Streaming
Build:
- Kinesis
- producer/consumer
- Firehose
- live dashboard metric
- partition-key experiment
- Redshift near-real-time path
- MSK/Kafka comparison lab

Exit gate:
- bounded synthetic event burst visibly traverses pipeline.

## Phase 13 - Monitoring and messaging
Build:
- CloudWatch logs/metrics/alarms
- SNS alerts
- SQS + DLQ
- troubleshooting runbook

Exit gate:
- intentional failures produce expected evidence.

## Phase 14 - Security/networking hardening
Build:
- least privilege
- KMS
- endpoints/private connectivity as appropriate
- TLS
- network diagrams
- security tests

Exit gate:
- no secret leakage;
- public/live boundaries verified.

## Phase 15 - Terraform IaC + CI/CD
Build:
- Terraform as primary IaC
- providers/resources/data sources
- variables/outputs
- modules
- remote/state-management strategy appropriate to project scale
- reproducible deployments
- dev/test/prod-like configuration separation where useful
- automated validation/tests
- GitHub Actions deployment pipeline
- CloudFormation/CDK comparison documented or demonstrated in a small AWS-course lab

Exit gate:
- core AWS environment can be rebuilt from Terraform source;
- `terraform plan` is reviewable in CI;
- destroy/cleanup paths are documented;
- no secrets are stored in Terraform source or committed state artifacts.

## Phase 16 - Live reviewer access
Build:
- Cognito
- access request
- admin approval
- expiration
- API authorization
- rate limiting

Exit gate:
- expired/unauthorized users cannot call protected APIs.

## Phase 17 - Live demo
Build:
- live pipeline visualization
- safe event generation
- bad-data scenario
- persisted run history
- service state

Exit gate:
- employer can trigger bounded demo and see evidence.

## Phase 18 - Coverage labs
Build:
- EC2/EBS/EFS
- EMR
- Aurora
- DynamoDB/DAX
- MSK/Kafka
- MemoryDB/ElastiCache/Keyspaces recognition
- networking experiments
- Redshift admin scenarios
- CLI/Linux evidence

Exit gate:
- traceability matrix contains evidence or documented conceptual treatment for every checklist concept.

## Phase 18B - Industry-tool integration review
Build:
- verify Docker evidence is public/documented
- verify Terraform modules/CI evidence
- verify dbt docs/tests/DAG evidence
- verify Iceberg evidence
- document why Databricks and Snowflake were not required for this AWS-first project

Exit gate:
- all four core cross-industry additions have clear portfolio evidence.

## Phase 19 - Portfolio launch
Build:
- final About Me
- photo
- resume
- project case study
- 3-5 minute demo
- screenshots
- architecture diagrams
- cost report
- final GitHub README

Exit gate:
- full acceptance checklist passes.
