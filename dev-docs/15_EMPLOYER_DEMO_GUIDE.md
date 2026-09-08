# 15 - Employer Demo Guide

## 30-second path

Reviewer lands on portfolio:
1. sees professional identity/photo;
2. sees resume/skills;
3. sees Northstar featured project;
4. sees batch + streaming AWS architecture;
5. sees last successful run and data quality;
6. can open GitHub.

## 5-minute self-guided path

1. Overview
2. Architecture
3. Business Analytics
4. Pipeline
5. Data Quality
6. Lineage
7. Cost decisions
8. GitHub implementation

## Authenticated live path

1. Reviewer requests access.
2. Admin approves time-limited Cognito account.
3. Reviewer signs in.
4. Live infrastructure status appears.
5. Reviewer triggers predefined event batch.
6. Kinesis/event rate changes.
7. Lambda/consumer processes events.
8. raw count rises.
9. downstream processing updates.
10. dashboard records the run.

Optional second scenario:
- inject malformed/duplicate records;
- show quarantine and data-quality metrics.

## Interview narrative

Be ready to explain:
- Why S3 is the data lake.
- Why Parquet matters.
- Why Athena and Redshift both exist.
- Why Glue vs EMR.
- Why Kinesis vs Kafka/MSK.
- Why CDC vs full reload.
- How idempotency works.
- How SCD2 works.
- How retries/checkpoints/backfills work.
- How IAM roles are scoped.
- How live demo access is secured.
- How costs are bounded.
- What failed during development and how it was diagnosed.

## Cross-industry tooling talking points

Be ready to explain:
- Why Terraform rather than relying on console provisioning or making CloudFormation the primary IaC.
- Why Docker/ECS/Fargate is appropriate for the simulator while Lambda/Glue remain better fits for other workloads.
- Why dbt comes after clean warehouse inputs and does not duplicate Glue/PySpark.
- Why Iceberg adds a table abstraction above Parquet files.
- Why Databricks/Snowflake were not added merely to increase technology count.
