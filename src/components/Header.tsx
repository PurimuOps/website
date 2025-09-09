'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Vos liens de navigation
const navLinks = [
  { href: '/projets', label: 'Projets' },
  { href: '/cv', label: 'CV' },
  { href: '/articles', label: 'Articles' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-slate-900/75 text-slate-50 shadow-md backdrop-blur-lg">
      <nav className="container mx-auto flex h-20 items-center justify-center p-4">
        {/* Le conteneur pour les liens */}
        <div className="flex items-center gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium text-slate-50 transition-colors ${
                pathname === link.href
                  ? 'text-accent-500'
                  : 'hover:text-accent-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}