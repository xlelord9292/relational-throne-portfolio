import { getConfig } from "@/lib/config"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AllProjectsSection } from "@/components/sections/all-projects"

export default function ProjectsPage() {
  const config = getConfig()

  return (
    <main className="min-h-screen bg-background">
      <Header config={config} />
      <AllProjectsSection config={config.projects} />
      <Footer config={config} />
    </main>
  )
}
