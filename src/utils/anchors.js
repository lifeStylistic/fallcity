/* ===========================================================================
   ANCHOR RESOLUTION
   ---------------------------------------------------------------------------
   The header and footer are shared by every page, but the sections they link
   to (#the-need, #the-vision, …) only exist on the homepage. A bare "#the-need"
   on /get-involved points at nothing and the link silently does nothing.

   So: on the homepage the fragment is left alone, and everywhere else it is
   resolved against the homepage. Same menu, working links on all three pages.
   =========================================================================== */
export function resolveAnchor(href, pathname) {
  if (!href || !href.startsWith('#')) return href;
  const onHome = pathname.replace(/\/+$/, '') === '';
  return onHome ? href : `/${href}`;
}
