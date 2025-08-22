import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "TechStart Solutions",
      location: "Remote",
      duration: "Jan 2024 - Present",
      type: "Full-time",
      description:
        "Developing and maintaining responsive web applications using React and Next.js. Collaborating with design and backend teams to deliver high-quality user experiences.",
      achievements: [
        "Built 5+ responsive web applications with 99% uptime",
        "Improved page load speeds by 40% through optimization techniques",
        "Implemented modern UI/UX designs with pixel-perfect accuracy",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
    },
    {
      title: "Junior Frontend Developer",
      company: "WebCraft Agency",
      location: "Bangalore, India",
      duration: "Jun 2023 - Dec 2023",
      type: "Full-time",
      description:
        "Started my professional journey as a junior developer, focusing on learning modern web technologies and contributing to client projects.",
      achievements: [
        "Successfully completed 10+ client projects on time",
        "Learned and implemented React best practices",
        "Contributed to the company's component library",
        "Mentored 2 new interns in frontend development",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in frontend development, showcasing growth and contributions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-sans text-2xl font-semibold text-card-foreground mb-2">{experience.title}</h3>
                    <h4 className="font-serif text-xl text-primary mb-2">{experience.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="font-serif text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="font-serif text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 self-start">
                    {experience.type}
                  </Badge>
                </div>

                <p className="font-serif text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>

                <div className="mb-6">
                  <h5 className="font-sans text-lg font-semibold text-card-foreground mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="font-serif text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-sans text-lg font-semibold text-card-foreground mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/20 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
