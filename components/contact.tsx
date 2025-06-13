"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, subject, message } = formData

    const fullMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    const encodedMessage = encodeURIComponent(fullMessage)

    // Replace with your actual WhatsApp number (with country code, no +)
    const whatsappNumber = "919021447174"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")

    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-500 mb-4">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let&apos;s talk about your project</h3>
            <p className="text-muted-foreground">
              Feel free to reach out if you want to collaborate with me, or simply have a chat.
            </p>

            <div className="space-y-4">
              <Card className="border-border/40 bg-black/20 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">krishnachavan8866@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-black/20 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-sm text-muted-foreground">9021447174</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-black/20 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">Jalna, Maharashtra, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-border/40 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              <CardDescription>Fill out the form below to send me a message</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 border-border/40"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-background/50 border-border/40"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="bg-background/50 border-border/40"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-background/50 border-border/40 min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute -z-10 bottom-0 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]"></div>
    </section>
  )
}
