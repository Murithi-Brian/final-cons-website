import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "FAFS | Fair Agri-Food Systems",
    template: "%s | FAFS",
  },
  description: "Transforming food systems through justice, sustainability, and community empowerment across Africa.",
  keywords: ["agriculture", "food systems", "sustainability", "Africa", "farming", "food justice", "empowerment"],
  authors: [{ name: "FAFS" }],
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fairagrifoodsystems.com",
    siteName: "FAFS - Fair Agri-Food Systems",
    title: "FAFS | Fair Agri-Food Systems",
    description: "Transforming food systems through justice, sustainability, and community empowerment across Africa.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#166534",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <main className="pt-14 sm:pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
