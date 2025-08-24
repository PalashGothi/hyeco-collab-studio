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
    icon: "/logo.jpeg", // make sure this file exists in /public
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
