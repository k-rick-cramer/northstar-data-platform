# 13 - Repository Structure

```text
northstar-data-platform/
├── README.md
├── dev-docs/
├── architecture/
│   ├── diagrams/
│   └── adr/
├── portfolio-site/
│   ├── public/
│   ├── src/
│   └── tests/
├── simulator/
│   ├── config/
│   ├── generators/
│   ├── anomalies/
│   ├── tests/
│   └── Dockerfile/ or container build files
├── schemas/
│   ├── oltp/
│   ├── lake/
│   └── warehouse/
├── ingestion/
│   ├── api/
│   ├── batch/
│   ├── cdc/
│   └── streaming/
├── transformations/
│   ├── python/
│   ├── glue/
│   ├── pyspark/
│   └── sql/
├── dbt/
│   ├── models/
│   │   ├── staging/
│   │   ├── intermediate/
│   │   └── marts/
│   ├── macros/
│   ├── snapshots/
│   └── tests/
├── data-quality/
├── orchestration/
│   ├── step-functions/
│   ├── airflow/
│   └── eventbridge/
├── warehouse/
│   ├── ddl/
│   ├── loads/
│   └── analytics/
├── infrastructure/
│   ├── terraform/
│   │   ├── modules/
│   │   └── environments/
│   ├── aws-native-labs/
│   └── scripts/
├── containers/
│   ├── simulator/
│   └── utility-workload/
├── lambdas/
├── monitoring/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── data/
├── labs/
│   ├── ec2-ebs/
│   ├── efs/
│   ├── emr/
│   ├── msk/
│   ├── aurora/
│   ├── dynamodb-dax/
│   ├── cache-nosql/
│   └── networking/
├── examples/
└── .github/workflows/
```

## Branching

Use normal feature branches and pull requests, even as a solo project when practical, so Git skills are visible.

Examples:
- `feature/s3-raw-zone`
- `feature/api-ingestion`
- `lab/msk-comparison`

## Evidence

Each major implementation PR should include:
- what changed;
- architecture impact;
- tests;
- screenshots/log excerpts if useful;
- cost/cleanup;
- checklist concepts covered.
