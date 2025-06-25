'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { FaFileAlt } from "react-icons/fa"
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineFolderOpen, HiOutlineMail } from "react-icons/hi"

const sections = [
  { id: "projects", label: "Projects", emoji: "📁", icon: <HiOutlineFolderOpen /> },
  { id: "experience", label: "Experience", emoji: "💼", icon: <HiOutlineBriefcase /> },
  { id: "education", label: "Education", emoji: "🎓", icon: <HiOutlineAcademicCap /> },
  { id: "contact", label: "Contact", emoji: "📞", icon: <HiOutlineMail /> },
  { id: "resume", label: "Résumé", emoji: "📄", icon: <FaFileAlt /> },
]

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <header className="py-6 border-b border-zinc-800 sticky top-0 bg-background z-50">
      <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Shawn Birring</Link>
        <nav className="flex space-x-4 text-xl text-muted-foreground">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.id === "resume" ? "/resume.pdf" : `#${section.id}`}
              target={section.id === "resume" ? "_blank" : "_self"}
              rel={section.id === "resume" ? "noopener noreferrer" : undefined}
              className="hover:text-primary transition-colors"
              aria-label={section.label}
              title={section.label}
            >
              {isMobile ? section.emoji : section.icon}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
