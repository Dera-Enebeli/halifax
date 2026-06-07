# East Bay-First Rewrite Plan

Every section gets punched up to scream "EAST BAY".

## 1. `src/components/hero-section.tsx`
- Add pre-heading tagline: `"Halifax Properties & Investments — East Bay Listings"`
- Change H1: `"Invest Today in Your Dream Home"` → `"Find Your Place in the<br />East Bay"`
- Change subtitle: make it sharp and East Bay-led: `"Exclusive East Bay listings. From Oakland to Walnut Creek, Dublin to Berkeley — your next home starts here."`
- Change first CTA: `"View Property"` → `"Browse East Bay Listings"`

## 2. `src/components/header.tsx`
- Under "Halifax" logo text, add a small terracotta tagline: `"EAST BAY"` (10px, uppercase, tracked)
- Change nav item `"Properties"` → `"East Bay Listings"`

## 3. `src/components/utility-bar.tsx`
- Add `MapPin` icon + `"Serving the East Bay"` to the left side, before phone number

## 4. `src/components/search-filter-bar.tsx`
- Add heading above the pill: `"Search East Bay Properties"` (olive, small caps)

## 5. `src/components/category-cards.tsx`
- Section label: `"Browse by Type"`
- Section title: `"Apartment Types"` → `"East Bay Property Types"`

## 6. `src/components/featured-properties.tsx`
- Section title: `"Featured Properties"` → `"Featured East Bay Listings"`
- Subtitle: `"Hand-picked properties hand-selected..."` → `"Hand-selected East Bay properties you won't want to miss."`

## 7. `src/components/footer.tsx`
- First link column: `"Quick Links"` → `"East Bay"` with city links (Oakland, Berkeley, Walnut Creek, Dublin, Pleasanton) pointing to `/listings?city=...`
- Description: more specific East Bay city names
- Copyright: `"Halifax Properties & Investments — East Bay"`

## 8. `src/app/layout.tsx`
- Title: `"Halifax Properties & Investments | East Bay Listings & Real Estate"`
- Description: punch up with city names and "East Bay's trusted real estate partner"
