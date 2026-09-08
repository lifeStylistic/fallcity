# Images

Drop project photography here, then replace the matching `<MediaPlaceholder />`
tag in the section component with a real `<img>`. Every placeholder on the site
names exactly which photo belongs in it.

## Where each photo goes

| Placeholder label                      | Section component                        | Suggested filename         |
| -------------------------------------- | ---------------------------------------- | -------------------------- |
| `[HERO IMAGE – CURRENT FALLS CITY TRACK]` | `src/components/sections/Hero.astro`      | `hero-current-track.jpg`   |
| ~~`[CURRENT TRACK / MUD / DRAINAGE PHOTO]`~~ | **Done** — superseded by the photo gallery | `track/` |
| ~~`[CURRENT TRACK PHOTO]`~~               | **Done** — `BeforeAfter.astro` uses a real photo | `track/track-mud-school-*.jpg` |
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


---

## Track photography (installed)

Four photographs of the existing surface, taken during rainfall, live in
`images/track/`. Each is generated at two widths and served with `srcset`:

| File stem | Shows |
| --- | --- |
| `track-standing-water` | Water standing across the full width of the running surface |
| `track-drainage-curve` | The gravel path curving around the field, water pooled along it |
| `track-mud-school` | Mud and loose gravel where the surface passes the school buildings |
| `track-field-deer` | Deer at the far end of the field, water pooled in the foreground |

They appear in the **Track Today** gallery (`TrackToday.astro`) and the
**Today** panel of the before/after section. Captions and alt text live in
`TRACK_TODAY` in `src/data/content.js`.

**Captions describe only what is visible in the frame** — no estimates of
depth, frequency or cost. The photographs make the case on their own, and
overstating them would undercut it. Please keep that discipline if you add
more.

### Adding more photographs

Resize to 600px and 1000px wide, quality ~78, progressive JPEG, and name them
`<stem>-600.jpg` / `<stem>-1000.jpg`. Then add an entry to `TRACK_TODAY.photos`
with `src` set to the stem (no width, no extension). The originals were
1536x2048 and roughly 1.2MB each; shipping them unprocessed would have made
the page unusable on a phone.
