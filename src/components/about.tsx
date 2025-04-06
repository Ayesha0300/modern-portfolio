"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Lightbulb } from "lucide-react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="about" ref={sectionRef} className="py-20 opacity-0 translate-y-4 transition-all duration-700 relative">
      {/* Glowing orb background effect */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/50 text-primary border border-primary/20 backdrop-blur-sm">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">Protfolio.AI</h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              I am an innovative software engineer with a focus on AI and cloud-native technologies. I specialize in
              developing and deploying advanced AI systems, particularly agentic AI solutions using modern frameworks
              and methodologies.
            </p>

            <p>
              My expertise includes working with OpenAI Agents SDK, LangGraph, LangChain, and developing multi-agent
              systems. I'm proficient in Python with a focus on static typing, TypeScript, and cloud technologies like
              Docker, Kubernetes, and Azure Container Apps.
            </p>

            <p>
              I've completed the Certified Agentic & Robotic AI Engineer Program at Panaversity, focusing on developing
              complex agentic AI systems using the Dapr Agentic Cloud Ascent (DACA) Design Pattern.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <CardContent className="p-6">
              <div className="mb-4 bg-white/5 p-3 rounded-lg w-fit group-hover:bg-white/10 transition-colors duration-300">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">AI Development</h3>
              <p className="text-muted-foreground">
                Building advanced AI systems with CrewAI OpenAI Agents SDK, LangGraph, and LangChain for intelligent,
                context-aware applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <CardContent className="p-6">
              <div className="mb-4 bg-white/5 p-3 rounded-lg w-fit group-hover:bg-white/10 transition-colors duration-300">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Cloud Technologies</h3>
              <p className="text-muted-foreground">
                Deploying scalable solutions using Docker, Kubernetes, and Azure Container Apps with modern DevOps
                practices.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <CardContent className="p-6">
              <div className="mb-4 bg-white/5 p-3 rounded-lg w-fit group-hover:bg-white/10 transition-colors duration-300">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Agentic Systems</h3>
              <p className="text-muted-foreground">
                Designing and implementing multi-agent AI systems that can reason, plan, and execute complex tasks
                autonomously.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

