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
    "East Bay real estate with Halifax Properties & Investments. Buy, sell, or get a property valuation. Led by Geoffrey Enebeli — your trusted East Bay real estate agent.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Halifax Properties & Investments | East Bay Real Estate",
    description:
      "East Bay real estate with Halifax Properties & Investments. Buy, sell, or get a property valuation.",
    url: "https://real-estate-site-six.vercel.app",
    siteName: "Halifax Properties & Investments",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halifax Properties & Investments | East Bay Real Estate",
    description:
      "East Bay real estate with Halifax Properties & Investments. Buy, sell, or get a property valuation.",
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
