import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maya Reynolds | Psychologist, Santa Monica",
  description: "Warm, grounded therapy for thoughtful, high-achieving adults ready to feel more at ease in their lives.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
