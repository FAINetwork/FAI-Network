import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "FAI Network — Modular AI Agents for DeFi",
  description:
    "FAI Network composes modular AI Units with on-chain attestations and FAICore API — build auditable, agent-driven DeFi applications. Join the developer waitlist.",
  generator: "FAI Network",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "FAI Network — Modular AI Agents for DeFi",
    description:
      "FAI Network composes modular AI Units with on-chain attestations and FAICore API — build auditable, agent-driven DeFi applications.",
    type: "website",
    url: "https://fainetwork.xyz",
    images: [
      {
        url: "/social-preview.png", // 👈 Place this file in your /public folder
        width: 1200,
        height: 630,
        alt: "FAI Network — Modular AI Agents for DeFi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAI Network — Modular AI Agents for DeFi",
    description:
      "FAI Network composes modular AI Units with on-chain attestations and FAICore API — build auditable, agent-driven DeFi applications.",
    images: ["/social-preview.png"], // 👈 Twitter also needs this
  },
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
