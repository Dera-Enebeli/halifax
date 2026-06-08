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
  title: "Halifax Properties & Investments | East Bay Listings & Real Estate",
  description:
    "Find your place in the East Bay. Halifax Properties & Investments offers exclusive access to premium listings across Oakland, Berkeley, Walnut Creek, Dublin, and the entire East Bay. Buy, sell, or get a valuation from the East Bay's trusted real estate partner.",
  openGraph: {
    title: "Halifax Properties & Investments | East Bay Listings & Real Estate",
    description:
      "Find your place in the East Bay. Premium listings across Oakland, Berkeley, Walnut Creek, Dublin, and the entire East Bay.",
    url: "https://real-estate-site-six.vercel.app",
    siteName: "Halifax Properties & Investments",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halifax Properties & Investments | East Bay Listings & Real Estate",
    description:
      "Find your place in the East Bay. Premium listings across Oakland, Berkeley, Walnut Creek, Dublin, and the entire East Bay.",
  },
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
