// src/app/projets/page.tsx
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjetsPage() {
  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark sm:text-5xl">
          Projets
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Ici, c'est tout ce que j'ai fait de concret.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}