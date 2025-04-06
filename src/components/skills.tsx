"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Layers, Brain, Cloud, Database, Globe } from "lucide-react"

type SkillCategory = {
  id: number
  title: string
  icon: React.ReactNode
  skills: string[]
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "AI Frameworks",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "OpenAI Agents SDK",
        "LangGraph",
        "LangChain",
        "CrewAI",
        "Multi-Context Processing",
        "Knowledge Graphs",
        "Agentic AI Systems",
        "AI Agents",
      ],
    },
    {
      id: 2,
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python (Static Typing)", "TypeScript", "JavaScript", "Next.js", "React", "HTML/CSS", "API Development"],
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "Azure Container Apps",
        "CI/CD",
        "Microservices",
        "Containerization",
      ],
    },
    {
      id: 4,
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["Neo4j AuraDB", "Graph Databases", "SQL", "NoSQL", "Data Modeling", "Query Optimization"],
    },
    {
      id: 5,
      title: "Software Engineering",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        "System Design",
        "DACA Design Pattern",
        "Microservices Architecture",
        "API Design",
        "Clean Code",
        "Version Control",
        "Git",
      ],
    },
    {
      id: 6,
      title: "Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: ["English (Fluent)", "Urdu (Native)"],
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
      id="skills"
      ref={sectionRef}
      className="py-20 opacity-0 translate-y-4 transition-all duration-700 relative"
    >
      {/* Glowing orb background effect */}
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "0.7s" }}
      ></div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/50 text-primary border border-primary/20 backdrop-blur-sm">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.id}
              className="bg-secondary/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="bg-white/5 p-2 rounded-lg w-fit group-hover:bg-white/10 transition-colors duration-300 text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/5 hover:bg-white/10 text-primary border border-white/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

