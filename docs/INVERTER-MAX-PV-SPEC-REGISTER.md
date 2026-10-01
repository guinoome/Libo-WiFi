# FDG Solar — Inverter PV Design & Manufacturer Limit Register

Purpose: keep the Interactive BOM under FDG engineering control while still respecting verified manufacturer PV-input limits.

## Two-layer rule

`designPvKw` = the PV capacity FDG intends to use per inverter in the Interactive BOM.

`manufacturerMaxPvKw` = verified manufacturer hard ceiling per inverter, when the exact model is known.

The Interactive BOM follows `designPvKw`, not the manufacturer maximum. The engineer may deliberately size the PV array up or down. If a verified manufacturer ceiling exists, the software prevents the design target from exceeding it.

Client-facing PV capacity is always the actual installed module count × module wattage.

## Current LuxPower defaults

| Inventory record | Default FDG PV design / unit | Verified manufacturer maximum / unit | Exact model |
|---|---:|---:|---|
| LuxPower 6kW (Gen2-LB-EU) | **6 kWp** | 9.6 kWp | GEN2-LB-EU 6K |
| LuxPower 8kW (Gen-LB-EU) | **8 kWp** | 12.0 kWp | GEN-LB-EU 8K |
| LuxPower 10kW (Gen-LB-EU) | **10 kWp** | 15.0 kWp | GEN-LB-EU 10K |
| LuxPower 12kW (GEN2-LB-EU) | **12 kWp** | 18.0 kWp | GEN2-LB-EU 12K |
| LuxPower 14kW (GEN2-LB-EU) | **14 kWp** | 18.0 kWp | GEN2-LB-EU 14K |

These default design values intentionally match inverter nominal kW. They are not claims about the manufacturer maximum. They are the engineer-controlled starting point for Interactive BOM sizing.

## Interactive BOM behavior

1. Select inverter model and quantity.
2. The default PV design target is nominal inverter kW × quantity.
3. Select panel wattage.
4. The BOM calculates the nearest whole-panel count to the design target.
5. The engineer may edit the PV Design Capacity per inverter to size the array up/down.
6. If a verified manufacturer maximum exists, the final module count cannot exceed it.
7. Quote, Full Quote, Turnover/Warranty, SLD, Job Order, Messenger Card, and Quote History should all use the actual resulting BOM panel quantity × panel wattage as installed PV capacity.

## Verified manufacturer references

- LuxpowerTek GEN2-LB-EU 3-6K / EU catalogue:
  https://luxpowertek.com/wp-content/uploads/2026/04/LuxpowerTek-EU-Series-Inverter-Catalogue-2026.03.31.pdf
- LuxpowerTek GEN-LB-EU 7-10K:
  https://luxpowertek.com/wp-content/uploads/2025/09/GEN-LB-EU-7-10K-Datasheet.pdf
- LuxpowerTek GEN2-LB-EU 7-14K:
  https://luxpowertek.com/wp-content/uploads/2026/04/GEN2-LB-EU-7-14K-Datasheet20260325.pdf

## Records still requiring exact model confirmation

These records do not yet have a manufacturer hard ceiling because the existing name is not specific enough:

- 1kW 12V MPPT Hybrid Inverter
- 2kW 12V MPPT Hybrid Inverter
- 3kW 24V MPPT Hybrid Inverter
- Deye/Solis 3kW Grid-Tie
- 5kW 24V MPPT Hybrid Inverter
- Deye/Solis 6kW Hybrid
- SUNGROW 6kW Hybrid
- Deye/Solis 8kW Hybrid
- SUNGROW 8kW Hybrid
- SUNGROW 10kW Hybrid
- Deye 12kW 3-Phase Hybrid
- Elite 16kW Hybrid
- Deye 20kW 3-Phase Hybrid
- LuxPower 20kW 1-Phase
- LuxPower 20kW 3-Phase (Trip20kw)

For these unresolved records, the BOM defaults PV Design Capacity to nominal inverter kW. That is an FDG design default, not a manufacturer-limit assertion.

## Data-governance rule

Do not mix `PV design target` and `manufacturer maximum PV input` as one field.

Preferred hardware identity:

`Manufacturer + Exact Model + Rated AC kW + Phase + Battery Architecture`

That separation keeps future MPPT validation, current limits, battery compatibility, SLD generation, and quotation evidence auditable.