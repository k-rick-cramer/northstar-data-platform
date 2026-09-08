# 12 - Cost and Resource Lifecycle

## Cost principle

The public portfolio stays inexpensive. Expensive compute is ephemeral.

## Resource classes

### Always-on / near-always-on
Prefer:
- small S3 footprint
- CloudFront/static assets
- lightweight Lambda/API usage
- Cognito
- DynamoDB on-demand if needed
- CloudWatch within controlled retention

### On-demand
- Glue
- Athena queries
- Redshift Serverless
- ECS/Fargate simulator tasks
- demo event streams where practical

### Disposable labs
- EC2
- EMR clusters
- MSK
- DAX
- multi-node caches/databases
- expensive networking configurations
- temporary RDS/Aurora variants

## Guardrails

- AWS Budget and alerts before meaningful provisioning
- cost-allocation tags
- `environment`, `project`, `owner`, `expires_at`, `cost_class`
- retention limits on logs
- lifecycle old raw artifacts
- small synthetic datasets during development
- Parquet and partition pruning for Athena
- server-side caps on demo traffic
- automated cleanup where safe
- destroy checklist after every lab

## Documentation requirement

For each expensive service:
- hourly/usage cost model;
- why it is needed;
- expected duration;
- teardown command;
- evidence captured before teardown.

## Portfolio cost page

Show:
- approximate recent spend;
- architectural cost decisions;
- what remains running;
- what is ephemeral;
- how query/storage formats reduce cost.

## Cross-industry tooling cost notes

- dbt Core is used without requiring a separate hosted dbt service.
- Terraform itself does not add AWS runtime cost; the infrastructure it creates does.
- Docker development is local; AWS cost appears only when images/storage/runtime use ECR/ECS/Fargate.
- Iceberg is a table format on the lake; costs arise from S3 storage and the compute/query services operating on it.
