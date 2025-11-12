import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "LaHood Accountability | Rhetoric vs. Reality",
  description:
    "Examining the contradictions between Rep. Darin LaHood's promises and actions. Documenting his voting record and its impact on Illinois' 16th District with sourced evidence.",
  keywords: "Darin LaHood, Illinois 16th District, voting record, political accountability, Congress, fiscal responsibility, healthcare, election integrity",
  authors: [{ name: "LaHood Accountability Project" }],
  openGraph: {
    title: "LaHood Accountability | Rhetoric vs. Reality",
    description: "Examining Rep. Darin LaHood's voting record and contradictions with sourced evidence",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
