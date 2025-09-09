import Link from 'next/link'
import { Code, Cloud, Server, Github, Linkedin, Layers, Zap } from 'lucide-react'
import SkillCard from '@/components/SkillCard'


const skills = [
  {
    icon: Cloud,
    title: 'Expertise Google Cloud Platform (GCP)',
    description:
      'Conception et déploiement de solutions sur GKE, Cloud Run, BigQuery, et gestion des services IAM et Networking.',
  },
]

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center p-4 md:flex-row md:space-x-12">
      {/* Colonne de Gauche : Texte de présentation */}
      <div className="w-full max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark sm:text-5xl lg:text-6xl">
          Bonjour, je suis{' '}
          <span className="text-primary">
            {process.env.NEXT_PUBLIC_AUTHOR_NAME}
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Passionné par le cloud computing, je partage mes projets et mes connaissances au global.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
          <Link
            href="/projets"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
          >
            Portfolio
          </Link>
          <div className="flex gap-x-4">
            <Link href="#" target="_blank" className="text-slate-500 transition-colors hover:text-primary">
              <Github size={28} />
            </Link>
            <Link href="#" target="_blank" className="text-slate-500 transition-colors hover:text-primary">
              <Linkedin size={28} />
            </Link>
          </div>
        </div>
      </div>
      {/* Colonne de Droite : Cartes de compétences */}
      <div className="mt-12 w-full max-w-lg md:mt-0">
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