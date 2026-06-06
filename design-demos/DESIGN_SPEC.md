# Haven Realty — Visual Redesign Design Spec

## Product / Project
Haven Realty is a fictional California luxury real estate brokerage. The website showcases high-end properties across California (Santa Monica, Beverly Hills, Los Angeles, Santa Barbara, Lake Tahoe, Irvine, Malibu, Pasadena, Palm Springs, San Diego, Napa, Laguna Beach). Properties range from $725K starter townhomes to $8.95M beachfront penthouses.

## Target Audience & Use Case
- **Primary**: Affluent home buyers (35-65) browsing California luxury real estate, net worth $2M+, comfortable with technology but not tech-obsessed
- **Secondary**: Sellers evaluating which brokerage to list with, real estate investors
- **Use case**: Desktop browsing at home (evening/weekend research) and mobile browsing on-the-go (open house days). The site is a marketing tool to generate leads and showcase the brokerage's portfolio.

## Core Message
"Haven Realty — not just transactions, but a curated California lifestyle." The site needs to convey: trust (expertise in luxury market), aspiration (the California dream is real), and taste (we find the best, not the most).

## Content Sections (common to all directions)
All 3 mockups will redesign the homepage with these sections (same content, different design language):

1. **Header/Nav**: Logo, nav links (Listings, About, Contact), CTA button (Sign In)
2. **Hero**: Full-viewport hero with background image (same Unsplash image), headline "California Dream, Found", subtitle, search bar with location input + property type + price range, popular city quick-links
3. **Featured Listings**: 4 featured property cards (id: prop-001 through prop-004) with image, price, title, beds/baths/sqft, status badge, city
4. **Market Stats**: 4 statistics: Active Listings (47), Average Price ($3.2M), Median Price ($2.1M), Avg Days on Market (34)
5. **Why Us / Value Props**: 6 feature cards with icons (Expert Agents, Local Knowledge, Premium Marketing, etc.)
6. **CTA Section**: "Find Your Dream Home" with email signup + "View All Listings" button
7. **Footer**: Multi-column with links, contact info, social

## Output Format
Each direction is a **single, self-contained HTML file** (no React, no build step) that can be opened directly in a browser. Pure HTML + CSS + minimal vanilla JS for interactivity.

- Fits in 1440×900 viewport for screenshots
- Mobile-responsive down to 375px
- Uses the same placeholder images from the existing site (Unsplash URLs) for fair comparison
- No external dependencies beyond Google Fonts (loaded via `<link>`)

## Image Assets (shared)
All 3 directions use these same images (from the existing site):
- Hero: `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80`
- Featured cards: reuse property images from mock-data.ts
- Agent headshots: reuse from mock-data.ts

## Constraints
- No purple gradients, no left-border accent cards, no emoji as icons
- No SVG illustrations of people/faces
- Fonts must use open-source alternatives (Google Fonts)
- Each direction must feel distinctly different — not three shades of minimal
- Mobile navigation must work (hamburger menu)
- All links should be functional (even if pointing to #)
