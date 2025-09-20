import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Land Survey Services in Lagos | Che-val Mapping Consult - Professional Surveying Solutions",
  description:
    "Professional land survey services in Lagos, Nigeria. Expert boundary surveys, topographic mapping, construction surveys, and geospatial solutions. Get accurate surveying for property development, land registration, and engineering projects in Lagos.",
  keywords:
    "land survey services Lagos, surveying Lagos Nigeria, boundary survey Lagos, topographic survey Lagos, construction survey Lagos, property survey Lagos, land surveyor Lagos, geospatial services Lagos, cadastral survey Lagos, engineering survey Lagos",
  authors: [{ name: "Che-val Mapping Consult" }],
  creator: "Che-val Mapping Consult",
  publisher: "Che-val Mapping Consult",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://che-val-mapping.vercel.app",
    title: "Land Survey Services in Lagos | Che-val Mapping Consult",
    description:
      "Professional land survey services in Lagos, Nigeria. Expert boundary surveys, topographic mapping, construction surveys, and geospatial solutions.",
    siteName: "Che-val Mapping Consult",
    images: [
      {
        url: "/images/logo-n-large.jpg",
        width: 1200,
        height: 630,
        alt: "Che-val Mapping Consult - Land Survey Services in Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Land Survey Services in Lagos | Che-val Mapping Consult",
    description:
      "Professional land survey services in Lagos, Nigeria. Expert boundary surveys, topographic mapping, construction surveys, and geospatial solutions.",
    images: ["/images/logo-n-large.jpg"],
  },
  alternates: {
    canonical: "https://che-val-mapping.vercel.app",
  },
  category: "Professional Services",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
