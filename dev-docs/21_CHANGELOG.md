# 21 - Changelog

## v2 - 2026-09-08

### Architecture/tooling decision
- Reaffirmed AWS as the core ecosystem.
- Made Terraform the primary IaC implementation.
- Made Docker a core workload-packaging requirement.
- Added ECR + ECS/Fargate as the AWS deployment path for at least one containerized workload.
- Made dbt a required Redshift analytical-engineering layer.
- Made Apache Iceberg an explicit required lakehouse/table-format demonstration.
- Explicitly deferred Databricks and Snowflake unless future target roles justify them.

### Scope clarification
- Glue/PySpark remains responsible for engineering-scale transformations.
- dbt owns SQL-centered analytical transformations, tests, docs, lineage, and marts.
- Cross-industry tools complement rather than duplicate AWS services.

### Project status
- Recorded creation and successful console sign-in of IAM user `rick-admin`.
- Phase 0 remains in progress.
- Next step is MFA/cost-guardrail verification before Git/repository setup.
