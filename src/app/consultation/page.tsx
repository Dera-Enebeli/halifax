import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"
import LeadFunnel from "@/components/lead-funnel"

export default function ConsultationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-20">
        <LeadFunnel />
      </main>
      <Footer />
    </>
  )
}
