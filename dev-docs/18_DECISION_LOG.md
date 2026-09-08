# 18 - Decision Log

## ADR-001 - Synthetic retail company
**Decision:** Use a fictional outdoor/e-commerce retailer (Northstar Outfitters) with deterministic synthetic data.

**Why:** Gives complete control over source systems, volume, data quality problems, seasonality, streaming, CDC, and public-safe datasets.

## ADR-002 - Public portfolio plus gated live mode
**Decision:** Portfolio documentation and historical results remain public. Live AWS interaction requires approved Cognito access.

**Why:** Reviewers can assess the project without friction while live compute remains protected and cost-controlled.

## ADR-003 - Manual approval with automatic expiration
**Decision:** Reviewer accounts are manually approved and automatically expire/disable based on server-side policy.

**Why:** Prevents uncontrolled access while making interview access practical.

## ADR-004 - Core architecture plus disposable labs
**Decision:** Do not force every checklist service into the persistent architecture.

**Why:** Architectural judgment is more valuable than service-count maximization. Labs can still prove EC2/EFS/MSK/DAX/etc. skills.

## ADR-005 - S3 lake with Parquet curated layer
**Decision:** S3 is the central lake; curated analytics data is columnar Parquet.

**Why:** Directly demonstrates modern AWS lake patterns and allows Athena/Spectrum/Spark optimization work.

## ADR-006 - Both Athena and Redshift
**Decision:** Use Athena for serverless lake queries and Redshift for modeled warehouse workloads.

**Why:** Demonstrates appropriate use of both and allows comparison of lake query vs warehouse patterns.

## ADR-007 - Polling before WebSockets
**Decision:** First live dashboard implementation polls a sanitized API. Real-time push is an optional later enhancement.

**Why:** Proves live operation with less complexity; push can be added only if it materially improves the demo.

## ADR-008 - Terraform is primary IaC
**Decision:** Terraform is the primary infrastructure-as-code implementation for Northstar. CloudFormation/CDK remain AWS-course comparison/recognition topics.

**Why:** Terraform adds a distinct, highly transferable industry skill while still provisioning the AWS-first platform. Console-only provisioning is insufficient evidence for production-ready engineering.

## ADR-009 - Docker is a core project requirement
**Decision:** Containerize the Northstar simulator and deploy at least one containerized workload through ECR + ECS/Fargate.

**Why:** Container packaging/runtime skills are distinct from normal AWS service knowledge and commonly transferable across engineering environments.

## ADR-010 - dbt owns warehouse analytical transformations
**Decision:** Use dbt with Redshift for SQL-centered analytical models, tests, documentation, incremental models, lineage, macros, and history/snapshot patterns where appropriate.

**Why:** dbt provides an analytics-engineering workflow that AWS services do not directly replace. Glue/PySpark remains responsible for heavy engineering transformations so the two layers have clear boundaries.

## ADR-011 - Apache Iceberg is required
**Decision:** Implement at least one curated S3 domain as an Apache Iceberg table.

**Why:** Demonstrates modern lakehouse/table-format concepts above raw Parquet files while staying inside the AWS ecosystem.

## ADR-012 - Databricks and Snowflake deferred
**Decision:** Do not include Databricks or Snowflake in the planned Northstar build.

**Why:** Their major platform concepts overlap substantially with Spark, lakehouse, and warehouse skills already covered. They can be added later if specific job targets justify the additional platform-specific learning.
