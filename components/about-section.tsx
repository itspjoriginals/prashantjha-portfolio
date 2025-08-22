"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer with a keen eye for detail and a love for creating exceptional user
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-sans text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <div className="space-y-4 font-serif text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Frontend Developer with 1 year of professional experience in building modern, responsive
                web applications. My journey in web development started with a curiosity about how websites work, which
                quickly evolved into a passion for creating beautiful and functional user interfaces.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, with a strong foundation in modern CSS frameworks like
                Tailwind CSS. I believe in writing clean, maintainable code and staying up-to-date with the latest
                industry trends and best practices.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="card-glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                      <Code className="h-8 w-8 text-primary mr-3" />
                    </motion.div>
                    <h4 className="font-sans text-xl font-semibold text-card-foreground">Clean Code</h4>
                  </div>
                  <p className="font-serif text-muted-foreground">
                    Writing maintainable, scalable, and well-documented code that follows industry best practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="card-glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                      <Lightbulb className="h-8 w-8 text-accent mr-3" />
                    </motion.div>
                    <h4 className="font-sans text-xl font-semibold text-card-foreground">Problem Solving</h4>
                  </div>
                  <p className="font-serif text-muted-foreground">
                    Approaching challenges with creativity and analytical thinking to deliver effective solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="card-glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                      <Users className="h-8 w-8 text-secondary mr-3" />
                    </motion.div>
                    <h4 className="font-sans text-xl font-semibold text-card-foreground">Collaboration</h4>
                  </div>
                  <p className="font-serif text-muted-foreground">
                    Working effectively in team environments and communicating technical concepts clearly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
