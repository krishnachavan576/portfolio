"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-500 mb-4">About Me</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Get to know me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-teal-500/30 bg-black/20">
              <Image
                src="/images/developer-workspace.jpeg"
                alt="Developer workspace"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border-2 border-teal-500/50 rounded-lg"></div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="font-mono text-teal-400">
              <div>Hello!</div>
              <div className="mt-2">I&apos;m Krishna Chavan, a Java Developer based in Jalna, India.</div>
            </div>

            <p>
              Keeping in mind the present trends of jobs in IT sector, I inspire to take active participation in
              developing new projects and being a part of this knowledge based industry by using the latest technology
              and thereby in the process grooming to meet the future necessities.
            </p>

            <p>
              I&apos;m skilled in understanding business logic, issues and opportunities in the context of the
              requirements and resolve solutions that enable the organization to achieve its business goals.
            </p>

            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-teal-500"></div>
                <span>Understand and analyze complex functional requirements</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-teal-500"></div>
                <span>Self-motivated with strong problem solving abilities</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-teal-500"></div>
                <span>Responsible for building web applications and software solutions</span>
              </li>
            </ul>

            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => alert("CV download will be available soon!")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -z-10 bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]"></div>
    </section>
  )
}
