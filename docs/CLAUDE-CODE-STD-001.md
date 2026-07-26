# CLAUDE-CODE-STD-001
# Claude Code Performance Stack
**Version:** 1.1
**Status:** Active
**Owner:** FDG Ecosystem
**Purpose:** Standardize Claude Code plugins and performance optimizations for large-scale engineering repositories.

---

# 1. Objective

This standard defines the approved Claude Code performance stack used within the FDG Knowledge Repository.

The primary objectives are:

- Reduce unnecessary token consumption
- Improve context management
- Increase engineering productivity
- Improve navigation within very large repositories
- Minimize redundant AI reasoning
- Support long-term maintainability

This document is technology-specific and may evolve independently of the FDG organizational standards.

---

# 2. Engineering Principles

The performance stack shall follow these principles:

1. Reduce Context Before Increasing Model Size.
2. Load Only What Is Required.
3. Keep AI Focused on One Work Package.
4. Avoid Duplicate Knowledge.
5. Prefer Search over Context Injection.
6. Optimize Human Workflow First.
7. Plugins Must Improve Engineering Capability.
8. Every Plugin Must Have a Clear Purpose.

---

# 3. Approved Performance Stack

## Tier 1 (Core Performance)

### Headroom

Status:
- **Verified ✓ — Installed**

Repository:
- https://github.com/headroomlabs-ai/headroom

Version Installed:
- 0.32.1

License:
- Apache 2.0

Install Command:
```bash
pip install "headroom-ai[all]"
```

Claude Code Integration:
```bash
headroom mcp install
```

Actual Purpose:
- Compression layer that wraps Claude Code and reduces tool outputs, logs, files, and RAG chunks before they reach the model.
- Wraps Claude Code via `headroom wrap claude` or runs as an MCP server.

Expected Benefits:
- Lower token usage
- Faster responses
- Better context selection

Maintenance:
- Actively maintained. Releases every 1–2 weeks. v0.32.x series as of July 2026.

Priority:
★★★★★

---

### Graphify (graphifyy)

Status:
- **Verified ✓ — Installed**

Repository:
- https://pypi.org/project/graphifyy/

Version Installed:
- 0.8.26

License:
- Verified open source

Install Command:
```bash
pip install graphifyy
graphify install
```

Actual Purpose:
- Repository visualization and dependency graph navigation.
- Generates a code graph so developers can navigate relationships before asking Claude to edit code.

Expected Benefits:
- Smaller context
- Better repository understanding
- Faster architecture exploration

Usage:
```
/graphify .
```

Maintenance:
- Actively maintained.

Priority:
★★★★☆

---

### Codeburn

Status:
- **Verified ✓ — Installed**

Repository:
- https://github.com/getagentseal/codeburn

Version Installed:
- 0.9.19

License:
- MIT

Install Command:
```bash
npm install -g codeburn
```

Actual Purpose:
- Token usage and cost tracking dashboard across Claude Code sessions.
- Reads session logs and produces an interactive TUI showing spend by model, project, and task.
- Identifies waste patterns: files re-read across sessions, low read:edit ratios, wasted bash output.

Note:
- This is an **observability tool**, not a context reducer. It reveals where tokens are being wasted so engineers can act on it.

Maintenance:
- Actively maintained. Dedicated `docs/providers/claude.md` for Claude Code support.

Priority:
★★★★☆

---

### Ponytail

Status:
- **Verified ✓ — Installed**

Repository:
- https://github.com/DietrichGebert/ponytail

Version Installed:
- 4.8.4

License:
- MIT

Install Command:
```bash
npm install -g @dietrichgebert/ponytail
```

Claude Code Plugin Install:
```
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

Actual Purpose:
- Claude Code plugin that enforces YAGNI-style code minimalism.
- Makes the agent prefer stdlib, avoid unrequested abstractions, and write the minimum code that works.
- Includes a whole-repo over-engineering audit.

Note:
- This is a **coding discipline enforcer**, not a traditional code indexer.
- Native Claude Code plugin with `.claude-plugin/plugin.json`.

Maintenance:
- Actively maintained. v4.8.x series released June 2026. 89k stars.

Priority:
★★★★☆

---

# 4. Plugin Evaluation Checklist

Before any plugin becomes part of the official FDG stack, verify:

- Active GitHub repository
- Recent commits
- Issue tracker health
- Documentation quality
- Installation simplicity
- Community adoption
- License compatibility
- Security review
- Performance impact
- Token reduction evidence

A plugin shall not be adopted based solely on popularity.

---

# 5. Repository Context Strategy

Claude Code should avoid loading the entire repository whenever possible.

Preferred workflow:

```
User Request
        │
        ▼
Determine Current Work Package
        │
        ▼
Locate Relevant Folder
        │
        ▼
Search Required Files
        │
        ▼
Load Minimal Context
        │
        ▼
Reason
        │
        ▼
Generate Changes
```

Never preload the entire repository unless explicitly required.

---

# 6. Token Optimization Strategy

Priority order:

1. Better repository organization
2. Better search
3. Better indexing
4. Better context selection
5. Better prompts
6. Larger context windows

Buying larger context windows should be the last optimization.

---

# 7. Engineering Workflow

Recommended workflow:

```
Obsidian
    │
Knowledge
    │
    ▼
Git Repository
    │
Repository Search
    │
    ▼
Claude Code
    │
Selected Files
    │
    ▼
Implementation
    │
    ▼
Validation
    │
    ▼
Commit
```

Claude should never become the primary storage location for engineering knowledge.

---

# 8. Future Candidate Plugins

The following categories should be monitored for future adoption:

## Repository Indexing

Purpose:
Improve semantic search across very large repositories.

Status:
Future Evaluation

---

## Memory Compression

Purpose:
Compress long conversations into reusable summaries.

Status:
Future Evaluation

---

## Semantic Search

Purpose:
Load only engineering knowledge relevant to the current task.

Status:
Future Evaluation

---

## Dependency Visualization

Purpose:
Visualize repository architecture before making changes.

Status:
Future Evaluation

---

## Context Routing

Purpose:
Automatically select only the files required for the current work package.

Status:
Future Evaluation

---

## Knowledge Graph Integration

Purpose:
Integrate Claude Code with the FDG Knowledge Repository knowledge graph.

Status:
Future Evaluation

---

# 9. Future Research

The following tools should be periodically reviewed as the AI ecosystem evolves:

- Headroom
- Graphify
- Codeburn
- Ponytail
- New Claude Code extensions
- Repository indexing tools
- AI-assisted code navigation tools
- Context optimization frameworks
- Semantic repository search systems

No tool shall become an FDG standard without technical evaluation.

---

# 10. Maintenance

Review Frequency:
Quarterly

Review Criteria:
- Performance improvements
- Token efficiency
- Stability
- Security
- Community adoption
- Claude Code compatibility
- Engineering productivity

---

# Revision History

| Version | Date | Description |
|---------|------|-------------|
| 1.0 | 2026-07-26 | Initial Claude Code Performance Stack standard. |
| 1.1 | 2026-07-26 | Updated all Tier 1 plugins with verified status, actual descriptions, install commands, and version numbers. Corrected Codeburn and Ponytail purpose descriptions based on technical verification. |
