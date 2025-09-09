export default function Footer() {
  return (
    <footer className="bg-card-light py-6 text-center text-slate-600 transition-colors duration-300 dark:bg-card-dark dark:text-slate-400">
      <div className="container mx-auto">
        <p>
          &copy; 2025 {process.env.NEXT_PUBLIC_AUTHOR_NAME}. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  )
}