import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { ThreeBackground } from "@/components/three-background"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background relative">
        <ThreeBackground />
        <div className="relative z-10">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="font-serif text-muted-foreground">
                  © 2024 Prashant Kumar Jha. Built with Next.js and Tailwind CSS.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}
