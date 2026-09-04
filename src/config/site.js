/* ===========================================================================
   SITE CONFIGURATION — The Falls City Four-Lane Project
   ---------------------------------------------------------------------------
   THIS IS THE FILE TO EDIT when you get real links, real numbers, or real
   sponsor logos. Nothing here requires knowing how to code — replace the text
   between the quotation marks and leave the quotation marks in place.

   Any value left as null is treated as "not available yet". The site handles
   that gracefully: buttons become clearly-marked placeholders and the
   fundraising progress bar stays hidden until real numbers exist. Nothing on
   this site invents a figure that has not been confirmed.
   =========================================================================== */

export const PROJECT_NAME = 'The Falls City Four-Lane Project';
export const PROJECT_TAGLINE = '50 Students. One Community. Four Lanes.';

/* ---------------------------------------------------------------------------
   ACTION LINKS
   Replace null with a full URL in quotes, e.g.
     DONATION_URL: 'https://www.givebutter.com/falls-city-track',
   Until then each button renders as a visibly inactive placeholder rather
   than a dead link that silently goes nowhere.
--------------------------------------------------------------------------- */
export const DONATION_URL = null;      // [ADD LATER] Online giving page
export const PARTNER_FORM_URL = null;  // [ADD LATER] Project partner inquiry form
export const VOLUNTEER_URL = null;     // [ADD LATER] Volunteer sign-up form

/* ---------------------------------------------------------------------------
   ORGANIZATION LINKS
--------------------------------------------------------------------------- */
export const SCHOOL_URL = 'https://www.fallscity.k12.or.us';  // [VERIFY] district website
export const FACEBOOK_URL = null;   // [ADD LATER]
export const INSTAGRAM_URL = null;  // [ADD LATER]

/* ---------------------------------------------------------------------------
   FUNDRAISING PROGRESS
   Leave these as null until real, confirmed figures exist.

   The executive summary does not state a construction cost or a fundraising
   goal, so this site does not display one. When you are ready, enter plain
   numbers without dollar signs or commas:
       FUNDRAISING_GOAL: 750000,
       AMOUNT_RAISED: 42500,
   The progress bar, the dollar figures and the percent-funded readout all
   appear automatically once BOTH values are set. Percent funded is
   calculated for you — never type it in by hand.
--------------------------------------------------------------------------- */
export const FUNDRAISING_GOAL = null;  // [ADD LATER] $PROJECT_GOAL
export const AMOUNT_RAISED = null;     // [ADD LATER] $AMOUNT_RAISED

/* ---------------------------------------------------------------------------
   TAX-DEDUCTIBILITY LANGUAGE
   The executive summary makes no claim about tax treatment, so this site
   makes none either. Replace with language confirmed by the district's
   business office or legal counsel before publishing any giving page.
--------------------------------------------------------------------------- */
export const TAX_LANGUAGE = null;  // [ADD LATER — must be confirmed by the district]

/* ---------------------------------------------------------------------------
   CONTACT — from the executive summary
--------------------------------------------------------------------------- */
export const CONTACT = {
  name: 'Jennifer Flores',
  district: 'Falls City School District 57',
  school: 'Falls City High School',
  street: '111 N. Main St.',
  cityStateZip: 'Falls City, OR 97344',
  email: 'jennifer.flores@fallscityschools.org',
  phone: '(562) 964-1597',
  phoneHref: '+15629641597',
};

/* ---------------------------------------------------------------------------
   SPONSOR / PARTNER LOGOS — PARTNER_LOGOS
   ---------------------------------------------------------------------------
   Partner logos are always rendered on a plain white background with no card,
   border or tint behind them, so a logo with its own white lockup never looks
   boxed in or framed.

   TO ADD A LOGO:
     1. Save the logo file into  public/images/partners/
        Prefer SVG. Otherwise a PNG with a transparent or white background,
        at least 800px wide.
     2. Add an entry to the list below.

   NOTE ON WORDING: `role` describes the nature of the partnership. Keep it
   accurate — describe involvement and support rather than a committed
   donation, unless and until that commitment is confirmed in writing.
--------------------------------------------------------------------------- */
export const PARTNER_LOGOS = [
  {
    name: 'Tarkett Sports — FieldTurf & Beynon Sports',
    // Supplied logo, installed. Source: Logo_TarkettSports_FieldTurf_Beynon_cmyk.zip
    // White-background lockup — rendered on white with no card or border.
    // 708x266 RGB JPEG.
    logo: '/images/partners/tarkett-sports.jpg',
    url: 'https://www.tarkettsports.com',
    role: 'Track surfacing partner',
    width: 340,
    height: 128,
  },
];

/* Heading shown above the partner wall. */
export const PARTNER_SECTION = {
  eyebrow: 'Partners',
  headline: 'We Are Not Starting From Zero.',
  intro:
    'This project already has industry partners engaged in the work — organizations that build competition running surfaces for a living and understand what this site will require. Their involvement is why the plan below is a real sequence of construction steps rather than a wish list.',
};

/* ---------------------------------------------------------------------------
   SEO / SOCIAL SHARING
--------------------------------------------------------------------------- */
export const SEO = {
  title: 'The Falls City Four-Lane Project | 50 Students. One Community. Four Lanes.',
  description:
    'Falls City High School is seeking partners to build a competition-capable four-lane synthetic running track for 50 students and a rural Oregon community of 1,086. We don’t have the money. But we have the people.',
  // [ADD LATER] Replace with a real 1200x630 image at public/og-image.jpg
  ogImage: '/og-image.svg',
  locale: 'en_US',
};
