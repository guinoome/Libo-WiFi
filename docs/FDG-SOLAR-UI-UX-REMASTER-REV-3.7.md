# FDG Solar Visayas EPC — Graphics/UI/UX Remaster Brief

**Revision:** 3.7  
**Status:** Execution Brief / Premium-Tier Visual Retrofit  
**Repository:** guinoome/Libo-WiFi  
**Working Branch:** ui/premium-solar-refresh  
**Execution Intent:** Astra-style premium product-design pass, constrained to presentation-layer changes only  
**Primary Reference:** Supplied premium dark solar-calculator dashboard mockup featuring the Cebu/tropical solar-home hero, live Recommended Configuration, System Input, Energy Flow diagram/chart, System Outputs, Cost Breakdown, Environmental Impact, and Project Readiness.

---

## 1. Mission

Remaster the existing FDG Solar Visayas EPC web application into a premium, cinematic, engineering-grade interface without changing the underlying working application.

The remaster must improve perceived quality, usability, information hierarchy, responsiveness, clarity, and visual engagement while preserving the current engineering/commercial engine exactly as it is.

This is **not a rebuild**.  
This is **not a calculation rewrite**.  
This is **not a document-generation rewrite**.  
This is a controlled visual retrofit around a working application.

### Working rule

**FROZEN:** Current functions + calculations + generated documents.

**ALLOWED:** Visual presentation + responsiveness + navigation appearance + hero imagery + charts/visual mirrors + animation + spacing + typography + component styling.

---

## 2. Non-Negotiable Protected Zone

The following are frozen and must not be modified unless the owner explicitly authorizes a separate future revision.

### 2.1 Engineering and commercial logic

- Solar sizing calculations
- Load and consumption calculations
- Inverter sizing logic
- PV sizing logic
- Battery sizing / DOD logic
- Energy-flow formulas
- Savings / ROI / payback formulas
- Pricing logic
- BOM logic
- Engineering assumptions already encoded in the current application
- Validation rules
- Warning rules
- Existing calculation order and synchronization behavior

### 2.2 Quotation and generated-document systems

Do not modify:

- Quotation engine
- Full quotation PDF
- Quotation calculations
- Quotation synchronization logic
- Turnover documents
- Warranty documents
- Single-Line Diagram generation
- SLD photo library logic
- Report-generation logic
- Existing printable layouts
- Existing document data mapping
- Existing document outputs

Their entry buttons, cards, navigation surfaces, and visual wrappers may be restyled, but their underlying behavior and output must remain unchanged.

### 2.3 Persistence and application contracts

Do not modify:

- Existing DOM IDs used by JavaScript
- Existing function names relied on by the application
- Existing event-handler contracts
- Existing localStorage keys
- Existing saved configuration formats
- Existing quote-history schema
- Existing pipeline schema
- Existing hardware database data contracts
- Existing storage/retrieval behavior
- Existing workflow sequence
- Existing state transitions
- Existing integrations and configuration values

No visual enhancement is allowed to create a second source of truth.

---

## 3. Architecture Rule — Presentation Layer Only

Rev 3.7 shall be implemented as an additive visual layer.

Preferred pattern:

1. Preserve current HTML/JavaScript engine.
2. Add isolated CSS design tokens and component styling.
3. Add small isolated presentation scripts only where required.
4. Presentation scripts may read existing DOM output values.
5. Presentation scripts may mirror those values into new visual components.
6. Presentation scripts must not calculate authoritative engineering results.
7. Existing application logic remains the source of truth.
8. Removing the Rev 3.7 presentation layer should leave the original application operational.

### Read-only mirror principle

New premium cards may display:

- Recommended inverter
- Recommended PV array
- Battery bank
- Estimated investment
- Daily equivalent consumption
- Daytime solar offset
- Battery requirement
- Savings
- System status

These values must be read from the existing outputs wherever possible.

Do not create parallel calculation functions merely to populate the new interface.

---

## 4. Premium Visual Direction

### 4.1 Design character

Target character:

- Professional engineering platform
- Premium solar EPC
- Cebu / Visayas-rooted identity
- Cinematic but functional
- Data-rich without appearing cluttered
- Dark premium technical environment
- Realistic rather than futuristic-generic
- High-end consulting / engineering software rather than ordinary admin dashboard

Avoid:

- Generic SaaS dashboard appearance
- Excessive neon
- Excessive gradients
- Random glass cards everywhere
- Decorative gauges without meaning
- Fake metrics
- AI-generated filler copy
- Overuse of glowing borders
- Cyberpunk styling
- Unnecessary 3D gimmicks
- Animations that compete with engineering data

### 4.2 Primary palette

Base:
- Midnight Navy: #07111F
- Deep Engineering Blue: #0A1828
- Technical Surface: #0F2033
- Elevated Surface: #13283D

Primary accent:
- Solar Amber: #F59E0B
- Sunlight Gold: #FBBF24

Engineering secondary:
- Technical Blue: #3B82F6
- Energy Cyan: #22D3EE
- Battery Green: #10B981

Status:
- Ready Green: #22C55E
- Warning Amber: #F59E0B
- Critical Red: #EF4444

Text:
- Primary: #F8FAFC
- Secondary: #CBD5E1
- Tertiary: #94A3B8

### 4.3 Typography

Use a restrained dual-family system.

- Display/headline: premium editorial engineering feel.
- Interface/body: highly readable modern sans-serif.
- Numbers/engineering values: monospace where useful.

Typography hierarchy must prioritize:

1. Engineering state / decision
2. Result value
3. Unit
4. Context label
5. Supporting explanation

Large marketing text must never overwhelm the calculator workspace on smaller screens.

---

## 5. Desktop Information Architecture

### 5.1 Sidebar

Keep existing navigation behavior.

Allowed visual changes:

- Refined spacing
- Better icon containers
- Stronger active-state indicator
- Premium hover state
- Reduced visual noise
- Clearer section grouping
- Better mobile collapse behavior

Do not change navigation targets unless separately authorized.

### 5.2 Hero

Desktop hero should create immediate premium identity without becoming a marketing-only landing page.

Target content:

**Design the system.  
Prove the energy.  
Build with confidence.**

Supporting message:
One engineering workspace for load interpretation, solar sizing, battery autonomy, protection checks, economics, and synchronized client quotation.

Hero visual:
- Realistic premium solar residence
- Tropical / Visayas character
- Dusk or golden-hour lighting
- Solar array visibly integrated into architecture
- Dark gradient for text readability
- Hero image is decorative and cannot become a dependency for calculation

Primary calls to action may link to existing sections such as:
- Start System Sizing
- Open Quotation

These controls may only invoke existing workflows.

---

## 6. Calculator Workspace

The calculator is the core product surface. Rev 3.7 must make its state and outputs easier to understand without changing computation.

### 6.1 System Input

Preserve current inputs and IDs.

Enhance visually with:

- Clear step grouping
- Better label hierarchy
- Visible units
- Improved focus state
- Responsive form arrangement
- Clear primary Run Calculation action
- Advanced controls visually secondary, not removed

### 6.2 Recommended Configuration

Present the authoritative current outputs in a premium summary card.

Preferred visible data:

- Inverter
- PV Array
- Battery
- Estimated Investment

The card must update when the existing calculation engine updates.

No hardcoded recommendation may override the current engine.

### 6.3 Energy Flow — Diagram View

Add or enhance a presentation-only flow visualization inspired by the supplied reference.

Conceptual visual path:

Solar / PV → Building Load → Battery → Grid interaction

Potential labels, only when supported by current authoritative data:

- Solar generation / daytime solar value
- PV array size
- Daily equivalent load
- Battery requirement / bank size
- Grid dependency / offset state
- Monthly savings / solar offset

Use directional lines and restrained motion to communicate flow.

Animations may indicate direction only. They must not imply a numeric result that the engine did not compute.

### 6.4 Energy Flow — Chart View

The existing energy-flow chart / bars should receive a premium visual treatment.

Allowed:

- Improved axis styling
- Better legend
- Better color semantics
- Better spacing
- Animated transition of existing bar widths/values
- Responsive representation
- Tooltips if they only expose existing values

Do not introduce fabricated hourly engineering values.

### 6.5 System Outputs

Use a clean, high-density result panel.

Preferred categories:

- PV Array Size
- Inverter Size
- Battery Capacity
- Daily Solar / Energy Result where already calculated
- Savings / Offset where already calculated
- Payback / ROI where already calculated

Result values must always come from the existing application.

---

## 7. Lower Dashboard Intelligence

### 7.1 Cost Breakdown

Visually improve the existing costing presentation.

Do not change:
- Component costs
- Percentages
- Pricing rules
- Markups
- Totals

### 7.2 Environmental Impact

Environmental metrics may be shown only when they already exist or are driven by existing authorized logic.

Do not present decorative sustainability numbers as engineering results.

### 7.3 Project Readiness

Use checklist / status treatment for states that already exist.

Do not create a fake 100% readiness score unless the application genuinely supports it.

Reference-mockup readiness graphics are visual direction, not authorization to invent logic.

---

## 8. Protected Modules — Visual Shell Only

The following areas may receive navigation, card, spacing, typography, responsive, and button styling improvements only:

- Quotation Generator
- Full Quotation PDF workflow
- Quote History
- Hardware Database
- Pipeline
- Turnover
- Warranty
- Single-Line Diagram
- Reports
- SLD Photo Library
- Project portfolio / records

No internal logic or generated content may be modified in Rev 3.7.

---

## 9. Responsive Experience

### Desktop

Target:
- 1280 px and above
- Dense engineering workspace
- Sidebar persistent
- Hero + live recommendation summary
- Multi-column calculator surface
- High information visibility

### Tablet

Target:
- 769–1279 px
- Maintain engineering context
- Two-column where appropriate
- Collapse tertiary controls
- Keep key values visible without horizontal scrolling where possible

### Mobile

Target:
- 320–768 px
- Single-column engineering flow
- Touch targets minimum ~44 px
- Navigation collapses cleanly
- Important results visible early
- Complex tables may scroll horizontally rather than becoming unreadable
- Hero reduced in height
- Marketing copy reduced before engineering content
- No loss of functional controls

---

## 10. Motion Standard

Motion must explain state, hierarchy, or energy direction.

Allowed:

- Short fade/translate entrance
- Controlled card elevation
- Directional energy-flow pulses
- Smooth result transitions
- Sidebar / mobile drawer motion
- Chart/bar transitions driven by existing values

Required:

- Respect prefers-reduced-motion
- Avoid permanent distracting animation
- Avoid heavy animation libraries unless justified
- No animation may block calculator interaction

---

## 11. Performance and Reliability

Rev 3.7 must remain lightweight.

Priorities:

- No framework rewrite
- No unnecessary dependency
- No required third-party runtime for core functionality
- Decorative remote assets must have graceful fallback
- Preserve current fast-load behavior as far as practical
- Preserve offline-capable direction where current architecture permits it
- Presentation failure must not break calculations

---

## 12. Regression Guardrails

Before any Rev 3.7 change is approved for production, verify:

### Calculation regression
- Same test inputs produce the same calculator outputs.
- Same recommended inverter result.
- Same panel/PV result.
- Same battery result.
- Same investment result.
- Same warnings.
- Same quotation sync data.

### Persistence regression
- Existing saved data loads.
- Existing localStorage keys remain readable.
- Existing quote history remains usable.
- Existing pipeline data remains usable.

### Document regression
- Full quotation PDF is unchanged.
- Turnover output is unchanged.
- Warranty output is unchanged.
- SLD output is unchanged.
- Report-generation output is unchanged.

### Workflow regression
- Every existing navigation action still opens the same functional area.
- Existing buttons still invoke the same handlers.
- Existing form IDs remain intact.
- Mobile menu still functions.
- Export / print / PDF workflows still function.

---

## 13. Acceptance Criteria

Rev 3.7 is accepted only when all are true:

1. The application feels visibly premium on desktop, tablet, and phone.
2. The calculator is easier to scan and understand.
3. Current logic remains the only source of truth.
4. Existing engineering outputs are unchanged for identical inputs.
5. Existing quotation and PDF workflows are unchanged.
6. Turnover, warranty, SLD, and reports remain unchanged.
7. Existing saved records remain compatible.
8. No protected storage key, ID, calculation, or workflow is intentionally altered.
9. New visual components degrade gracefully if their presentation script fails.
10. Main/production is not changed until the visual branch is reviewed and explicitly approved.

---

## 14. Implementation Sequence

### Phase A — Foundation
- Establish Rev 3.7 design tokens.
- Refine shell, sidebar, spacing, typography.
- Preserve all original element IDs.

### Phase B — Premium Hero
- Add responsive hero.
- Add read-only live recommendation mirror.
- Connect CTAs to existing views only.

### Phase C — Calculator Visualization
- Improve input layout.
- Add read-only energy-flow visual mirror.
- Improve existing result/energy bars.
- Improve status hierarchy.

### Phase D — Supporting Views
- Restyle quotation entry surface only.
- Restyle database/history/pipeline shells only.
- Do not enter protected internal logic.

### Phase E — Responsive QA
- Desktop
- Tablet
- Mobile
- Landscape phone
- Touch interaction

### Phase F — Regression QA
- Calculator equivalence
- Persistence
- Quotation
- PDF
- Turnover
- Warranty
- SLD
- Reports

### Phase G — Deployment
- Push visual work to dedicated branch.
- Generate preview deployment if hosting supports branch previews.
- Review online.
- Merge to main only after explicit owner approval.

---

## 15. Definition of Done

Rev 3.7 is complete when the existing FDG Solar application behaves exactly as before from an engineering and document-output perspective, while the visible experience reaches the premium tier represented by the supplied reference image.

The visual layer may evolve aggressively.

The engineering and commercial core does not move.

---

## 16. Canonical Rev 3.7 Rule

> **Enhance what the user sees. Preserve what the system knows and does.**

Protected core:
**calculations, formulas, quotation, PDF, turnover, warranty, SLD, reports, pricing, saved configuration, storage contracts, IDs, and workflows.**

Enhancement surface:
**layout, typography, graphics, responsive behavior, navigation appearance, hero imagery, charts/visual mirrors, motion, spacing, component styling, and presentation hierarchy.**
