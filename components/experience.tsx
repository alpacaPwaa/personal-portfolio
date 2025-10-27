import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Founder",
    company: "Zenthi Tech OPC",
    period: "November 2024 - Present",
    location: "Davao City, Philippines",
    achievements: [
      "Secured acceptance into a local startup accelerator program, gaining mentorship and ecosystem support",
      "Raised seed funding from strategic investors to fuel product development and growth",
      "Led the end-to-end product lifecycle from ideation, market research, and validation to MVP launch and full production deployment",
      "Drove user acquisition through multi-channel growth strategies including social media, SEO, email campaigns, and organic referral networks",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "August 2024 - September 2024",
    location: "Remote",
    achievements: [
      "Developed a secure, cloud-based Patient Management System (PMS) to streamline healthcare data management",
      "Delivered a full-stack architecture with robust data security and scalable performance",
      "Implemented AWS S3 and DynamoDB for efficient, scalable storage solutions",
      "Deployed application via AWS Amplify for reliable, cloud-native hosting",
      "Integrated AWS Cognito authentication to safeguard sensitive patient data",
    ],
  },
  {
    title: "Front End Developer",
    company: "Freelance",
    period: "June 2024 - July 2024",
    location: "Remote",
    achievements: [
      "Built a modern Learning Management System (LMS) with interactive features and gamification",
      "Designed and implemented a comprehensive UX/UI optimized for accessibility and engagement",
      "Developed exam and quiz interfaces with dynamic, interactive functionality",
      "Integrated a gamification points system to drive learner motivation and retention",
      "Created end-to-end onboarding flows for both students and tutors",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {exp.company} • {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
