# 11 - Testing and Definition of Done

## Testing layers

### Unit
- Python transformations
- API pagination/retry logic
- validation rules
- simulator rules
- Lambda handlers
- config parsing

### Data tests
- nulls
- uniqueness
- referential integrity
- accepted values
- ranges
- row-count expectations
- freshness
- reconciliation

### dbt
- model compilation/build
- source freshness where applicable
- schema/data tests
- incremental-model rerun
- snapshot/history behavior
- documentation generation

### Docker
- image build
- container health/smoke test
- same deterministic simulator behavior as local runtime
- no embedded secrets
- bounded ECS/Fargate execution

### Terraform
- formatting/validation
- plan review
- reproducibility
- protected secrets/state handling
- destroy/cleanup verification for disposable environments

### Integration
- API -> raw S3
- DMS -> raw S3
- raw -> Glue -> curated
- Kinesis -> consumer/storage
- curated -> Athena
- curated -> Redshift
- Cognito -> API Gateway -> Lambda

### Idempotency
Every incremental path must be rerun against the same source window and produce no duplicate business result.

### Failure recovery
Test:
- transient API failure
- job failure
- duplicate delivery
- malformed record
- late record
- partial downstream outage
- retry exhaustion
- DLQ
- backfill

### Security
- anonymous protected endpoint denied
- expired reviewer denied
- Reviewer cannot use interactive endpoint
- InteractiveReviewer bounded
- secrets absent from repo/frontend
- IAM role cannot access unrelated resources

### Cost
- expensive resources tagged
- idle/destroy rules documented
- demo bounds enforced
- budget alarm tested/documented

## Definition of Done for any feature

A feature is complete only when:
- code/infrastructure committed;
- tests pass;
- logs/metrics exist;
- README/dev-doc updated;
- evidence path entered in traceability matrix;
- cleanup/cost behavior defined;
- failure mode considered;
- no known security regression.
