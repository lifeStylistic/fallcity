# The Falls City Four-Lane Project

Public fundraising and awareness site for a competition-capable four-lane
synthetic running track at **Falls City High School**, Falls City School
District 57, Falls City, Oregon.

> **50 Students. One Community. Four Lanes.**

**Live:** https://fallscitytrack.netlify.app

---

## Contents

- [Quick start](#quick-start)
- [Where to edit content](#where-to-edit-content)
- [Where to add images](#where-to-add-images)
- [The inquiry form](#the-inquiry-form)
- [Publishing the "Why I'm Asking" section](#publishing-the-why-im-asking-section)
- [How to update fundraising progress](#how-to-update-fundraising-progress)
- [How to update project status](#how-to-update-project-status)
- [Partner logos](#partner-logos)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Content rules — please read](#content-rules--please-read)
- [Deployment](#deployment)
- [Accessibility](#accessibility)

---

## Quick start

You only need this if you want to preview changes on your own computer.
For small text edits you can edit files directly on GitHub and Netlify will
rebuild the site automatically — see [Deployment](#deployment).

```bash
npm install      # once
npm run dev      # start a local preview at http://localhost:4321
npm run build    # produce the production site in dist/
npm run preview  # preview the production build
```

Requires [Node.js](https://nodejs.org) 18 or newer.

---

## Where to edit content

**Almost everything you will want to change lives in two files.**

| File | What it holds |
| --- | --- |
| `src/config/site.js` | Links, donation URLs, fundraising figures, contact details, partner logos, SEO text |
| `src/data/content.js` | Every word of copy on the page — headlines, body text, statistics, phases, partner categories |

You do **not** need to edit any component to change wording. Find the text in
`src/data/content.js`, change what is between the quotation marks, leave the
quotation marks in place, and save.

### A worked example

To change the headline of the problem section, open `src/data/content.js` and
find:

```js
export const PROBLEM = {
  eyebrow: 'The Need',
  headline: 'Our Kids Should Be Able to Compete at Home.',
```

Change the `headline` text. That is the whole job.

---

## Where to add images

Put image files in `public/images/`, then replace the matching placeholder.

Every placeholder on the site is labelled with the exact photo it expects, for
example `[HERO IMAGE – CURRENT FALLS CITY TRACK]`. To swap one in, find that
`<MediaPlaceholder ... />` tag in the section component and replace the whole
tag with:

```astro
<img
  src="/images/hero-current-track.jpg"
  alt="Describe what is happening in the photo"
  width="1600"
  height="900"
  loading="lazy"
/>
```

Use `loading="eager"` for the hero image only, since it is visible immediately.

**`public/images/README.md` contains a full table** mapping every placeholder
label to its component file and a suggested filename.

Guidelines: JPG for photos, at least 2000px wide for full-width images,
compressed to under about 400KB each. Alt text is required on every image.
**Get photo releases before publishing images of students.**

### The school crest

Save the Falls City Mountaineers crest to
`public/images/mountaineers-crest.png` — **with a transparent background**,
since it sits on both white and purple — then set `SCHOOL_LOGO` in
`src/config/site.js` to `'/images/mountaineers-crest.png'`. Until then the
header shows the four-lane campaign mark instead.

---

## The inquiry form

Every call to action on the site leads to **`/get-involved`**, an on-site form
that collects submissions through **Netlify Forms**. No third-party service
and no API keys — submissions appear in the Netlify dashboard for this
project.

### Before you publicise the site

**Turn on form notifications**, or submissions will collect silently and
nobody will know they arrived:

> Netlify dashboard → this project → **Forms** → Settings → **Form
> notifications** → add an email address.

### Reading submissions

Netlify dashboard → this project → **Forms** → `project-inquiry`. Each entry
records how they want to help, name, email, phone, organisation, the scale of
contribution and their message. Submissions can be exported to CSV.

### How the buttons route

All three buttons reach the same form, tagged so you can tell them apart:

```js
export const DONATION_URL = '/get-involved?intent=donate';
export const PARTNER_FORM_URL = '/get-involved?intent=partner';
export const VOLUNTEER_URL = '/get-involved?intent=volunteer';
```

The `intent` parameter preselects the form's first question, so the submission
records which button was clicked.

### When a real giving page exists

Once there is an online donation page (Givebutter, PayPal Giving, a district
page), point `DONATION_URL` straight at it so money can be taken on the spot.
**Leave the other two on the form** — a partner or volunteer inquiry needs a
conversation, not a checkout.

### Editing the form

Fields live in `src/pages/get-involved.astro`. If you add one, give it a
`name` attribute — Netlify captures fields by name — and a `<label for="…">`.
Do not remove `data-netlify="true"` or the hidden `form-name` field: without
either, the form keeps working visually while dropping every submission.

---

## How to update fundraising progress

In `src/config/site.js`, set **both** values to plain numbers — no dollar
signs, no commas:

```js
export const FUNDRAISING_GOAL = 750000;
export const AMOUNT_RAISED = 42500;
```

The progress bar, both dollar figures and the percent-funded readout appear
automatically in the Project Status section. **Percent funded is calculated
for you — never type it in by hand.**

While either value is `null`, the site shows an honest "will be published
here" note instead of a fabricated total. This is deliberate: the executive
summary does not state a project cost, so the site does not invent one.

---

## How to update project status

In `src/data/content.js`, edit the `STATUS` object. Change each item's `value`
text and its `state`, which controls the indicator colour:

| `state` | Meaning | Dot colour |
| --- | --- | --- |
| `'active'` | In progress right now | Gold |
| `'complete'` | Finished | Purple |
| `'not-started'` | Not begun yet | Grey |
| `'future'` | A later phase | Light grey |

Also update `phase` (the current headline phase) and `updated` (the date
stamp) at the same time.

---

## Publishing the "Why I'm Asking" section

The site includes a personal section in Jennifer Flores's own voice, condensed
from the "Why This Matters to Me" passage on page 3 of the executive summary.
It sits between the Falls City story and the project plan.

**It is built but not published.** In `src/data/content.js`, find:

```js
export const PERSONAL = {
  approved: false,
```

Change `false` to `true` and the section appears, along with its navigation
link in the header and footer. Nothing else needs editing.

It is gated because this is a personal account on a public, indexed,
permanently shareable page — a different decision from including it in a
proposal sent to a named funder. **Jennifer should read the exact published
wording and agree to it first**, including the reference to leaving a previous
district and the period working in dentistry. Publishing is her call, not the
project's.

**The section is text-only by design.** There is no portrait and no empty
photo slot — it is laid out as an editorial spread, with the headline and
signature in a left rail against a wider column of her words, and the pull
quote sized up to carry the visual weight a portrait otherwise would. It
reads as finished, not as a page waiting for an image.

If a portrait is added later, give it its own column and widen the shell
rather than dropping it into the existing grid, which would crush the measure
of the prose.

---

## Partner logos

Save the logo to `public/images/partners/`, then add an entry to
`PARTNER_LOGOS` in `src/config/site.js`:

```js
{
  name: 'Example Company',
  logo: '/images/partners/example.svg',
  url: 'https://example.com',
  role: 'Site preparation partner',
  width: 320,
  height: 120,
}
```

Partner logos are rendered on **plain white with no card, border or tint
behind them**, so a logo carrying its own white lockup never looks framed or
boxed in. Please keep it that way.

The partner section hides itself entirely while the list is empty, so the site
never shows an empty "our partners" shell.

**Keep the `role` wording accurate** — describe involvement and support rather
than a committed donation, unless that commitment is confirmed in writing.

---

## Project structure

```
fallcity/
├── public/                     Files served as-is
│   ├── favicon.svg             Four-lane mark — replace with district crest
│   ├── og-image.svg            Social sharing image — replace with 1200x630 JPG
│   └── images/
│       ├── README.md           Which photo goes in which placeholder
│       └── partners/           Partner logo files
├── src/
│   ├── config/site.js          ← LINKS, FUNDING, CONTACT, PARTNERS
│   ├── data/content.js         ← ALL COPY
│   ├── styles/
│   │   ├── tokens.css          Colours, type scale, spacing
│   │   └── global.css          Base styles, buttons, motion
│   ├── components/
│   │   ├── Nav.astro           Sticky header + mobile menu
│   │   ├── Footer.astro        Contact, links, partner wall
│   │   ├── ActionButton.astro  Auto-disables when a URL is missing
│   │   ├── StatBlock.astro     Oversized statistic
│   │   ├── MediaPlaceholder.astro
│   │   └── sections/           One component per page section
│   ├── layouts/Base.astro      SEO, Open Graph, fonts, scroll reveal
│   └── pages/index.astro       Homepage — section order lives here
├── netlify.toml                Deploy configuration
└── astro.config.mjs            Set `site` to the real domain at launch
```

To **reorder or remove a section**, edit `src/pages/index.astro` — it is a
plain list of section components in page order.

---

## Design system

Built with [Astro](https://astro.build). Static HTML output with almost no
JavaScript, so the site is fast and will keep working for years.

### Palette

Taken directly from the project proposal document, not approximated:

| Token | Hex | Use |
| --- | --- | --- |
| `--purple` | `#4B2E83` | Primary brand, text on white, dark sections |
| `--purple-deep` | `#2E1B52` | Hero, closing CTA, deepest sections |
| `--gold` | `#F2C94C` | Accents, the payoff line, active indicators |
| `--ink` | `#252525` | Body text |
| `--tint` | `#F4F1F8` | Pale purple section wash |

The scheme is deliberately **purple, gold and white**. Dark sections are
purple, never grey or black.

> **Accessibility warning:** gold has a contrast ratio of about **1.7:1**
> against white and **must never be used for text on a light background**. It
> is used only as a graphic accent and as text on dark ground, where it reaches
> about 11:1 on ink and 6.5:1 on purple. Purple on white is about 9.5:1.

### Typography

Archivo for display, Inter for body, loaded from Google Fonts with a full
system fallback stack. Sizes use `clamp()` so type scales fluidly and never
overflows a small screen.

### The four-lane motif

Four parallel rules recur throughout — in the hero, as section dividers, above
statistics, inside media placeholders and in the header mark. This is the
campaign's core graphic device: the central idea used as brand geometry rather
than a running-shoe cliché. It is what keeps the site from reading like a
generic school page.

### Motion

Three layers, all disabled under `prefers-reduced-motion` and all safe if
JavaScript never runs:

- **Reveal.** Elements rise and fade in as they enter view. Section headings
  use directional variants (`data-reveal="left"` / `"right"`), alternating
  down the page. Grids stagger via a `--d` delay.
- **Counters.** Large figures count up (`src/components/Counter.astro`). The
  final value is rendered server-side, so the number is correct even with
  scripting off.
- **Hover.** Cards lift, shadows deepen, a gold edge wipes across the
  contribution cards.

To animate a new figure, wrap it: `<Counter value="1,234" />`. The script
handles commas, decimals and multi-number strings like `548 × 272`
automatically. A value of zero is deliberately left static.

---

## Content rules — please read

The executive summary is the factual source of truth for this site. When
editing, **do not add**:

- construction cost or fundraising goal
- completion date or construction schedule
- final track dimensions
- a claim that a 400-meter layout is confirmed
- donor or sponsor commitments
- engineering conclusions
- tax-deductibility language

**On the 400-meter question:** the proposal deliberately states that a
four-lane track is the goal, with a 400-meter configuration pursued *only if*
professional survey and engineering confirm it fits safely. The site preserves
that distinction throughout. The footprint figures in the "How It Works"
section (548 × 272 ft, 3.4 acres, 21,717 SF) describe what a 400m build
*requires* — they are a planning target, explicitly labelled as such, not a
measured site dimension.

Tax-deductibility language is intentionally absent until confirmed by the
district. Set `TAX_LANGUAGE` in `src/config/site.js` once it is verified.

---

## Deployment

Hosted on Netlify, connected to this GitHub repository.

**Push to the connected branch and the site rebuilds and redeploys
automatically.** `netlify.toml` sets the build command (`npm run build`) and
publish directory (`dist`), so there is nothing to configure in the Netlify UI.

You can edit content files directly on GitHub in a browser — including on a
phone — and the site will update within about a minute. No development
environment needed for routine copy changes.

### Before public launch

- [ ] Set the real domain in `astro.config.mjs` (`site:`)
- [ ] Replace `public/og-image.svg` with a real 1200×630 **JPG** and update
      `SEO.ogImage` — some social platforms will not render an SVG preview
- [ ] Replace `public/favicon.svg` with the district crest
- [ ] Add real photography in place of the placeholders
- [ ] Turn on Netlify form notifications (Forms → Settings)
- [ ] Send a test submission and confirm it arrives
- [ ] Point `DONATION_URL` at a real giving page once one exists
- [ ] Confirm and add tax-deductibility language
- [ ] Verify the district website URL in `SCHOOL_URL`

---

## Accessibility

- Semantic landmarks and a correctly ordered heading outline
- Skip-to-content link
- Visible focus rings, switching to gold on dark sections
- Keyboard-operable mobile menu with Escape-to-close and scroll locking
- `role="progressbar"` with proper ARIA values on the funding bar
- Full `prefers-reduced-motion` support
- Decorative graphics hidden from assistive technology
- Mobile-first layouts, verified free of horizontal overflow at 390px

---

## Contact

**Jennifer Flores**
Falls City School District 57 / Falls City High School
111 N. Main St., Falls City, OR 97344
jennifer.flores@fallscityschools.org · (562) 964-1597
