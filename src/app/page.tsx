import Header from "@/components/header"
import HeroSearch from "@/components/hero-search"
import FeaturedListings from "@/components/featured-listings"
import MarketStats from "@/components/market-stats"
import WhyUs from "@/components/why-us"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSearch />
        <FeaturedListings />
        <MarketStats />
        <WhyUs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
