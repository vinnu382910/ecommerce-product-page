import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/lib/context/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/header"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lumina Store - Premium Modern Lifestyle Products",
  description:
    "Discover our collection of premium goods designed for the modern lifestyle. Shop bags, accessories, footwear and more.",
  keywords: "lumina store, premium products, modern lifestyle, e-commerce, online shopping",
  authors: [{ name: "Lumina Store" }],
  openGraph: {
    title: "Lumina Store - Premium Modern Lifestyle Products",
    description: "Discover our collection of premium goods designed for the modern lifestyle.",
    type: "website",
    locale: "en_US",
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
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#E87654",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
