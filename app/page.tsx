"use client"

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="min-h-screen bg-[#121212]">
        <ErrorBoundary>
          <Header />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </ErrorBoundary>
      </main>
    </ThemeProvider>
  )
}
