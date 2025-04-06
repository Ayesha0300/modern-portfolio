"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Learn Agentic AI",
      description:
        "Contributed to the development of complex agentic AI systems utilizing OpenAI Agents SDK, Memory, Multi-Context Processing (MCP), Knowledge Graphs, Docker, and Kubernetes.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["OpenAI Agents SDK", "Docker", "Kubernetes", "Knowledge Graphs", "MCP"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "EduSmart: Personalized E-Learning",
      description:
        "Developed a student chatbot to interact with students, create profiles, provide personalized content, and conduct evaluations using Next.js, Open Canvas, LangGraph, LangChain, and Neo4j AuraDB.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "LangGraph", "LangChain", "Neo4j AuraDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "LangGraph Agents Template",
      description:
        "Contributed to a starter template for building multi-agent systems, facilitating the development of complex AI agent frameworks with modern architecture patterns.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["LangGraph", "Python", "TypeScript", "AI Agents"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ]

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
      id="projects"
      ref={sectionRef}
      className="py-20 opacity-0 translate-y-4 transition-all duration-700 relative"
    >
      {/* Glowing orb background effect */}
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/50 text-primary border border-primary/20 backdrop-blur-sm">
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects showcasing my expertise in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-secondary/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 mesh-grid opacity-30" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-white/5 text-primary border-white/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="hover:bg-white/5 hover:text-white" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-white/5 hover:text-white" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

