# FDG Solar — Quotation & Generated-Document Data Contract

Status: Canonical consistency rule for the current single-file application.

## Principle

Once the user changes the Interactive BOM, the **actual BOM configuration** is the installed/quoted system. Generated documents must not silently revert to the autosizer recommendation.

## Authoritative project values

| Project value | Authoritative source | Rule |
|---|---|---|
| Installed PV capacity | Interactive BOM panel selection + `qty-panels` | `panel quantity × panel wattage / 1000` = kWp |
| Inverter AC capacity | Interactive BOM inverter selection + `qty-inverter` | `unit inverter kW × quantity` = kW AC |
| PV design target | inverter hardware `designPvKw` × inverter quantity | User/FDG target used only to suggest/sync panel quantity when inverter/panel selection changes |
| Manufacturer PV ceiling | `manufacturerMaxPvKw` × inverter quantity | Hard safety ceiling when exact model is verified; **not** the automatic design target |
| Battery bank | selected battery × quantity | Current BOM description/voltage/Ah; gross kWh from V × Ah × quantity / 1000 |
| Investment | Interactive BOM / Grand Total | Current calculated quotation total |
| Solar generation | actual installed BOM PV kWp | `PV kWp × 4.5 PSH × 0.81 yield` |
| Monthly solar savings | actual BOM solar generation + client load + tariff | `min(monthly solar generation, monthly client consumption) × tariff` |
| Quote reference | current/saved quotation reference | Same reference across Proposal, Full Quote, Turnover/Warranty, SLD, and Job Order |

## Document synchronization matrix

| Output | PV kWp | Inverter kW | Panel qty/W | Battery | Price | Savings | Quote ref |
|---|---|---|---|---|---|---|---|
| Client Proposal | Actual BOM | Actual BOM | Actual BOM | Actual BOM | Grand Total | Actual BOM PV projection | Current quote |
| PDF Full Quote | Actual BOM | Actual BOM | Actual BOM | Actual BOM | Grand Total | Actual BOM PV projection | Current quote |
| Turnover & Warranty | Actual BOM | Actual BOM | Actual BOM | Actual BOM | N/A | N/A | Current quote |
| Single-Line Diagram | Actual BOM | Actual BOM | Actual BOM | Actual BOM | N/A | N/A | Current quote |
| Internal Job Order | Actual BOM | Actual BOM | Actual BOM | Actual BOM | Current BOM internally | N/A | Current quote |
| Messenger Share Card | Actual BOM | System type | Via BOM projection | N/A | Grand Total | Actual BOM PV projection | Current quote context |
| Quote History | Actual BOM PV + inverter AC saved separately | Saved | Snapshot | Snapshot | Saved | Snapshot/recomputed after reopen | Saved ref |

## Saved quotation rule

A saved quote snapshot must preserve the quoted Interactive BOM and must **not** run the autosizer when reopened.

Reopening a saved quotation may refresh visual/load-profile calculations, but it must use a non-autosizing path so manually selected inverter, panel quantity, battery quantity, prices, and descriptions remain exactly as quoted.

Future snapshots also store the relevant engineering globals used by generated technical documents. Older snapshots use the restored BOM values as a backward-compatible fallback.

## PV design control

Example for 2 × LuxPower GEN2-LB-EU 14K with 550 W modules:

- Default FDG design target: `2 × 14 = 28 kWp`
- Nearest whole-module BOM: `51 × 550 W = 28.05 kWp`
- Verified manufacturer hard ceiling: `2 × 18 = 36 kWp`
- Engineer may change design target, e.g. 16 kWp/unit → 32 kWp target → `58 × 550 W = 31.90 kWp`
- Engineer may choose maximum, 18 kWp/unit → 36 kWp target → maximum whole-panel fit `65 × 550 W = 35.75 kWp`

The client documents always report the final **actual panel count × panel wattage**, not the design target and not the manufacturer maximum.

## No-export assumption

Current FDG design direction does not assume export/sale to the Distribution Utility. Grid references in technical documents are backup/import/architecture references unless a future project explicitly enables an export/net-metering design.

## Regression rule

Any future change to the calculator, Interactive BOM, quotation, hardware database, or saved-quote logic must verify this data contract before merge.