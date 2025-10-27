import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Get in Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Let&apos;s Work Together</CardTitle>
            <CardDescription className="text-base">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if
              you&apos;d like to discuss a project or just want to connect.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="mailto:doromaljhonrey@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">doromaljhonrey@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:639952965113"
                className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+63 9952965113</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-lg border">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Davao City, Philippines</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/alpacaPwaa" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/john-rey-doromal" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Education:</strong> Bachelor of Arts in Political Science, University of Mindanao (2021-2025)
          </p>
        </div>
      </div>
    </section>
  )
}
