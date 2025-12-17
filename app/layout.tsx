import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'CBT & Mindfulness Therapy | Sarah Johnson, Licensed Therapist',
  description: 'Experience the powerful combination of CBT and mindfulness therapy. Book your consultation to begin your journey toward lasting peace and emotional well-being.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}