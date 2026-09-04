# Images

Drop project photography here, then replace the matching `<MediaPlaceholder />`
tag in the section component with a real `<img>`. Every placeholder on the site
names exactly which photo belongs in it.

## Where each photo goes

| Placeholder label                      | Section component                        | Suggested filename         |
| -------------------------------------- | ---------------------------------------- | -------------------------- |
| `[HERO IMAGE – CURRENT FALLS CITY TRACK]` | `src/components/sections/Hero.astro`      | `hero-current-track.jpg`   |
| `[CURRENT TRACK / MUD / DRAINAGE PHOTO]`  | `src/components/sections/Problem.astro`   | `track-mud.jpg`            |
| `[CURRENT TRACK PHOTO]`                   | `src/components/sections/BeforeAfter.astro` | `track-today.jpg`        |
| `[PROPOSED TRACK RENDERING]`              | `src/components/sections/BeforeAfter.astro` | `track-rendering.jpg`    |
| `[STUDENT ATHLETE PHOTO]`                 | `src/components/sections/WhyItMatters.astro` | `student-athlete.jpg`   |
| `[COMMUNITY / FOOTBALL GAME PHOTO]`       | `src/components/sections/Story.astro`     | `community-game.jpg`       |
| `[AERIAL SITE IMAGE]`                     | `src/components/sections/Process.astro`   | `aerial-site.jpg`          |
| `[STUDENT QUOTE VIDEO]`                   | `src/components/sections/CallToAction.astro` | video embed             |
| `[COMMUNITY QUOTE VIDEO]`                 | `src/components/sections/CallToAction.astro` | video embed             |

## How to swap one in

Replace the whole `<MediaPlaceholder ... />` tag with:

```astro
<img
  src="/images/hero-current-track.jpg"
  alt="Describe what is happening in the photo — not 'photo of a track'"
  width="1600"
  height="900"
  loading="lazy"
/>
```

Use `loading="eager"` instead for the hero image only, since it is visible
immediately on page load.

## Guidelines

- **Format:** JPG for photographs, SVG or PNG for logos.
- **Size:** at least 2000px wide for full-width images. Compress before
  committing — aim to keep each photo under about 400KB.
- **Alt text:** required on every image. Describe the content and the emotion,
  not the file. Screen-reader users and search engines both read it.
- **Permission:** get photo releases before publishing images of students.

## Partner logos

Partner logos live in `partners/` and are listed in `src/config/site.js`
under `PARTNER_LOGOS`. They are rendered on a plain white background with no
card, border or tint behind them, so logos that carry their own white lockup
never appear framed.
