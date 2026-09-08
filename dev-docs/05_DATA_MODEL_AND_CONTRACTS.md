# 05 - Data Model and Contracts

## OLTP model

Normalized PostgreSQL model:
- customers
- addresses
- products
- categories
- orders
- order_items
- payments/refunds references
- update timestamps for incremental extraction/CDC

Demonstrate:
- primary/foreign keys;
- indexes;
- transactions;
- query plans;
- cardinality;
- normalization.

## Analytical model

### Dimensions
- dim_date
- dim_customer (SCD Type 2)
- dim_product (SCD Type 2 where useful)
- dim_location
- dim_campaign
- dim_warehouse

### Facts
- fact_sales (transaction fact)
- fact_web_events (event fact)
- fact_inventory_daily (periodic snapshot)
- fact_shipments
- optional fact_refunds

## Grain must be explicit

Examples:
- `fact_sales`: one row per order line.
- `fact_web_events`: one row per event.
- `fact_inventory_daily`: one row per product + warehouse + snapshot date.

## Keys

- natural keys preserved as source identifiers;
- surrogate warehouse keys for SCD dimensions;
- explicit late-arriving dimension handling.

## Lake contracts

Every curated dataset documents:
- schema;
- types;
- nullable fields;
- business key;
- event time;
- ingestion time;
- schema version;
- partition strategy;
- uniqueness rules;
- foreign-key/referential expectations;
- freshness SLA for demo purposes.

## File formats and table formats

Required demonstrations:
- CSV input
- JSON input
- Parquet curated output
- Apache Iceberg table for at least one curated domain
- Avro conceptual/coverage lab
- compression comparison
- row vs columnar performance/cost explanation
- file format vs table format distinction
- Iceberg schema evolution and snapshot/time-travel behavior

## Schema evolution

At least one controlled schema-change release must:
- add a field;
- preserve old records;
- update Glue Catalog;
- update transformation logic;
- run compatibility tests;
- document downstream effects.
