'use client'

import Link from "next/link";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="py-6 border-b border-zinc-800 sticky top-0 bg-background z-50">
      <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Shawn Birring</Link>
        <nav className="flex space-x-4 text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
