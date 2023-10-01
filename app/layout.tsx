import Header from '@/components/Navigation/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhinav Maharana',
  description: 'I make websites and provide solutions to real life problems using ML & AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body  className={inter.className}>
        {children}
      </body>
    </html>
  )
}
