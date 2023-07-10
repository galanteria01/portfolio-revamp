import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import { Metadata } from 'next'
import NextThemeProvider from '@/provider/next-theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shoury Sharma',
  description: 'A concise portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  )
}
