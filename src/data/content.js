/* ===========================================================================
   SITE CONTENT — every word of copy on the homepage lives here.
   ---------------------------------------------------------------------------
   Edit text here and it updates on the page. You do not need to touch any
   component file to change wording.

   CONTENT RULE — please preserve this when editing:
   Every factual claim below is drawn from the project executive summary.
   The proposal deliberately does NOT claim that a 400-meter track will fit;
   it states that 400m is the GOAL, pursued only if professional survey and
   engineering confirm it is feasible. Please keep that distinction intact.
   Do not add construction costs, completion dates, final track dimensions,
   donor commitments or engineering conclusions until they are confirmed.
   =========================================================================== */

export const NAV_LINKS = [
  { label: 'The Need', href: '#the-need' },
  { label: 'The Vision', href: '#the-vision' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'The Plan', href: '#the-plan' },
  { label: 'How to Help', href: '#how-to-help' },
  { label: 'Status', href: '#status' },
];

/* --- 1. HERO ----------------------------------------------------------- */
export const HERO = {
  headlineLines: ['50 Students.', 'One Community.', 'Four Lanes.'],
  standfirst: [
    'Some people see Falls City as the end of the road.',
    'We see it as the beginning.',
  ],
  body:
    'Falls City High School is working to build a safe, durable, competition-capable four-lane synthetic running track — a place where our students can finally compete at home, and where a rural Oregon community of 1,086 can walk, gather and take pride.',
  primaryCta: 'Help Build the Track',
  secondaryCta: 'See the Vision',
  location: 'Falls City, Oregon · School District 57',
};

/* --- 2. THE PROBLEM ---------------------------------------------------- */
export const PROBLEM = {
  eyebrow: 'The Need',
  headline: 'Our Kids Should Be Able to Compete at Home.',
  body: [
    'The track at Falls City High School is a dirt-and-gravel surface with no defined lanes and no formal drainage. It has never had a synthetic surface, and to our knowledge there has never been a major track improvement.',
    'The surface is uneven. It becomes extremely muddy in wet weather and has areas that flood. It cannot host track-and-field competition — so our athletes travel to every meet, and our middle-school athletes are transported to other districts’ facilities simply to practice.',
  ],
  stats: [
    { value: '50', label: 'High School Students', note: 'In a district serving fewer than 200' },
    { value: '0', label: 'Defined Track Lanes Today', note: 'Dirt and gravel, no drainage' },
    { value: '90', unit: 'Miles', label: 'Possible Travel to Compete', note: 'Up to two hours each way' },
    { value: '4', unit: 'Lanes', label: 'The Goal', note: 'Competition-capable, at home' },
  ],
  pullQuote:
    'Our younger students have asked why they cannot run on their own track, and have lamented that they have to drive “so far.”',
};

/* --- 3. BEFORE / AFTER ------------------------------------------------- */
export const BEFORE_AFTER = {
  eyebrow: 'Today & Tomorrow',
  headline: 'The Same Ground. A Different Future.',
  today: {
    label: 'Today',
    items: [
      'Dirt-and-gravel surface',
      'No defined lanes',
      'No formal drainage',
      'Flooding and mud in wet weather',
      'Unable to host home meets',
    ],
  },
  vision: {
    label: 'The Vision',
    items: [
      'Four-lane synthetic track',
      'Competition-capable facility',
      'Appropriate drainage and grading',
      'ADA-accessible access',
      'Field events where space and engineering permit',
      'A facility students can call home',
    ],
  },
};

/* --- 4. WHY THIS MATTERS ----------------------------------------------- */
export const WHY_IT_MATTERS = {
  eyebrow: 'Why It Matters',
  headline: 'One Track. Four Kinds of Return.',
  pillars: [
    {
      number: '01',
      title: 'For Students',
      body: 'A safe, appropriate place to practice and compete at home — instead of boarding a bus for every single meet.',
    },
    {
      number: '02',
      title: 'For Families',
      body: 'Another reason to gather locally and watch their children compete, without a two-hour drive in each direction.',
    },
    {
      number: '03',
      title: 'For the Community',
      body: 'A safe surface for walking, fitness and recreation in a town with very limited civic infrastructure.',
    },
    {
      number: '04',
      title: 'For Future Generations',
      body: 'A durable asset that serves students and residents for decades — and outlasts any one graduating class.',
    },
  ],
};

/* --- 5. THE FALLS CITY STORY ------------------------------------------- */
export const STORY = {
  eyebrow: 'Our Story',
  headline: 'The Mill Closed. The School Stayed.',
  lead:
    'Falls City was once a thriving logging community in Oregon’s Coast Range. As that economy declined, so did much of the commercial and civic infrastructure that supported the town.',
  body: [
    'Today there is no grocery store. No doctor’s office. No dentist. No public library. One convenience store, and limited local commerce.',
    'Yet the school remains. The families remain. The children remain. And the community continues to show up.',
    'Falls City High School was built in 1921 and housed its first class in 1922 — a history the district still carries in its Camp 1922 program, which gives incoming freshmen a chance to see something of the world beyond their mountain community. In a town where generations of families know one another, the school functions as much like an extended family as an institution.',
  ],
  bigQuote: ['We don’t have the money.', 'But we have the people.'],
  afterQuote:
    'This project is built on partnership, persistence, volunteer labor, in-kind contributions and community effort. Falls City cannot match a larger community’s financial resources — but it can contribute people, effort and local knowledge, and it intends to.',
  contributions: [
    'Volunteer labor and workdays',
    'Local knowledge',
    'Community fundraising',
    'Equipment and contractor relationships',
    'Donated or discounted labor and materials',
    'Long-term care and stewardship',
  ],
  closingQuote:
    'We don’t want our students to believe that their town’s economic history is their destiny.',
};

/* --- 6. THE TRACK VISION / PHASES -------------------------------------- */
export const PHASES = {
  eyebrow: 'The Plan',
  headline: 'Four Phases. One Beginning.',
  intro:
    'The track is where we start — not where we finish. Each phase is designed so that partners can contribute to a specific, defined piece of work.',
  items: [
    {
      number: '01',
      title: 'Track & Site Assessment',
      body: 'Professional survey and site measurement, feasible track geometry, drainage and base conditions, and confirmation of emergency-landing considerations.',
      tag: 'Where we are now',
    },
    {
      number: '02',
      title: 'Track Construction',
      body: 'Build the four-lane synthetic track and the associated site work, pursuing field-event components where feasible.',
      tag: 'Next',
    },
    {
      number: '03',
      title: 'Athletic Facility Improvements',
      body: 'Bleachers, accessibility, utilities, restrooms, concessions and related amenities, as funding permits.',
      tag: 'Future',
    },
    {
      number: '04',
      title: 'Community Use & Future Improvements',
      body: 'Open appropriate portions of the facility for community recreation, and continue long-term school and site improvements.',
      tag: 'Future',
    },
  ],
  feasibilityNote:
    'The goal is a four-lane track, with a 400-meter configuration pursued if professional measurement and engineering confirm it fits safely on the site. This proposal intentionally makes no final technical claim until that work is complete.',
};

/* --- 7. LIFE FLIGHT ---------------------------------------------------- */
export const LIFE_FLIGHT = {
  eyebrow: 'Stewardship',
  headline: 'The Field Is Also a Landing Zone.',
  body: [
    'The football field is the established emergency landing area for Life Flight responses in this area. Over roughly five years, school staff have seen or heard Life Flight use the field about five times during working hours alone — and emergencies also happen on evenings and weekends, when no staff are present to count them.',
    'For a remote mountain community, the field serves a genuine emergency function alongside its athletic one.',
  ],
  emphasis:
    'Any redevelopment must preserve safe helicopter access. The track project is designed as an improvement to the whole site that protects this critical community resource — not one that trades it away.',
};

/* --- 8. HOW PEOPLE CAN HELP -------------------------------------------- */
export const HOW_TO_HELP = {
  eyebrow: 'How to Help',
  headline: 'Project Partners Can Help With:',
  intro:
    'The preferred structure is an in-kind or restricted project contribution rather than unrestricted cash. We are not asking a partner to solve every problem in Falls City — we are asking a partner to help us accomplish one meaningful thing exceptionally well.',
  categories: [
    { title: 'Track Surface', body: 'Synthetic track system, materials and installation support.' },
    { title: 'Site Preparation', body: 'Excavation, grading, hauling, equipment and operators.' },
    { title: 'Base & Paving', body: 'Aggregate, asphalt, concrete and related materials.' },
    { title: 'Engineering', body: 'Surveying, geotechnical, civil/site design and drainage.' },
    { title: 'Field Events', body: 'Long jump, high jump, shot put and discus components.' },
    { title: 'Accessibility', body: 'Accessible routes and seating and access improvements.' },
    { title: 'Athletic Amenities', body: 'Bleachers, fencing, signage and equipment.' },
    { title: 'Community Support', body: 'Volunteer coordination, food, transportation and outreach.' },
    { title: 'Financial Support', body: 'Restricted project donations and sponsorships.' },
  ],
  anchorNote:
    'The ideal first major contribution is a complete or substantial synthetic track system. A donation of the track surface would give this project a foundation around which every other partner can be recruited.',
};

/* --- 9. ONE CONTRIBUTION UNLOCKS THE NEXT ------------------------------ */
export const UNLOCK_CHAIN = {
  eyebrow: 'How It Gets Built',
  headline: 'One Contribution Unlocks the Next.',
  intro:
    'No single partner has to fund this project. Each contribution makes the following one possible — which is exactly how a small district builds something it could never buy outright.',
  steps: [
    { label: 'Survey', body: 'Establish existing grades and site geometry.' },
    { label: 'Engineering', body: 'Geotechnical, civil design and drainage.' },
    { label: 'Site Work', body: 'Excavation, grading and hauling.' },
    { label: 'Base', body: 'Aggregate and subgrade preparation.' },
    { label: 'Paving', body: 'Asphalt and concrete work.' },
    { label: 'Track Surface', body: 'The synthetic four-lane system.' },
    { label: 'Home Meets', body: 'Students compete in Falls City.', terminal: true },
  ],
};

/* --- 10. PROJECT STATUS ------------------------------------------------ */
/* Update `state` as the project advances. Allowed values, which control the
   colour of the indicator dot:
     'active'      — in progress right now  (gold)
     'complete'    — finished               (purple)
     'not-started' — not begun yet          (grey)
     'future'      — a later phase          (grey, lighter)                  */
export const STATUS = {
  eyebrow: 'Where We Are',
  headline: 'Project Status',
  phase: 'Early Planning & Partner Outreach',
  updated: 'Updated September 2026',   // [EDIT] change when you update this section
  items: [
    { label: 'Survey', value: 'Not Started', state: 'not-started' },
    { label: 'Geotechnical', value: 'Not Started', state: 'not-started' },
    { label: 'Civil Design', value: 'Not Started', state: 'not-started' },
    { label: 'Site Construction', value: 'Future Phase', state: 'future' },
    { label: 'Track Surface', value: 'Future Phase', state: 'future' },
    { label: 'Fundraising', value: 'Active', state: 'active' },
  ],
};

/* --- 11. CALL TO ACTION ------------------------------------------------ */
export const CTA = {
  headline: 'Help Build the Starting Line.',
  body: [
    'Falls City does not need one organization to do everything.',
    'It needs enough people willing to do something.',
  ],
  closingLines: ['50 Students.', 'One Community.', 'Four Lanes.'],
  payoff: 'You are worth investing in.',
  payoffContext:
    'That is the message a finished track sends to every student who steps onto it.',
};

/* --- 6b. HOW A TRACK GETS BUILT — ORDER OF OPERATIONS -------------------
   Public, educational version of the project's order of operations, so
   community members, volunteers and prospective partners understand why the
   work has to happen in this sequence and cannot be short-cut.

   NOTE ON THE FOOTPRINT FIGURES BELOW: these describe what a 400-meter,
   four-lane configuration REQUIRES. They are a planning target, not a
   measured site dimension. The executive summary intentionally does not
   claim a 400m track will fit — confirming that is exactly what Step 1 is
   for. Please keep that framing if you edit this section.                 */
export const PROCESS = {
  eyebrow: 'How It Works',
  headline: 'You Cannot Build a Track Out of Order.',
  intro:
    'A running track is not a parking lot. Each step below produces the information the next one needs — which is why the project begins with a survey rather than a shovel, and why an early contribution of professional services is worth as much to this project as a cheque.',
  steps: [
    {
      number: '1',
      title: 'Topographic Survey',
      body: 'You cannot price, design or permit anything without existing grades. Everything below waits on this.',
      why: 'This is also the step that answers whether a 400-meter configuration fits the site.',
    },
    {
      number: '2',
      title: 'Geotechnical Investigation',
      body: 'Borings and infiltration testing. Sets the base depth and the drainage design.',
      why: 'These are the two things that move the cost most.',
    },
    {
      number: '3',
      title: 'Civil / Landscape Design',
      body: 'Survey plus geotechnical becomes a grading, drainage and layout drawing.',
      why: 'Without a drawing, every number a contractor gives back is a guess with an exclusion list attached.',
    },
    {
      number: '4',
      title: 'Site Trades',
      body: 'Excavation, aggregate, asphalt and concrete — all working from the same drawing.',
      why: 'One drawing is what makes competing bids comparable to each other.',
    },
    {
      number: '5',
      title: 'Track Surfacing',
      body: 'The synthetic running surface is installed last, over a finished and tested base.',
      why: 'Synthetic track systems are proprietary and are installed by the manufacturer rather than a general site contractor.',
    },
  ],

  /* Scope figures — a 400m four-lane planning target, subject to survey. */
  scope: {
    label: 'Planning Scope',
    caveat:
      'Planning target for a 400-meter, four-lane configuration — to be confirmed by professional survey and engineering.',
    items: [
      { value: '548 × 272', unit: 'Feet', label: 'Approximate footprint' },
      { value: '3.4', unit: 'Acres', label: 'Approximate disturbed area' },
      { value: '21,717', unit: 'Sq Ft', label: 'Finished running surface' },
      { value: '4', unit: 'Lanes', label: 'Competition configuration' },
    ],
  },

  /* Due diligence the project intends to apply to every contractor. This is
     here to show partners and the community that the project is being run
     properly — not as a procurement instruction. */
  diligence: {
    title: 'What We Ask Every Contractor',
    items: [
      {
        q: 'What tracks have you built?',
        a: 'A track base holds a far tighter tolerance than a parking lot. Paving experience is not track experience.',
      },
      {
        q: 'Are you licensed, bonded and insured in Oregon?',
        a: 'Including a current CCB number.',
      },
      {
        q: 'What is excluded from your scope?',
        a: 'Subgrade preparation, site restoration, erosion control and tree protection are the four that most often go missing.',
      },
      {
        q: 'What is your haul distance?',
        a: 'On rock and excavation, haul distance is most of the difference between two bidders.',
      },
    ],
  },

  note:
    'Permitting, land use and stormwater approval through Polk County, utility locates, and any wetland or floodplain review sit alongside this sequence. The civil engineer identifies which apply once the survey is complete.',
};
