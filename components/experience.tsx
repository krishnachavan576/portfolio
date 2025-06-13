"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-500 mb-4">
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Work Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-border/40 bg-black/20 backdrop-blur-sm mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Software Developer – Cab Mate Application</CardTitle>
                <div className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-400">
                  <Calendar className="mr-1 h-3 w-3" />
                  Jan 2024 – Dec 2024
                </div>
              </div>
              <CardDescription className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4" />
                Cab Mate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                Played a key role in the ongoing development of Cab Mate, a ride-hailing platform aimed at optimizing
                cab booking and improving user satisfaction.
              </p>
              <p>
                Collaborated within a cross-functional team to enhance core application functionalities, improve UI/UX
                design, and maintain robust system performance across multiple releases.
              </p>
              <p>
                Contributed to backend and frontend development using Java, participating in full software development
                life cycles including planning, coding, testing, and deployment.
              </p>
              <p>
                Gained extensive experience with agile methodologies, attending regular sprint meetings, conducting code
                reviews, and participating in iterative improvements.
              </p>
              <p>
                Tackled real-world challenges related to performance, scalability, and user feedback integration, honing
                strong problem-solving skills and a product-oriented mindset.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Professional Training</CardTitle>
                <div className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-400">
                  <Calendar className="mr-1 h-3 w-3" />
                  Training
                </div>
              </div>
              <CardDescription className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4" />
                NareshIT | Hyderabad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Core Java, JDBC, Servlet, JSP training from NareshIT Hyderabad.</p>
              <p>Oracle SQL training from NareshIT Hyderabad.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute -z-10 top-1/2 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]"></div>
    </section>
  )
}
