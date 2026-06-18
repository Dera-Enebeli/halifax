export interface Testimonial {
  name: string
  city: string
  quote: string
  rating: number
  role: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    city: "Oakland",
    quote:
      "Geoffrey made buying our first home in Oakland feel easy. He knew every neighborhood, found us exactly what we wanted, and negotiated a price we were thrilled with.",
    rating: 5,
    role: "First-Time Buyer",
  },
  {
    name: "David & Linda R.",
    city: "Walnut Creek",
    quote:
      "We worked with Geoffrey to sell our home of 25 years. His market analysis was spot-on, the staging advice was invaluable, and we sold for above asking in under two weeks.",
    rating: 5,
    role: "Sellers",
  },
  {
    name: "Michelle T.",
    city: "Dublin",
    quote:
      "I needed a property valuation for refinancing and Geoffrey provided a thorough, well-documented analysis. He was professional, responsive, and genuinely helpful throughout.",
    rating: 5,
    role: "Homeowner",
  },
  {
    name: "James K.",
    city: "Berkeley",
    quote:
      "After a bad experience with another agent, Geoffrey restored my faith in real estate professionals. He was honest about what our home was worth and delivered exactly what he promised.",
    rating: 5,
    role: "Seller",
  },
  {
    name: "Angela P.",
    city: "Pleasanton",
    quote:
      "Geoffrey helped us find our dream home in Pleasanton when we were relocating from out of state. He toured properties on our behalf, sent detailed video walkthroughs, and made the whole process seamless.",
    rating: 5,
    role: "Buyer",
  },
]
