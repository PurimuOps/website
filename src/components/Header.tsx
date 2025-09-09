import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-900 text-slate-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo ou Nom */}
        <Link href="/" className="text-xl font-bold hover:text-accent">
          {process.env.NEXT_PUBLIC_AUTHOR_NAME}
        </Link>

        {/* Liens de navigation pour Desktop */}
        <div className="hidden space-x-6 md:flex">
          <Link href="/projets" className="hover:text-accent">
            Projets
          </Link>
          <Link href="/cv" className="hover:text-accent">
            CV
          </Link>
          <Link href="/articles" className="hover:text-accent">
            Articles
          </Link>
        </div>

        {/* Icônes d'action */}
        <div className="flex items-center space-x-4">
          <button>🇫🇷</button>
          <button>☀️</button>
          {/* Menu Burger pour mobile (on le cache pour l'instant) */}
          <button className="md:hidden">☰</button>
        </div>
      </nav>
    </header>
  )
}