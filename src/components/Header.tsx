'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, UserCircle2 } from 'lucide-react'

const navLinks = [
  { href: '/projets', label: 'Projets' },
  { href: '/cv', label: 'CV' },
  { href: '/articles', label: 'Articles' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) {
      return <div className="h-6 w-6" />
    }
    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Changer de thème"
        className="relative flex h-6 w-6 items-center justify-center"
      >
        <span className="sr-only">Changer de thème</span>
        <Sun className={`absolute transition-all duration-500 ${ theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0' }`} />
        <Moon className={`absolute transition-all duration-500 ${ theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0' }`} />
      </button>
    )
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-card-light/80 text-foreground-light shadow-md backdrop-blur-lg transition-colors duration-500 dark:bg-card-dark/80 dark:text-foreground-dark">
        <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:grid md:grid-cols-3">
          <div className="justify-self-start md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold transition-colors hover:text-primary">
              <UserCircle2 size={28} />
              <span className="sr-only sm:not-sr-only">
                {process.env.NEXT_PUBLIC_AUTHOR_NAME}
              </span>
            </Link>
          </div>
          <div className="hidden justify-self-center md:flex md:gap-8 md:col-span-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${ pathname === link.href ? 'text-primary' : 'hover:text-primary' }`}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-end md:justify-self-end md:col-span-1">
            <div className="flex items-center gap-4">
              <button>🇫🇷</button>
              {renderThemeChanger()}
              <button className="md:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Ouvrir le menu">
                <Menu />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Le menu mobile (overlay) avec les couleurs corrigées */}
      <div
        className={`fixed inset-0 z-[100] transform bg-background-light text-foreground-light transition-transform duration-300 dark:bg-background-dark dark:text-foreground-dark md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Fermer le menu">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 pt-16">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`text-3xl transition-colors ${ pathname === link.href ? 'text-primary' : 'hover:text-primary' }`} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}