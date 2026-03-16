# CLAUDE.md

## Project overview

This is a single-page interactive coaching companion for agile coaches who use Socratic questioning with product teams. The entire app lives in `index.html` — one self-contained HTML file with embedded CSS and vanilla JS. No frameworks, no build tools, no external dependencies.

## Architecture

- `index.html` — the entire application (HTML structure, CSS styles, JS interactivity)
- No package.json, no node_modules, no build step
- Designed to work offline and be opened directly in a browser

### Key data structures in JS

- **`questionBank`** — array of 60+ questions, each with type (1-6), text, context, and ceremony tags. Powers the deck, ceremony filter, and situation suggester.
- **`situations`** — array of 10 coaching situations, each mapping to 3-4 curated questions with type and "why this works" guidance.
- **`scenarioData`** — array of 6 coaching scenarios with phased approaches, tips, and traps to avoid.
- **`CQ`** — compact circular question data keyed by role pairs (developer/designer/PO/tester/SM/stakeholder).
- **Journal** — entries stored in `localStorage` under key `socratic-journal` as JSON array.

## Key design decisions

- **Single file**: intentionally kept as one file for portability — coaches can drop it on a USB stick, email it, or host it anywhere
- **No frameworks**: vanilla JS only, to keep it simple and dependency-free
- **Warm earthy palette**: deliberately not "corporate agile blue" — this is a coaching tool, not a project management dashboard
- **Session-first**: every feature is designed to be usable during a live coaching session without being distracting
- **Accessible**: keyboard navigation, ARIA attributes, sufficient contrast, print-friendly
- **Private**: all data stays in the browser. No server, no tracking, no analytics

## Content sources

The content draws from:
- Six types of Socratic questions (from `Socratic-questions-suggestions.pdf`, not tracked in git)
- Cognitive restructuring worksheet (from `socrates-questioning-example-sheet1.pdf`, not tracked in git)
- Agile coaching research on powerful questions, circular/systemic questioning, and team dynamics

PDFs are in `.gitignore` and kept locally as reference material.

## When editing

- Keep everything in the single `index.html` file
- Maintain the self-contained nature — no external CDNs, fonts, or scripts
- Test by opening the file directly in a browser
- To add questions: add entries to the `questionBank` array in JS (type, question text, context, ceremony tags)
- To add situations: add entries to the `situations` array (label + array of questions with type and why)
- To add scenarios: add entries to the `scenarioData` array (title, description, whyHard, approach phases, tips, avoid)
- To add circular question roles: extend the `CQ` object with new role keys
- Journal entries are in localStorage — clearing browser data will erase them
