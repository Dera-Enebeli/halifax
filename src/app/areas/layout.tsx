import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  )
}
