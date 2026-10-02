# FDG Solar — Document Data Synchronization Audit

**Audit target:** current Interactive BOM / Quotation / generated-document chain  
**Status:** synchronized for core installed-system data  
**Audit scope:** Client Proposal, Full Quote PDF, Turnover & Warranty, Single-Line Diagram, Internal Job Order, Messenger share card

## Canonical installed-system source

The Interactive BOM is the authoritative installed configuration after manual hardware overrides.

Canonical live state is read through:

- `getBOMSystemState()`
- `readSLDConfig()` where electrical/SLD detail is needed

The following must remain distinct:

- **PV DC capacity:** actual selected panel quantity × actual selected panel wattage
- **Inverter AC capacity:** selected inverter unit kW × selected inverter quantity
- **Client load:** calculator Daily Equivalent / monthly consumption
- **Solar production:** actual BOM PV kWp × current solar-yield assumptions

Do not substitute one of these values for another.

## Output synchronization status

| Output | Client / Ref | PV quantity & kWp | Inverter quantity & kW | Battery | Savings / production | Status |
|---|---|---|---|---|---|---|
| Client Proposal | Live | Interactive BOM | Interactive BOM | Interactive BOM | Actual BOM PV projection | PASS |
| Full Quote PDF | Live | Interactive BOM | Interactive BOM | Interactive BOM | Actual BOM PV projection, capped by client consumption | PASS |
| Turnover & Warranty | Live | Interactive BOM | Interactive BOM | Interactive BOM | N/A | PASS |
| Single-Line Diagram | Live | Interactive BOM via `readSLDConfig()` | Interactive BOM | Interactive BOM | N/A | PASS |
| Internal Job Order | Live | Interactive BOM | Interactive BOM | Interactive BOM | N/A | PASS |
| Messenger Share Card | Live | Interactive BOM | Interactive BOM | Interactive BOM | Same BOM-based savings projection | PASS |

## Turnover & Warranty audit

Turnover currently pulls:

- same quote/session reference
- same client name and site address
- actual installed PV panel count
- actual selected panel wattage
- actual installed PV kWp
- actual inverter quantity
- actual inverter kW per unit
- actual inverter total kW
- phase and AC voltage
- actual battery quantity / Ah / DC voltage
- gross battery-bank kWh
- current architecture/system type

Therefore manual changes made in Interactive BOM propagate into the turnover equipment schedule.

## Hardware PV design semantics

For verified LuxPower records, the database now separates:

- `designPvKw` — the normal PV design target chosen by FDG / user
- `manufacturerMaxPvKw` — the manufacturer hard ceiling

Current default design targets remain nominal:

- 6 kW inverter → 6 kWp design target
- 8 kW inverter → 8 kWp
- 10 kW inverter → 10 kWp
- 12 kW inverter → 12 kWp
- 14 kW inverter → 14 kWp

The verified manufacturer maximum is retained only as a safety ceiling. It does **not** automatically force the BOM to the maximum.

The user remains free to manually choose the PV quantity/capacity in Interactive BOM, provided it does not exceed a verified manufacturer limit where one is known.

## Labor calculation

Revived approved progressive installation-labor schedule:

| Installed PV capacity tranche | Rate |
|---|---:|
| First 5 kWp | ₱8,000/kWp |
| Next 5 kWp | ₱7,000/kWp |
| Next 10 kWp | ₱6,000/kWp |
| Next 30 kWp | ₱5,000/kWp |
| Above 50 kWp | ₱4,500/kWp |
| Minimum installation labor | ₱30,000 |

Labor is based on **actual installed PV kWp from Interactive BOM**, using the selected panel wattage. It is no longer based on a flat ₱7,000/kW or a hardcoded 550 W panel assumption.

## Governance rule

Any future generated document must consume the canonical Interactive BOM state rather than independently reconstructing project capacity from stale recommendations.

Recommended dependency:

```text
Engineering Calculator
        ↓
Recommended Configuration
        ↓
Interactive BOM (authoritative installed configuration after override)
        ↓
Canonical BOM/System State
        ├── Client Proposal
        ├── Full Quote
        ├── Turnover & Warranty
        ├── SLD
        ├── Job Order
        └── Messenger Share Card
```

Do not create separate calculation paths inside generated documents.
