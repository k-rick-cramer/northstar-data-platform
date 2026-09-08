# AWS Data Engineering Portfolio Dev Docs

## Project

**Working project name:** Northstar Outfitters Data Platform

A production-style AWS data engineering portfolio that simulates a retail/e-commerce company, ingests batch and streaming operational data, builds a governed S3 data lake and analytical warehouse, exposes business analytics, and provides a controlled live demonstration through a professional portfolio website.

## Purpose of this package

These documents are the authoritative development specification for building the project one step at a time while progressing through the AWS data engineering course and job-readiness checklist.

The project has two design layers:

1. **Core production architecture**: the coherent architecture that powers the portfolio and live demo.
2. **Course-coverage labs**: disposable, documented experiments that prove skills which would be redundant, expensive, or architecturally inappropriate to keep in the production path.

The core platform is AWS-first. Four explicit modern data-platform additions are required: **Terraform** (primary IaC), **Docker** (workload packaging with ECR/ECS/Fargate), **dbt** (Redshift analytical engineering), and **Apache Iceberg** (lakehouse table-format concepts). Databricks and Snowflake are intentionally deferred.

## Document index

| File | Purpose |
|---|---|
| `00_MASTER_PLAN.md` | Overall vision, scope, architecture, phases, and execution rules |
| `01_PROJECT_CHARTER.md` | Goals, non-goals, success criteria, audiences |
| `02_ARCHITECTURE.md` | Core and lab architecture |
| `03_PORTFOLIO_SITE_SPEC.md` | Public portfolio, About Me, resume, photo, analytics, engineering views |
| `04_DATA_SIMULATOR_SPEC.md` | Synthetic company, source systems, historical and streaming data |
| `05_DATA_MODEL_AND_CONTRACTS.md` | OLTP, lake, dimensional model, data contracts |
| `06_PIPELINE_AND_ORCHESTRATION.md` | Batch, CDC, API, streaming, transformations, orchestration |
| `07_SECURITY_AND_ACCESS.md` | IAM, Cognito, KMS, Secrets Manager, networking, reviewer access |
| `08_LIVE_DEMO_AND_OBSERVABILITY.md` | Live-mode behavior, metrics, CloudWatch, controlled demo actions |
| `09_CONCEPT_TRACEABILITY_MATRIX.md` | How checklist concepts are proven |
| `09_CONCEPT_TRACEABILITY_MATRIX.csv` | Spreadsheet-friendly version of traceability matrix |
| `10_BUILD_PHASES_AND_GATES.md` | Phase-by-phase implementation sequence and exit gates |
| `11_TESTING_AND_DEFINITION_OF_DONE.md` | Unit, integration, data, security, cost, and demo tests |
| `12_COST_AND_RESOURCE_LIFECYCLE.md` | Budget guardrails and destroy/idle policies |
| `13_REPOSITORY_STRUCTURE.md` | Planned Git/GitHub repository layout |
| `14_COURSE_INTEGRATION.md` | How course learning feeds the project |
| `15_EMPLOYER_DEMO_GUIDE.md` | Visitor journey and interview/demo narrative |
| `16_PERSONAL_PORTFOLIO_CONTENT.md` | About Me, resume, photo, skills, links, contact plan |
| `17_PROJECT_STATUS.md` | Living checkpoint for future sessions |
| `18_DECISION_LOG.md` | Architecture decision record |
| `19_ACCEPTANCE_CHECKLIST.md` | Final portfolio launch checklist |
| `20_TOOLING_STRATEGY.md` | AWS-first tooling boundaries: Terraform, Docker, dbt, Iceberg, and deferred platforms |
| `21_CHANGELOG.md` | Dev-doc package revision history |
| `source/...` | Original user-provided job-readiness checklist |

## Rule for future work

Before beginning a new implementation session:

1. Read `17_PROJECT_STATUS.md`.
2. Read the relevant phase in `10_BUILD_PHASES_AND_GATES.md`.
3. Check affected entries in `09_CONCEPT_TRACEABILITY_MATRIX.md`.
4. Implement the smallest testable increment.
5. Run its acceptance tests.
6. Update status, matrix evidence, and decision log.
