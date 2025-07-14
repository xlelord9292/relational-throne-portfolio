import { getConfig } from "@/lib/config"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { ServicesSection } from "@/components/sections/services"
import { ExperienceSection } from "@/components/sections/experience"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  const config = getConfig()

  return (
    <main className="min-h-screen bg-background">
      <Header config={config} />

      {config.hero.enabled && <HeroSection config={config.hero} />}
      {config.about.enabled && <AboutSection config={config.about} />}
      {config.projects.enabled && <ProjectsSection config={config.projects} />}
      {config.services.enabled && <ServicesSection config={config.services} />}
      {config.experience.enabled && <ExperienceSection config={config.experience} />}
      {config.testimonials.enabled && <TestimonialsSection config={config.testimonials} />}
      {config.contact.enabled && <ContactSection config={config.contact} social={config.social} />}

      <Footer config={config} />
    </main>
  )
}
