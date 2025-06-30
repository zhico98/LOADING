import type React from "react"
import "./globals.css"

export const metadata = {
  title: "LOADINGCOIN - Retro Token Tracker",
  description: "The most nostalgic cryptocurrency tracker in the metaverse",
    generator: 'v0.dev'
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
