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
  title: "Haven Realty | Luxury California Properties",
  description:
    "Discover exceptional properties across California. From stunning beachfront estates to modern urban lofts, find your dream home with Haven Realty.",
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
