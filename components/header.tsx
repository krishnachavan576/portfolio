"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-teal-400 font-mono text-xl">&lt;/&gt;</span>
          <span className="font-bold text-xl">KrishnaChavan</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className="text-sm hover:text-teal-400 transition-colors" onClick={handleNavClick}>
            Home
          </Link>
          <Link href="#about" className="text-sm hover:text-teal-400 transition-colors" onClick={handleNavClick}>
            About
          </Link>
          <Link href="#skills" className="text-sm hover:text-teal-400 transition-colors" onClick={handleNavClick}>
            Skills
          </Link>
          <Link href="#projects" className="text-sm hover:text-teal-400 transition-colors" onClick={handleNavClick}>
            Projects
          </Link>
          <Link href="#experience" className="text-sm hover:text-teal-400 transition-colors" onClick={handleNavClick}>
            Experience
          </Link>
          <Link href="#contact" className="text-sm hover:text-teal-400 transition-colors" onClick={handleNavClick}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com/krishnachavan576" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/krishna576" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:krishnachavan8866@gmail.com">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/40">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              href="#home"
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={handleNavClick}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={handleNavClick}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={handleNavClick}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={handleNavClick}
            >
              Contact
            </Link>
            <div className="flex items-center gap-2 mt-2 px-4 py-2">
              <Link href="https://github.com/krishnachavan576" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/krishna576" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:krishnachavan8866@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
