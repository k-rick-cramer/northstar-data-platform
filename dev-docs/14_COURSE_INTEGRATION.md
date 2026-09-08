# 14 - Course Integration

## Rule

The course is the learning sequence; the portfolio is the application sequence.

After completing a course module:

1. Identify concepts newly understood.
2. Locate matching rows in the traceability matrix.
3. Decide whether the concept belongs in:
   - core architecture;
   - disposable lab;
   - design/tradeoff documentation.
4. Implement one small project increment.
5. Test it.
6. Update evidence.
7. Update project status.

## Priority mapping

The source checklist prioritizes:
1. S3 + IAM + Glue + Athena
2. PySpark
3. Redshift
4. End-to-end data lake/warehouse
5. Airflow/MWAA
6. Kinesis/streaming
7. Terraform or AWS CDK
8. CloudWatch/production monitoring

The build phases intentionally follow this center of gravity while still allowing earlier portfolio/simulator work that creates data and presentation scaffolding.

## Avoid certificate-only learning

For every service, be able to answer:
- What requirement does it solve?
- What are its inputs/outputs?
- How is it secured?
- How does it fail?
- How is it monitored?
- What does it cost?
- What would you use instead?
- Why is the selected option appropriate here?

## Industry-tool overlay

The course remains AWS-centered, but Northstar adds three mandatory cross-industry tools because they teach skills that are not automatically acquired by using AWS services:

1. **Docker** after the local simulator is working.
2. **dbt** after Redshift and the analytical model are understood.
3. **Terraform** as the primary IaC implementation once enough infrastructure exists to make reusable modules meaningful.

Apache Iceberg is incorporated with the S3/Glue/Athena lakehouse work.

Databricks and Snowflake are intentionally deferred. We will reconsider them only if a specific target role makes them materially more valuable than deepening the AWS-first implementation.
