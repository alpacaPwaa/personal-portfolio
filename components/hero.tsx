import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">John Rey Doromal</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Full-Stack JavaScript/TypeScript Developer</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building scalable web applications with modern frameworks. Specialized in AI integration, Next.js, and
            creating production-ready systems that serve thousands of users.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild variant="default" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-8 text-sm text-muted-foreground">
            <a href="tel:639952965113" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>+63 9952965113</span>
            </a>
            <a
              href="mailto:doromaljhonrey@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>doromaljhonrey@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Davao City, Philippines</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
