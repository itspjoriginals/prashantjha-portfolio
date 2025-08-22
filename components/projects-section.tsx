"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing products, orders, and customers with real-time analytics and responsive design.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/prashantkumarja/ecommerce-dashboard",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/kanban-board.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Local Storage"],
      liveUrl: "https://task-manager-demo.vercel.app",
      githubUrl: "https://github.com/prashantkumarja/task-manager",
      featured: true,
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      image: "/weather-app-maps-charts.png",
      technologies: ["React", "JavaScript", "CSS3", "Weather API", "Geolocation"],
      liveUrl: "https://weather-app-demo.vercel.app",
      githubUrl: "https://github.com/prashantkumarja/weather-app",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      image: "/dark-portfolio-website.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://prashantkumarja.vercel.app",
      githubUrl: "https://github.com/prashantkumarja/portfolio",
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "A full-featured blog platform with markdown support, comment system, and content management capabilities.",
      image: "/modern-blog-platform.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Markdown", "Local Storage"],
      liveUrl: "https://blog-platform-demo.vercel.app",
      githubUrl: "https://github.com/prashantkumarja/blog-platform",
      featured: false,
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in frontend development and problem-solving.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`card-glass hover-lift overflow-hidden ${project.featured ? "md:grid md:grid-cols-2" : ""}`}
              >
                <div className={`${project.featured ? "order-2 md:order-1" : ""}`}>
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className={`${project.featured ? "order-1 md:order-2" : ""}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-sans text-xl font-semibold text-card-foreground">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                        >
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            Featured
                          </Badge>
                        </motion.div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="font-serif text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        >
                          <Badge variant="outline" className="border-primary/20 text-primary">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
