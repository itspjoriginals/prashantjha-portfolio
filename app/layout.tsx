import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Prashant Kumar Jha - Frontend Developer",
  description:
    "Portfolio of Prashant Kumar Jha, Frontend Developer with 1 year of experience specializing in React, Next.js, and modern web technologies.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll animation observer
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };
              
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                  }
                });
              }, observerOptions);
              
              document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('.scroll-animate').forEach(el => {
                  observer.observe(el);
                });
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
