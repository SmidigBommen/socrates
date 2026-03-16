/* Shared data for Socratic Coach */
const typeNames = { 1:'Clarification', 2:'Assumptions', 3:'Evidence', 4:'Perspectives', 5:'Implications', 6:'Meta' };
const typeCSSVars = { 1:'--cat1', 2:'--cat2', 3:'--cat3', 4:'--cat4', 5:'--cat5', 6:'--cat6' };

const questionBank = [
  // Type 1: Clarification
  {t:1, q:"When you say 'done,' what does that look like specifically?", ctx:"Vague acceptance criteria", cer:"planning refinement"},
  {t:1, q:"What do we already know about this? What don't we know yet?", ctx:"Opening a refinement discussion", cer:"refinement"},
  {t:1, q:"Are you saying we should stop doing X, or change how we do X?", ctx:"Ambiguous proposals", cer:"retro planning"},
  {t:1, q:"Can you give me an example of what you mean?", ctx:"Abstract statements", cer:"planning refinement one-on-one"},
  {t:1, q:"How does this relate to what we discussed last sprint?", ctx:"Connecting threads", cer:"planning retro"},
  {t:1, q:"Can you rephrase that so the whole team has the same picture?", ctx:"Misalignment in language", cer:"planning refinement daily"},
  {t:1, q:"What exactly does 'done' mean for this story? Can we be more specific?", ctx:"Story refinement", cer:"planning refinement"},
  {t:1, q:"When you say 'communication was bad,' what specifically happened?", ctx:"Vague retro feedback", cer:"retro"},
  {t:1, q:"What does 'blocked' mean here \u2014 what exactly do you need to move forward?", ctx:"Unspecified blockers", cer:"daily"},
  {t:1, q:"What's on your mind?", ctx:"The kickstart question \u2014 open and focusing", cer:"one-on-one"},
  {t:1, q:"What exactly do you mean by that?", ctx:"General clarification", cer:"planning refinement retro daily one-on-one"},
  {t:1, q:"How would you explain this to someone outside the team?", ctx:"Testing shared understanding", cer:"refinement review"},
  // Type 2: Assumptions
  {t:2, q:"What are we assuming about how users will react to this?", ctx:"Before committing to scope", cer:"planning refinement"},
  {t:2, q:"We seem to be assuming the API will be stable \u2014 how can we verify that?", ctx:"Technical assumptions", cer:"planning refinement"},
  {t:2, q:"What if the opposite were true?", ctx:"Breaking fixed thinking", cer:"planning retro one-on-one"},
  {t:2, q:"What would happen if we didn't build this feature at all?", ctx:"Challenge default prioritization", cer:"planning refinement"},
  {t:2, q:"How did we choose those assumptions?", ctx:"Unexamined foundations", cer:"planning refinement review"},
  {t:2, q:"And what else?", ctx:"The AWE question \u2014 first answer is rarely the best", cer:"planning refinement retro one-on-one"},
  {t:2, q:"What assumptions are we making about user behavior in this story?", ctx:"Pre-sprint commitment", cer:"planning"},
  {t:2, q:"Which of our original assumptions about this feature turned out to be wrong?", ctx:"After demoing completed work", cer:"review"},
  {t:2, q:"We seem to be assuming this will fix itself \u2014 what if it doesn't?", ctx:"Avoiding a recurring issue", cer:"retro"},
  {t:2, q:"You seem to be assuming that... \u2014 is that true?", ctx:"Gently naming a hidden belief", cer:"one-on-one"},
  {t:2, q:"Is someone else's opinion overly influencing your own?", ctx:"Deference to authority", cer:"one-on-one"},
  {t:2, q:"What else could we assume instead?", ctx:"Opening alternative perspectives", cer:"planning refinement retro"},
  // Type 3: Evidence
  {t:3, q:"What data do we have that supports this priority?", ctx:"Priority decisions", cer:"planning refinement review"},
  {t:3, q:"How might we experiment to validate this before committing a full sprint?", ctx:"Unvalidated hypotheses", cer:"refinement planning"},
  {t:3, q:"Is this based on what users told us, or what we think they need?", ctx:"Opinion vs. research", cer:"planning refinement review"},
  {t:3, q:"Would that reasoning stand up if we presented it to stakeholders?", ctx:"Testing robustness", cer:"planning review"},
  {t:3, q:"How do you know this? Show me.", ctx:"Direct evidence request", cer:"planning refinement retro"},
  {t:3, q:"What evidence is there to support what you are saying?", ctx:"General evidence probe", cer:"planning refinement retro one-on-one"},
  {t:3, q:"What data do we have that supports sizing this as an 8?", ctx:"Estimation as guesswork", cer:"planning"},
  {t:3, q:"What did we learn from users this sprint? What surprised us?", ctx:"Opening review with learning", cer:"review"},
  {t:3, q:"What will happen if we don't tackle this technical debt now?", ctx:"Tech debt evaluation", cer:"retro"},
  {t:3, q:"Am I basing this on feelings rather than facts?", ctx:"Emotional reasoning check", cer:"one-on-one"},
  {t:3, q:"What's the strongest argument against our current approach?", ctx:"Steel-manning the alternative", cer:"planning refinement review"},
  // Type 4: Perspectives
  {t:4, q:"How would our end user describe this problem?", ctx:"User-centricity", cer:"refinement planning review"},
  {t:4, q:"What would the ops team say about this architectural choice?", ctx:"Cross-team impact", cer:"planning refinement"},
  {t:4, q:"Who benefits from keeping things the way they are?", ctx:"Resistance to change", cer:"retro one-on-one"},
  {t:4, q:"If we asked the stakeholder what success looks like, would they say the same thing?", ctx:"Alignment check", cer:"review planning"},
  {t:4, q:"What alternative ways of looking at this are there?", ctx:"Breaking tunnel vision", cer:"planning refinement retro one-on-one"},
  {t:4, q:"How could you look at this another way?", ctx:"Widening perspective", cer:"retro one-on-one"},
  {t:4, q:"How would our end user describe this problem in their own words?", ctx:"User voice in technical discussion", cer:"refinement"},
  {t:4, q:"How do you think the rest of the team experienced that situation?", ctx:"Different interpretations", cer:"retro"},
  {t:4, q:"Who else on the team might be affected by this? Who could help?", ctx:"Encouraging collaboration", cer:"daily"},
  {t:4, q:"How might your colleague see this same situation differently?", ctx:"Building empathy", cer:"one-on-one"},
  {t:4, q:"What would a new team member think if they saw this for the first time?", ctx:"Fresh eyes perspective", cer:"retro refinement"},
  // Type 5: Implications
  {t:5, q:"If we don't address this tech debt now, what will the next three sprints look like?", ctx:"Technical debt consequences", cer:"retro planning"},
  {t:5, q:"What are the consequences of that assumption for our users?", ctx:"User impact of decisions", cer:"planning refinement review"},
  {t:5, q:"If this works, what does it make possible? If it doesn't, what have we learned?", ctx:"Framing experiments", cer:"planning review"},
  {t:5, q:"How does this decision affect the other teams who depend on us?", ctx:"Systemic thinking", cer:"planning review retro"},
  {t:5, q:"Why is this important? What is the best outcome, and why?", ctx:"Purpose and priority", cer:"planning refinement"},
  {t:5, q:"If we take on this much work, what are the consequences for quality?", ctx:"Over-commitment", cer:"planning"},
  {t:5, q:"Based on what we've learned, what should we do differently next sprint?", ctx:"Turning insights into action", cer:"review"},
  {t:5, q:"If we implement this improvement, what ripple effects might it have?", ctx:"Consequences of changes", cer:"retro"},
  {t:5, q:"If this blocker stays unresolved today, what's the impact on the sprint goal?", ctx:"Making inaction cost visible", cer:"daily"},
  {t:5, q:"If you keep believing this, what happens? And if you let it go?", ctx:"Connecting thought to future action", cer:"one-on-one"},
  {t:5, q:"What's the worst that could happen? And how likely is that really?", ctx:"Risk calibration", cer:"planning one-on-one"},
  // Type 6: Meta
  {t:6, q:"What's the real challenge here for you as a team?", ctx:"The focus question", cer:"retro one-on-one"},
  {t:6, q:"I notice we've been discussing this for 20 minutes \u2014 what's making this decision hard?", ctx:"Discussion going in circles", cer:"planning retro refinement"},
  {t:6, q:"Why do you think I'm asking you this instead of giving you the answer?", ctx:"Building coaching awareness", cer:"one-on-one"},
  {t:6, q:"Is this the right question to be asking right now, or is there a deeper one?", ctx:"Redirecting focus", cer:"retro planning one-on-one"},
  {t:6, q:"What was the point of asking that question?", ctx:"Reflecting on the inquiry itself", cer:"one-on-one"},
  {t:6, q:"I notice we keep discussing this same topic \u2014 what's making it hard to resolve?", ctx:"Retro stuck in a loop", cer:"retro"},
  {t:6, q:"What's the real challenge here for you?", ctx:"Cuts through surface-level topics", cer:"one-on-one"},
  {t:6, q:"What made this conversation useful?", ctx:"Closing reflection", cer:"retro review one-on-one"},
  {t:6, q:"Are we solving the right problem?", ctx:"Step back from the weeds", cer:"planning refinement retro"},
];

const situations = [
  { id:'loudest-voice', label:'Loudest voice dominating', questions:[
    {q:"What do the rest of you think about this?", t:4, why:"Redirects to quieter voices"},
    {q:"How might someone with a different perspective see this?", t:4, why:"Opens the floor without singling anyone out"},
    {q:"I'd like to hear from everyone \u2014 what's one word that captures your view?", t:1, why:"Structured round-robin breaks dominance"},
    {q:"What's making it hard for us to hear all viewpoints right now?", t:6, why:"Meta-awareness of the dynamic"},
  ]},
  { id:'avoiding-decision', label:'Team avoiding a decision', questions:[
    {q:"What's making this decision hard?", t:6, why:"Names the avoidance without blame"},
    {q:"What would happen if we made no decision today?", t:5, why:"Makes cost of inaction visible"},
    {q:"What information are we missing that would make this easier?", t:3, why:"Identifies what's blocking commitment"},
    {q:"What's the smallest decision we could make right now to move forward?", t:1, why:"Breaks paralysis into steps"},
  ]},
  { id:'defensive', label:'Someone is defensive', questions:[
    {q:"Help me understand your perspective \u2014 what matters most to you here?", t:1, why:"Validates their position before probing"},
    {q:"What would need to be true for this feedback to be useful?", t:2, why:"Reframes from threat to hypothesis"},
    {q:"How would you approach this if you were giving advice to a friend?", t:4, why:"Creates distance from emotional reaction"},
    {q:"What's the real concern underneath this?", t:6, why:"Goes deeper than the surface defensiveness"},
  ]},
  { id:'circles', label:'Conversation going in circles', questions:[
    {q:"I notice we've come back to this point several times \u2014 what's the underlying issue?", t:6, why:"Breaks the loop with meta-observation"},
    {q:"What would we need to agree on first before we can resolve this?", t:1, why:"Identifies the hidden prerequisite"},
    {q:"Are we solving the right problem?", t:6, why:"Challenges the premise entirely"},
    {q:"What if we parked this and asked: what do we actually know for certain?", t:3, why:"Resets to evidence"},
  ]},
  { id:'silent', label:'Nobody is speaking up', questions:[
    {q:"What's on your mind that you haven't said yet?", t:1, why:"Direct invitation with psychological safety"},
    {q:"On a scale of 1-5, how confident are we in this direction? (show of hands)", t:3, why:"Low-stakes way to break silence"},
    {q:"If there were no consequences, what would you change about this?", t:2, why:"Removes fear of judgment"},
    {q:"What question should we be asking right now that we're not?", t:6, why:"Gives them a safe meta-entry point"},
  ]},
  { id:'blaming', label:'Blaming / finger-pointing', questions:[
    {q:"What systemic factors contributed to this?", t:4, why:"Shifts from person to system"},
    {q:"How did we as a team end up here?", t:3, why:"Distributes ownership"},
    {q:"What would we need to change so this doesn't happen again, regardless of who's involved?", t:5, why:"Forward-looking, not backward-blaming"},
    {q:"What assumptions did we all share that led to this outcome?", t:2, why:"Finds collective responsibility"},
  ]},
  { id:'overcommit', label:'Over-committing', questions:[
    {q:"If we take on this much, what are the consequences for quality?", t:5, why:"Makes the trade-off explicit"},
    {q:"What happened last time we committed to this much?", t:3, why:"Evidence from recent history"},
    {q:"What would we cut if we had to reduce this by 30%?", t:2, why:"Forces prioritization"},
    {q:"What are we assuming about our capacity that we haven't verified?", t:2, why:"Challenges optimism bias"},
  ]},
  { id:'vague-agreement', label:'Vague agreement without depth', questions:[
    {q:"I want to make sure we're aligned \u2014 can each person say what they think we just decided?", t:1, why:"Surfaces hidden disagreement"},
    {q:"What specifically would need to happen for this to work?", t:1, why:"Forces concrete details"},
    {q:"What could go wrong with this approach?", t:5, why:"Stress-tests the agreement"},
    {q:"Who disagrees even a little? What's your hesitation?", t:4, why:"Gives permission to dissent"},
  ]},
  { id:'conflict', label:'Conflict between two people', questions:[
    {q:"What do you think [other person] is most concerned about here?", t:4, why:"Circular question \u2014 builds empathy"},
    {q:"What do you both agree on?", t:1, why:"Finds common ground first"},
    {q:"What would a good outcome look like for both of you?", t:5, why:"Shifts from positions to interests"},
    {q:"What's the real challenge underneath this disagreement?", t:6, why:"Goes below surface conflict"},
  ]},
  { id:'low-energy', label:'Energy is low / disengaged', questions:[
    {q:"What would make this conversation more useful for you?", t:6, why:"Gives them agency over the format"},
    {q:"What's one thing that energized you this sprint?", t:1, why:"Starts from positive energy"},
    {q:"What would need to change for us to leave this meeting feeling it was worth it?", t:5, why:"Sets a practical bar"},
    {q:"What's the elephant in the room that we're not talking about?", t:6, why:"Often low energy masks an unaddressed issue"},
  ]},
];

/* ── Shared utilities ── */
function initAccordions(selector) {
  document.querySelectorAll(selector).forEach(card => {
    const hdr = card.querySelector('.card-header, .scenario-header');
    if (!hdr) return;
    hdr.addEventListener('click', () => card.classList.toggle('open'));
    hdr.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hdr.click(); } });
    hdr.setAttribute('tabindex', '0');
    hdr.setAttribute('role', 'button');
    hdr.setAttribute('aria-expanded', 'false');
    const obs = new MutationObserver(muts => muts.forEach(m => {
      if (m.attributeName === 'class') hdr.setAttribute('aria-expanded', card.classList.contains('open'));
    }));
    obs.observe(card, { attributes: true });
  });
}

function initSituationSuggester() {
  const overlay = document.getElementById('sitOverlay');
  const tags = document.getElementById('sitTags');
  const results = document.getElementById('sitResults');
  if (!overlay || !tags) return;

  document.getElementById('fabBtn').addEventListener('click', () => overlay.classList.add('open'));
  document.getElementById('sitClose').addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

  situations.forEach(s => {
    const tag = document.createElement('button');
    tag.className = 'situation-tag';
    tag.textContent = s.label;
    tag.addEventListener('click', () => {
      document.querySelectorAll('.situation-tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      results.innerHTML = s.questions.map(sq =>
        '<div class="situation-q" style="border-left-color:var('+typeCSSVars[sq.t]+')">' +
        '<div class="sq-text">"' + sq.q + '"</div>' +
        '<div class="sq-meta">' + sq.t + ' \u00B7 ' + typeNames[sq.t] + '</div>' +
        '<div class="sq-why">' + sq.why + '</div></div>'
      ).join('');
    });
    tags.appendChild(tag);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
