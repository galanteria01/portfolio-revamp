'use client'

import DarkModeSwitch from '@/components/dark-mode-switch'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { ThemeProvider } from 'next-themes'

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
  const [mode, setMode] = React.useState<string>('dark');

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }
  return (
    <html className={mode} lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DarkModeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
