"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Billing System",
      description:
        "The main objective of this Billing System Project is to manage the details of Transaction History, Payment Bills, and Transaction Status.",
      details:
        "The purpose of this project is to directly reduce manual effort and efficiently store transaction data for managing transaction-related tasks.",
      technologies: ["Spring Boot", "MySQL"],
      image: "/projectImg/Billing-System.jpg",
      github: "https://github.com/krishnachavan576/Job-Payment-Application",
    },
    {
      title: "ATM Management System",
      description:
        "Developed an ATM management application in Java with functionalities including user authentication (login and signup), account balance checking, withdrawals, deposits, and account detail modification.",
      details:
        "Employed secure coding practices to ensure data confidentiality and integrity, and optimized the application for smooth and efficient user transactions.",
      technologies: ["Java", "MySQL"],
      image: "/projectImg/ATMManagementSystem.jpg",
      github: "https://github.com/krishnachavan576/ATM-Project-",
    },
    {
      title: "Hotel Management System",
      description:
        "Designed and implemented a Hotel Management System in Java, allowing efficient handling of customer details, room booking, and occupancy management.",
      details:
        "Key functionalities include customer data storage, room allocation, tracking the number of occupants per room, and streamlined reservation processing to enhance overall operational efficiency.",
      technologies: ["Spring Boot", "MySQL"],
      image: "/projectImg/HotelManagementSystem.jpg",
      github: "https://github.com/krishnachavan576/Student-Management-System",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-500 mb-4">Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">My Recent Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-border/40 bg-black/20 backdrop-blur-sm overflow-hidden flex flex-col">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-teal-500 text-teal-500 hover:bg-teal-500/10">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"></div>
    </section>
  )
}
