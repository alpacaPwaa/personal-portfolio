import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificatesData = [
  {
    title: "AI Frontiers 2025: Where Builders Meet the Visionaries (SPEAKER)",
    issuer: "Pearson Enterprise Learning & Skills - Asia Pacific",
    date: "November 2025",
    // Assuming you have a link to the certificate or event page. Update as needed.
    url: "https://www.credly.com/badges/a7102e13-459c-4fc2-967b-4027d4ec7ee9/public_url", 
    type: "Speaking Engagement",
  },
  // Add more certificates here as you earn them!
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Certificates & Engagements</h2>
        <div className="space-y-6">
          {certificatesData.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex flex-col">
                    <CardTitle className="text-xl text-balance">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit flex-shrink-0">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs text-primary/80 border-primary/20">
                    {cert.type}
                  </Badge>
                  {cert.url && (
                    <Button asChild variant="ghost" size="sm">
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xs">
                        View Credential
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}