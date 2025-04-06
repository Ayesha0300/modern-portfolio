import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative">
      {/* Glowing orb background effect */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "0.3s" }}
      ></div>

      <div className="container relative z-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div>
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 text-glow">
              Ayesha Bashir
            </span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Ayesha Bashir. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-1">Certified Agentic & Robotic AI Engineer</p>
        </div>

        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  )
}

