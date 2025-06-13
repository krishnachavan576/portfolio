"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-teal-400 font-mono text-xl">&lt;/&gt;</span>
              <span className="font-bold text-xl">KrishnaChavan</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Java Developer with expertise in Spring Boot and web technologies.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://github.com/krishnachavan576" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors">
                  <Github className="h-4 w-4 text-teal-400" />
                </div>
              </Link>
              <Link href="https://linkedin.com/in/krishna576" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-teal-400" />
                </div>
              </Link>
              <Link href="mailto:krishnachavan8866@gmail.com">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors">
                  <Mail className="h-4 w-4 text-teal-400" />
                </div>
              </Link>
              <Link href="tel:9021447174">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center hover:bg-teal-500/20 transition-colors">
                  <Phone className="h-4 w-4 text-teal-400" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-sm text-muted-foreground hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-sm text-muted-foreground hover:text-teal-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-teal-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-sm text-muted-foreground">krishnachavan8866@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-sm text-muted-foreground">9021447174</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-sm text-muted-foreground">Jalna, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Krishna Chavan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
