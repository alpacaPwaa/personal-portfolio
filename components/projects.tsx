import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Multi-Tenant AI Legal Intelligence Platform",
    period: "September 2025 - Present",
    url: "#",
    image: "/images/jurischat-v2-demo.png",
    description:
      "A production-grade AI legal intelligence SaaS platform with multi-tenant organizations, granular role-based security, and advanced RAG-powered, agent-based chat workflows.",
    achievements: [
      "Designed and implemented a multi-tenant SaaS architecture with organizations, roles, permissions, and row-level security (PostgreSQL RLS)",
      "Implemented semantic document retrieval using chunked embeddings, HNSW indexes, and full-text search (Postgres tsvector + GIN)",
      "Developed an agent-based chat system with tool invocation, structured message parts, and persistent conversation state",
      "Built a secure document workspace supporting folders, versioned files, granular sharing, and audit activity logs",
      "Enforced fine-grained access control using role-permission mappings and inheritance at the folder/file level",
      "Built migration-safe schema using Drizzle ORM, PostgreSQL constraints, indexes, and policies",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "RLS", "Drizzle ORM", "AI Agents", "RAG", "Multi-Tenant SaaS"],
  },
  {
    title: "AI Legal Database System (RAG)",
    period: "November 2024 - Present",
    url: "https://www.jurischat.net/",
    image: "/images/jurischat-demo.jpg",
    description:
      "Comprehensive legal research platform leveraging AI and retrieval-augmented generation (RAG) to deliver instant access to 130,000+ legal documents.",
    achievements: [
      "Designed and deployed an end-to-end legal RAG database platform processing 130,000+ legal documents",
      "Delivered accurate insights by researching and answering 15,000+ legal queries",
      "Automated legal workflows by drafting 2,000+ legal documents with advanced AI solutions",
      "Scaled adoption to 1,000+ legal professionals across the Philippines",
      "Optimized system performance with quantization and indexing strategies, cutting storage needs 36x and boosting retrieval speed by 70%",
      "Enhanced search precision through a re-ranking strategy, achieving 95% retrieval accuracy",
    ],
    tags: ["Next.js", "TypeScript", "RAG", "AI", "Vector Database", "PostgreSQL"],
  },
  {
    title: "Community Platform",
    period: "December 2023 - March 2025",
    url: "https://org-public-version.vercel.app/",
    image: "/images/org-demo.png",
    description:
      "A Reddit-like platform enabling users to create and join organizations, share content across multiple media types, and engage through voting and discussions.",
    achievements: [
      "Built full authentication system with secure user management",
      "Implemented community creation and management features with role-based access control",
      "Developed multi-media post support for text, images, videos, and links",
      "Created voting system with upvotes, downvotes, and nested comment threads",
      "Designed responsive UI with community discovery and trending content algorithms",
      "Deployed scalable application serving multiple concurrent users",
    ],
    tags: ["Next.js", "TypeScript", "Chakra UI", "Firebase", "Real-time Database"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-balance">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.period}</CardDescription>
                  </div>
                  {project.url && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed pt-2">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.image && (
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-accent shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
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
