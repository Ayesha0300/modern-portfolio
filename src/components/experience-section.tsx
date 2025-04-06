"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Experience = {
  id: number
  company: string
  position: string
  period: string
  description: string[]
  technologies: string[]
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "Jan 2022 - Present",
      description: [
        "Led the development of the company's flagship SaaS product, improving performance by 40%",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      id: 2,
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      period: "Mar 2020 - Dec 2021",
      description: [
        "Developed and maintained multiple client projects from concept to deployment",
        "Built RESTful APIs and integrated third-party services",
        "Implemented authentication systems and user management features",
        "Optimized database queries and improved application performance",
      ],
      technologies: ["Node.js", "Express", "React", "Redux"],
    },
    {
      id: 3,
      company: "WebCraft Agency",
      position: "Junior Web Developer",
      period: "Jun 2018 - Feb 2020",
      description: [
        "Created responsive websites for various clients across different industries",
        "Collaborated with the design team to implement UI/UX improvements",
        "Maintained existing websites and implemented new features",
        "Participated in client meetings and requirement gathering sessions",
      ],
      technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
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
      className="py-20 bg-muted/30 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-primary mr-2">02.</span> Experience
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3 flex md:flex-col overflow-x-auto md:overflow-visible mb-4 md:mb-0">
              {experiences.map((exp, index) => (
                <Button
                  key={exp.id}
                  variant={activeTab === index ? "default" : "ghost"}
                  className={cn(
                    "justify-start rounded-none border-b-2 md:border-l-2 md:border-b-0 border-muted",
                    activeTab === index && "border-primary md:border-l-primary md:border-b-0",
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </Button>
              ))}
            </div>

            <div className="md:w-2/3 bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold">{experiences[activeTab].position}</h3>
                <p className="text-muted-foreground">{experiences[activeTab].company}</p>
                <p className="text-sm text-muted-foreground">{experiences[activeTab].period}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {experiences[activeTab].technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

