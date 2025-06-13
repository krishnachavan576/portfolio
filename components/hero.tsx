"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-teal-400 text-xl font-medium">Hey</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              I&apos;m <span className="text-teal-400">Krishna</span>,
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Java Developer</h1>
          </div>
          <p className="text-muted-foreground max-w-md">
            Skilled in understanding business logic, issues and opportunities in the context of requirements and
            resolving solutions that enable organizations to achieve their business goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500/10">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/oip.jpg"
                alt="Krishna Chavan - Java Developer"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
          </div>
          <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border-2 border-teal-500/50 rounded-lg max-w-md mx-auto"></div>
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px]"></div>
    </section>
  )
}
