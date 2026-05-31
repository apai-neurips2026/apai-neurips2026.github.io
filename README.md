# APAI @ NeurIPS 2026 — Workshop Website

Website for the proposed NeurIPS 2026 workshop **"Beyond Real vs. Fake:
Authenticity, Provenance, and Authorized Use of Generative AI"** (APAI).

> **Active Proposal.** This workshop is a proposal under review. Content on the
> site (speakers, schedule, dates, location) is tentative and subject to change.

## Stack

- [Next.js](https://nextjs.org/) (App Router) with static export (`output: 'export'`)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Charter (serif) for body text, Inter for UI — matching the design system of
  [matybohacek.com](https://matybohacek.com)
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Editing content

Almost all site content lives in [`src/lib/data.ts`](src/lib/data.ts):
workshop metadata, abstract, keynote speakers, organizers, program committee,
schedule, and the call for papers. Update that file to change the site.

## Pages

- `/` — landing page: title, location/date placeholders, abstract, keynote &
  organizer teasers, and the Call for Papers / Best Paper Award boxes
- `/call-for-papers` — submission details, topics, important dates, OpenReview link
- `/schedule` — program, keynote speakers, accepted papers
- `/committee` — organizing committee and program committee

## Binary assets

The Charter font files and icons are not committed here; the deploy workflow
fetches them at build time from the design-source repository (pinned to an
immutable commit). See the `Fetch binary assets` step in the deploy workflow.
