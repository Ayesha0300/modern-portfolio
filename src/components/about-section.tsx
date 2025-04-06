"use client"

import { useEffect, useRef } from "react"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 opacity-0 translate-y-4 transition-all duration-700">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-primary mr-2">01.</span> About Me
          </h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! Ayesha Bashir, a passionate full-stack developer with over 2 years of experience building web
              applications. My journey in software development began during my computer science studies, where I
              discovered my love for creating intuitive and impactful digital experiences.
            </p>

            <p>
              I specialize in JavaScript ecosystems, particularly React, Node.js, and modern frameworks like Next.js.
              I'm deeply committed to writing clean, maintainable code and creating accessible user interfaces that work
              for everyone.
            </p>

            <p>
              Beyond coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring
              junior developers. I believe in continuous learning and staying updated with the latest industry trends
              and best practices.
            </p>

            <p>
              When I'm not in front of a computer, you can find me hiking, reading science fiction, or experimenting
              with new recipes in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

