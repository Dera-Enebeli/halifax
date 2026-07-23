import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://HalifaxProperties.org"
const gaId = process.env.NEXT_PUBLIC_GA_ID || ""

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#cc2032",
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Halifax Properties & Investments | East Bay Real Estate",
  description:
    "East Bay real estate with Halifax Properties & Investments. Buy, sell, or get a property valuation. Led by Geoffrey Enebly — your trusted East Bay real estate agent.",
  icons: {
    icon: "/favicon-logo.svg",
    apple: "/main-logo.png?v=2",
  },
  openGraph: {
    title: "Halifax Properties & Investments | East Bay Real Estate",
    description:
      "East Bay real estate with Halifax Properties & Investments. Buy, sell, or get a property valuation.",
    url: baseUrl,
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
  robots: {
    index: true,
    follow: true,
  },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${baseUrl}/#organization`,
      name: "Halifax Properties & Investments",
      description: "East Bay real estate — buy, sell, or value your home with Geoffrey Enebly.",
      url: baseUrl,
      image: `${baseUrl}/main-logo.png?v=2`,
      telephone: "+15105075088",
      email: "Enebly@aol.com",
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-18:00",
      sameAs: [
        "https://www.facebook.com/geffreyeneblyrealestate",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "7442 Hillmont Dr",
        addressLocality: "Oakland",
        addressRegion: "CA",
        postalCode: "94605",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Oakland" },
        { "@type": "City", name: "Berkeley" },
        { "@type": "City", name: "Walnut Creek" },
        { "@type": "City", name: "Dublin" },
        { "@type": "City", name: "Pleasanton" },
        { "@type": "City", name: "Fremont" },
        { "@type": "City", name: "San Leandro" },
        { "@type": "City", name: "Hayward" },
        { "@type": "City", name: "Richmond" },
        { "@type": "City", name: "Concord" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "12",
        bestRating: "5",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Halifax Solutions Inc",
      },
      agent: {
        "@type": "RealEstateAgent",
        name: "Geoffrey Enebly",
        telephone: "+15105075088",
        email: "Enebly@aol.com",
        knowsAbout: "East Bay real estate",
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Oakland" },
          { "@type": "City", name: "Berkeley" },
          { "@type": "City", name: "Walnut Creek" },
          { "@type": "City", name: "Dublin" },
          { "@type": "City", name: "Pleasanton" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "About", item: `${baseUrl}/about` },
        { "@type": "ListItem", position: 3, name: "Free Home Valuation", item: `${baseUrl}/free-valuation` },
        { "@type": "ListItem", position: 4, name: "Consultation", item: `${baseUrl}/consultation` },
        { "@type": "ListItem", position: 5, name: "Free Home Valuation", item: `${baseUrl}/free-valuation` },
        { "@type": "ListItem", position: 6, name: "Oakland Real Estate", item: `${baseUrl}/areas/oakland` },
        { "@type": "ListItem", position: 7, name: "Berkeley Real Estate", item: `${baseUrl}/areas/berkeley` },
        { "@type": "ListItem", position: 8, name: "Walnut Creek Real Estate", item: `${baseUrl}/areas/walnut-creek` },
        { "@type": "ListItem", position: 9, name: "Dublin Real Estate", item: `${baseUrl}/areas/dublin` },
        { "@type": "ListItem", position: 10, name: "Pleasanton Real Estate", item: `${baseUrl}/areas/pleasanton` },
      ],
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/#review`,
      author: { "@type": "Person", name: "Sarah M." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      itemReviewed: { "@type": "RealEstateAgent", "@id": `${baseUrl}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {gaId && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-crimson focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold focus:outline-none">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
