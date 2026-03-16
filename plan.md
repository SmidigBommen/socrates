# Socratic Coach — Feature Plan

## Vision

A **live coaching companion** — something you pull up on your tablet or laptop during sessions, that helps you ask better questions in real time and grow as a coach over time.

Everything stays in a single `index.html` file. Fully offline. All data in browser localStorage.

---

## Implemented Features

### Situation Suggester (floating button)
Quick-access panel with 10 pre-built coaching situations. Tap a situation, get 3-4 tailored questions with type labels and "why this works" guidance. Designed for mid-session use.

Situations: loudest voice dominating, avoiding a decision, someone defensive, going in circles, nobody speaking, blaming, over-committing, vague agreement, conflict between two people, low energy.

### Question Deck
Random question draw from a shared bank of 60+ questions. Filter by type (1-6), shuffle, flip through cards. Shows question, type, context, and applicable ceremonies.

### Session Journal
Log coaching sessions with date, context (ceremony type), situation, questions used, outcome, and reflection. Tag entries by question type. View past entries and stats dashboard with type-usage bar chart. All in localStorage.

### Coaching Scenarios
6 expandable scenario cards for common agile situations: Defensive Developer, Sprint Scope Argument, Unrealistic Deadline, Quiet Team Member, Architecture Conflict, Stakeholder vs. Team. Each includes:
- Why this is hard (the underlying dynamic)
- Phased question approach (which types to use in what order)
- Coaching tips
- Traps to avoid

### Core features (from v1)
- 6 Socratic Question Types — expandable cards with agile examples
- Ceremony Quick-Filter — filter questions by agile ceremony
- Circular Question Generator — role-to-role perspective questions
- Cognitive Restructuring Worksheet — interactive fillable form
- Practical Flow Guide — visual conversation flow

---

## Design Principles

- **Session-first:** every feature usable during a live coaching session without distraction
- **One file:** everything stays in `index.html`
- **Offline-capable:** no internet required
- **Private:** all data stays in the browser, no server, no tracking
- **Calm UI:** warm earthy palette, minimal animations, no visual noise

---

## Future Ideas

- Export/import journal entries as JSON for backup
- Journal filtering by date range and ceremony type
- Additional scenarios based on real coaching experiences
- Dark mode for less distraction during sessions
- Timer/timeboxing tools for ceremonies
