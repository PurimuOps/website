import type { ElementType } from 'react'

interface SkillCardProps {
  icon: ElementType
  title: string
  description: string
}

export default function SkillCard({
  icon: Icon,
  title,
  description,
}: SkillCardProps) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-accent-500">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 text-accent-500">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-slate-50">{title}</h3>

      <p className="mt-2 text-base text-slate-400">{description}</p>
    </div>
  )
}