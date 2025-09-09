// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 text-center">
      <div className="container mx-auto">
        <p>&copy; 2025 {process.env.NEXT_PUBLIC_AUTHOR_NAME}. Tous droits réservés.</p>
      </div>
    </footer>
  )
}