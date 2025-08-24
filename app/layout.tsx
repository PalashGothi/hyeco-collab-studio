import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hyeco",
  description:
    "A vibrant creative space in Bengaluru. Have Your Expression with Hyeco's multipurpose rooms and creative facilities.",
  keywords:
    "creative studio, multipurpose room, jupiter, venus, saturn, cafe, Bengaluru, creative space",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/android-chrome-192x192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png?v=2",
  },
  manifest: "/site.webmanifest?v=2",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Explicit links for cross-browser + cache busting */}
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png?v=2" />
        <link rel="apple-touch-icon" href="/android-chrome-512x512.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

