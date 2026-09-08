# 20 - Tooling Strategy

## Principle

Northstar is an **AWS data engineering portfolio**, not a collection of unrelated platforms.

We deliberately add tools only when they contribute a materially distinct skill that is valuable across data-engineering jobs.

## Mandatory non-AWS / open tooling

### Terraform
**Role:** Primary Infrastructure as Code.

Use it to provision the AWS platform reproducibly.

Must demonstrate:
- providers;
- resources;
- data sources;
- variables;
- outputs;
- modules;
- state strategy;
- plan/apply/destroy;
- environment configuration;
- CI validation/deployment.

AWS CloudFormation/CDK remain comparison/course topics, not the primary implementation.

### Docker
**Role:** Reproducible workload packaging.

Primary first workload:
- Northstar synthetic-company simulator.

AWS deployment:
- ECR image repository;
- ECS/Fargate bounded task/service as appropriate.

Must demonstrate:
- Dockerfile;
- image build;
- container runtime;
- environment/configuration injection;
- logs;
- no embedded secrets;
- local and AWS parity.

### dbt
**Role:** Analytics engineering in Redshift.

dbt begins after clean/conformed data reaches the warehouse.

Must demonstrate:
- sources;
- staging models;
- `ref()`;
- facts/dimensions/marts;
- tests;
- incremental model;
- snapshot/history example;
- Jinja;
- macro;
- generated docs;
- lineage/DAG;
- CI build/test.

### Apache Iceberg
**Role:** Open lakehouse table format on S3.

Must demonstrate:
- distinction between Parquet file format and Iceberg table format;
- cataloged table;
- schema evolution;
- snapshots/time travel;
- updates/deletes/transactional behavior where supported by chosen engine;
- Athena/Glue interoperability where practical.

## Clear responsibility boundaries

```text
Terraform
   |
   +--> provisions AWS infrastructure

Docker
   |
   +--> packages selected executable workloads
          |
          +--> ECR -> ECS/Fargate

Operational Sources
   |
   v
AWS ingestion services
   |
   v
S3 RAW
   |
   v
Glue / PySpark
   |
   +--> validation / dedup / enrichment / large-scale transforms
   |
   v
S3 CURATED (Parquet / Iceberg)
   |
   +--> Athena
   |
   +--> Redshift
          |
          v
         dbt
          |
          +--> dimensions / facts / marts / tests / docs
          |
          v
      Portfolio analytics
```

## Explicitly deferred

### Databricks
Not required in the planned build because Spark, lakehouse, orchestration, and governance concepts already receive deep treatment in the AWS-first platform. Revisit if target jobs make Databricks-specific platform experience valuable.

### Snowflake
Not required in the planned build because Redshift provides the warehouse implementation needed to demonstrate modeling, loading, performance, dbt, and analytical serving. Revisit if target jobs heavily favor Snowflake.

## Optional later additions

Only add these if they solve a project requirement or a specific target-role gap:
- Kubernetes/EKS;
- Great Expectations or Soda;
- Airbyte/Fivetran;
- additional cloud warehouses/platforms.

## Anti-checklist rule

No tool is added solely so its logo can appear on the portfolio. Every mandatory tool must have:
- a clear responsibility;
- working source;
- tests/evidence;
- an architecture explanation;
- a failure/cost/security story.
