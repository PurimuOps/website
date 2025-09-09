import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './Providers' // <-- Importer

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paul DAM QUANG THANH',
  description: 'Développeur passionné par le Cloud et le Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}