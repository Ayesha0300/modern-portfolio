"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
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
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 opacity-0 translate-y-4 transition-all duration-700 relative overflow-hidden"
    >
      {/* Glowing orb background effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/50 text-primary border border-primary/20 backdrop-blur-sm">
               
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-glow">
                <span className="block mb-2">Ayesha Bashir</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  Agentic AI Engineer
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Innovative software engineer with a focus on AI and cloud-native technologies, seeking to leverage my
              experience in developing and deploying advanced AI systems to contribute effectively to a forward-thinking
              organization.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-background hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/5 backdrop-blur-sm"
                onClick={() => window.open("/resume.jpeg", "_blank")}
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Ayesha0300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors bg-secondary/50 p-2 rounded-full border border-primary/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] backdrop-blur-sm"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ayesha-bashir-60b83b2b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors bg-secondary/50 p-2 rounded-full border border-primary/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:ayeshabashir0300@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors bg-secondary/50 p-2 rounded-full border border-primary/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] backdrop-blur-sm"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="tel:+923222893692"
                className="text-muted-foreground hover:text-foreground transition-colors bg-secondary/80 p-2 rounded-full border border-primary/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] backdrop-blur-sm"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 z-10 mesh-grid opacity-30" />
              <Image
                src="/profile-picture.png"
                alt="Ayesha Bashir"
                width={500}
                height={500}
                className="object-cover grayscale brightness-110 contrast-125"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />

            {/* Digital circuit lines */}
            <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-primary/20 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-primary/20 rounded-bl-xl" />
            <div className="absolute top-1/4 -right-4 w-2 h-2 bg-primary/50 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <div className="absolute bottom-1/3 -left-2 w-1 h-1 bg-primary/70 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

