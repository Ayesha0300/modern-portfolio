"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Users } from "lucide-react"

type SkillCategory = {
  id: number
  title: string
  icon: React.ReactNode
  skills: string[]
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      id: 2,
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "NestJS", "Python", "Django", "RESTful APIs", "GraphQL"],
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose"],
    },
    {
      id: 4,
      title: "DevOps",
      icon: <Code className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
    },
    {
      id: 5,
      title: "Tools & Methods",
      icon: <Globe className="h-6 w-6" />,
      skills: ["VS Code", "Figma", "Agile", "Scrum", "Jest", "Testing Library", "Webpack"],
    },
    {
      id: 6,
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: [
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Time Management",
        "Adaptability",
        "Mentoring",
      ],
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
      className="py-20 bg-muted/30 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2">04.</span> Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-md text-primary">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
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

