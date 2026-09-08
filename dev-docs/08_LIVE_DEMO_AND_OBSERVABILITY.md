# 08 - Live Demo and Observability

## Public mode

Always available:
- last persisted pipeline run;
- historical pipeline metrics;
- business analytics;
- data quality;
- architecture;
- cost summary;
- lineage;
- GitHub evidence.

No expensive infrastructure is started for anonymous traffic.

## Authenticated live mode

Reviewer sees:
- service health;
- current pipeline run;
- streaming rate;
- processed/rejected counts;
- latency;
- last successful stage;
- bounded logs/diagnostics.

InteractiveReviewer can trigger only predefined scenarios.

## Live telemetry design

Preferred first implementation:
- browser polls a sanitized metrics API every few seconds.

Optional later:
- WebSocket/AppSync real-time push.

The backend reads selected CloudWatch/service state and publishes only safe derived metrics.

## CloudWatch requirements

- structured logs;
- metrics;
- alarms;
- dashboard;
- failed-job troubleshooting;
- correlation/run ID;
- stage duration;
- records in/out;
- rejected count;
- retry count;
- lag/freshness.

## Messaging

SQS:
- decouple at least one async operation;
- retry and dead-letter queue scenario.

SNS:
- pipeline failure notification;
- optional access-request/admin notification.

Canonical failure chain:
`Pipeline failure -> CloudWatch alarm/event -> SNS -> notification`

## Intentional failure demos

At least:
1. malformed records -> quarantine;
2. transformation failure -> retry -> fail;
3. DLQ path;
4. missing input/freshness alert;
5. partial failure/recovery.

## Site visualization

Pipeline nodes show states such as:
- OFFLINE
- IDLE
- RUNNING
- HEALTHY
- DEGRADED
- FAILED
- COMPLETE

Animation is supplemental. The same state must be accessible as text.
