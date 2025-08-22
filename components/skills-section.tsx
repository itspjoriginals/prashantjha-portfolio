"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiStyledcomponents,
  SiFigma,
  SiGithub,
  SiNodedotjs,
  SiWebpack,
  SiJest,
} from "react-icons/si"
// import { SiVisualstudiocode } from "react-icons/si";  
import { FaCode, FaPalette, FaTools } from "react-icons/fa"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <FaCode className="h-6 w-6" />,
      skills: [
        { name: "React", level: 90, icon: <SiReact className="h-5 w-5 text-[#61DAFB]" /> },
        { name: "Next.js", level: 85, icon: <SiNextdotjs className="h-5 w-5 text-foreground" /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript className="h-5 w-5 text-[#3178C6]" /> },
        { name: "JavaScript", level: 95, icon: <SiJavascript className="h-5 w-5 text-[#F7DF1E]" /> },
        { name: "HTML5", level: 95, icon: <SiHtml5 className="h-5 w-5 text-[#E34F26]" /> },
        { name: "CSS3", level: 90, icon: <SiCss3 className="h-5 w-5 text-[#1572B6]" /> },
      ],
    },
    {
      title: "Styling & Design",
      icon: <FaPalette className="h-6 w-6" />,
      skills: [
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" /> },
        { name: "Sass/SCSS", level: 80, icon: <SiSass className="h-5 w-5 text-[#CC6699]" /> },
        { name: "Styled Components", level: 75, icon: <SiStyledcomponents className="h-5 w-5 text-[#DB7093]" /> },
        { name: "Responsive Design", level: 90, icon: <FaCode className="h-5 w-5 text-primary" /> },
        { name: "UI/UX Principles", level: 75, icon: <FaPalette className="h-5 w-5 text-accent" /> },
        { name: "Figma", level: 70, icon: <SiFigma className="h-5 w-5 text-[#F24E1E]" /> },
      ],
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="h-6 w-6" />,
      skills: [
        { name: "Git & GitHub", level: 85, icon: <SiGithub className="h-5 w-5 text-foreground" /> },
        // { name: "VS Code", level: 95, icon: <SiVisualstudiocode className="h-5 w-5 text-[#007ACC]" /> },
        { name: "Node.js", level: 70, icon: <SiNodedotjs className="h-5 w-5 text-[#339933]" /> },
        { name: "REST APIs", level: 80, icon: <FaCode className="h-5 w-5 text-primary" /> },
        { name: "Webpack", level: 65, icon: <SiWebpack className="h-5 w-5 text-[#8DD6F9]" /> },
        { name: "Jest", level: 70, icon: <SiJest className="h-5 w-5 text-[#C21325]" /> },
      ],
    },
  ]

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
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="card-glass hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-card-foreground mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <motion.div
                              className="skill-icon"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <span className="font-serif text-sm font-medium text-card-foreground">{skill.name}</span>
                          </div>
                          <span className="font-serif text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
