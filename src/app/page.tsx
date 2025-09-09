// src/app/page.tsx

import Link from 'next/link'
import { ArrowRight, Github, Linkedin } from 'lucide-react' // On va installer cette librairie d'icônes

export default function Home() {
  return (
    // Section qui prend toute la hauteur visible de l'écran sur desktop
    <section className="flex min-h-[calc(100vh-88px)] items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl">
          Bonjour, je suis{' '}
          <span className="text-cyan-500">
            {process.env.NEXT_PUBLIC_AUTHOR_NAME}
          </span>
        </h1>

        <h2 className="mt-4 text-2xl text-slate-700 dark:text-slate-300">
          Développeur Full-Stack & Spécialiste Cloud
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Passionné par la création d'applications web modernes et robustes, je
          transforme des idées complexes en solutions performantes et
          scalables.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/projets"
            className="rounded-md bg-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            Découvrir mes projets{' '}
            <ArrowRight className="inline h-4 w-4" />
          </Link>
          <div className="flex gap-x-4">
            <Link href="https://github.com/votre-pseudo" target="_blank" className="text-slate-500 hover:text-cyan-500">
              <Github size={28} />
            </Link>
            <Link href="https://linkedin.com/in/votre-profil" target="_blank" className="text-slate-500 hover:text-cyan-500">
              <Linkedin size={28} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}