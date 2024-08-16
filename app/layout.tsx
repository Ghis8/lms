import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Management System',
  icons:{
    icon:{
      url:'/img/LMS.png',
      rel:'icon',
      type:'image/png'
    }
  },
  description: 'A Platform for Online learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
            <ConfettiProvider />
            <ToastProvider />
              {children}
            </body>
      </html>
    </ClerkProvider>
  )
}
