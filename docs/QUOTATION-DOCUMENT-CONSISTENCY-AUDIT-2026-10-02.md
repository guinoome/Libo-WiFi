# FDG Solar — Quotation / Generated Document Consistency Audit

Date: 2026-10-02  
Scope: latest application state after Interactive BOM authority + PV design/max separation.

## Result

Static consistency audit: **PASS**

The current application now treats the Interactive BOM as the installed/quoted system for generated documents.

## Verified synchronization matrix

| Output | PV kWp | Inverter kW | Panel qty/W | Equipment identity | Battery | Savings | Quote ref | Result |
|---|---|---|---|---|---|---|---|---|
| Client Proposal | Actual BOM | Actual BOM | Actual BOM | Selected BOM | Actual BOM | Actual BOM PV projection | Current quote | PASS |
| PDF Full Quote | Actual BOM | Actual BOM | Actual BOM | Current quote/BOM context | Actual BOM | Actual BOM PV projection | Current quote | PASS |
| Turnover & Warranty | Actual BOM | Actual BOM | Actual BOM | Selected panel/inverter/battery descriptions | Actual BOM | N/A | Current quote | PASS |
| Single-Line Diagram | Actual BOM | Actual BOM | Actual BOM | Selected panel/inverter/battery descriptions | Actual BOM | N/A | Current quote | PASS |
| Internal Job Order | Actual BOM | Actual BOM | Actual BOM | Current BOM | Actual BOM | N/A | Current quote | PASS |
| Messenger Share Card | Actual BOM | System architecture | BOM-derived | Current BOM context | Current BOM context | Actual BOM PV projection | Current quote | PASS |
| Quote History / Reopen | Snapshot actual BOM | Snapshot actual BOM | Snapshot | Snapshot | Snapshot | Recomputed from restored BOM | Saved quote ref | PASS |

## Important PV control rule

The Hardware Database separates two different engineering concepts:

- `designPvKw` — engineer/user-controlled PV design target per inverter.
- `manufacturerMaxPvKw` — verified hard ceiling per inverter.

The Interactive BOM follows the design target, not the manufacturer maximum.

Current LuxPower defaults:

| Inverter | Default PV Design / unit | Manufacturer ceiling / unit |
|---|---:|---:|
| GEN2-LB-EU 6K | 6 kWp | 9.6 kWp |
| GEN-LB-EU 8K | 8 kWp | 12.0 kWp |
| GEN-LB-EU 10K | 10 kWp | 15.0 kWp |
| GEN2-LB-EU 12K | 12 kWp | 18.0 kWp |
| GEN2-LB-EU 14K | 14 kWp | 18.0 kWp |

This means the engineer may deliberately raise/lower the PV design target in the Hardware Database or Interactive BOM, but the verified manufacturer ceiling remains a safety limit.

Example:

`2 × 14 kW inverter`

Default PV target:

`2 × 14 = 28 kWp`

With 550 W modules:

`51 × 550 W = 28.05 kWp`

If the engineer intentionally chooses the manufacturer ceiling:

`2 × 18 = 36 kWp max`

Largest whole-module fit:

`65 × 550 W = 35.75 kWp`

All client/technical documents report the final actual installed module quantity × module wattage, not the design target and not the manufacturer maximum.

## Regression checks performed

- Inline application JavaScript parses successfully.
- All original named functions remain present.
- Generated documents use BOM-derived PV/inverter values.
- Turnover/Warranty uses selected BOM descriptions after this audit fix.
- SLD equipment schedule uses selected BOM panel and battery descriptions after this audit fix.
- Saved quote reopen does not rerun the autosizer.
- Saved quote reference is restored before regenerating documents.
- PV design defaults remain 6 / 8 / 10 / 12 / 14 kWp for the listed LuxPower records.
- Manufacturer maximum remains a separate ceiling.

## Rule for future changes

Any calculator, BOM, quotation, hardware database, SLD, turnover, warranty, Job Order, Messenger Card, or Quote History change must preserve the canonical contract in:

`docs/QUOTATION-DOCUMENT-DATA-CONTRACT.md`
