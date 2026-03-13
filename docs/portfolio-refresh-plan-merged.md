# Portfolio Refresh Plan (Merged) — Conversion-First, Proof-Led

**Version:** Merged (v1 + v2, Shravan Tickoo lens)  
**Audience:** Recruiters, hiring managers, founders, CTOs, C-suite, aspiring PMs.  
**Principles:** Portfolio’s job = get a conversation. Show proof and intent; full story (including career break) lives on the resume when they’re interested.

---

## North Star: The portfolio’s job

**One sentence:**  
*This portfolio’s job is to get a conversation (call or interview) with the right fit within about 2 minutes of landing.*

Every section and feature should pass the test: **“Does this help that job?”** If not, cut or make it optional. Resume alignment is a means, not the end.

---

## 30-second litmus test (Shravan-style)

*In about 30 seconds, a visitor should know: this person **ships** (proof), **targets PM/APM** (intent), and is **open to a call** (action).*

Use this to accept or reject every content and feature decision.

---

## Users and jobs-to-be-done

| User            | Primary job when they land |
|-----------------|----------------------------|
| **Recruiter**   | Is this person a fit for our role in ~30 seconds? |
| **Founder/CTO** | Can this person ship and think from first principles? |
| **Aspiring PM** | Can I learn from this? Is this person credible? |

Layout serves recruiter and founder first (same scan: impact → proof → CTA). **If someone shows interest, they open the resume.** Portfolio doesn’t need to tell the full life story—it needs to convert.

---

## Career break: not on the portfolio

**Recommendation (and how Shravan would likely advise his learners):**  
**Do not mention the career break on the portfolio.**  

- **Portfolio’s intention is conversion.** A founder landing on your page should answer one question: *Can this person ship and think from first principles?* Proof (projects, impact), intent (target role, 0→1), and a clear CTA (Book a call, View resume) are what get you the conversation.
- **Career break belongs on the resume.** When someone is interested, they click “View / Download Resume.” That’s where the full timeline—including “Career break (family responsibility, 2022–2024)”—lives. No need to pre-empt or explain it on the site; it can dilute the first impression and distract from proof.
- **Build proof, not excuses.** The portfolio should lead with what you’ve shipped and what you’re building now. Let the resume handle context when they’re already engaged. When you get a chance, confirm with Shravan; the principle is: portfolio = proof + intent + CTA; resume = full story.

**Implementation:** Summary (Hero) = what you’ve done + what you’re targeting. No career-break line in Hero or Education. Education section = degrees, fellowship, certs only. Keep career break in your resume and in `content/education.ts` only if you ever need it for a different channel; do **not** display it on the portfolio UI.

---

## Prioritisation (P0 / P1 / P2)

- **P0 (must have):** Headline + one-screen summary (with intent, no career break) + strongest proof of impact (builder story) + one primary CTA (Book a call) + View/Download Resume. Without these, the job doesn’t get done.
- **P1 (should have):** Proof of Impact cards (short), 3 hero projects with metrics, Experience (short bullets), Education (fellowship, certs; no career break), Resume link.
- **P2 (nice to have):** Now/Next block, visitor count (only if it serves the visitor), Blog (only if it clearly shows product thinking), polish. When in doubt, cut.

---

## 1. Content strategy

**Headline and positioning (first 6 seconds)**  
- **Current:** Tagline “Building Products People Love” + title “AI Product Manager & Builder”.  
- **Change:** Single, specific headline matching resume positioning, e.g. **“Product Manager · EdTech, Consumer Tech & AI-native workflows.”** Optional subline: “Building products people love” only if it doesn’t dilute.  
- **Intent:** Explicit in headline or status, e.g. “Targeting PM1/APM roles where I can own 0→1 and ship.”

**Summary (Hero / About)**  
- 2–3 sentences. Include: (1) what you’ve done (LMS, founder 0→1, AI PM practice), (2) what you’re targeting (PM1/APM, product thinking, builder mindset, EdTech, AI-native). First person where natural. **Do not include career break on the portfolio.**  
- **Optional (user-first):** One line that states value to the visitor first, e.g. “I help teams ship validated products from 0→1 with AI-native workflows,” then “I’m targeting PM1/APM roles where that matters.”  
- **Source:** [content/personalInfo.ts](content/personalInfo.ts).

**Lead with builder proof**  
- Strongest “bias for action” proof (e.g. “Shipped 3 products in 7 days with an AI Product OS; no engineering team”) in **Hero or the first Proof of Impact card**. Founder should see “this person ships” in the first 10 seconds.

**Experience bullets — shorten and focus**  
- One line per bullet; outcome first (metric), then how. Remove filler.  
- **Independent Practice:** Align with resume: 3 products in 7 days, AI Product OS, equivalent 5 people / 3 months / ₹30–50L vs one PM / ₹5k API spend. Keep 2–3 bullets; “Built this portfolio with Gemini” can stay as one short line if you want builder signal.  
- **WhiteHat Jr:** Rollout −50%, onboarding 60%→78%, tickets −50%, CSAT +12.5%; mention ~150k students if you mention scale.  
- **Delta Learning:** 600+ students, ₹1.2 Cr ARR, ~30% net margin, completion ~80% vs ~60%.  
- **AcadView:** CSAT ~25%, placement-ready ~80% (n≈250; Jan–Jun 2019).  
- **Source of truth:** [content/experience.ts](content/experience.ts). No tenure theatre; every line signals capability or intent.

**Projects: quality over quantity**  
- **3 hero projects** (WhatsApp Smart Mute, GitHub-for-PMs, Blinkit) with resume-aligned one-liners and metrics, e.g. ~90% portfolio creation time reduction, 78% activation, +15% 7-day reorder, +5% basket size.  
- Keep AI Product OS and Swish as strong proof; consider “More projects” or drop Digital Health Coach for a strict 4–5.  
- Each card: **one short sentence + 1–2 metrics**; “Read case study” for depth. No long paragraphs.  
- **Source:** [content/projects.ts](content/projects.ts). Descriptions 1–2 lines max; details live in Notion.

**Proof of Impact**  
- Keep 4–6 cards; **one-line baseline → result** per card. Remove long “action” sentences from the card UI. Confidence/source as small labels.  
- **Source:** [content/impactMetrics.ts](content/impactMetrics.ts).

**Education (no career break on portfolio)**  
- **On portfolio:** Degrees, fellowship (2025, Top 3%, 9/10 Swish), GenAI certs consolidated in one line (e.g. “GenAI: Vibe coding, prompt engineering, AI applications”). No career-break line on the site.  
- **On resume:** Keep “Career break - Family responsibility-led break (2022 - 2024)” there for when they open the PDF.  
- **Source:** [content/education.ts](content/education.ts). Do not surface career break in the Education component or Hero.

**Blog**  
- Keep only if each post clearly shows product thinking and is something you’d point a founder to. Prefer 2–3 strong. Otherwise “More writing” link or remove. **P2.**

**What not to add**  
- No long “About me” essay. No generic “I’m passionate about product.” No career break on the portfolio. No section or feature that doesn’t pass “does this help get a conversation?” Show evidence that survives a skeptical read (metrics, sources, live demos); avoid vague claims.

---

## 2. Human, non–AI-generated feel (visitor benefit)

- **Voice:** First person where it fits; one clear claim per sentence; avoid stacked buzzwords.  
- **“Human” = visitor benefit:** Visitor should feel “this person is real, focused, and easy to talk to.” Reduces anxiety and builds trust.  
- **Now/Next:** Compact “Now” block (3–4 items) in or right after Hero. Data in [content/nowNext.ts](content/nowNext.ts); wire into [App.tsx](App.tsx). **P2.**  
- **Optional “why” line:** One sentence only if true and specific.  
- **Design:** Calm typography and spacing; generous line height; minimal flash. Case studies on Notion; portfolio links and summarizes.

---

## 3. Visitor count (optional, P2)

- **Purpose:** Only if it **serves the visitor** (e.g. light social proof). If the main reason is “feels alive” or owner satisfaction, skip it.  
- **If you add it:** Serverless increment + read (e.g. Vercel function + Vercel KV / Upstash Redis). One request per session; lazy when Footer in view (Intersection Observer); footer only, small type (“X visitors so far”). Cache 5–15 min to reduce reads. No critical path; no popups.  
- **Performance:** Keeps LCP and first-load unchanged.  
- **If in doubt:** Ship without it; add later based on feedback.

---

## 4. UI/UX and content placement

- **Order:** Hero (with or immediately followed by lead proof) → Proof of Impact → Projects → Experience → Skills → Education → Blog (if kept) → Contact CTA → Footer.  
- **Above the fold:** Headline + name + one-line title + 2–3 sentence summary (with intent) + primary CTA (Book a call) + View/Download Resume. Lead builder proof in Hero or first card.  
- **CTAs:** Primary “Book a 20-min call”; secondary “View / Download Resume.” Same in Hero and Contact CTA. Contact CTA: one short line (e.g. “I’m exploring PM roles… I’d love to chat”).  
- **Nav:** Keep scroll-spy; “About” points to summary block (`id="about"` in Hero).  
- **Footer:** Visitor count only if added (P2). Keep “Built with React & ♥” and social links. Optional: line about custom domain / “built to last.”

---

## 5. Performance (open rate and speed)

- **Target:** Same or faster load; LCP < 2.5s, CLS < 0.1.  
- **Images:** Avatar [public/Gemini-headshot.png](public/Gemini-headshot.png)—WebP + fallback, explicit width/height (avoid CLS). If in Hero, eager load with optimised format/dimensions; if below fold, `loading="lazy"`.  
- **Fonts:** Inter + Playfair Display; preconnect; `font-display: swap`; no more than 2 families in critical path.  
- **Visitor count (if any):** Out of critical path; lazy when Footer in view.  
- **Lazy loading:** Consider `React.lazy` + `Suspense` for below-fold sections only if bundle grows; measure first.

---

## 6. Resume ↔ site sync (future updates)

- **Single source per section:**  
  - [content/personalInfo.ts](content/personalInfo.ts): name, title, summary, status (no career break on portfolio).  
  - [content/experience.ts](content/experience.ts): roles and bullets.  
  - [content/projects.ts](content/projects.ts): project one-liners and metrics.  
  - [content/education.ts](content/education.ts): degrees, fellowship, certs (do not display career break on portfolio).  
- **Process:** When resume changes, update the corresponding `content/*.ts` file. No need to touch component code for copy.  
- **Optional:** “Last synced with resume: YYYY-MM-DD” at top of each content file.

---

## 7. Extras (what you may have missed)

- **Personal domain:** When you add it, point domain to Vercel in project settings. Optional Footer line: “This portfolio is built to evolve—connect your domain and keep it for life.”  
- **SEO:** [index.html](index.html) title and meta description = headline + one-line summary (EdTech, Consumer Tech, AI-native PM). JSON-LD for Person with name, title, URL.  
- **Accessibility:** Skip link, aria-labels; visitor count (if any) announced to screen readers; “Book a Call” clearly labeled.  
- **Mobile:** Short summary and bullets; Proof of Impact cards stack cleanly (Tailwind).

---

## 8. Implementation order

1. **P0:** Headline, summary (with intent; no career break), lead builder proof in Hero or first card, primary CTA + View/Download Resume.  
2. **P1 content:** personalInfo, experience (short bullets, resume metrics), projects (hero 3 + short descriptions), impactMetrics (one-line cards), education (fellowship, certs; no career break on UI).  
3. **P2 human layer:** Now/Next in App; optional “value to you” and “why” line.  
4. **P2 visitor count (optional):** Serverless counter + Footer, lazy load.  
5. **Performance:** Avatar optimisation; font-display and preload.  
6. **Polish:** Meta/SEO, accessibility, optional Footer domain line, “Last synced” in content files.

---

## Summary table

| Area                | Action |
|---------------------|--------|
| **North Star**      | Portfolio’s job = get a conversation in ~2 min. Resume = full story when they’re interested. |
| **Career break**    | **Not on the portfolio.** Proof + intent + CTA on site; career break only on resume. |
| **Headline & summary** | One clear PM headline; 2–3 sentence summary with intent; first person; no career break. |
| **Lead proof**      | Strongest builder proof (e.g. 3 in 7 days, AI Product OS) in Hero or first card. |
| **Experience**      | Short bullets; outcome first; single source `content/experience.ts`. |
| **Projects**        | 3 hero (WhatsApp, GitHub-for-PMs, Blinkit) + 2–3 compact; one-line + metrics per card. |
| **Proof of Impact** | 4–6 cards; one-line baseline → result; trim action text on UI. |
| **Education**       | Fellowship 2025, 9/10 Swish; consolidate GenAI certs; **no career break on site.** |
| **Human feel**      | Now/Next (P2); first-person; optional “value to you” line; calm design. |
| **Visitor count**   | P2, optional; only if it serves the visitor; footer, lazy load. |
| **Performance**     | Avatar WebP/dimensions; font-display; visitor API out of critical path. |
| **Future**          | All copy in `content/*.ts`; when resume changes, update only those files. |

---

*Merged from original PM Portfolio Refresh Plan and v2 (Shravan Tickoo lens). Career-break stance: portfolio for conversion; resume for full story. Confirm with Shravan when you can.*
