# 06 - Pipeline and Orchestration

## Batch path

```text
CSV/API/RDS snapshot
  -> S3 raw
  -> catalog
  -> validation
  -> Glue/PySpark
  -> quarantine + curated Parquet
  -> Athena
  -> Redshift
```

## CDC path

```text
PostgreSQL/RDS
  -> DMS CDC
  -> S3 raw change records
  -> merge/deduplicate
  -> curated
  -> dimensional updates
```

Required:
- inserts;
- updates;
- deletes;
- watermark/checkpoint;
- safe restart;
- idempotent rerun.

## API path

Python ingestion demonstrates:
- HTTP/REST;
- JSON;
- authentication;
- secret retrieval;
- pagination;
- retry/backoff;
- rate-limit handling;
- incremental extraction;
- checkpointing;
- logging;
- unit tests;
- API Gateway/webhook concepts in coverage work.

## Streaming path

```text
producer
 -> Kinesis Data Streams
 -> consumer / Firehose
 -> raw event storage
 -> near-real-time metrics
 -> downstream curated/warehouse path
```

Demonstrate:
- producers/consumers;
- partition key;
- ordering limits;
- retention;
- shards/scaling concepts;
- delivery semantics;
- duplicate handling.

Kafka/MSK is implemented as a comparison lab using the same event contract.

## Transformations

Core transformations must include:
- joins;
- anti/semi joins;
- CTEs or Spark equivalents;
- window deduplication;
- aggregations;
- CASE/conditional transforms;
- null handling;
- date/time;
- SCD Type 2;
- incremental merge/upsert;
- late-arriving data;
- reconciliation.

## Glue/PySpark

Demonstrate:
- DataFrames;
- transformations/actions;
- lazy evaluation;
- driver/executors;
- partitions;
- shuffle;
- joins;
- aggregations;
- Spark SQL;
- repartition/coalesce;
- data-skew scenario;
- performance tuning;
- S3/Parquet read/write;
- Glue bookmarks.


## dbt analytical engineering layer

After clean/conformed datasets are available to Redshift, dbt becomes the primary framework for warehouse-layer SQL transformations.

Required dbt demonstrations:
- project structure and profiles/configuration without committed secrets;
- `source()` declarations;
- `ref()` dependencies;
- staging/intermediate/mart model layers;
- fact and dimension models where appropriate;
- incremental model;
- snapshot or other history/SCD mechanism;
- schema/data tests;
- custom test where useful;
- Jinja;
- at least one macro;
- generated documentation;
- lineage/DAG;
- CI execution of dbt tests/build on a safe target.

Glue/PySpark and dbt must not perform duplicate transformations merely to prove both tools.

## Dockerized workloads

At least the Northstar simulator must be runnable from a Docker image.

Required flow:
`Dockerfile -> local image/test -> ECR -> ECS/Fargate -> synthetic events/data`

A second small ingestion/utility component may be containerized if it demonstrates a meaningful runtime difference from Lambda.

Container configuration must use environment/config injection and Secrets Manager/IAM where credentials are needed. No secrets are baked into images.

## Orchestration

### Step Functions
Use for one serverless workflow:
`Extract -> Validate -> Transform -> Quality -> Publish/Load -> Notify`

Must include branching, retries, and failure path.

### Airflow/MWAA
Use for a more complex scheduled DAG or a documented/disposable managed lab if MWAA cost is excessive.

Demonstrate:
- DAG;
- tasks;
- dependencies;
- operators;
- sensors;
- parameters;
- retries;
- backfill;
- failure handling.

### EventBridge
Use for schedules/events that trigger bounded workflows.

## Backfill

Provide a documented command/workflow that safely reprocesses a chosen date partition without duplicating curated facts.
