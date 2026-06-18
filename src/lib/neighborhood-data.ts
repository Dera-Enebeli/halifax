export interface NeighborhoodInfo {
  slug: string
  citySlug: string
  cityName: string
  name: string
  headline: string
  longDescription: string
  highlights: string[]
  whyLiveHere: string
  imageQuery: string
}

export const neighborhoods: NeighborhoodInfo[] = [
  {
    slug: "rockridge",
    citySlug: "oakland",
    cityName: "Oakland",
    name: "Rockridge",
    headline: "Charming Craftsman Homes on Tree-Lined Streets",
    longDescription:
      "Rockridge is one of Oakland's most coveted neighborhoods, known for its picturesque tree-lined streets, beautifully preserved Craftsman and Tudor homes, and a vibrant village atmosphere. Centered along College Avenue, the Rockridge shopping district offers boutique stores, acclaimed restaurants, and the iconic Market Hall for gourmet groceries and prepared foods. The neighborhood's walkability and proximity to the Rockridge BART station make it a favorite among professionals who commute to San Francisco.",
    highlights: [
      "Rockridge BART station — downtown San Francisco in under 20 minutes",
      "College Avenue shopping and dining district with top-rated restaurants",
      "Charming Craftsman, Tudor, and Mediterranean architecture",
      "Highly walkable with a Walk Score of 85+",
      "Proximity to Temescal and Piedmont Avenue",
    ],
    whyLiveHere:
      "Rockridge offers the perfect blend of urban convenience and neighborhood charm. If you want walkable access to shops, restaurants, and transit — all in a beautiful, close-knit community — this is the place.",
    imageQuery: "oakland-rockridge-california-neighborhood",
  },
  {
    slug: "montclair",
    citySlug: "oakland",
    cityName: "Oakland",
    name: "Montclair",
    headline: "Hillside Living with Bay Views and Village Charm",
    longDescription:
      "Perched in the Oakland Hills, Montclair offers a serene escape with sweeping views of the San Francisco Bay. The neighborhood centers on the Montclair Village shopping district, a charming collection of independent shops, cafes, and restaurants nestled at the intersection of Mountain Boulevard and La Salle Avenue. Homes range from mid-century modern gems to custom hillside estates, many with dramatic bay and city views. The area is also home to several hiking trails, including access to Joaquin Miller Park and Redwood Regional Park.",
    highlights: [
      "Panoramic San Francisco Bay and Golden Gate Bridge views",
      "Montclair Village — boutique shopping, dining, and a weekly farmers market",
      "Access to Redwood Regional and Joaquin Miller Parks with miles of trails",
      "Mid-century modern, ranch, and custom estate homes",
      "Peaceful hillside setting minutes from downtown Oakland",
    ],
    whyLiveHere:
      "Montclair is ideal for those who want space, privacy, and nature without sacrificing access to the city. The views alone make it one of the most desirable neighborhoods in the East Bay.",
    imageQuery: "oakland-montclair-hills-neighborhood",
  },
  {
    slug: "temescal",
    citySlug: "oakland",
    cityName: "Oakland",
    name: "Temescal",
    headline: "Trendy, Walkable, and Full of Character",
    longDescription:
      "Temescal has emerged as one of Oakland's trendiest neighborhoods, attracting young professionals, families, and creatives with its eclectic mix of restaurants, bars, and independent shops along Telegraph Avenue. The neighborhood is named after Temescal Creek and features a diverse architectural mix of Victorian flats, Craftsman bungalows, and new condominium developments. Temescal is also home to the Temescal Farmers Market and the historic Temescal Pool. Its central location provides easy access to both downtown Oakland and Berkeley.",
    highlights: [
      "Telegraph Avenue dining scene with world-class restaurants and bars",
      "Temescal Farmers Market every Saturday morning",
      "Diverse architecture — Victorians, Craftsman bungalows, and new builds",
      "Walking distance to MacArthur BART (15 min to SF)",
      "Close to Lake Merritt and Piedmont Avenue",
    ],
    whyLiveHere:
      "Temescal is perfect if you want to be in the middle of Oakland's culinary and cultural scene, with excellent transit access and a true neighborhood feel.",
    imageQuery: "oakland-temescal-neighborhood-street",
  },
  {
    slug: "elmwood",
    citySlug: "berkeley",
    cityName: "Berkeley",
    name: "Elmwood",
    headline: "Berkeley's Quintessential Village Neighborhood",
    longDescription:
      "The Elmwood district is one of Berkeley's most beloved neighborhoods, centered around the intersection of College Avenue and Ashby Avenue. This charming area features a mix of early 20th-century homes — including Craftsman, Tudor, and Spanish Colonial Revival styles — along tree-lined streets with well-maintained sidewalks and gardens. The Elmwood commercial district along College Avenue offers independent bookstores, cafes, boutiques, and restaurants that give the neighborhood its village-like character. Families are drawn to the area for its top-rated schools and safe, walkable streets.",
    highlights: [
      "College Avenue village shopping — bookstores, boutiques, and cafes",
      "Beautiful Craftsman, Tudor, and Spanish Revival homes",
      "Walkable to UC Berkeley campus and downtown Berkeley",
      "Top-rated schools including John Muir Elementary",
      "Farmers market and community events year-round",
    ],
    whyLiveHere:
      "Elmwood offers that rare combination of village charm, architectural beauty, and academic energy. It's one of Berkeley's most family-friendly neighborhoods with a strong sense of community.",
    imageQuery: "berkeley-elmwood-california-neighborhood",
  },
  {
    slug: "north-berkeley",
    citySlug: "berkeley",
    cityName: "Berkeley",
    name: "North Berkeley",
    headline: "Gourmet Ghetto Living with Sweeping Bay Views",
    longDescription:
      "North Berkeley is one of the most desirable areas in the East Bay, known for its spectacular bay views, prestigious homes, and the world-famous Gourmet Ghetto dining district. The neighborhood stretches from the flats near Shattuck Avenue up into the Berkeley Hills, offering a range of housing from classic brown-shingle bungalows to grand Mediterranean estates. North Berkeley is home to the original Chez Panisse, Alice Waters' farm-to-table pioneer, as well as a concentration of artisan food purveyors, bakeries, and specialty markets that make this area a food lover's paradise.",
    highlights: [
      "Gourmet Ghetto — birthplace of California cuisine with Chez Panisse",
      "Stunning San Francisco Bay and Golden Gate Bridge views from the hills",
      "Classic brown-shingle, Craftsman, and Mediterranean architecture",
      "Proximity to North Berkeley BART station",
      "Live Theatre Workshop and community cultural events",
    ],
    whyLiveHere:
      "North Berkeley is for those who appreciate fine food, beautiful architecture, and stunning views. The combination of culinary culture and residential elegance is unmatched anywhere in the East Bay.",
    imageQuery: "berkeley-north-berkeley-hills-homes",
  },
  {
    slug: "berkeley-hills",
    citySlug: "berkeley",
    cityName: "Berkeley",
    name: "Berkeley Hills",
    headline: "Panoramic Views and Secluded Hillside Estates",
    longDescription:
      "The Berkeley Hills offer some of the most dramatic homesites in the entire Bay Area, with unobstructed views spanning the Golden Gate Bridge, San Francisco skyline, and the entire bay. This exclusive residential area features large lots with custom homes ranging from mid-century modern masterpieces to traditional estates. The Hills are also home to Tilden Regional Park, a 2,000-acre natural area with hiking trails, a golf course, a lake, and the famous Little Farm. Despite its secluded feel, the Berkeley Hills are just a short drive from downtown Berkeley and the Gourmet Ghetto.",
    highlights: [
      "Unmatched panoramic views of San Francisco Bay and Golden Gate Bridge",
      "Tilden Regional Park — hiking, fishing, golf, and nature activities",
      "Large custom homes on generous lots with privacy",
      "Mid-century modern and contemporary architecture",
      "Quiet, serene setting minutes from urban amenities",
    ],
    whyLiveHere:
      "The Berkeley Hills are for buyers seeking privacy, space, and breathtaking views. If you want a retreat-like home that's still close to everything Berkeley offers, look no further.",
    imageQuery: "berkeley-hills-california-view",
  },
  {
    slug: "downtown-walnut-creek",
    citySlug: "walnut-creek",
    cityName: "Walnut Creek",
    name: "Downtown Walnut Creek",
    headline: "Upscale Urban Living in the Heart of the Valley",
    longDescription:
      "Downtown Walnut Creek is the vibrant, walkable core of one of the East Bay's most desirable suburbs. The area blends upscale shopping at Broadway Plaza with a thriving dining scene, performing arts at the Lesher Center, and luxury residential towers alongside charming historic homes. Recent development has brought a wave of new condominium and apartment buildings, making it possible to enjoy an urban lifestyle with suburban safety and excellent schools. The Walnut Creek BART station provides direct access to San Francisco, and the surrounding hills offer endless outdoor recreation.",
    highlights: [
      "Broadway Plaza — premium shopping with Nordstrom, Neiman Marcus, and more",
      "Lesher Center for the Arts — theater, music, and dance performances",
      "Walnut Creek BART station with direct service to San Francisco",
      "Luxury condos, penthouses, and historic homes in walkable neighborhoods",
      "Heather Farm Park and the Iron Horse Trail nearby",
    ],
    whyLiveHere:
      "Downtown Walnut Creek delivers an unparalleled live-work-play lifestyle. If you want walkable luxury, top-tier dining and shopping, and easy transit to the city, this is the address.",
    imageQuery: "walnut-creek-downtown-california",
  },
  {
    slug: "northgate",
    citySlug: "walnut-creek",
    cityName: "Walnut Creek",
    name: "Northgate",
    headline: "Family-Friendly Neighborhoods with Top-Rated Schools",
    longDescription:
      "Northgate is one of Walnut Creek's most sought-after family neighborhoods, anchored by the highly regarded Northgate High School. The area features spacious single-family homes on generous lots, many with pools and large backyards, situated along quiet, winding streets. Residents enjoy close proximity to the Lime Ridge Open Space for hiking and mountain biking, as well as easy access to shopping at the Willows Shopping Center and downtown Walnut Creek. The neighborhood's excellent schools, low crime rates, and strong community spirit make it a top choice for families relocating to the East Bay.",
    highlights: [
      "Northgate High School — consistently among the top in Contra Costa County",
      "Lime Ridge Open Space with 1,200 acres of trails and open space",
      "Spacious family homes with large lots, pools, and gardens",
      "Quiet, safe streets with strong neighborhood associations",
      "Minutes to downtown Walnut Creek and I-680",
    ],
    whyLiveHere:
      "Northgate is the gold standard for family living in Walnut Creek. Exceptional schools, spacious homes, and access to nature make it a place where families thrive.",
    imageQuery: "walnut-creek-northgate-neighborhood",
  },
  {
    slug: "dublin-ranch",
    citySlug: "dublin",
    cityName: "Dublin",
    name: "Dublin Ranch",
    headline: "Master-Planned Living with Resort-Style Amenities",
    longDescription:
      "Dublin Ranch is one of Dublin's premier master-planned communities, offering resort-style amenities including parks, pools, walking trails, and a clubhouse. The neighborhood features a mix of beautifully designed single-family homes and townhomes, many built within the last two decades, with modern floor plans that appeal to growing families. Dublin Ranch is zoned for the top-rated Dublin Unified School District and provides easy access to Interstate 580 and the Dublin/Pleasanton BART station. The community's well-maintained common areas and active homeowners association create a strong sense of neighborhood pride.",
    highlights: [
      "Resort-style amenities — pools, parks, clubhouse, and walking trails",
      "Top-rated Dublin Unified School District schools",
      "Modern single-family homes and townhomes with contemporary layouts",
      "Close to Dublin/Pleasanton BART station and I-580",
      "Family-friendly with playgrounds and community events",
    ],
    whyLiveHere:
      "Dublin Ranch offers the ultimate turnkey family lifestyle. If you want modern homes, excellent schools, and community amenities that make daily life feel like a vacation, this is it.",
    imageQuery: "dublin-ranch-california-homes",
  },
  {
    slug: "east-dublin",
    citySlug: "dublin",
    cityName: "Dublin",
    name: "East Dublin",
    headline: "New Construction and Growing Community in the Tri-Valley",
    longDescription:
      "East Dublin is the city's fastest-growing area, featuring new construction homes, modern townhomes, and master-planned communities that cater to families and professionals seeking the latest in home design and energy efficiency. The area is served by the excellent Dublin Unified School District and offers convenient access to the Dublin/Pleasanton BART station, I-580, and the expanding retail and dining options along Dublin Boulevard. With new parks, schools, and community facilities being developed, East Dublin represents one of the Tri-Valley's best opportunities for homebuyers looking for value and appreciation potential.",
    highlights: [
      "New construction and recently built homes with modern finishes",
      "Dublin Unified School District — one of Alameda County's best",
      "Dublin/Pleasanton BART station with ample parking",
      "Growing retail and dining corridor along Dublin Boulevard",
      "Strong appreciation potential in a rapidly developing area",
    ],
    whyLiveHere:
      "East Dublin is perfect for buyers who want a brand-new home in a growing community with top schools. It's one of the best values in the Tri-Valley real estate market.",
    imageQuery: "dublin-california-new-homes-construction",
  },
  {
    slug: "downtown-pleasanton",
    citySlug: "pleasanton",
    cityName: "Pleasanton",
    name: "Downtown Pleasanton",
    headline: "Historic Main Street Living with Modern Sophistication",
    longDescription:
      "Downtown Pleasanton is the heart and soul of this award-winning city, centered around historic Main Street with its iconic clock tower, boutique shops, acclaimed restaurants, and the beautiful Alameda County Fairgrounds. The neighborhood features a mix of beautifully preserved Victorian and Craftsman homes on tree-lined streets, along with newer townhomes and flats that put residents within walking distance of everything downtown has to offer. Living in downtown Pleasanton means being steps away from the weekly farmers market, summer concert series, and year-round community events that make this one of California's most livable small cities.",
    highlights: [
      "Historic Main Street — boutique shopping, dining, and the iconic clock tower",
      "Alameda County Fairgrounds — horse racing, concerts, and county fair",
      "Beautiful Victorian, Craftsman, and bungalow homes near downtown",
      "Walk Score of 90+ — one of the most walkable neighborhoods in the Tri-Valley",
      "Pleasanton Farmers Market and seasonal community events",
    ],
    whyLiveHere:
      "Downtown Pleasanton offers small-town charm at its finest. If you want to walk to everything — from coffee shops to concerts — in one of California's most celebrated communities, this is your neighborhood.",
    imageQuery: "pleasanton-main-street-california",
  },
  {
    slug: "vintage-hills",
    citySlug: "pleasanton",
    cityName: "Pleasanton",
    name: "Vintage Hills",
    headline: "Family Estates with Top Schools and Scenic Views",
    longDescription:
      "Vintage Hills is one of Pleasanton's premier family neighborhoods, situated in the hills on the city's western edge with sweeping views of the Livermore Valley. The neighborhood features spacious single-family homes on generous lots, many with custom architecture, pools, and manicured landscaping. Vintage Hills is served by the exceptional Pleasanton Unified School District, including Vintage Hills Elementary, which feeds into the nationally recognized Amador Valley High School. Residents enjoy access to nearby parks, hiking trails, and the Shadow Cliffs Regional Recreation Area, while downtown Pleasanton is just a short drive away.",
    highlights: [
      "Vintage Hills Elementary — one of California's top-rated public schools",
      "Spacious homes with large lots, pools, and valley views",
      "Close to Shadow Cliffs Regional Recreation Area for boating and hiking",
      "Safe, quiet streets with strong neighborhood community",
      "Minutes to downtown Pleasanton and I-580/680",
    ],
    whyLiveHere:
      "Vintage Hills is the ultimate family neighborhood in one of California's best cities. Exceptional schools, generous homesites, and a strong sense of community make it hard to leave.",
    imageQuery: "pleasanton-vintage-hills-california",
  },
]

export const neighborhoodBySlug: Record<string, NeighborhoodInfo> = Object.fromEntries(
  neighborhoods.map((n) => [n.slug, n])
)

export function neighborhoodsByCity(citySlug: string): NeighborhoodInfo[] {
  return neighborhoods.filter((n) => n.citySlug === citySlug)
}
