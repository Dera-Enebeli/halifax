export interface CityInfo {
  slug: string
  name: string
  tagline: string
  description: string
  keyNeighborhoods: string[]
  highlights: string[]
  schoolNote: string
  commuteNote: string
  whyGeoffrey: string
}

export const cities: CityInfo[] = [
  {
    slug: "oakland",
    name: "Oakland",
    tagline: "East Bay's cultural heartbeat",
    description:
      "Oakland offers a vibrant mix of craftsman bungalows, modern condos, and hillside estates with sweeping bay views. From the lively downtown arts scene to the quiet tree-lined streets of Rockridge and Montclair, Oakland has a neighborhood for every lifestyle. The real estate market here is dynamic, with strong demand and solid appreciation potential.",
    keyNeighborhoods: ["Rockridge", "Montclair", "Piedmont Avenue", "Temescal", "Adams Point", "Grand Lake"],
    highlights: [
      "Walkable downtown with award-winning restaurants and theaters",
      "Easy BART access to San Francisco in 15-20 minutes",
      "Lake Merritt — urban oasis with trails, boating, and farmers markets",
      "Strong arts and culture scene with galleries, museums, and live music venues",
      "Diverse architecture from Victorians to mid-century modern",
    ],
    schoolNote:
      "Oakland serves families through Oakland Unified School District with several highly rated options, including Hillcrest Elementary and Oakland Technical High School.",
    commuteNote:
      "Downtown San Francisco in 15 min via BART. Berkeley in 10 min. Walnut Creek in 25 min.",
    whyGeoffrey:
      "I know Oakland block by block. Whether you're looking for a starter home in Temescal or a view property in Montclair, I'll help you find the right fit at the right price.",
  },
  {
    slug: "berkeley",
    name: "Berkeley",
    tagline: "Where community meets innovation",
    description:
      "Berkeley is known for its progressive spirit, UC Berkeley campus, and stunning collection of early 20th-century homes. The market ranges from cozy bungalows near the Marina to grand North Berkeley homes with bay views. Berkeley real estate holds its value well, driven by the university and consistent demand from professionals working in tech, education, and healthcare.",
    keyNeighborhoods: ["North Berkeley", "Elmwood", "Southside", "Berkeley Hills", "Claremont", "West Berkeley"],
    highlights: [
      "Top-ranked UC Berkeley drives a vibrant intellectual and cultural community",
      "Gourmet Ghetto — birthplace of California cuisine, world-class dining",
      "Berkeley Marina with waterfront trails, sailing, and panoramic Golden Gate views",
      "Tilden Regional Park — hiking, swimming, and nature right in the hills",
      "Strong local food scene with farmers markets and artisan producers",
    ],
    schoolNote:
      "Berkeley Unified School District is highly regarded, with schools like Berkeley High School consistently ranked among the top in California.",
    commuteNote:
      "Downtown San Francisco in 20 min via BART. Oakland in 10 min. Easy access to I-80 and I-580.",
    whyGeoffrey:
      "I've helped dozens of families buy and sell in Berkeley. From navigating the competitive bidding wars to finding hidden gems, I know this market inside and out.",
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    tagline: "Suburban elegance with city convenience",
    description:
      "Walnut Creek offers a premier suburban lifestyle with an upscale downtown, top-rated schools, and easy access to both San Francisco and the East Bay. The real estate market features everything from luxury condos downtown to sprawling family homes in the surrounding hills. It's one of the most desirable communities in Contra Costa County for families and professionals alike.",
    keyNeighborhoods: ["Downtown Walnut Creek", "Northgate", "Larkey", "Saranap", "Creek District", "Walmond"],
    highlights: [
      "Award-winning downtown shopping and dining at Broadway Plaza",
      "Top-rated public and private schools in Contra Costa County",
      "Heather Farm Park — 102 acres with gardens, trails, and sports facilities",
      "Mount Diablo State Park — hiking, biking, and panoramic views from the summit",
      "Less than 30 minutes to BART at Walnut Creek Station",
    ],
    schoolNote:
      "Walnut Creek is served by the highly rated Walnut Creek School District and Las Lomas High School, consistently among the best in the region.",
    commuteNote:
      "San Francisco in 35 min via BART. Oakland in 20 min. Pleasanton in 15 min. Easy I-680 access.",
    whyGeoffrey:
      "Walnut Creek is one of my favorite markets. I know the inventory trends, the school zones, and the neighborhoods that fit different family needs. I'll help you find the right home in the right part of town.",
  },
  {
    slug: "dublin",
    name: "Dublin",
    tagline: "Family-friendly living in the Tri-Valley",
    description:
      "Dublin is one of the fastest-growing cities in the East Bay, known for its excellent schools, family-friendly neighborhoods, and strategic location at the crossroads of I-580 and I-680. The housing market offers modern townhomes, spacious single-family homes, and new construction developments. Dublin attracts families and professionals looking for more space and great schools without sacrificing commute convenience.",
    keyNeighborhoods: ["Dublin Ranch", "Emerald Vista", "East Dublin", "West Dublin", "Fallon", "Central Dublin"],
    highlights: [
      "Top-rated Dublin Unified School District — one of the best in Alameda County",
      "Sharkee's games zone and The Wave water park for family fun",
      "Emerald Glen Park — 40+ acres with sports fields, playgrounds, and concert venue",
      "Direct BART access at Dublin/Pleasanton Station",
      "Growing dining and shopping scene with new developments throughout the city",
    ],
    schoolNote:
      "Dublin Unified School District is consistently ranked among the top districts in Alameda County, with schools like Dublin High earning statewide recognition.",
    commuteNote:
      "San Francisco in 45 min via BART or I-580. Pleasanton in 5 min. Livermore in 10 min. Easy access to 680/580 interchange.",
    whyGeoffrey:
      "Dublin's growth has created incredible opportunities for both buyers and sellers. I've been tracking this market closely and can help you navigate the competitive landscape with confidence.",
  },
  {
    slug: "pleasanton",
    name: "Pleasanton",
    tagline: "Small-town charm with big-city proximity",
    description:
      "Pleasanton consistently ranks as one of the best places to live in California. With its historic downtown, excellent schools, and beautiful parks, it offers a quality of life that's hard to match. The real estate market is competitive, with well-maintained homes in tree-lined neighborhoods and new construction in the eastern part of the city. Pleasanton attracts discerning buyers who want community, safety, and convenience.",
    keyNeighborhoods: ["Downtown Pleasanton", "Valley Trails", "Cottonwood", "Vintage Hills", "Castlewood", "Mission Hills"],
    highlights: [
      "Historic downtown with boutique shopping, farmers market, and outdoor dining",
      "Top-rated Pleasanton Unified School District — a major draw for families",
      "Shadow Cliffs Regional Recreation Area — swimming, boating, and hiking",
      "Alameda County Fairgrounds — home to the county fair and year-round events",
      "Consistently ranked among the safest cities in California",
    ],
    schoolNote:
      "Pleasanton Unified School District is one of the highest-rated districts in the state, with Amador Valley High School and Foothill High School both receiving national recognition.",
    commuteNote:
      "San Francisco in 40 min via BART or I-580. San Jose in 35 min via I-680. Dublin in 5 min.",
    whyGeoffrey:
      "Pleasanton buyers and sellers expect the best, and I deliver. I've helped families trade up, downsize, and find their perfect first home in this exceptional community. Let me put my local knowledge to work for you.",
  },
]

export const cityBySlug: Record<string, CityInfo> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
)

export const areaRoutes = cities.map((c) => c.slug)
