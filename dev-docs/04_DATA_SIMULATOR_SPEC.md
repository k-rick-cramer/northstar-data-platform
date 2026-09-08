# 04 - Data Simulator Specification

## Objective

Create a deterministic synthetic company whose independent source systems produce internally consistent operational data.

## Core entities

- customer
- address
- product
- category
- supplier
- warehouse
- inventory
- order
- order_item
- payment
- refund
- shipment
- web_session
- web_event
- campaign
- support_ticket

## Source ownership

| System | Canonical records |
|---|---|
| PostgreSQL/RDS | customers, products, orders, order_items, refunds |
| API service | shipments, payment status, selected support events |
| CSV batch | inventory snapshots, marketing spend |
| Kinesis stream | views, searches, cart events, checkout/purchase events |
| DynamoDB optional | demo sessions, current simulator state, operational metadata |

## Historical generator

Configurable:
- seed;
- customer count;
- product count;
- order count;
- event count;
- bad-record rate;
- start/end dates;
- seasonality;
- annual growth;
- promotional calendar.

Required correlations:
- category seasonality;
- customer repeat behavior;
- price-sensitive conversion;
- campaign uplift;
- complementary products;
- regional effects;
- inventory depletion;
- shipping delays;
- refunds correlated with selected scenarios.

## Live event generator

Must support bounded profiles:
- idle;
- normal;
- flash sale;
- Black Friday;
- bad-data injection;
- delayed-event scenario;
- duplicate-event scenario.

Each event must include stable IDs and timestamps sufficient for idempotency and ordering analysis.

## Bad data scenarios

At minimum:
- null required key;
- duplicate event ID;
- duplicate business record;
- invalid product foreign key;
- invalid customer foreign key;
- malformed timestamp;
- future timestamp;
- negative quantity;
- invalid monetary value;
- schema version change;
- late-arriving event;
- missing expected file;
- unexpected row-count spike/drop.

## Reproducibility

Historical generator must support deterministic seed-based regeneration. Generated PII is fictitious and must be clearly labeled synthetic.

## Scale targets

Development:
- small enough for low-cost iteration.

Portfolio historical:
- large enough to demonstrate partitioning, Parquet, Spark, query scan reduction, and warehouse design.

Stress/demo:
- short bounded bursts, not continuous expensive traffic.
