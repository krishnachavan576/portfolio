"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "BSc",
      institution: "Rajkunwar College Jalna",
      location: "Jalna, India",
      period: "2021-2024",
      percentage: "63.00",
    },
    {
      degree: "12th",
      institution: "Jijamata College Jalna",
      location: "Jalna, India",
      period: "2018-2020",
      percentage: "65.85",
    },
    {
      degree: "10th",
      institution: "R.M.V School Nandapur",
      location: "Jalna, India",
      period: "2017-2018",
      percentage: "65.40",
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-500 mb-4">Education</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Academic Background</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="border-border/40 bg-black/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                  <div className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-400">
                    <Calendar className="mr-1 h-3 w-3" />
                    {item.period}
                  </div>
                </div>
                <CardDescription className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  {item.institution}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {item.location}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Percentage:</span>
                  <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 rounded-full"
                      style={{ width: `${Number.parseFloat(item.percentage)}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute -z-10 bottom-0 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]"></div>
    </section>
  )
}
