import Link from 'next/link'
import { Layers, Zap, Cloud, Github, Linkedin } from 'lucide-react'
import SkillCard from '@/components/SkillCard'

// On réintroduit les compétences
const skills = [
  {
    icon: Cloud,
    title: 'Expertise Google Cloud (GCP)',
    description:
      'Conception et déploiement de solutions sur GKE, Cloud Run, BigQuery, et gestion des services IAM et Networking.',
  },
  {
    icon: Layers,
    title: 'Infrastructure as Code & Conteneurs',
    description:
      "Déploiement d'environnements reproductibles et scalables avec Terraform, Docker et Kubernetes.",
  },
  {
    icon: Zap,
    title: 'Automatisation CI/CD & Observabilité',
    description:
      'Création de pipelines de déploiement continu (Cloud Build, GitLab CI) et monitoring avec Prometheus & Grafana.',
  },
]

export default function Home() {
  return (
    // Le conteneur principal qui gère toute la mise en page
    <section className="flex h-full w-full flex-col items-center justify-center gap-12 md:flex-row">
      
      {/* Colonne de Gauche : Texte de présentation */}
      <div className="w-full max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark sm:text-5xl lg:text-6xl">
          Bonjour, je suis{' '}
          <span className="text-primary">
            {process.env.NEXT_PUBLIC_AUTHOR_NAME}
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Passionné par le cloud computing, je partage mes projets et ma
          connaissance sur GCP.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
          <Link
            href="/projets"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
          >
            Voir mes projets
          </Link>
          <div className="flex gap-x-4">
            <Link
              href="https://github.com/Purimidiaru"
              target="_blank"
              className="text-slate-500 transition-colors hover:text-primary"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/paul-dam-quang-thanh"
              target="_blank"
              className="text-slate-500 transition-colors hover:text-primary"
            >
              <Linkedin size={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Colonne de Droite : Les SkillCards sont de retour */}
      <div className="w-full max-w-lg">
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