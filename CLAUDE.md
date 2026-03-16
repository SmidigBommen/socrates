# CLAUDE.md

## Project overview

This is a single-page interactive web tool for agile coaches who use Socratic questioning with product teams. The entire app lives in `index.html` — one self-contained HTML file with embedded CSS and vanilla JS. No frameworks, no build tools, no external dependencies.

## Architecture

- `index.html` — the entire application (HTML structure, CSS styles, JS interactivity)
- No package.json, no node_modules, no build step
- Designed to work offline and be opened directly in a browser

## Key design decisions

- **Single file**: intentionally kept as one file for portability — coaches can drop it on a USB stick, email it, or host it anywhere
- **No frameworks**: vanilla JS only, to keep it simple and dependency-free
- **Warm earthy palette**: deliberately not "corporate agile blue" — this is a coaching tool, not a project management dashboard
- **Accessible**: keyboard navigation, ARIA attributes, sufficient contrast, print-friendly

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
- The circular question generator has a data structure in JS with role-to-role question mappings — extend it there when adding new roles or questions
