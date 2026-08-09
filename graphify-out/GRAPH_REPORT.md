# Graph Report - .  (2026-08-03)

## Corpus Check
- 21 files · ~127,745 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 255 nodes · 491 edges · 19 communities
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 65 edges (avg confidence: 0.66)
- Token cost: 83,286 input · 0 output

## Community Hubs (Navigation)
- Bootstrap UI Components
- jQuery Core
- AdminLTE Dashboard
- WiFi Voucher Payment System
- GCash Payment Integration
- Maya Payment Integration
- Claude Code Performance Stack
- Captive Portal Pre-Auth Hosts
- App Branding Assets
- Screenshot UI Flows
- Solar EPC Dashboard
- Voucher Store UI
- Transaction Logs
- Login Flow
- Chart.js Visualization
- DataTables Plugin
- Moment.js DateTime

## God Nodes (most connected - your core abstractions)
1. `_0x2af9()` - 33 edges
2. `pt()` - 11 edges
3. `ce()` - 11 edges
4. `t()` - 10 edges
5. `mt()` - 10 edges
6. `l()` - 10 edges
7. `t()` - 9 edges
8. `bt()` - 9 edges
9. `_0x5da329()` - 9 edges
10. `K()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Background Image - Snowy Mountain Landscape` --conceptually_related_to--> `Captive Portal WiFi Voucher System`  [INFERRED]
  resources/background.png → screenshots/1.jpg
- `Libo Voucher WiFi App Logo` --references--> `Captive Portal WiFi Voucher System`  [INFERRED]
  resources/logo.png → screenshots/1.jpg
- `Z()` --indirect_call--> `K()`  [INFERRED]
  resources/jquery.min.js → resources/bootstrap.bundle.min.js
- `FDG Solar Visayas EPC` --conceptually_related_to--> `FDG Ecosystem`  [INFERRED]
  index.html → docs/CLAUDE-CODE-STD-001.md
- `Screenshot 1 - Voucher Store UI (Promo Selection & Payment)` --conceptually_related_to--> `Payment Gateway Integration (GCash, Maya, SPay)`  [INFERRED]
  screenshots/1.jpg → resources/gcash_logo.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **GCash Pre-Authentication Host Stack for Omada WiFi** — tp_link_omada, gcash_payment, xendit_checkout, mynt_xyz, alipay_services [EXTRACTED 1.00]
- **Claude Code Performance Stack (Tier 1 Plugins)** — headroom_plugin, graphify_plugin, codeburn_plugin, ponytail_plugin [EXTRACTED 1.00]
- **Payment Method Logos Used in Voucher Store UI** — resources_gcash_logo_gcash_logo, resources_maya_logo_maya_logo, resources_spay_logo_spay_logo, screenshots_1_voucher_store, concept_payment_gateway [INFERRED 0.95]
- **Captive Portal Application Screens** — screenshots_1_voucher_store, screenshots_2_error_dialog, screenshots_3_transaction_logs, screenshots_4_login, concept_captive_portal [INFERRED 0.95]

## Communities (19 total, 0 thin omitted)

### Community 0 - "Bootstrap UI Components"
Cohesion: 0.07
Nodes (38): e(), Ne(), u(), A(), at(), b(), be(), ce() (+30 more)

### Community 1 - "jQuery Core"
Cohesion: 0.16
Nodes (33): a(), at(), bt(), Ct(), Dt(), et(), Ft(), G() (+25 more)

### Community 2 - "AdminLTE Dashboard"
Cohesion: 0.11
Nodes (29): _0x13f3cb(), _0x175c7e(), _0x22e203(), _0x230fb4(), _0x254aee(), _0x2a8dbc(), _0x2af719(), _0x2af9() (+21 more)

### Community 3 - "WiFi Voucher Payment System"
Cohesion: 0.12
Nodes (24): a(), c(), d(), e(), f(), g(), ge(), h() (+16 more)

### Community 4 - "GCash Payment Integration"
Cohesion: 0.14
Nodes (14): _0x11928c(), _0x12fb46(), _0x140f86(), _0x154901(), _0x26fa4c(), _0x397a14(), _0x3c3311(), _0x435ad2() (+6 more)

### Community 5 - "Maya Payment Integration"
Cohesion: 0.24
Nodes (11): Captive Portal WiFi Voucher System, Payment Gateway Integration (GCash, Maya, SPay), Background Image - Snowy Mountain Landscape, GCash Payment Logo, Libo Voucher WiFi App Logo, Maya Payment Logo, ShopeePay (SPay) Payment Logo, Screenshot 1 - Voucher Store UI (Promo Selection & Payment) (+3 more)

### Community 6 - "Claude Code Performance Stack"
Cohesion: 0.25
Nodes (6): a(), b(), d(), g(), r(), s()

### Community 7 - "Captive Portal Pre-Auth Hosts"
Cohesion: 0.24
Nodes (10): Codeburn - Token Usage and Cost Tracking Dashboard, CLAUDE-CODE-STD-001: Claude Code Performance Stack, FDG Ecosystem, FDG Solar Visayas EPC, Graphify (graphifyy) - Repository Visualization Plugin, Headroom (headroom-ai) - Compression Layer Plugin, FDG Solar Visayas EPC Pro Dashboard, Ponytail - YAGNI Code Minimalism Enforcer Plugin (+2 more)

### Community 8 - "App Branding Assets"
Cohesion: 0.22
Nodes (9): _0x10a2a3(), _0x15609f(), _0x1caa25(), _0x293cb8(), _0x3e015f(), _0x3f49f7(), _0x526601(), _0x591c10() (+1 more)

### Community 9 - "Screenshot UI Flows"
Cohesion: 0.38
Nodes (4): getQueryStringAsObject(), getQueryStringKey(), hotspotChang(), pageConfigParse()

### Community 10 - "Solar EPC Dashboard"
Cohesion: 0.29
Nodes (7): _0x1b1e23(), _0x296189(), _0x2f9962(), _0x44fa1f(), _0x5535aa(), _0x6d3980(), _0xc0a966()

### Community 11 - "Voucher Store UI"
Cohesion: 0.60
Nodes (5): Alipay Backend Services (SEA), GCash Payment Integration, Mynt (GCash/Alipay Backend Services), TP-Link Omada (Cloud/Hardware System), Xendit Checkout (Payment Gateway)

### Community 12 - "Transaction Logs"
Cohesion: 0.33
Nodes (6): _0x1b55ad(), _0x1d021e(), _0x230392(), _0x4dbeeb(), _0x5e2ca3(), _0x7a8d63()

### Community 13 - "Login Flow"
Cohesion: 0.40
Nodes (5): _0x1e5095(), _0x25b3cb(), _0x3cfe66(), _0x58a09c(), _0x8e0d5d()

### Community 15 - "Chart.js Visualization"
Cohesion: 0.67
Nodes (3): _0x134851(), _0x3c5dd1(), _0x9835d6()

### Community 16 - "DataTables Plugin"
Cohesion: 0.67
Nodes (3): _0x14cb2e(), _0x32d1be(), _0x391c07()

### Community 17 - "Moment.js DateTime"
Cohesion: 0.67
Nodes (3): _0x3b7b9e(), _0x3bbbf8(), _0x53d875()

## Knowledge Gaps
- **7 isolated node(s):** `Codeburn - Token Usage and Cost Tracking Dashboard`, `Ponytail - YAGNI Code Minimalism Enforcer Plugin`, `FDG Solar Visayas EPC Pro Dashboard`, `Background Image - Snowy Mountain Landscape`, `Libo Voucher WiFi App Logo` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `f()` connect `WiFi Voucher Payment System` to `Bootstrap UI Components`, `jQuery Core`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `pt()` connect `jQuery Core` to `WiFi Voucher Payment System`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `pt()` (e.g. with `f()` and `o()`) actually correct?**
  _`pt()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `ce()` (e.g. with `c()` and `f()`) actually correct?**
  _`ce()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `t()` (e.g. with `o()` and `s()`) actually correct?**
  _`t()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Codeburn - Token Usage and Cost Tracking Dashboard`, `Ponytail - YAGNI Code Minimalism Enforcer Plugin`, `FDG Solar Visayas EPC Pro Dashboard` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Bootstrap UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._