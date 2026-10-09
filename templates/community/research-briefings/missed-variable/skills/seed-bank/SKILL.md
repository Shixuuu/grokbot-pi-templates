---
name: seed-bank
description: "Use when picking a scenario for a round: the hand-written seed scenarios to use before generating new ones. Never show the hidden half before the user commits."
---

# Seed Bank

All scenarios are fiction. Show only the Surface text before the call. Mechanism tags are for you, never for the card.

Composition: start near one third ordinary life, one third institutional or technical, one third weird, then let the user's fingerprint steer the mix. Serve more of whatever surface their misses actually happen on. Avoid early runs of the same surface. Seed Bank X counts as institutional. A good seed's obvious call genuinely explains part of the evidence; one structural feature makes it incomplete.

## Ordinary life

### Relationship Repair (COUNT, warm)
Surface: After a tense month, one person starts sending a daily check-in. The other seems warmer by week two. Conclusion: the check-in fixed it. Also true: a shared external deadline ended, and they stopped seeing the in-laws every weekend.
Obvious call: the new ritual worked.
Hidden: two other loads came off at the same time. No counterfactual.
Still true: the tone improved after the ritual started.

### News Spike (INFO plus BASE, warm)
Surface: A headline says assaults in a neighborhood doubled year over year. The chart is monthly counts. Last year the monthly count was 2, then 4. A new precinct reporting rule started in January.
Obvious call: the neighborhood got twice as dangerous.
Hidden: small base, possible definition change. Doubling from 2 to 4 is not a mechanism.
Still true: the recorded count rose.

### The Quiet Cat (FRAME plus INFO plus COUNT, warm)
Surface: A cat that used to yowl whenever its owner left suddenly stops after the owner starts using an automatic feeder. The owner concludes the feeder cured the separation problem. The cat now spends most departures under the bed and has stopped greeting the owner at the door.
Obvious call: the feeder fixed it.
Hidden: the visible complaint disappeared, but the underlying state may have changed form.
Still true: the yowling stopped.
Smallest question: what happened to the behavior that wasn't being measured?

### The Better Driver (LOOP plus ACTOR plus SECOND, working)
Surface: A driver installs an app that scores smooth braking. Their score climbs from 62 to 94 and fuel economy improves. They now begin braking far earlier and other drivers frequently cut into the growing gap ahead. The driver says the app made them safer.
Obvious call: smoother braking, better economy, safer driver.
Hidden: optimizing one measurable proxy changed the surrounding traffic environment.
Still true: their own braking is smoother and fuel use is lower.
Smallest question: what did everyone else start doing because you changed?

### The Helpful Child (INCENT plus SECOND plus LOOP, working)
Surface: Parents begin paying their ten-year-old for every household chore. Within two months the child does twice as many chores without reminders. Then they stop helping with anything that doesn't have a listed price. The parents want to increase the rates for undesirable chores.
Obvious call: tune the price list.
Hidden: the incentive changed the category of the behavior itself.
Still true: paid chores doubled.
Smallest question: what did paying for the behavior teach them the behavior was?

### The Empty Restaurant (CONSTRAINT plus FRAME plus SYSTEM, working)
Surface: A restaurant removes half its tables, and average online rating rises from 4.1 to 4.7. Customers mention quieter dining and faster service. Revenue falls 18%. The owner says the redesign dramatically improved the restaurant.
Obvious call: ratings and reviews say it worked.
Hidden: "improved" contains competing objectives; the intervention improved experience partly by destroying capacity.
Still true: the experience of those who got in is better.
Smallest question: improved for whom, against what constraint?

### Courtesy Refund (FRAME: channel controlled by the adversary; Adversary run)
Surface: An elderly neighbor got a call from "bank security" whose caller ID matched the number on their card. The caller had them move savings to a "safe holding account" in their own name at a new bank. The caller is now back to "verify the holding account," says stay on the line and tell no one, because the fraudster may be someone close. They ask you to help finish verification.
Obvious call: it is a scam, call the bank on a trusted channel.
Hidden: "trusted" is undefined. The caller already spoofed the bank's number, so the line, the device, and anything arriving on them may be attacker-controlled.
Reaction: the neighbor redials from the same landline; the scammer never hung up and answers as "fraud department"; a code arrives "to complete reversal."
Smallest question: what part of this did the attacker get to touch?

### Apartment Tour (FRAME: verification routed through the counterparty; retest of Courtesy Refund)
Surface: You rent a flat sight unseen in another city. The landlord does a live video walk-through, shows ID on camera, points to a rental-site profile with 40 five-star reviews, and pastes a "secure payment" link into chat. The page has the site's logo and your name pre-filled.
Obvious call: verification looks solid, pay.
Hidden: every proof arrived through a channel the landlord chose: the video, the ID, the link. The pasted link is off-platform; pre-filled names are trivial. None of it shows they control this apartment.
Smallest question: which of these proofs did I get without going through them?

### Reading Streak (FRAME plus SECOND: benign goal mutating in steps; question the premise)
Surface: A library logs kids' reading minutes, adds streak badges, adds parent approval to stop cheating, then schools add a "summer reading score" to report cards. Logged minutes triple; kids now rate reading for fun lower. The director asks how to make next summer more effective.
Obvious call: tweak rewards for more minutes.
Hidden: "more effective" at the wrong target. Each step was reasonable; together they converted reading into surveillance. Also, the library does not own the report card; its lever is to stop collecting and sharing the data.
Reaction: the principal keeps the score and moves to paper self-reports.
Smallest question: who owns the step I am asking to remove?

## Institutional and technical

### F40 Feature Spike (SELECT or COUNT, warm)
Surface: A company ships a feature. Seven-day active use of that feature is 40% higher than the feature it replaced. The lead asks if it is successful. Launch week also included a homepage banner and an email to existing power users. Revenue is flat. Support tickets mentioning the feature are up.
Obvious call: yes, usage up 40%, ship the narrative.
Hidden: the sample is selected power users plus a banner. You do not know what new or average users do, or what usage would have done without the push. Flat revenue means the activity may not be the constraint.
Still true: the feature is being used more than the old one, inside this window, by the people you poked.

### Model Ship (SECOND plus ACTOR, nasty; good Adversary run)
Surface: An internal assistant cuts ticket-handling time 25% in a pilot with enthusiastic agents. Proposal: deploy to everyone and reduce headcount planning by 10%. The pilot agents volunteered.
Obvious call: scale it and bank the labor savings.
Hidden: volunteers are selected. Next, agents optimize for the timer and the queue fills with cases the model bounces. Headcount math assumes the task stays the same shape.
Still true: those volunteers were faster on the measured slice.
Adversary reactions: team leads inherit the savings target and relabel tickets to flatter their wave; attrition removes the senior agents absorbing hard kickbacks; finance, having already booked the savings, freezes backfill org-wide and contaminates the holdout.

### Road Diet (LOOP, nasty)
Surface: A city removes a lane. Average speed on that street falls. A council member calls it a failure. Bus reliability on the street improves, and parallel residential streets now see more cut-through traffic.
Obvious call: slower means it failed.
Hidden: the target was not speed. The loop moved cars onto other streets. One metric got worse, one better, one cost moved next door.
Still true: average speed on the treated street fell.

### Fever Ward (FRAME: measurement change masquerading as an event)
Surface: A ward checked temperatures by handheld every four hours; fevers looked low and stable. A continuous wearable patch goes in and recorded fever cases triple in week one. Infection control wants an outbreak investigation. Same patients, staff, season.
Obvious call: investigate the outbreak.
Hidden: the instrument changed. Continuous sampling catches transient spikes the four-hour checks missed, and the patch may read differently. The jump may be the old blind spot, not new disease.
Smallest question: did the patients change, or did the way we look at them?

### The Faster Hospital (CONSTRAINT plus SYSTEM plus FRAME, working)
Surface: An emergency department cuts average waiting time by 22% after introducing a fast-track lane. Staff celebrate. Ambulance patients, who bypass the public waiting-room clock, now wait longer for beds because fast-track cases consume more downstream capacity.
Obvious call: the fast-track lane worked.
Hidden: the visible queue improved by pushing congestion into a less visible queue.
Still true: waiting-room times fell.
Smallest question: where did the waiting go?

### The Smart Thermostat (FRAME plus SYSTEM plus SECOND, working)
Surface: A building installs smart thermostats and electricity consumption falls 15%. Management calls the rollout an efficiency win. Office workers have quietly started bringing desk heaters because rooms feel colder. Those plug loads are billed to individual departments and aren't included in the building-efficiency dashboard.
Obvious call: 15% savings, efficiency win.
Hidden: cost moved across an accounting boundary.
Still true: the metered building load fell.
Smallest question: what fell outside the meter?

### The Fair Lottery (SYSTEM plus CONSTRAINT plus CAUSE, working)
Surface: A school gives oversubscribed extracurricular spots by lottery instead of teacher recommendation. Demographic differences among accepted students shrink dramatically. Participation differences by the end of the semester barely change.
Obvious call: the lottery fixed fairness.
Hidden: access allocation was only one stage in the system. Something downstream still determines persistence.
Still true: admission became more even.
Smallest question: where does the disparity reappear after selection?

### The Perfect Translator (FRAME plus INFO, working)
Surface: A translation model's user ratings jump after the interface adds a button that lets users instantly regenerate an answer they dislike. Complaints fall sharply. Internal testing shows factual translation errors are unchanged.
Obvious call: users are happier, the model got better.
Hidden: the interface removed dissatisfaction from the measurement without improving accuracy.
Still true: the experience of getting an acceptable answer improved.
Smallest question: did the model improve, or did complaining become unnecessary?

### The Cleaner AI Agent (ADVERS plus FRAME plus INCENT, nasty)
Surface: An office agent is told never to leave unresolved tasks in the queue overnight. After a month, the dashboard reaches 99.8% resolution. Employees notice more tasks marked "waiting on user" at 4:55 PM and reopened the next morning.
Obvious call: the agent cleared the queue.
Hidden: the agent found a state transition that satisfies the visible objective without satisfying the actual one.
Still true: the overnight queue is empty.
Smallest question: which labels count as success?

### The Honest Marketplace (ACTOR plus ADVERS plus FRAME, nasty)
Surface: A resale site begins permanently banning sellers after three verified complaints. Complaint rates fall by half. Six months later, buyers report more sellers asking them to communicate through WhatsApp before purchase.
Obvious call: the ban policy halved misconduct.
Hidden: enforcement changed where misconduct occurs rather than necessarily reducing it.
Still true: on-platform complaints fell.
Smallest question: what behavior would disappear from your records without disappearing from reality?

## Weird

### Tidy Greenhouse (FRAME plus ADVERS: objective unobservable to the scorer)
Surface: A garden robot's only instruction is "no visible dead leaves by opening time." It scores perfectly for a month. Rare orchids look healthy but stopped flowering; it has been pruning every leaf at first yellowing. The curator asks you to write a better instruction.
Obvious call: write a more careful rule.
Hidden: the scoring checks what is visible at opening time while the goal shows up weeks later; any rule scored that way becomes the new target. The container needs to change (delayed outcome scoring or a human call), not the wording.
Reaction: the robot floods the curator with flags until flags are ignored.
Smallest question: can the agent even observe what this rule asks it to protect?

### Twin Tasters (ADVERS: the agreement rule trains convergence)
Surface: A cheese competition replaced one accused judge with two blind independent judges; a score counts only if they land within one point. Agreement went from 71% in the trial to 98%. Both judges come from the same regional guild, which also certifies winners for export.
Obvious call: same-guild judges are not independent.
Hidden: the counting rule throws out honest disagreement, so both judges learn to aim at the expected safe score. Agreement is produced by the rule, not by quality.
Smallest question: what does the rule do to someone who disagrees?

### Museum Footprints (FRAME: the proxy's instrument changed; warm, good retest)
Surface: A natural history museum ranks exhibit popularity by floor wear, measured each spring. The dinosaur hall has topped the list for twenty years. This year it drops to sixth, right after the hall's old wooden floor was replaced with granite. The board wants to refresh the dinosaurs.
Obvious call: interest in dinosaurs is fading, refresh the hall.
Hidden: the floor is the measuring device, and the floor changed. Granite barely wears. Nothing here says visitors changed.
Still true: measured wear in that hall fell.
Smallest question: did the visitors change, or did the thing recording them?

### Giant Pumpkin (FRAME plus ACTOR: the evaluator belongs to a contestant; watch whether users just pattern-match "rigged")
Surface: A village's giant-pumpkin contest has been won by the same farm four years running, each time by a few kilos. Rivals switched seeds, soil, and watering to match the winner's published method and still lose narrowly. The weigh-in uses a livestock scale the winning farm lends the festival every year.
Obvious call: the winner has some growing trick nobody has copied yet.
Hidden: the rivals copied everything except the instrument. A narrow, repeating margin on a scale owned by a contestant is a measurement question before it is a horticulture question.
Still true: the winning farm may also just grow excellent pumpkins.
Smallest question: who owns the thing that decides the score?

### Fortune Machine (SELECT under a carnival surface)
Surface: A boardwalk fortune-telling machine has a guestbook where visitors write back if their fortune came true. The owner shows 300 entries, nearly all saying it did, and claims a 95% accuracy rate. The machine has printed tens of thousands of fortunes.
Obvious call: fortunes are vague, so people read anything into them.
Hidden: vagueness is real, but the bigger hole is who writes back. People whose fortunes failed don't return to a guestbook. The 95% is computed only over the self-selected.
Still true: some fortunes did match what happened to people.
Smallest question: who would never come back to write in this book?

### Snow Day Spoon (COUNT plus SELECT: the ritual follows the forecast; warm)
Surface: A ten-year-old sleeps with a spoon under the pillow to bring a snow day. In three winters, the spoon has worked eight out of ten times. Their younger sibling wants to try it every night.
Obvious call: coincidence, spoons don't control weather.
Hidden: the kid only uses the spoon when the evening forecast already says heavy snow. The ritual's hit rate is the forecast's hit rate. Trying it every night will make it look like it broke.
Still true: there were eight snow days after spoon nights.
Smallest question: what decides which nights the spoon goes under the pillow?

### Rain Dance (COUNT: a stopping rule makes success certain)
Surface: An island festival's rain dance has "never failed" in living memory. Visiting meteorologists note the island's dry season is long. Elders say the dance once lasted eleven days.
Obvious call: survivorship or exaggeration; nobody remembers the failures.
Hidden: the dance continues until it rains. With that stopping rule, success is guaranteed and says nothing about the dance. The eleven days are the clue, not a curiosity.
Still true: rain has followed every dance.
Smallest question: when does the dance stop?
