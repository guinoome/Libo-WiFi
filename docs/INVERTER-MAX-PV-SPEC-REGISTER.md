# FDG Solar — Inverter Max PV Input Register

Purpose: make Interactive BOM panel sizing follow manufacturer PV-input limits where the exact inverter series can be verified.

## Governing rule

- `maxPvKw` is the manufacturer Max PV Input Power per inverter unit.
- Parallel units multiply that per-unit limit.
- Panel quantity uses the selected panel wattage and never exceeds the verified Max PV Input.
- Client-facing total PV capacity is the actual installed panel quantity × panel wattage.
- If a record has no verified exact model, the application warns that it is using the nominal inverter-kW fallback.
- A manual `maxPvKw` entry is treated as a CUSTOM override, not a manufacturer-verified value.

## Verified records

| Inventory record | Exact manufacturer series used | Max PV input / unit | Verification |
|---|---|---:|---|
| LuxPower 6kW (Gen2-LB-EU) | GEN2-LB-EU 6K | 9.6 kW | LuxpowerTek official EU catalogue, 2026.03.31 |
| LuxPower 8kW (Gen-LB-EU) | GEN-LB-EU 8K | 12.0 kW | LuxpowerTek official GEN-LB-EU 7-10K datasheet |
| LuxPower 10kW (Gen-LB-EU) | GEN-LB-EU 10K | 15.0 kW | LuxpowerTek official GEN-LB-EU 7-10K datasheet |
| LuxPower 12kW (GEN2-LB-EU) | GEN2-LB-EU 12K | 18.0 kW | LuxpowerTek official EU catalogue, 2026.03.31 |
| LuxPower 14kW (GEN2-LB-EU) | GEN2-LB-EU 14K | 18.0 kW | LuxpowerTek official EU catalogue, 2026.03.31 |

## Official source URLs

- LuxpowerTek GEN2-LB-EU 3-6K / EU catalogue:
  https://luxpowertek.com/wp-content/uploads/2026/04/LuxpowerTek-EU-Series-Inverter-Catalogue-2026.03.31.pdf
- LuxpowerTek GEN-LB-EU 7-10K:
  https://luxpowertek.com/wp-content/uploads/2025/09/GEN-LB-EU-7-10K-Datasheet.pdf
- LuxpowerTek GEN2-LB-EU 7-14K:
  https://luxpowertek.com/wp-content/uploads/2026/04/GEN2-LB-EU-7-14K-Datasheet20260325.pdf

## Records still requiring exact model confirmation

These records are deliberately not assigned a manufacturer Max PV value yet because their current names do not uniquely identify a technical datasheet:

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

The database should be upgraded to exact model numbers before these values are treated as verified. This is especially important for Sungrow and Deye, where same-kW products in different series can have substantially different recommended/max PV input capacities.

## Data-governance rule

Do not infer a technical limit from brand + nominal kW alone when multiple manufacturer models exist.

Preferred hardware record identity:

`Manufacturer + Exact Model + Rated AC kW + Phase + Battery Architecture`

Example:

`Sungrow SH8.0RT · 8kW · 3-Phase · HV Battery`

rather than:

`SUNGROW 8kW Hybrid`

This makes future BOM sizing, MPPT validation, battery compatibility, SLD generation, and quotation evidence auditable.
