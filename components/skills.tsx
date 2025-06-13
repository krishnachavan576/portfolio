"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, Layers, MonitorSmartphone } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6 text-teal-500" />,
      items: ["Java", "JavaScript", "HTML5", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="h-6 w-6 text-teal-500" />,
      items: ["Spring Boot", "Spring MVC", "Spring Security", "React"],
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-teal-500" />,
      items: ["MySQL", "Oracle", "SQL"],
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-teal-500" />,
      items: ["Servlet", "JSP", "REST API", "JDBC"],
    },
    {
      category: "Tools & Servers",
      icon: <Server className="h-6 w-6 text-teal-500" />,
      items: ["Tomcat", "Git", "Maven"],
    },
    {
      category: "Operating Systems",
      icon: <MonitorSmartphone className="h-6 w-6 text-teal-500" />,
      items: ["Windows"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-500 mb-4">
            <span className="text-teal-400 font-mono">&lt;/&gt;</span> Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">My Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border-border/40 bg-black/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="font-semibold text-lg">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mb-3">
              <div className="text-teal-500 font-bold">Spring</div>
            </div>
            <span className="text-sm text-center">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
              <div className="text-blue-500 font-bold">MySQL</div>
            </div>
            <span className="text-sm text-center">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3">
              <div className="text-yellow-500 font-bold">JS</div>
            </div>
            <span className="text-sm text-center">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mb-3">
              <div className="text-teal-500 font-bold">Java</div>
            </div>
            <span className="text-sm text-center">Java</span>
          </div>
        </div>
      </div>

      <div className="absolute -z-10 top-1/2 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]"></div>
    </section>
  )
}
