import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Halifax Properties & Investments | East Bay Real Estate",
  description:
    "Your trusted East Bay real estate partner. Get property valuations, buy, or sell with expert guidance from Alex Rivera and the Halifax Properties & Investments team.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>{children}</body>
    </html>
  )
}
