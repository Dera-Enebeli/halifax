import UtilityBar from "@/components/utility-bar"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SearchFilterBar from "@/components/search-filter-bar"
import CategoryCards from "@/components/category-cards"
import FeaturedProperties from "@/components/featured-properties"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <HeroSection />
        <SearchFilterBar />
        <CategoryCards />
        <FeaturedProperties />
      </main>
      <Footer />
    </>
  )
}
