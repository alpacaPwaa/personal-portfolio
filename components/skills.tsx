import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Tailwind CSS", "Bootstrap CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "NoSQL", "SQL", "Neon", "Firebase", "AWS S3", "AWS DynamoDB", "Algolia"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud Platform", "Amazon Web Services", "Vercel", "Netlify", "AWS Amplify"],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Insomnia",
      "Asana",
      "Slack",
      "VS Code",
      "Cursor AI",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "OpenAI",
      "Google Generative AI",
      "Anthropic",
      "Vercel AI SDK",
      "RAG",
      "Voyage AI",
      "Cohere AI",
      "PostgreSQL Vector Extensions",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">
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
