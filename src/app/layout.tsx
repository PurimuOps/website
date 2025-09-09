import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio de Paul DAM QUANG THANH',
  description: 'Développeur passionné par le Cloud et le Web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col transition-colors duration-500">
            <Header />
            <main className="container mx-auto flex flex-grow px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}