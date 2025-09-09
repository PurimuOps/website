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
    <div className="rounded-lg border border-slate-200 bg-card-light p-6 text-center transition-all duration-300 hover:scale-105 hover:border-primary dark:border-slate-800 dark:bg-card-dark">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-foreground-light dark:text-foreground-dark">
        {title}
      </h3>
      <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  )
}