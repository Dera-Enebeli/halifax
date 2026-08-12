import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"
import LeadFunnel from "@/components/lead-funnel"

export const metadata: Metadata = {
  title: "Free Real Estate Consultation | Halifax Properties — East Bay",
  description:
    "Get a free real estate consultation with Geoffrey Enebly. Whether buying, selling, or valuing your East Bay home, get expert advice with zero obligation.",
  openGraph: {
    title: "Free Real Estate Consultation | Halifax Properties — East Bay",
    description:
      "Get a free real estate consultation with Geoffrey Enebly. Buy, sell, or value your East Bay home.",
  },
  twitter: {
    title: "Free Real Estate Consultation | Halifax Properties — East Bay",
    description:
      "Get a free real estate consultation with Geoffrey Enebly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/consultation",
  },
}

export default async function ConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>
}) {
  const { interest } = await searchParams
  const validInterest = interest === "buyer" || interest === "seller" || interest === "homeowner"
    ? interest
    : undefined

  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-20">
        <LeadFunnel interest={validInterest} />
      </main>
      <Footer />
    </>
  )
}
