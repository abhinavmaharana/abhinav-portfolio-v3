"use client"

import { metadata } from './metadata';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname =  usePathname();
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if(isLoading) return
  }, [isLoading])

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.png" /> 
      </Head>
      <body  className={inter.className}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)}/>
        ) : (
          <>
            {children}
          </>
        )}
        <Analytics />
      </body>
    </html>
  )
}
