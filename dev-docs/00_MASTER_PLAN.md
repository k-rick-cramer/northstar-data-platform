# 00 - Master Plan

## 1. North-star objective

Build a public professional portfolio centered around one serious AWS data engineering platform. The platform must do more than name AWS services. It must prove that the developer can:

- design operational and analytical data models;
- ingest batch, database, API, and streaming sources;
- build incremental and idempotent pipelines;
- transform data using SQL, Python, PySpark, Glue, and Spark;
- organize an S3 data lake using raw/staging/curated layers and Parquet;
- query lake data with Athena and load/model data in Redshift;
- orchestrate workflows and recover from failures;
- secure AWS resources correctly;
- monitor, troubleshoot, test, deploy, and document production-style pipelines;
- explain architectural tradeoffs;
- expose safe live evidence through a portfolio website.

## 2. Portfolio product

The public website is broader than the AWS project. It is the developer's professional portfolio.

Primary navigation:

- Home
- About Me
- Resume
- Projects
- Northstar Data Platform
- Skills
- Contact
- GitHub / LinkedIn

Northstar-specific views:

- Overview
- Business Analytics
- Pipeline
- Infrastructure
- Data Quality
- Lineage
- Costs
- Architecture Decisions
- Live Demo Access

The public site must be useful without authentication. Authentication unlocks live AWS functionality, not basic portfolio information.

## 3. Fictional company

**Working name:** Northstar Outfitters

Domain: e-commerce / outdoor retail.

The company exists only as synthetic data. The simulator will create consistent, reproducible customers, products, warehouses, orders, order lines, web events, payments/refunds, inventory snapshots, shipments, campaigns, and support activity.

The synthetic company should exhibit believable behavior:

- seasonality;
- Black Friday and holiday spikes;
- repeat customers;
- product popularity differences;
- related-product purchasing;
- inventory depletion and stockouts;
- promotions;
- refunds and shipment delays;
- late-arriving records;
- duplicates and malformed records;
- schema changes.

## 4. Core production architecture

```text
                    OPERATIONAL SOURCES

      PostgreSQL/RDS       REST API       Web/Event Simulator
            |                 |                    |
        DMS / CDC         Lambda/Python       Kinesis
            |                 |                    |
            +-----------------+--------------------+
                              |
                              v
                         S3 RAW ZONE
                              |
                        Glue Catalog
                              |
                    Glue / PySpark ETL
                              |
                 +------------+------------+
                 |                         |
            QUARANTINE                S3 CURATED
                                         |
                                    Parquet/Iceberg
                                         |
                         +---------------+--------------+
                         |                              |
                       Athena                       Redshift
                         |                              |
                         +---------------+--------------+
                                         |
                                 Analytical Models
                                         |
                                 Portfolio APIs/Data
                                         |
                                   Portfolio Website
```

Surrounding concerns:

- IAM: authorization
- KMS: encryption
- Secrets Manager: credentials
- CloudWatch: logs, metrics, alarms
- SNS/SQS: alerts and decoupling
- EventBridge / Step Functions / Airflow: orchestration
- Terraform or CDK/CloudFormation: reproducible infrastructure
- GitHub Actions: CI/CD
- Cognito: reviewer authentication
- API Gateway + Lambda: controlled public/live access

## 5. Required cross-industry tooling

Northstar remains deliberately **AWS-first**. We will not add another cloud platform merely to increase tool count. Three non-AWS tools are mandatory because they add distinct, highly transferable engineering skills with limited direct AWS-service crossover.

### Terraform - primary infrastructure as code

Terraform is the **primary IaC implementation** for Northstar.

It will provision and configure the major AWS resources used by the project, including S3, IAM roles/policies, Lambda, Glue-related infrastructure where supported/practical, Kinesis, SQS/SNS, API Gateway, Cognito, ECR/ECS, CloudWatch, and Redshift-related resources.

CloudFormation/CDK remain course/recognition topics and may appear in focused AWS labs, but they are not the main project IaC.

### Docker - workload packaging

Docker is a **core software-engineering component**, not a side lab.

At minimum we will containerize:
- the Northstar synthetic-company simulator;
- one ingestion or utility workload;
- the dbt runtime/development environment where useful.

Images will be stored in Amazon ECR. At least one containerized Northstar workload will run on ECS/Fargate so the project demonstrates the full path:

`source -> Docker image -> ECR -> ECS/Fargate -> AWS workload`

### dbt - analytical transformation layer

dbt is the **warehouse/business-transformation layer** after Redshift receives clean/conformed data.

Glue/PySpark owns large-scale engineering transformations such as standardization, validation, deduplication, enrichment, partitioned lake output, and other Spark-appropriate work.

dbt owns SQL-centered analytical engineering such as:
- staging models;
- fact/dimension models where appropriate;
- business marts;
- `ref()` and `source()` dependency management;
- incremental models;
- snapshots/SCD support where useful;
- tests;
- macros/Jinja;
- documentation and lineage.

This prevents dbt and PySpark from duplicating the same job.

### Apache Iceberg

Apache Iceberg remains part of the AWS lakehouse learning path. At least one curated Northstar domain will use Iceberg so the project demonstrates table-format concepts such as schema evolution, snapshots/time travel, transactional table behavior, and interoperability with AWS query/processing services.

### Explicitly deferred platforms

Databricks and Snowflake are **not planned project requirements**. Their major data-engineering concepts have substantial crossover with the Spark/lakehouse/warehouse skills already being demonstrated. They may be revisited later only if a job target makes them strategically worthwhile.

## 6. Core vs. coverage-lab rule

A service belongs in the core architecture only when it solves a real requirement.

Skills that would otherwise make the architecture worse are demonstrated in short-lived labs using the same project context.

Examples:

- EC2 + EBS: run a Northstar utility workload on a temporary instance, attach/inspect gp3 storage, then destroy it.
- EFS: mount shared storage to a temporary compute lab and document EFS vs EBS vs S3.
- MSK/Kafka: implement the same event shape used by Kinesis, compare behavior and tradeoffs, then destroy.
- DAX/MemoryDB/Keyspaces: build small proof labs and document when they are and are not appropriate.
- detailed Redshift snapshot/cross-region/KMS labs: create reproducible evidence without leaving resources running.

## 7. Build philosophy

The project grows alongside course learning. Do not build future-course components before they are understood well enough to explain and troubleshoot.

Every feature must satisfy four layers of proof:

1. **Implemented**: working infrastructure/code exists.
2. **Tested**: automated or documented verification exists.
3. **Observable**: success/failure can be inspected.
4. **Explainable**: docs state why it exists, alternatives, and tradeoffs.

## 8. Development sequence

1. Foundation, repository, and account safety
2. Public portfolio shell
3. Synthetic company and local historical dataset
4. Dockerize the simulator and establish container workflow
5. S3 data lake foundation
6. Glue Catalog + Athena
7. Python/API ingestion
8. RDS/PostgreSQL + CDC
9. PySpark/Glue transformation layer
10. Data quality + quarantine
11. Dimensional model
12. Redshift warehouse
13. dbt analytical models, tests, docs, and marts
14. Orchestration
15. Streaming
16. Observability/messaging
17. Security/networking hardening
18. Terraform-first IaC + CI/CD
19. Cognito reviewer access
20. Live demo experience
21. Course-coverage labs
22. Final evidence, resume integration, employer demo

## 9. Definition of success

A reviewer can:

- understand the project within 30-60 seconds;
- inspect real SQL, Python, PySpark, IaC, tests, and documentation;
- see historical pipeline evidence without login;
- request time-limited live access;
- trigger only safe, rate-limited synthetic demo actions;
- watch real AWS telemetry update;
- trace business metrics back through lineage;
- see failures and data-quality handling;
- understand cost-control and security decisions;
- reproduce major infrastructure from source control.

The final benchmark is not "all boxes checked." It is the ability to build, explain, troubleshoot, compare, and defend the design.
