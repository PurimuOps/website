import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl py-12">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.summary}</p>
    </article>
  )
}