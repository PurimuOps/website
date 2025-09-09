// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header' // <--- 1. Importer le Header
import Footer from '@/components/Footer' // <--- 2. Importer le Footer

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio de [Votre Nom]', // Pensez à changer ça
  description: 'Développeur passionné par le Cloud et le Web', // et ça
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark"> {/* On met 'dark' par défaut */}
      <body
        className={`${inter.className} bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50 antialiased`}
      >
        <Header /> {/* <--- 3. Placer le Header ici */}
        <main className="container mx-auto px-4 py-8">
            {children} {/* Le contenu de la page viendra ici */}
        </main>
        <Footer /> {/* <--- 4. Placer le Footer ici */}
      </body>
    </html>
  )
}