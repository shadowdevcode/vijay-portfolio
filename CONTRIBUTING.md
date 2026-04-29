# Contributing — Content Update Guide

A lightweight operating guide for keeping the portfolio fresh and relevant.

---

## How to Add Content

All portfolio data is in **one file**: `constants.tsx`. Update the appropriate array, commit, and deploy.

| Content Type            | Array in `constants.tsx` | Type in `types.ts` |
| ----------------------- | ------------------------ | ------------------ |
| Work experience         | `EXPERIENCE`             | `Job`              |
| Case studies / projects | `PROJECTS`               | `Project`          |
| Skills                  | `SKILLS`                 | `Skill`            |
| Education / certs       | `EDUCATION_DATA`         | `Education`        |
| Blog posts              | `BLOG_POSTS`             | `BlogPost`         |
| Impact metrics          | `IMPACT_METRICS`         | `ImpactMetric`     |
| Now / Next items        | `NOW_NEXT`               | `NowNextItem`      |
| Hiring info             | `HIRE_INFO`              | `HireInfo`         |

---

## Content Refresh Cadence

### Monthly

- [ ] Update the "Now / Next" block with current focus areas
- [ ] Add any new blog post or LinkedIn insight

### Quarterly

- [ ] Audit all case study links (fix broken Notion links)
- [ ] Review and update skills list
- [ ] Refresh impact metrics if new data is available
- [ ] Update `HIRE_INFO` (role targets, availability, locations)
- [ ] Check headshot photo is still current

### After completing a major project

- [ ] Add a new entry to `PROJECTS` with full metadata
- [ ] Add any measurable impact to `IMPACT_METRICS`
- [ ] Update the system prompt in `api/system-prompt.ts` with new context

---

## Case Study Checklist

When adding a new case study, ensure it has:

- [ ] Clear problem statement in `description`
- [ ] At least 2 `highlights` (bullet-point differentiators)
- [ ] At least 1 `metric` (quantified outcome)
- [ ] A `segment` tag for filter chips (e.g., "AI", "EdTech", "Consumer")
- [ ] `caseStudyAvailable: true` only if a link exists
- [ ] A `link` to the full case study on Notion

---

## Verify Before Deploying

```bash
# Build the project
bun run build

# Check no API key leaked into the bundle
grep -r "AIzaSy" dist/ && echo "FAIL" || echo "PASS"

# Preview locally
bun run preview
```
