"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Send, MessageSquare, Phone } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 opacity-0 translate-y-4 transition-all duration-700 relative"
    >
      {/* Glowing orb background effect */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "1.2s" }}
      ></div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/50 text-primary border border-primary/20 backdrop-blur-sm">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <CardHeader className="pb-2">
              <div className="bg-white/5 p-2 rounded-lg w-fit mb-2">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-white">Send a Message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-white/30 placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-white/30 placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-white/30 placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-background hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-6">
            <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-2 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:ayeshabashir0300@gmail.com" className="hover:text-white transition-colors">
                      ayeshabashir0300@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-2 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-muted-foreground">Karachi, Pakistan</p>
                </div>
              </div>
            </Card>

            <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-2 rounded-lg text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white">LinkedIn</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://www.linkedin.com/in/ayesha-bashir-60b83b2b1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      linkedin.com/in/ayesha-bashir-60b83b2b1
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-2 rounded-lg text-primary">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white">GitHub</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://github.com/Ayesha0300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      github.com/Ayesha0300
                    </a>
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-2 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+923222893692" className="hover:text-white transition-colors">
                      +92 322 2893692
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

