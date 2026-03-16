# Socratic Coach — Feature Plan

## Vision

Transform the static reference page into a **live coaching companion** — something you pull up on your tablet or laptop during sessions, that helps you ask better questions in real time, practice between sessions, and grow as a coach over time.

Everything stays in a single `index.html` file. Claude API is used for AI-powered features (roleplay, smart suggestions) with an API key stored in browser localStorage.

---

## Feature 1: Situation Suggester

**What:** A quick-access panel where the coach describes what's happening right now and gets 3-4 tailored Socratic questions with guidance on which to try first.

**Why:** During a live session, browsing categories is too slow. The coach needs to go from observation to question in seconds.

**How it works:**
- A prominent "What's happening?" input at the top of the page (or a floating button that opens a panel)
- Pre-built situation tags for one-tap access:
  - "Loudest voice dominating"
  - "Team avoiding a decision"
  - "Someone is defensive"
  - "Conversation going in circles"
  - "Nobody is speaking up"
  - "Blaming / finger-pointing"
  - "Over-committing"
  - "Vague agreement without depth"
  - "Conflict between two people"
  - "Energy is low / disengaged"
- Each situation maps to 3-4 curated questions from across the 6 types, ordered by what to try first
- Optional: If Claude API key is set, allow free-text situation descriptions for AI-generated suggestions

**UI:** Floating action button (bottom-right) that opens a slide-up panel. Minimal clicks to get to a question.

**Data structure:**
```js
situations = {
  "loudest-voice": {
    label: "Loudest voice dominating",
    questions: [
      { text: "...", type: 4, why: "Shifts attention to quieter voices" },
      ...
    ]
  },
  ...
}
```

---

## Feature 2: Question Deck / Card Draw

**What:** A swipeable card interface for browsing and drawing random Socratic questions. Like a coaching flashcard deck.

**Why:** When you're stuck in the moment, a random prompt can break you out of your default patterns. Also great for preparation before a session.

**How it works:**
- A dedicated "Deck" section or mode
- Filter buttons: by type (1-6), by ceremony, or "all"
- Tap/click to draw a card — shows the question, its type, and a short context note
- Swipe or tap for next card
- "Shuffle" button to randomize the deck
- Cards pull from the full question bank (same data as ceremonies section)

**UI:** Large card in the center of the screen, one question at a time. Minimal distraction. Type indicated by color accent.

---

## Feature 3: Session Journal

**What:** A built-in journal where the coach logs notes during or after sessions, tagged by situation, question type used, and outcome.

**Why:** Deliberate practice requires reflection. Over time the journal reveals patterns — which question types you lean on, which you underuse, what works for specific team dynamics.

**How it works:**
- "New Entry" button opens a form:
  - Date (auto-filled)
  - Context (free text or tag: ceremony, 1-on-1, ad-hoc)
  - Situation (free text or pick from situation suggester tags)
  - Question(s) used (pick from deck or type freely)
  - What happened (free text)
  - Reflection / what I'd do differently (free text)
- Entries stored in browser localStorage
- Journal view: chronological list with filters by date range, ceremony, question type
- Simple stats dashboard:
  - Question types used (bar chart)
  - Most common situations
  - Entries over time

**Data persistence:** localStorage (JSON). Export/import as JSON for backup. Print-friendly view.

**Privacy:** All data stays in the browser. No server, no tracking.

---

## Feature 4: Roleplay / Practice Mode

**What:** An AI-powered practice environment where the coach interacts with a simulated coachee. The coach chooses a scenario, the AI plays the coachee, and the coach practices selecting and deploying Socratic questions.

**Why:** The gap between knowing the questions and using them well in the moment is a practice gap. This bridges it.

**How it works:**
- **Setup:** Enter Claude API key (stored in localStorage, never sent anywhere except Anthropic's API)
- **Scenario picker:** Pre-built scenarios relevant to agile coaching:
  - "Developer resists code review feedback"
  - "Team argues about sprint scope"
  - "Product Owner pushes unrealistic deadline"
  - "Quiet team member disengages in retro"
  - "Two team members have a conflict about architecture"
  - "Stakeholder demands a feature the team thinks is wrong"
  - Custom scenario (free text)
- **Chat interface:** The AI plays the coachee. The coach types their questions/responses.
- **Coaching hints panel (sidebar):**
  - Shows which of the 6 question types might be useful right now
  - Highlights if the coach has been using only one type
  - Suggests trying a different approach
- **Debrief:** After the conversation, a summary:
  - Which question types the coach used
  - Moments where a different type might have been more effective
  - Overall coaching stance assessment

**Claude API integration:**
- System prompt crafts a realistic coachee persona for the chosen scenario
- Messages sent via `POST https://api.anthropic.com/v1/messages`
- Model: claude-sonnet-4-6 (fast, cost-effective for practice)
- The coaching hints panel uses a separate, lighter prompt to classify the coach's messages

**Fallback (no API key):** Show pre-scripted branching scenarios (limited but still useful). Each scenario has 3-4 decision points where the coach picks which question type to use, and sees how the coachee responds differently.

---

## Implementation Order

### Phase 1 — Situation Suggester + Question Deck
These are the highest-impact, lowest-complexity features. They make the existing tool immediately more useful in live sessions.

1. Build the situation data structure with curated question mappings
2. Add the floating action button + slide-up panel UI
3. Build the card deck interface with filters and shuffle
4. Add both sections to the navigation

### Phase 2 — Session Journal
This adds the long-term growth dimension.

1. Build the journal entry form
2. Implement localStorage persistence
3. Build the journal list view with filters
4. Add simple stats/charts (pure CSS or minimal canvas)
5. Add JSON export/import

### Phase 3 — Roleplay / Practice Mode
The most ambitious feature. Requires Claude API integration.

1. Build the API key setup flow (localStorage, validation)
2. Create the scenario picker with pre-built scenarios
3. Build the chat interface
4. Craft system prompts for each scenario persona
5. Build the coaching hints sidebar (question type classifier)
6. Build the debrief/summary view
7. Add offline fallback with branching scenarios

---

## Design Principles

- **Session-first:** Every feature should be usable during a live coaching session without being distracting
- **One file:** Everything stays in `index.html` — CSS, JS, data, all embedded
- **Offline-capable:** Core features work without internet. Only roleplay needs the API
- **Private:** All data stays in the browser. API key never leaves the device except to Anthropic
- **Calm UI:** Warm palette, minimal animations, no visual noise. This is a coaching tool, not a dashboard

---

## Technical Notes

- **State management:** Simple vanilla JS with localStorage. No framework needed.
- **Claude API calls:** Direct `fetch()` to `https://api.anthropic.com/v1/messages` with the user's API key
- **Charts:** Pure CSS bar charts (no chart library) or tiny canvas rendering for the journal stats
- **Card animations:** CSS transforms for the deck swipe feel
- **Responsive:** Works on tablet (primary use case during sessions) and desktop
