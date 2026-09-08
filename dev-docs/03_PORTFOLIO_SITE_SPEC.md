# 03 - Portfolio Site Specification

## Site purpose

The site is both:
1. a general professional portfolio; and
2. a presentation and controlled demonstration layer for Northstar.

## Global navigation

- Home
- About Me
- Resume
- Projects
- Skills
- Contact

Northstar project navigation:
- Overview
- Analytics
- Pipeline
- Infrastructure
- Data Quality
- Lineage
- Costs
- Decisions
- Live Demo

## Home

Above the fold:
- professional headshot/photo;
- name and current professional positioning;
- concise value proposition;
- primary skills;
- resume download/view;
- GitHub and LinkedIn;
- featured Northstar project CTA.

Northstar teaser:
- last successful run;
- total processed records;
- batch + streaming;
- core AWS stack;
- architecture preview.

## About Me

Content blocks:
- professional summary;
- transition/current focus into cloud data engineering;
- SQL/data engineering strengths;
- practical Python focus;
- approach to data reliability and architecture;
- selected non-sensitive personal/professional interests if desired.

No invented biography. Final copy should be written from the user's approved resume and details.

## Resume

- embedded readable resume;
- downloadable PDF;
- optional HTML version for accessibility/SEO;
- visible skills section;
- project entry for Northstar once mature.

## Photo

- professional headshot supplied by user;
- optimized web derivative;
- alt text;
- no EXIF/location metadata in published asset.

## Projects

Northstar is featured first. Other projects can be added later.

Each project card:
- problem;
- architecture/stack;
- role;
- measurable scope;
- source link;
- demo link.

## Northstar public overview

Visible without login:
- architecture;
- historical pipeline status;
- persisted business analytics;
- historical data-quality metrics;
- lineage diagrams;
- costs;
- design decisions;
- GitHub links;
- screenshots/run artifacts.

## Live Demo access

Public request form:
- name;
- email;
- company;
- optional note.

Admin approves manually.

Approved reviewer:
- receives Cognito account;
- has explicit expiration timestamp;
- logs in with email;
- gains Reviewer or Interactive Reviewer role.

## Live experience

Read-only reviewer:
- live AWS service status;
- current event rate;
- current run;
- logs/metrics summaries;
- pipeline diagram state.

Interactive reviewer:
- all read-only features;
- may run bounded safe scenarios such as:
  - generate 100/1,000 synthetic events;
  - inject a predefined bad-data scenario;
  - launch approved demonstration workflow if budget state allows.

No reviewer can:
- run arbitrary code;
- set arbitrary event counts;
- access AWS Console;
- receive AWS credentials;
- edit IAM;
- invoke unbounded compute;
- view secrets.

## Responsive and accessibility requirements

- functional on desktop and mobile;
- keyboard accessible;
- semantic structure;
- WCAG-conscious contrast;
- charts have textual summaries;
- no important information available only by animation;
- live updates have a pause option where appropriate.

## Portfolio success metric

A hiring manager understands the project in 30-60 seconds. A technical interviewer can spend 15-30 minutes drilling into code, lineage, architecture, and evidence.
