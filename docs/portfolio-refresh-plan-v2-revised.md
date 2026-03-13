# Portfolio Refresh Plan — Shravan Tickoo Lens: Analysis & Revised Plan (v2)

**Superseded by:** [portfolio-refresh-plan-merged.md](portfolio-refresh-plan-merged.md) — use the merged plan as the single source of truth. This file is kept for the analysis and v2 rationale.

---

## Part 1: Analysis Through Shravan’s Lens

Shravan Tickoo (Founder, Rethink Systems; ex-BYJU’S, Flipkart, Blackbuck) emphasizes **first-principles thinking**, **product-first** and **user-first** design, **attitude and intent over tenure**, and **bias for action**. Below is an analysis of the original refresh plan through that lens, followed by a revised v2 plan.

---

### 1. First-principles view

**What the original plan does well**
- Focus on **outcome-first bullets** (metric then how) is first-principles: it answers “what changed?” before “what did you do?”
- **Single source of truth** (`content/*.ts`) and “when resume changes, update only content” reduces complexity and avoids drift.
- **Short, scannable content** respects the real constraint: visitors have seconds, not minutes.

**Gaps a first-principles lens would flag**
- The plan never states the **one job** the portfolio exists to do. Without that, it’s hard to decide what to add or cut. First principle: define the job-to-be-done in one sentence, then judge every section and feature against it.
- **Visitor count** is justified as “feels alive” and “social proof.” First principles would ask: *whose* need does it serve? If it’s mainly for the owner’s satisfaction, it’s not user-first. If it’s for the visitor (e.g. “others found this useful”), that should be explicit; otherwise it’s optional or skip.
- **“Resume alignment”** is used as a primary driver. First principles would say: the resume is an input, but the portfolio’s job is to get a *conversation* with the right fit. So the test is “does this help that?” not “does this match the resume?”

**Conclusion:** The revised plan should state the portfolio’s job explicitly and use it as the filter for every recommendation (including visitor count). Resume alignment is a means, not the end.

---

### 2. Product-first view

**What the original plan does well**
- **Section order** (Hero → Proof of Impact → Projects → Experience) is product-thinking: show proof before chronology.
- **Quality over quantity** (e.g. 3 hero projects, trim Proof of Impact to one-line cards) avoids feature creep.
- **Performance** (LCP, CLS, lazy-loading) is treated as a product requirement, not an afterthought.

**Gaps a product-first lens would flag**
- **Multiple user types** (recruiter, founder, CTO, aspiring PM) are mentioned but not **segmented by job-to-be-done**. Product-first would define: Recruiter = “Is this person a fit in 30 seconds?”; Founder = “Can they ship and think?”; Aspiring PM = “Can I learn from this?” Then the layout and copy would be explicitly designed to serve each, with one primary flow that serves the main “buyer” (e.g. recruiter/founder).
- **No explicit prioritization.** The plan has many recommendations but doesn’t label P0 vs P2. An operator would say: “If we could only do three things, what would they be?” and make that obvious so future edits don’t add clutter.
- **Visitor count** is a feature. Product-first would ask: does it move the needle on the portfolio’s job (e.g. more conversations)? If the answer is “maybe, for social proof,” it should be P2 and optional—ship without it first, add only if it clearly serves a user need.

**Conclusion:** The revised plan should (1) name the primary user and their job, (2) add a simple P0/P1/P2 so the “product” (portfolio) stays focused, and (3) treat visitor count as optional and user-need–driven.

---

### 3. User-first view

**What the original plan does well**
- **Honest career break** (“family responsibility”) is user-first: it reduces doubt and builds trust.
- **First-person voice** and **Now/Next** show a real person and current intent, which aligns with “intent and empathy.”
- **Clear CTAs** (Book a call, View resume) reduce friction for the next step.

**Gaps a user-first lens would flag**
- **Summary** is framed as “what you’ve done + career break + what you’re targeting.” User-first would ask: what does the *visitor* get in the first 10 seconds? A slight reframe could help: e.g. one line that states the value you bring (“I help teams ship X”) before “I’m targeting PM1/APM.” The current plan doesn’t require this but doesn’t forbid it—v2 can suggest it as optional.
- **Emotions and “human” feel** are mentioned, but the plan doesn’t tie them to a specific user need. User-first would say: the visitor should *feel* “this person is real, focused, and easy to talk to.” The revised plan can call out that “human” = reduced anxiety and increased trust for the visitor, not just “not AI slop.”
- **Visitor count placement** (footer, subtle) is good. But the *purpose* should be framed as “reduces anxiety for first-time visitors” (social proof) rather than “makes the site feel alive.” If it doesn’t serve the visitor, don’t add it.

**Conclusion:** The revised plan should frame “human” and “emotions” in terms of visitor benefit (trust, clarity, reduced friction) and make the optional “value to you” line in the summary explicit. Visitor count stays optional and is justified only when it serves the visitor.

---

### 4. Attitude, intent, and bias for action

Shravan stresses **attitude and intent over tenure**, and **bias for action** (ship, learn, iterate).

**What the original plan does well**
- **Independent Practice** and “3 products in 7 days,” “AI Product OS,” cost equivalence are strong **bias-for-action** signals. The plan already highlights them.
- **Now/Next** surfaces current intent (learning, building, job search).
- Short bullets and “outcome first” show an operator mindset: results over activity.

**What to strengthen in v2**
- Make **builder proof** the lead story in the first screen or immediately after. Right now Proof of Impact is after Hero; one of the first things a founder should see is “this person ships without a team.” The plan can explicitly say: lead with the strongest proof (e.g. “3 products in 7 days” or “AI Product OS”) in Hero or the first card.
- **Intent** should be unmistakable: “I’m targeting PM1/APM where I can own 0→1 and ship.” The revised plan can add one line: ensure the summary or status makes *intent* explicit (role type, kind of work), not just “open to roles.”
- **Avoid “tenure theatre.”** The plan already keeps experience tight and doesn’t over-index on years. v2 can explicitly say: don’t add content just to fill space; every line should signal capability or intent.

---

### 5. Summary of needed changes for v2

| Dimension        | Change in v2 |
|-----------------|--------------|
| **First principles** | State the portfolio’s **one job** (e.g. “Get a conversation with the right fit in under 2 minutes”). Use it to accept or reject every section and feature. |
| **Product-first**    | Define **primary user** (recruiter/founder) and **job-to-be-done**; add **P0/P1/P2** so the plan is prioritised and future edits don’t bloat the product. |
| **User-first**       | Frame “human” and “emotions” as **visitor benefit** (trust, clarity). Optional: one line in summary that states **value to the visitor** before “I’m targeting.” |
| **Visitor count**    | Reframe as **optional**, only if it **serves the visitor** (e.g. social proof). If in doubt, ship without it; add based on feedback. |
| **Intent & action**  | **Lead with builder proof** (3 in 7 days / AI Product OS) in Hero or first card; make **intent** explicit (PM1/APM, 0→1, ship). |
| **Ruthless prioritisation** | Label what’s P0 (must have), P1 (should have), P2 (nice to have). When in doubt, cut; add back only if a user need justifies it. |

---

## Part 2: Revised Plan (v2)

This is the refreshed plan with Shravan’s lens applied. It keeps the best of the original and adds the product/user framing and prioritisation above.

---

### North Star: The portfolio’s job

**One sentence:**  
*This portfolio’s job is to get a conversation (call or interview) with the right fit within about 2 minutes of landing.*

Every section and feature should pass the test: “Does this help that job?” If not, cut or make it optional.

---

### Users and jobs-to-be-done

| User            | Primary job when they land |
|-----------------|----------------------------|
| **Recruiter**   | Is this person a fit for our role in ~30 seconds? |
| **Founder/CTO** | Can this person ship and think from first principles? |
| **Aspiring PM** | Can I learn from this? Is this person credible? |

The layout should serve recruiter and founder first (same scan: impact → proof → CTA). Aspiring PM is served by depth (case studies, clarity) without changing the top-level structure.

---

### Prioritisation (P0 / P1 / P2)

- **P0 (must have):** Headline + one-screen summary (including intent) + strongest proof of impact (builder story) + one primary CTA (Book a call). Without these, the job doesn’t get done.
- **P1 (should have):** Proof of Impact cards (short), 3 hero projects with metrics, Experience (short bullets), Education + career break, Resume link. These close the loop for fit and credibility.
- **P2 (nice to have):** Now/Next block, visitor count (only if it serves the visitor), Blog (only if it clearly shows product thinking), extra polish (e.g. “Last synced” comments). Add only if they clearly support the job or a defined user need.

When in doubt, cut. Add back only when a user need justifies it.

---

### 1. Content strategy (resume-aligned, job-focused)

**Headline and positioning (first 6 seconds)**  
- Use a **single, specific headline** that matches your positioning: e.g. “Product Manager · EdTech, Consumer Tech & AI-native workflows.”  
- Optional subline: “Building products people love” only if it doesn’t dilute the headline.  
- **Intent:** Make it explicit in headline or status: e.g. “Targeting PM1/APM roles where I can own 0→1 and ship.”

**Summary (Hero / About)**  
- 2–3 sentences. Include: (1) what you’ve done (LMS, founder 0→1, AI PM practice), (2) career break in one line (family responsibility, 2022–2024), (3) what you’re targeting (PM1/APM, product thinking, builder mindset, EdTech, AI-native). First person where it reads naturally.  
- **Optional (user-first):** One line that states value to the visitor first, e.g. “I help teams ship validated products from 0→1 with AI-native workflows,” then “I’m targeting PM1/APM roles where that matters.”

**Lead with builder proof**  
- The strongest “bias for action” proof (e.g. “Shipped 3 products in 7 days with an AI Product OS; no engineering team”) should appear **in the Hero or the first Proof of Impact card**. Founders and recruiters should see “this person ships” in the first 10 seconds.

**Experience bullets**  
- One line per bullet; outcome first (metric), then how. Align numbers with resume (WhiteHat Jr, Delta, AcadView, Independent Practice).  
- Keep [content/experience.ts](content/experience.ts) as single source of truth. No tenure theatre; every line signals capability or intent.

**Projects**  
- **3 hero projects** (WhatsApp Smart Mute, GitHub-for-PMs, Blinkit) with resume-aligned one-liners and metrics.  
- Up to 2–3 more in compact form (e.g. AI Product OS, Swish); consider “More projects” or drop Digital Health Coach if you want to stay strict.  
- Each card: one short sentence + 1–2 metrics; “Read case study” for depth.

**Proof of Impact**  
- Keep 4–6 cards; **one-line baseline → result** per card. Trim long “action” text from the card UI. Confidence/source as small labels.

**Education and career break**  
- Add a short, honest career-break line: “2022–2024: Career break (family).”  
- Fellowship 2025, 9/10 (Swish). Consolidate GenAI certs into one line so the section doesn’t dominate.

**Blog**  
- Keep only if each post clearly shows product thinking and is something you’d point a founder to. Prefer 2–3 strong posts. Otherwise “More writing” link or remove. **P2.**

**What not to add**  
- No long “About me” essay. No generic “I’m passionate about product.” No section or feature that doesn’t pass the “does this help get a conversation?” test. Show evidence that survives a skeptical read (metrics, sources, live demos); avoid vague claims.

---

### 2. Human, non–AI-generated feel (visitor benefit)

- **Voice:** First person where it fits; one clear claim per sentence; avoid stacked buzzwords.  
- **“Human” = visitor benefit:** The visitor should feel “this person is real, focused, and easy to talk to.” That reduces anxiety and builds trust. Design and copy should support that, not just “not AI slop.”  
- **Now/Next:** Add a **compact “Now” block** (3–4 items) in or right after Hero. Signals current intent and focus. **P2.**  
- **Optional “why” line:** One sentence (e.g. “I focus on outcomes and learning in public”) only if true and specific.  
- **Design:** Calm typography and spacing; generous line height; minimal flash. Case studies stay on Notion; portfolio links and summarizes.

---

### 3. Visitor count (optional, user-need–driven)

- **Purpose:** Only add if it **serves the visitor** (e.g. “Others have viewed this portfolio” as light social proof). If the main reason is “feels alive” or owner satisfaction, treat it as **P2** and optional.  
- **Recommendation:** Ship without it first. If you add it: serverless increment + read, lazy when Footer is in view, footer-only, small type (e.g. “X visitors so far”). No critical path; no popups.  
- **If in doubt:** Don’t add. Add later based on feedback or clear user need.

---

### 4. UI/UX and content placement

- **Order:** Hero (with or immediately followed by lead proof) → Proof of Impact → Projects → Experience → Skills → Education → Blog (if kept) → Contact CTA → Footer.  
- **Above the fold:** Headline + name + one-line title + 2–3 sentence summary (with intent) + primary CTA (Book a call) + View/Download Resume. **Lead builder proof** in Hero or first card.  
- **CTAs:** One primary (“Book a 20-min call”), one secondary (“View / Download Resume”). Same in Hero and Contact CTA.  
- **Footer:** Visitor count only if you add it (P2). Keep “Built with React & ♥” and social links. Optional line about custom domain if you want to signal longevity.

---

### 5. Performance (unchanged from v1)

- Target: same or faster load; LCP &lt; 2.5s, CLS &lt; 0.1.  
- Avatar: WebP + dimensions, lazy only if below fold. Fonts: `font-display: swap`, preconnect. Visitor count (if any) out of critical path, lazy when Footer in view.

---

### 6. Resume ↔ site sync (unchanged from v1)

- Single source per section in `content/*.ts`. When resume changes, update only content files. Optional: “Last synced with resume: YYYY-MM-DD” in each content file.

---

### 7. Implementation order (v2)

1. **Define and implement P0:** Headline, summary (with intent), lead builder proof in Hero or first card, primary CTA.  
2. **Content pass (P1):** personalInfo, experience (short bullets, resume metrics), projects (hero 3 + short descriptions), impactMetrics (one-line cards), education (break, fellowship year, certs).  
3. **Human layer (P2):** Now/Next block; optional “value to you” and “why” line.  
4. **Visitor count (P2, optional):** Only if you decide it serves the visitor; serverless counter + Footer, lazy load.  
5. **Performance:** Avatar optimisation; font-display and preload.  
6. **Polish:** Meta/SEO, accessibility, optional Footer line about domain.

---

### 8. One-sentence litmus test (Shravan-style)

*In about 30 seconds, a visitor should know: this person **ships** (proof), **targets PM/APM** (intent), and is **open to a call** (action).*

Use this to accept or reject every content and feature decision.

---

## Document info

- **Version:** 2 (revised)  
- **Based on:** Original PM Portfolio Refresh Plan  
- **Lens:** First-principles, product-first, user-first (Shravan Tickoo / Rethink Systems)  
- **File:** `docs/portfolio-refresh-plan-v2-revised.md` (standalone; does not replace the original plan)
