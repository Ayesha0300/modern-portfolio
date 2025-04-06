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

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "LinkedIn Profile MCP",
      description:
       "A project focused on enhancing LinkedIn profiles, providing insights and recommendations.",
      image: "/placeholder.svg",
      technologies: ["Claude Desktop", "MCP framework"],
      githubUrl: "https://github.com/Ayesha0300/linkedin-profile-mcp",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "MCP-Server-Project",
      description:
        "A simple MCP tool for extracting and converting Wikipedia article content to Markdown using a FastMCP server. Built with uv for fast and modern Python package management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "UV", "MCP framework"],
      githubUrl: "https://github.com/Ayesha0300/MCP-Server-Projects",
      liveUrl: "http://127.0.0.1:6274",
    },
    {
      id: 3,
      title: "Business-Process-Automation-with-CrewAI",
      description:
        "The 'Business-Process-Automation-with-CrewAI' project is designed to streamline and automate complex business workflows by leveraging the CrewAI framework. CrewAI enables the orchestration of multiple autonomous AI agents, each assigned specific roles and goals, to collaboratively execute multi-step tasks with enhanced efficiency and accuracy.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["UV", "CrewAI", "GEMINI API", "Streamlit"],
      githubUrl: "https://github.com/Ayesha0300/Business-Process-Automation-with-CrewAI",
      liveUrl: "https://example.com",
    },
    {
      id: 4,
      title: "LinkedIn Profile MCP",
      description:
       "Art of Music Mastery, a platform dedicated to enhancing your musical skills and knowledge. Our courses are designed to cater to all levels, from beginners to advanced musicians. Join us and embark on a transformative musical journey.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "Deploy on Vercel"],
      githubUrl: "https://github.com/Ayesha0300/art-of-music-mastery",
      liveUrl: "https://art-of-music-mastery.vercel.app/",
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
    <section id="projects" ref={sectionRef} className="py-20 opacity-0 translate-y-4 transition-all duration-700">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2">03.</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
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

