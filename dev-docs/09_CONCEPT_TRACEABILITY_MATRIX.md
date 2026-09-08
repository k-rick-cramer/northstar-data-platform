# 09 - Concept Traceability Matrix

This is the authoritative checklist-to-project map. Every source checklist concept receives an implementation disposition and evidence path.

## Status values
- `PLANNED`: mapped but not yet built.
- `IN PROGRESS`: implementation underway.
- `PROVEN`: implementation/lab and evidence complete.
- `CONCEPTUAL`: intentionally demonstrated through tradeoff/design evidence because a production implementation would be inappropriate.

## Rules
- VERY DEEP / DEEP topics require real implementation evidence.
- SOLID WORKING KNOWLEDGE topics require core implementation or substantial project lab evidence.
- RECOGNIZE / UNDERSTAND topics may use a disposable lab plus a clear architecture/tradeoff record.
- Evidence path must point to code, IaC, tests, run artifacts, or an ADR before status becomes PROVEN.

**Total traceability rows:** 501 (475 source-checklist rows + 26 supplemental industry-tool rows)

## TIER 1 — CORE DATA ENGINEERING FUNDAMENTALS

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C001 | SQL — VERY STRONG | Joins | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C002 | SQL — VERY STRONG | Anti-joins and semi-joins | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C003 | SQL — VERY STRONG | CTEs | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C004 | SQL — VERY STRONG | Subqueries | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C005 | SQL — VERY STRONG | Window functions | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C006 | SQL — VERY STRONG | Aggregations | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C007 | SQL — VERY STRONG | CASE expressions | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C008 | SQL — VERY STRONG | Date/time manipulation | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C009 | SQL — VERY STRONG | Deduplication | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C010 | SQL — VERY STRONG | NULL handling | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C011 | SQL — VERY STRONG | Query plans | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C012 | SQL — VERY STRONG | Index concepts | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C013 | SQL — VERY STRONG | Query optimization | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C014 | SQL — VERY STRONG | Transactions | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C015 | SQL — VERY STRONG | Incremental loading patterns | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C016 | SQL — VERY STRONG | Slowly changing dimensions | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C017 | Python — VERY STRONG | Functions, classes, and modules | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C018 | Python — VERY STRONG | Lists, dictionaries, sets, comprehensions | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C019 | Python — VERY STRONG | File processing | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C020 | Python — VERY STRONG | CSV and JSON | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C021 | Python — VERY STRONG | REST APIs | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C022 | Python — VERY STRONG | Exception handling | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C023 | Python — VERY STRONG | Logging | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C024 | Python — VERY STRONG | Datetime handling | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C025 | Python — VERY STRONG | Database connections | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C026 | Python — VERY STRONG | pandas | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C027 | Python — VERY STRONG | boto3 | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C028 | Python — VERY STRONG | Maintainable pipeline code | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C029 | Python — VERY STRONG | Unit testing | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C030 | Data Modeling — VERY STRONG | Fact tables | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C031 | Data Modeling — VERY STRONG | Dimension tables | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C032 | Data Modeling — VERY STRONG | Star schemas | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C033 | Data Modeling — VERY STRONG | Snowflake schemas | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C034 | Data Modeling — VERY STRONG | Surrogate vs. natural keys | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C035 | Data Modeling — VERY STRONG | Grain | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C036 | Data Modeling — VERY STRONG | Cardinality | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C037 | Data Modeling — VERY STRONG | Slowly changing dimensions | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C038 | Data Modeling — VERY STRONG | Normalization vs. denormalization | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C039 | Data Modeling — VERY STRONG | OLTP vs. OLAP | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C040 | Data Modeling — VERY STRONG | Analytical model design | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C041 | ETL / ELT — VERY STRONG | ETL: Extract → Transform → Load | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C042 | ETL / ELT — VERY STRONG | ELT: Extract → Load → Transform | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C043 | ETL / ELT — VERY STRONG | Full loads | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C044 | ETL / ELT — VERY STRONG | Incremental loads | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C045 | ETL / ELT — VERY STRONG | CDC / Change Data Capture | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C046 | ETL / ELT — VERY STRONG | Idempotency | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C047 | ETL / ELT — VERY STRONG | Upserts | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C048 | ETL / ELT — VERY STRONG | Deduplication | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C049 | ETL / ELT — VERY STRONG | Watermarks and checkpoints | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C050 | ETL / ELT — VERY STRONG | Backfills | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C051 | ETL / ELT — VERY STRONG | Retry strategies | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C052 | ETL / ELT — VERY STRONG | Schema evolution | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C053 | ETL / ELT — VERY STRONG | Error handling | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C054 | ETL / ELT — VERY STRONG | Data validation | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C055 | ETL / ELT — VERY STRONG | Pipeline dependencies | Core implementation + tests | Phases 2, 7-10 | PLANNED |

## TIER 2 — CORE AWS DATA ENGINEERING

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C056 | Amazon S3 | Buckets and objects | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C057 | Amazon S3 | Object keys and prefixes | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C058 | Amazon S3 | Permissions | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C059 | Amazon S3 | Storage classes conceptually | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C060 | Amazon S3 | Versioning | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C061 | Amazon S3 | Lifecycle policies | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C062 | Amazon S3 | Encryption | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C063 | Amazon S3 | Event notifications | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C064 | Amazon S3 | Partitioned data layouts | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C065 | Amazon S3 | S3 as a data lake | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C066 | File Formats | CSV | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C067 | File Formats | JSON | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C068 | File Formats | Parquet — know well | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C069 | File Formats | Avro — conceptual understanding | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C070 | File Formats | Row-oriented vs. columnar storage | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C071 | File Formats | Compression | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C072 | File Formats | Why Parquet is efficient for analytics | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C073 | AWS Glue — KNOW WELL | Glue Jobs | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C074 | AWS Glue — KNOW WELL | Glue Crawlers | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C075 | AWS Glue — KNOW WELL | Glue Data Catalog | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C076 | AWS Glue — KNOW WELL | Glue databases and tables | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C077 | AWS Glue — KNOW WELL | Glue connections | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C078 | AWS Glue — KNOW WELL | Glue Studio conceptually | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C079 | AWS Glue — KNOW WELL | Job bookmarks | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C080 | AWS Glue — KNOW WELL | Scheduling and triggers | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C081 | AWS Glue — KNOW WELL | Reading/writing S3 | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C082 | AWS Glue — KNOW WELL | Reading/writing databases | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C083 | AWS Glue — KNOW WELL | Glue + Spark | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C084 | AWS Glue — KNOW WELL | Glue + Redshift | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C085 | AWS Glue — KNOW WELL | IAM roles for Glue | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C086 | Apache Spark / PySpark — KNOW WELL | What distributed processing means | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C087 | Apache Spark / PySpark — KNOW WELL | Driver | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C088 | Apache Spark / PySpark — KNOW WELL | Executors | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C089 | Apache Spark / PySpark — KNOW WELL | DataFrames | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C090 | Apache Spark / PySpark — KNOW WELL | Transformations | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C091 | Apache Spark / PySpark — KNOW WELL | Actions | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C092 | Apache Spark / PySpark — KNOW WELL | Lazy evaluation | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C093 | Apache Spark / PySpark — KNOW WELL | Partitions | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C094 | Apache Spark / PySpark — KNOW WELL | Shuffles | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C095 | Apache Spark / PySpark — KNOW WELL | Joins | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C096 | Apache Spark / PySpark — KNOW WELL | Aggregations | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C097 | Apache Spark / PySpark — KNOW WELL | Spark SQL | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C098 | Apache Spark / PySpark — KNOW WELL | Reading/writing Parquet | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C099 | Apache Spark / PySpark — KNOW WELL | Reading/writing S3 | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C100 | Apache Spark / PySpark — KNOW WELL | Data skew | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C101 | Apache Spark / PySpark — KNOW WELL | Repartition | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C102 | Apache Spark / PySpark — KNOW WELL | Coalesce | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C103 | Apache Spark / PySpark — KNOW WELL | Basic performance optimization | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C104 | Apache Spark / PySpark — KNOW WELL | Writing real PySpark jobs | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C105 | Amazon Athena | Serverless SQL queries against S3 | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C106 | Amazon Athena | Glue Data Catalog integration | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C107 | Amazon Athena | External tables | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C108 | Amazon Athena | Partitions | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C109 | Amazon Athena | Querying Parquet | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C110 | Amazon Athena | Data scanned and query cost | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C111 | Amazon Athena | Basic query optimization | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C112 | Amazon Redshift — KNOW WELL | OLAP/data warehouse purpose | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C113 | Amazon Redshift — KNOW WELL | Columnar storage | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C114 | Amazon Redshift — KNOW WELL | MPP architecture conceptually | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C115 | Amazon Redshift — KNOW WELL | Tables and schema design | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C116 | Amazon Redshift — KNOW WELL | COPY | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C117 | Amazon Redshift — KNOW WELL | UNLOAD | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C118 | Amazon Redshift — KNOW WELL | Distribution styles | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C119 | Amazon Redshift — KNOW WELL | DISTSTYLE EVEN | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C120 | Amazon Redshift — KNOW WELL | DISTSTYLE KEY | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C121 | Amazon Redshift — KNOW WELL | DISTSTYLE ALL | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C122 | Amazon Redshift — KNOW WELL | DISTSTYLE AUTO | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C123 | Amazon Redshift — KNOW WELL | Distribution keys | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C124 | Amazon Redshift — KNOW WELL | Sort keys | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C125 | Amazon Redshift — KNOW WELL | Data skew | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C126 | Amazon Redshift — KNOW WELL | Redshift Serverless | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C127 | Amazon Redshift — KNOW WELL | Materialized views | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C128 | Amazon Redshift — KNOW WELL | Loading from S3 | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C129 | Amazon Redshift — KNOW WELL | IAM integration | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C130 | Amazon Redshift — KNOW WELL | Basic workload/performance concepts | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C131 | Amazon Redshift — KNOW WELL | Redshift Spectrum | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C132 | Amazon Redshift — KNOW WELL | Streaming ingestion | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C133 | Amazon Redshift — KNOW WELL | Snapshots | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C134 | Amazon Redshift — KNOW WELL | Cross-region snapshot copying | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C135 | Amazon Redshift — KNOW WELL | KMS encryption and snapshot copy grants | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

## TIER 3 — PIPELINE ORCHESTRATION

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C136 | Apache Airflow | DAGs | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C137 | Apache Airflow | Tasks | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C138 | Apache Airflow | Dependencies | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C139 | Apache Airflow | Scheduling | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C140 | Apache Airflow | Operators | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C141 | Apache Airflow | Sensors | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C142 | Apache Airflow | Retries | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C143 | Apache Airflow | Backfills | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C144 | Apache Airflow | Parameters | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C145 | Apache Airflow | Failure handling | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C146 | Amazon MWAA | Understand that MWAA = Managed Workflows for Apache Airflow | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C147 | Amazon MWAA | Know when managed Airflow would be useful | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C148 | AWS Step Functions | State machines | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C149 | AWS Step Functions | Task sequencing | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C150 | AWS Step Functions | Branching | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C151 | AWS Step Functions | Retries | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C152 | AWS Step Functions | Failure handling | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C153 | AWS Step Functions | Basic workflow creation | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C154 | Amazon EventBridge | Event routing | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C155 | Amazon EventBridge | Scheduled events | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C156 | Amazon EventBridge | Triggering pipelines | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C157 | Amazon EventBridge | Event-driven architectures conceptually | Core orchestration + managed-service lab | Phase 11 | PLANNED |

## TIER 4 — STREAMING

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C158 | Streaming Fundamentals | Batch vs. streaming | Core streaming implementation | Phase 12 | PLANNED |

| C159 | Streaming Fundamentals | Producers | Core streaming implementation | Phase 12 | PLANNED |

| C160 | Streaming Fundamentals | Consumers | Core streaming implementation | Phase 12 | PLANNED |

| C161 | Streaming Fundamentals | Events/records | Core streaming implementation | Phase 12 | PLANNED |

| C162 | Streaming Fundamentals | Ordering | Core streaming implementation | Phase 12 | PLANNED |

| C163 | Streaming Fundamentals | Retention | Core streaming implementation | Phase 12 | PLANNED |

| C164 | Streaming Fundamentals | Delivery semantics conceptually | Core streaming implementation | Phase 12 | PLANNED |

| C165 | Amazon Kinesis Data Streams | Streams | Core streaming implementation | Phase 12 | PLANNED |

| C166 | Amazon Kinesis Data Streams | Records | Core streaming implementation | Phase 12 | PLANNED |

| C167 | Amazon Kinesis Data Streams | Producers | Core streaming implementation | Phase 12 | PLANNED |

| C168 | Amazon Kinesis Data Streams | Consumers | Core streaming implementation | Phase 12 | PLANNED |

| C169 | Amazon Kinesis Data Streams | Shards | Core streaming implementation | Phase 12 | PLANNED |

| C170 | Amazon Kinesis Data Streams | Partition keys | Core streaming implementation | Phase 12 | PLANNED |

| C171 | Amazon Kinesis Data Streams | Retention | Core streaming implementation | Phase 12 | PLANNED |

| C172 | Amazon Kinesis Data Streams | Scaling concepts | Core streaming implementation | Phase 12 | PLANNED |

| C173 | Apache Kafka | Producers | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C174 | Apache Kafka | Consumers | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C175 | Apache Kafka | Topics | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C176 | Apache Kafka | Partitions | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C177 | Apache Kafka | Consumer groups | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C178 | Apache Kafka | Offsets | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C179 | Apache Kafka | Ordering | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C180 | Apache Kafka | Retention | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C181 | Apache Kafka | Delivery semantics conceptually | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C182 | Amazon MSK | MSK = Amazon Managed Streaming for Apache Kafka | Disposable comparison lab | Phases 12, 18 | PLANNED |

| C183 | Amazon MSK | Understand Kinesis vs. MSK at a high level | Core streaming implementation | Phase 12 | PLANNED |

| C184 | Amazon Data Firehose | Managed streaming delivery | Core streaming implementation | Phase 12 | PLANNED |

| C185 | Amazon Data Firehose | Delivery to S3/Redshift and other destinations | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C186 | Amazon Data Firehose | Difference from Kinesis Data Streams | Core streaming implementation | Phase 12 | PLANNED |

| C187 | Redshift Streaming Ingestion | Understand direct streaming ingestion from Kinesis/MSK | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C188 | Redshift Streaming Ingestion | Understand near-real-time analytics use cases | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

## TIER 5 — AWS DATABASES

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C189 | Amazon RDS | Managed relational database concept | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C190 | Amazon RDS | PostgreSQL/MySQL/etc | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C191 | Amazon RDS | DB instances | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C192 | Amazon RDS | Storage | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C193 | Amazon RDS | Backups | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C194 | Amazon RDS | Multi-AZ | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C195 | Amazon RDS | Read replicas | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C196 | Amazon RDS | Security groups | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C197 | Amazon RDS | Connection management | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C198 | Amazon RDS | Working set / RAM | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C199 | Amazon RDS | ReadIOPS | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C200 | Amazon RDS | DNS TTL and failover | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C201 | Amazon RDS | RDS Proxy | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C202 | Amazon Aurora | AWS-designed relational database | Disposable comparison lab / architecture evidence | Phase 18 | PLANNED |

| C203 | Amazon Aurora | MySQL/PostgreSQL compatibility | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C204 | Amazon Aurora | Aurora vs. standard RDS | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C205 | Amazon Aurora | Aurora Serverless | Disposable comparison lab / architecture evidence | Phase 18 | PLANNED |

| C206 | Amazon Aurora | ACUs | Disposable comparison lab / architecture evidence | Phase 18 | PLANNED |

| C207 | Amazon Aurora | Read replicas | Disposable comparison lab / architecture evidence | Phase 18 | PLANNED |

| C208 | Amazon Aurora | Zero-ETL integrations | Disposable comparison lab / architecture evidence | Phase 18 | PLANNED |

| C209 | Amazon DynamoDB | Tables, items, attributes | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C210 | Amazon DynamoDB | Partition keys | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C211 | Amazon DynamoDB | Sort keys | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C212 | Amazon DynamoDB | Access-pattern-driven design | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C213 | Amazon DynamoDB | Query vs. Scan | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C214 | Amazon DynamoDB | GetItem / PutItem / UpdateItem / DeleteItem | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C215 | Amazon DynamoDB | Batch operations | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C216 | Amazon DynamoDB | PartiQL | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C217 | Amazon DynamoDB | Global Secondary Indexes (GSI) | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C218 | Amazon DynamoDB | Local Secondary Indexes (LSI) conceptually | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C219 | Amazon DynamoDB | RCU | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C220 | Amazon DynamoDB | WCU | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C221 | Amazon DynamoDB | On-demand vs. provisioned capacity | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C222 | Amazon DynamoDB | TTL | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C223 | Amazon DynamoDB | DynamoDB Streams | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C224 | Amazon DynamoDB | Stream images | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C225 | Amazon DynamoDB | Basic boto3 interaction | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C226 | Amazon DynamoDB | When DynamoDB is appropriate | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C227 | Amazon DynamoDB | When NOT to use DynamoDB | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C228 | DAX | DynamoDB Accelerator | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C229 | DAX | DAX nodes and clusters | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C230 | DAX | Understand DAX as a DynamoDB-specific cache | Supporting implementation + focused lab | Phases 16-18 | PLANNED |

| C231 | Other Database Technologies — RECOGNIZE | MongoDB and document databases | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C232 | Other Database Technologies — RECOGNIZE | Documents and BSON | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C233 | Other Database Technologies — RECOGNIZE | Redis | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C234 | Other Database Technologies — RECOGNIZE | Valkey | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C235 | Other Database Technologies — RECOGNIZE | Memcached | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C236 | Other Database Technologies — RECOGNIZE | Amazon ElastiCache | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C237 | Other Database Technologies — RECOGNIZE | Amazon MemoryDB | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C238 | Other Database Technologies — RECOGNIZE | Apache Cassandra | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

| C239 | Other Database Technologies — RECOGNIZE | CQL | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C240 | Other Database Technologies — RECOGNIZE | Amazon Keyspaces | Disposable lab / tradeoff evidence | Phase 18 | PLANNED |

## TIER 6 — AWS COMPUTE

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C241 | AWS Lambda | Serverless functions | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C242 | AWS Lambda | Event-driven execution | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C243 | AWS Lambda | Triggers | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C244 | AWS Lambda | IAM execution roles | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C245 | AWS Lambda | Environment variables | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C246 | AWS Lambda | Timeouts | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C247 | AWS Lambda | Memory configuration | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C248 | AWS Lambda | Logging | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C249 | AWS Lambda | S3 triggers | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C250 | AWS Lambda | EventBridge triggers | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C251 | AWS Lambda | API Gateway integration | Core implementation | Phases 5, 12, 16-17 | PLANNED |

| C252 | AWS Lambda | Basic Python Lambda development | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C253 | Amazon EC2 | Virtual server concept | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C254 | Amazon EC2 | Instances | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C255 | Amazon EC2 | AMIs | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C256 | Amazon EC2 | Instance types | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C257 | Amazon EC2 | Security groups | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C258 | Amazon EC2 | SSH | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C259 | Amazon EC2 | EBS | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C260 | Amazon EC2 | VPC/subnets | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C261 | Amazon EC2 | Scaling conceptually | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C262 | Amazon EBS | Persistent block storage | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C263 | Amazon EBS | Root vs. additional volumes | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C264 | Amazon EBS | Persistence after EC2 termination | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C265 | Amazon EBS | gp2 vs. gp3 | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C266 | Amazon EBS | IOPS | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C267 | Amazon EFS | Shared network filesystem | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C268 | Amazon EFS | EFS vs. EBS vs. S3 | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C269 | Amazon EFS | Mount points | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C270 | Amazon EFS | Mount targets | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C271 | Amazon EFS | NFS concept | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C272 | Amazon EFS | Security group access | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C273 | Amazon EMR | EMR = Elastic MapReduce | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C274 | Amazon EMR | Managed platform for Spark/Hadoop/etc | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C275 | Amazon EMR | Distributed data processing | Disposable infrastructure/compute lab | Phase 18 | PLANNED |

| C276 | Amazon EMR | EMR vs. Glue conceptually | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C277 | Amazon EMR | Running Spark/PySpark workloads | Core implementation + performance evidence | Phases 3-8 | PLANNED |

## TIER 7 — AWS SECURITY AND NETWORKING

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C278 | AWS IAM — IMPORTANT | Users | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C279 | AWS IAM — IMPORTANT | Roles | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C280 | AWS IAM — IMPORTANT | Policies | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C281 | AWS IAM — IMPORTANT | Policy JSON | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C282 | AWS IAM — IMPORTANT | Effect: Allow/Deny | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C283 | AWS IAM — IMPORTANT | Actions | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C284 | AWS IAM — IMPORTANT | Resources | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C285 | AWS IAM — IMPORTANT | Trust policies | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C286 | AWS IAM — IMPORTANT | Resource policies | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C287 | AWS IAM — IMPORTANT | Least privilege | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C288 | AWS IAM — IMPORTANT | Temporary credentials | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C289 | AWS IAM — IMPORTANT | STS | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C290 | AWS IAM — IMPORTANT | Service roles | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C291 | AWS IAM — IMPORTANT | Web identity federation | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C292 | AWS KMS | KMS = Key Management Service | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C293 | AWS KMS | Encryption keys | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C294 | AWS KMS | How AWS services use KMS | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C295 | AWS KMS | Encryption at rest | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C296 | AWS KMS | Regional key considerations conceptually | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C297 | AWS Secrets Manager | Secure secret storage | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C298 | AWS Secrets Manager | Database credentials | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C299 | AWS Secrets Manager | API credentials | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C300 | AWS Secrets Manager | Avoiding hard-coded secrets | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C301 | Networking | VPC | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C302 | Networking | Subnets | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C303 | Networking | Availability Zones | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C304 | Networking | Public vs. private subnets | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C305 | Networking | Security groups | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C306 | Networking | Ports | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C307 | Networking | DNS | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C308 | Networking | DNS TTL | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C309 | Networking | VPC endpoints | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C310 | Networking | PrivateLink | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C311 | Networking | NAT conceptually | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C312 | Networking | Internet Gateway conceptually | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C313 | Networking | SSL/TLS | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C314 | Networking | HTTPS | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C315 | Networking | Certificates | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C316 | Networking | SSH | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

## TIER 8 — DATA QUALITY AND PRODUCTION ENGINEERING

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C317 | Data Quality | NULL detection | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C318 | Data Quality | Duplicate detection | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C319 | Data Quality | Invalid values | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C320 | Data Quality | Missing records | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C321 | Data Quality | Referential integrity | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C322 | Data Quality | Schema changes | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C323 | Data Quality | Unexpected row-count changes | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C324 | Data Quality | Freshness | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C325 | Data Quality | Reconciliation | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C326 | Data Quality | Data validation | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C327 | Know these dimensions: | Completeness | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C328 | Know these dimensions: | Accuracy | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C329 | Know these dimensions: | Validity | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C330 | Know these dimensions: | Uniqueness | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C331 | Know these dimensions: | Consistency | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C332 | Know these dimensions: | Freshness | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C333 | Production Pipeline Design | Idempotency | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C334 | Production Pipeline Design | Retries | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C335 | Production Pipeline Design | Failure recovery | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C336 | Production Pipeline Design | Checkpointing | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C337 | Production Pipeline Design | Backfills | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C338 | Production Pipeline Design | Monitoring | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C339 | Production Pipeline Design | Alerting | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C340 | Production Pipeline Design | Logging | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C341 | Production Pipeline Design | Dependency management | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

| C342 | Production Pipeline Design | Handling partial failures | Core implementation + failure tests | Phases 8, 11, 13 | PLANNED |

## TIER 9 — MONITORING AND MESSAGING

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C343 | Amazon CloudWatch | Logs | Core observability/messaging implementation | Phase 13 | PLANNED |

| C344 | Amazon CloudWatch | Metrics | Core observability/messaging implementation | Phase 13 | PLANNED |

| C345 | Amazon CloudWatch | Alarms | Core observability/messaging implementation | Phase 13 | PLANNED |

| C346 | Amazon CloudWatch | Dashboards conceptually | Core source-system implementation + focused lab | Phase 6 | PLANNED |

| C347 | Amazon CloudWatch | Troubleshooting failed AWS jobs | Core observability/messaging implementation | Phase 13 | PLANNED |

| C348 | Amazon SQS | Message queues | Core observability/messaging implementation | Phase 13 | PLANNED |

| C349 | Amazon SQS | Producers and consumers | Core observability/messaging implementation | Phase 13 | PLANNED |

| C350 | Amazon SQS | Decoupling systems | Core observability/messaging implementation | Phase 13 | PLANNED |

| C351 | Amazon SQS | Retry/dead-letter queue concepts | Core observability/messaging implementation | Phase 13 | PLANNED |

| C352 | Amazon SNS | Publish/subscribe | Core observability/messaging implementation | Phase 13 | PLANNED |

| C353 | Amazon SNS | Notifications | Core observability/messaging implementation | Phase 13 | PLANNED |

| C354 | Amazon SNS | Alerting use cases | Core observability/messaging implementation | Phase 13 | PLANNED |

## TIER 10 — DATA LAKE ARCHITECTURE

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C355 | General | What a data lake is | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C356 | General | S3 as a data lake | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C357 | General | Raw/staging/curated layers | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C358 | General | Partitioning | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C359 | General | Parquet | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C360 | General | Schema evolution | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C361 | General | Glue Data Catalog | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C362 | General | Data retention | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C363 | General | Data lineage conceptually | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C364 | General | Data lake vs. data warehouse | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C365 | General | Lakehouse conceptually | Core architecture/model implementation | Phases 3-10 | PLANNED |

## TIER 11 — DATA WAREHOUSING

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C366 | General | Fact tables | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C367 | General | Dimension tables | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C368 | General | Grain | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C369 | General | Star schemas | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C370 | General | Snowflake schemas | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C371 | General | Slowly changing dimensions | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C372 | General | Surrogate keys | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C373 | General | Natural keys | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C374 | General | Date dimensions | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C375 | General | Incremental fact loads | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C376 | General | Transaction fact tables | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C377 | General | Periodic snapshot facts | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C378 | General | Aggregate tables | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C379 | General | Materialized views | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C380 | General | Columnar storage | Core architecture/model implementation | Phases 3-10 | PLANNED |

| C381 | General | OLAP workloads | Core architecture/model implementation | Phases 3-10 | PLANNED |

## TIER 12 — SOFTWARE ENGINEERING

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C382 | Git | Clone | Continuous software-engineering evidence | All phases | PLANNED |

| C383 | Git | Branch | Continuous software-engineering evidence | All phases | PLANNED |

| C384 | Git | Commit | Continuous software-engineering evidence | All phases | PLANNED |

| C385 | Git | Push/pull | Continuous software-engineering evidence | All phases | PLANNED |

| C386 | Git | Merge | Continuous software-engineering evidence | All phases | PLANNED |

| C387 | Git | Pull requests | Continuous software-engineering evidence | All phases | PLANNED |

| C388 | Git | Conflict resolution | Continuous software-engineering evidence | All phases | PLANNED |

| C389 | Testing | Unit tests | Continuous software-engineering evidence | All phases | PLANNED |

| C390 | Testing | Integration tests | Continuous software-engineering evidence | All phases | PLANNED |

| C391 | Testing | Data tests | Continuous software-engineering evidence | All phases | PLANNED |

| C392 | Testing | Mocking basics | Continuous software-engineering evidence | All phases | PLANNED |

| C393 | Code Quality | Modular code | Continuous software-engineering evidence | All phases | PLANNED |

| C394 | Code Quality | Configuration management | Continuous software-engineering evidence | All phases | PLANNED |

| C395 | Code Quality | Logging | Continuous software-engineering evidence | All phases | PLANNED |

| C396 | Code Quality | Error handling | Continuous software-engineering evidence | All phases | PLANNED |

| C397 | Code Quality | Documentation | Continuous software-engineering evidence | All phases | PLANNED |

| C398 | Code Quality | Code reviews | Continuous software-engineering evidence | All phases | PLANNED |

## TIER 13 — CI/CD AND INFRASTRUCTURE AS CODE

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C399 | CI/CD | CI/CD concepts | Core deployment implementation | Phase 15 | PLANNED |

| C400 | CI/CD | Automated testing | Continuous software-engineering evidence | All phases | PLANNED |

| C401 | CI/CD | Automated deployments | Core deployment implementation | Phase 15 | PLANNED |

| C402 | CI/CD | Dev/test/prod environments | Core deployment implementation | Phase 15 | PLANNED |

| C403 | Infrastructure as Code Learn at least one well: | Terraform OR | Core deployment implementation | Phase 15 | PLANNED |

| C404 | Infrastructure as Code Learn at least one well: | AWS CDK / CloudFormation | Core deployment implementation | Phase 15 | PLANNED |

| C405 | Understand: | Reproducible infrastructure | Core deployment implementation | Phase 15 | PLANNED |

| C406 | Understand: | Version-controlled infrastructure | Core deployment implementation | Phase 15 | PLANNED |

| C407 | Understand: | Deployment automation | Core deployment implementation | Phase 15 | PLANNED |

## TIER 14 — APIs AND EXTERNAL DATA INGESTION

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C408 | General | REST | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

| C409 | General | HTTP | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

| C410 | General | JSON | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C411 | General | Authentication | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C412 | General | OAuth conceptually | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

| C413 | General | Pagination | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

| C414 | General | Rate limits | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

| C415 | General | Retries | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C416 | General | Incremental API extraction | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C417 | General | Webhooks | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

| C418 | General | API Gateway | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

| C419 | General | API Gateway throttling | Core API implementation + documented extension | Phases 5, 16 | PLANNED |

## TIER 15 — LINUX, COMMAND LINE, AND AWS CLI

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C420 | Linux / Shell | Navigate directories | Development/lab evidence | Phases 0, 18 | PLANNED |

| C421 | Linux / Shell | Read/write files | Development/lab evidence | Phases 0, 18 | PLANNED |

| C422 | Linux / Shell | Environment variables | Development/lab evidence | Phases 0, 18 | PLANNED |

| C423 | Linux / Shell | File permissions basics | Development/lab evidence | Phases 0, 18 | PLANNED |

| C424 | Linux / Shell | Processes | Development/lab evidence | Phases 0, 18 | PLANNED |

| C425 | Linux / Shell | Pipes | Development/lab evidence | Phases 0, 18 | PLANNED |

| C426 | Linux / Shell | grep | Development/lab evidence | Phases 0, 18 | PLANNED |

| C427 | Linux / Shell | curl | Development/lab evidence | Phases 0, 18 | PLANNED |

| C428 | Linux / Shell | SSH | Development/lab evidence | Phases 0, 18 | PLANNED |

| C429 | Linux / Shell | Run Python/scripts | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C430 | Linux / Shell | Inspect logs | Development/lab evidence | Phases 0, 18 | PLANNED |

| C431 | AWS CLI | Configure/authenticate CLI | Development/lab evidence | Phases 0, 18 | PLANNED |

| C432 | AWS CLI | Basic S3 commands | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C433 | AWS CLI | Basic service interaction | Development/lab evidence | Phases 0, 18 | PLANNED |

| C434 | AWS CLI | Understand profiles/credentials conceptually | Development/lab evidence | Phases 0, 18 | PLANNED |

## LOWER-PRIORITY RECOGNITION TOPICS

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C435 | General | EFS | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C436 | General | DAX | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C437 | General | Amazon Keyspaces | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C438 | General | MemoryDB | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C439 | General | Memcached | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C440 | General | Cassandra | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C441 | General | DBLINK | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C442 | General | Detailed Redshift administration | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C443 | General | Deep EC2 administration | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C444 | General | Deep VPC/network engineering | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

| C445 | General | Hadoop administration | Coverage lab / tradeoff evidence | Phase 18 | PLANNED |

## CAPSTONE PROJECT

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C446 | General | Airflow / MWAA orchestration | Core orchestration + managed-service lab | Phase 11 | PLANNED |

| C447 | General | IAM roles and least privilege | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C448 | General | KMS encryption | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C449 | General | Secrets Manager | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C450 | General | CloudWatch logging/monitoring | Core observability/messaging implementation | Phase 13 | PLANNED |

| C451 | General | Failure alerts | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C452 | General | Data-quality checks | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C453 | General | Incremental processing | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C454 | General | Terraform or CDK infrastructure | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C455 | General | Git repository | Continuous software-engineering evidence | All phases | PLANNED |

| C456 | General | Automated tests | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C457 | General | Documentation | Core implementation or explicit evidence | Assigned during build | PLANNED |

## JOB-READY TARGET

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C458 | General | Write strong SQL without assistance | Core implementation + tests | Phases 2, 7-10 | PLANNED |

| C459 | General | Write production-quality Python for data pipelines | Core implementation + tests | Phases 2, 5, 16-17 | PLANNED |

| C460 | General | Write useful PySpark transformations | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C461 | General | Design relational and analytical data models | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C462 | General | Explain ETL, ELT, CDC, batch, and streaming architectures | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C463 | General | Build an S3-based data lake | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C464 | General | Build Glue/Spark transformation jobs | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C465 | General | Query a data lake with Athena | Core implementation + performance evidence | Phases 3-8 | PLANNED |

| C466 | General | Load and model data in Redshift | Core implementation + focused admin labs | Phases 10, 12, 18 | PLANNED |

| C467 | General | Orchestrate a multi-step pipeline | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C468 | General | Secure AWS resources with IAM | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C469 | General | Monitor and troubleshoot pipeline failures | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C470 | General | Explain AWS networking sufficiently to troubleshoot connectivity | Core security implementation + focused labs | Phases 0, 5-7, 14, 18 | PLANNED |

| C471 | General | Build incremental and idempotent pipelines | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C472 | General | Implement basic data-quality checks | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C473 | General | Explain architectural tradeoffs rather than merely naming services | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C474 | General | Deploy infrastructure reproducibly | Core implementation or explicit evidence | Assigned during build | PLANNED |

| C475 | General | Build and explain at least one complete AWS data engineering project | Core implementation or explicit evidence | Assigned during build | PLANNED |


## SUPPLEMENTAL INDUSTRY TOOLS

These rows are project requirements added beyond the source AWS/job-readiness checklist because they provide distinct, highly transferable skills while preserving an AWS-first architecture.

| ID | Topic | Concept | Demonstration | Phase | Status |
|---|---|---|---|---|---|
| C476 | Terraform | Terraform providers/resources/data sources | Core implementation | Phase 15 | PLANNED |
| C477 | Terraform | Variables, outputs, modules, and environment configuration | Core implementation | Phase 15 | PLANNED |
| C478 | Terraform | State strategy and state safety | Core implementation | Phase 15 | PLANNED |
| C479 | Terraform | Plan/apply/destroy workflow | Core implementation | Phase 15 | PLANNED |
| C480 | Terraform | Terraform CI/CD integration | Core implementation | Phase 15 | PLANNED |
| C481 | Docker | Dockerfile and image construction | Core implementation | Phase 2B | PLANNED |
| C482 | Docker | Containers and runtime configuration | Core implementation | Phase 2B | PLANNED |
| C483 | Docker | Environment variables and secret-safe configuration | Core implementation | Phases 2B, 14 | PLANNED |
| C484 | Docker | Amazon ECR image publishing | Core AWS integration | Phase 2B | PLANNED |
| C485 | Docker | Amazon ECS/Fargate container execution | Core AWS integration | Phase 2B | PLANNED |
| C486 | dbt | dbt project structure and configuration | Core implementation | Phase 10B | PLANNED |
| C487 | dbt | sources and source() | Core implementation | Phase 10B | PLANNED |
| C488 | dbt | ref() dependency management | Core implementation | Phase 10B | PLANNED |
| C489 | dbt | staging, intermediate, and mart layers | Core implementation | Phase 10B | PLANNED |
| C490 | dbt | dbt tests and custom data tests | Core implementation | Phase 10B | PLANNED |
| C491 | dbt | incremental models | Core implementation | Phase 10B | PLANNED |
| C492 | dbt | snapshots/history patterns | Core implementation | Phase 10B | PLANNED |
| C493 | dbt | Jinja and macros | Core implementation | Phase 10B | PLANNED |
| C494 | dbt | generated documentation and lineage | Core implementation | Phase 10B | PLANNED |
| C495 | dbt | dbt in CI | Core implementation | Phases 10B, 15 | PLANNED |
| C496 | Apache Iceberg | File format vs table format distinction | Core architecture evidence | Phases 3-7 | PLANNED |
| C497 | Apache Iceberg | Iceberg table on S3 | Core implementation | Phases 4-7 | PLANNED |
| C498 | Apache Iceberg | Schema evolution | Core implementation | Phases 7-8 | PLANNED |
| C499 | Apache Iceberg | Snapshots and time travel | Core implementation | Phases 7-8 | PLANNED |
| C500 | Apache Iceberg | Transactional update/delete behavior where supported | Core implementation | Phases 7-8 | PLANNED |
| C501 | Apache Iceberg | AWS interoperability via Glue/Athena | Core implementation | Phases 4-8 | PLANNED |
