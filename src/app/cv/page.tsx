// src/app/cv/page.tsx

import { cvData } from '@/data/cv'
import TimelineItem from '@/components/TimelineItem'

export default function CVPage() {
  return (
    <div className="mx-auto max-w-4xl py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Mon parcours
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Un aperçu de mon expérience, de mes certifications et de ma formation.
        </p>
      </div>

      {/* La Timeline */}
      <div className="relative mt-16">
        {/* La ligne verticale principale (uniquement pour les grands écrans) */}
        <div className="absolute left-[7px] top-0 hidden h-full w-0.5 -translate-x-1/2 bg-slate-300 dark:bg-slate-700 md:block"></div>
        
        {/* La liste des jalons */}
        <div className="flex flex-col gap-12">
          {cvData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}