import type { Metadata, Viewport } from "next"
import "./globals.css"
import type React from "react"
import { Toaster } from "@/components/ui/toaster"

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://darinreallyhatesus.vercel.app"),
  title: {
    default: "LaHood Accountability | Rhetoric vs. Reality",
    template: "%s | LaHood Accountability"
  },
  description:
    "Examining the contradictions between Rep. Darin LaHood's promises and actions. Documenting his voting record and its impact on Illinois' 16th District with sourced evidence.",
  keywords: [
    "Darin LaHood",
    "Illinois 16th District",
    "voting record",
    "political accountability",
    "Congress",
    "fiscal responsibility",
    "healthcare",
    "election integrity",
    "Congressional accountability",
    "Illinois politics"
  ],
  authors: [{ name: "LaHood Accountability Project" }],
  creator: "LaHood Accountability Project",
  publisher: "LaHood Accountability Project",
  openGraph: {
    title: "LaHood Accountability | Rhetoric vs. Reality",
    description: "Examining Rep. Darin LaHood's voting record and contradictions with sourced evidence",
    type: "website",
    locale: "en_US",
    siteName: "LaHood Accountability",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaHood Accountability | Rhetoric vs. Reality",
    description: "Examining Rep. Darin LaHood's voting record and contradictions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
