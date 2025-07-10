import { EnhancedHero } from "@/components/enhanced-hero"
import { EnhancedSkills } from "@/components/enhanced-skills"
import { EnhancedProjects } from "@/components/enhanced-projects"
import { ExperienceSection } from "@/components/experience-section"
import { ModernContact } from "@/components/modern-contact"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950">
      <EnhancedHero />
      <EnhancedSkills />
      <EnhancedProjects />
      <ExperienceSection />
      <ModernContact />
    </main>
  )
}
