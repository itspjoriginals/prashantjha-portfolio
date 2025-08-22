"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { SiInstagram } from "react-icons/si"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (cursor) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.1,
          ease: "power2.out",
        })
      }

      const handleMouseEnter = () => {
        gsap.to(cursor, { scale: 2, duration: 0.3 })
      }

      const handleMouseLeave = () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 })
      }

      document.addEventListener("mousemove", moveCursor)

      const hoverElements = document.querySelectorAll("button, a, .hover-target")
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        document.removeEventListener("mousemove", moveCursor)
        hoverElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div ref={cursorRef} className="fluid-cursor hidden lg:block" />

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={heroRef}>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm <span className="gradient-text animate-glow">Prashant Kumar Jha</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
                Frontend Developer & Software Engineer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Passionate about creating beautiful, responsive, and user-friendly web applications. With 1 year of
                experience in modern web technologies, I bring ideas to life through clean code and innovative design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={scrollToProjects}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-serif hover-lift animate-glow hover-target"
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    onClick={scrollToContact}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-serif bg-transparent hover-lift hover-target"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex justify-center space-x-6 mb-12">
                <motion.a
                  href="https://github.com/prashantkumarja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift p-3 rounded-full glass social-glow hover-target"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/prashantkumarja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#0077B5] transition-all duration-300 hover-lift p-3 rounded-full glass social-glow hover-target"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/prashantkumarja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#E4405F] transition-all duration-300 hover-lift p-3 rounded-full glass social-glow hover-target"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SiInstagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:prashant@example.com"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover-lift p-3 rounded-full glass social-glow hover-target"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
              <motion.div
                className="animate-float"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowDown className="h-6 w-6 text-accent mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
