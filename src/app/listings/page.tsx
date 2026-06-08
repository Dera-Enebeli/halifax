import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"
import ListingsContent from "./listings-content"

function ListingsFallback() {
  return (
    <div className="max-w-page section-padding py-20 text-center">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto" />
        <div className="h-4 bg-gray-100 rounded w-96 mx-auto" />
      </div>
    </div>
  )
}

export default function ListingsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-20">
        <Suspense fallback={<ListingsFallback />}>
          <ListingsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
