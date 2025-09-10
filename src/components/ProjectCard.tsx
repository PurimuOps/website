'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'

type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  imageUrl: string
  repoUrl: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-card-light shadow-md transition-all duration-300 hover:border-primary dark:border-slate-800 dark:bg-card-dark">
      {/* Lien invisible qui recouvre toute la carte */}
      <Link href={`/projets/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Voir le projet</span>
      </Link>
      
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={`Image pour ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Contenu textuel */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">{project.title}</h3>
        <p className="mt-2 flex-1 text-slate-600 dark:text-slate-400">{project.summary}</p>
        
        {/* Tags de technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Lien GitHub (placé au-dessus du lien principal) */}
      <Link 
        href={project.repoUrl} 
        target="_blank" 
        className="absolute bottom-4 right-4 z-20 text-slate-500 transition-colors hover:text-primary"
        onClick={(e) => e.stopPropagation()} // Empêche le clic de propager au lien principal
      >
        <Github size={24} />
        <span className="sr-only">Voir le code sur GitHub</span>
      </Link>
    </div>
  )
}