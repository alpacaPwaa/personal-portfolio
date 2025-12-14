import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </main>
  )
}