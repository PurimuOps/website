// src/app/page.tsx

import Link from 'next/link'
import { Code, Cloud, Server, Github, Linkedin } from 'lucide-react'
import SkillCard from '@/components/SkillCard'

const skills = [
  {
    icon: Code,
    title: 'Développement Frontend',
    description: 'Interfaces modernes et performantes avec React, Next.js et TypeScript.',
  },
  {
    icon: Server,
    title: 'Développement Backend',
    description: 'API RESTful robustes et scalables avec Node.js, Express et SQL/NoSQL.',
  },
  {
    icon: Cloud,
    title: 'Architecture Cloud & DevOps',
    description: 'Déploiement et gestion d’infrastructures sur AWS/GCP, Docker et CI/CD.',
  },
]

export default function Home() {
  return (

    <section className="flex min-h-[calc(100vh-88px)] flex-col items-center justify-center p-4 md:flex-row md:space-x-12">
      
      <div className="w-full max-w-xl text-center md:w-1/2 md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
          Bonjour, je suis{' '}
          <span className="text-accent-500">
            {process.env.NEXT_PUBLIC_AUTHOR_NAME}
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Passionné par le cloud computing, je partage mes projets et ma connaissance sur GCP
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
          <Link
            href="/projets"
            className="rounded-md bg-accent-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-400"
          >
            Voir mes projets
          </Link>
          <div className="flex gap-x-4">
            <Link href="https://github.com/votre-pseudo" target="_blank" className="text-slate-500 hover:text-accent-500">
              <Github size={28} />
            </Link>
            <Link href="https://linkedin.com/in/votre-profil" target="_blank" className="text-slate-500 hover:text-accent-500">
              <Linkedin size={28} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full max-w-lg md:mt-0 md:w-1/2">
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}