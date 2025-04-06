"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Experience = {
  id: number
  company: string
  position: string
  period: string
  description: string[]
  technologies: string[]
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Panaversity",
      position: "Software Engineer",
      period: "Current",
      description: [
        "Collaborated with cross-functional teams to design and implement AI-powered educational tools and multi-agent systems",
        "Applied Dapr Agentic Cloud Ascent (DACA) Design Pattern for deploying scalable AI solutions",
        "Developed personalized e-learning chatbots enhancing student engagement and learning outcomes",
        "Contributed to AI frameworks and templates for building complex agent systems",
      ],
      technologies: ["OpenAI Agents SDK", "CrewAI", "LangGraph", "LangChain", "Next.js", "Docker", "Kubernetes"],
    },
    {
      id: 2,
      company: "Certified Agentic & Robotic AI Engineer Program",
      position: "Panaversity",
      period: "Completed",
      description: [
        "Completed AI-201 and AI-202 courses, focusing on developing complex agentic AI systems",
        "Learned to implement the Dapr Agentic Cloud Ascent (DACA) Design Pattern",
        "Developed skills in AI agent frameworks, cloud deployment, and modern software architecture",
        "Worked on practical projects implementing multi-agent systems and AI-powered applications",
      ],
      technologies: ["Python", "TypeScript", "AI Frameworks", "Cloud Technologies", "Docker", "Kubernetes"],
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
      id="experience"
      ref={sectionRef}
      className="py-20 opacity-0 translate-y-4 transition-all duration-700 relative"
    >
      {/* Glowing orb background effect */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/50 text-primary border border-primary/20 backdrop-blur-sm">
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">My Professional Journey</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3 flex md:flex-col overflow-x-auto md:overflow-visible mb-4 md:mb-0">
              {experiences.map((exp, index) => (
                <Button
                  key={exp.id}
                  variant={activeTab === index ? "default" : "ghost"}
                  className={cn(
                    "justify-start rounded-lg border md:border-l-2 md:border-r-0 md:border-t-0 md:border-b-0 border-white/10",
                    activeTab === index
                      ? "bg-white/10 text-white border-white md:border-l-white backdrop-blur-sm"
                      : "hover:bg-white/5 hover:text-white/80",
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </Button>
              ))}
            </div>

            <Card className="md:w-2/3 bg-secondary/30 backdrop-blur-sm border border-white/10 p-6 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{experiences[activeTab].position}</h3>
                <p className="text-primary">{experiences[activeTab].company}</p>
                <p className="text-sm text-muted-foreground">{experiences[activeTab].period}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {experiences[activeTab].technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-white/5 text-primary border-white/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

