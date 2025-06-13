import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "next-themes"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Luka Dekeerle - Portfolio",
  description: "Student Media & Entertainment Business - Creator & Toekomstige Mediaprofessional",
  generator: "luka-portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="w-full">
            <Header />
            <main className="w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
