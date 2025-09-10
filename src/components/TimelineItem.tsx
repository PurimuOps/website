// src/components/TimelineItem.tsx
import Image from 'next/image'

interface TimelineItemProps {
  item: {
    type: string
    date: string
    title: string
    subtitle: string
    logoUrl?: string
    description: string
  }
}

export default function TimelineItem({ item }: TimelineItemProps) {
  return (
    // Conteneur principal pour un jalon
    <div className="relative pl-12">
      {/* Le "point" sur la timeline */}
      <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark"></div>
      
      {/* La ligne de connexion verticale (pour les petits écrans) */}
      <div className="absolute left-[7px] top-6 h-full w-0.5 -translate-x-1/2 bg-slate-300 dark:bg-slate-700 md:hidden"></div>
      
      {/* Le contenu textuel */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {item.date}
        </span>
        <h3 className="mt-1 text-xl font-bold text-foreground-light dark:text-foreground-dark">
          {item.title}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          {/* On affiche l'image seulement si logoUrl existe */}
          {item.logoUrl && (
            <Image
              src={item.logoUrl}
              alt={`Logo de ${item.subtitle}`}
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
          <p className="text-md font-semibold text-secondary">{item.subtitle}</p>
        </div>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {item.description}
        </p>
      </div>
    </div>
  )
}