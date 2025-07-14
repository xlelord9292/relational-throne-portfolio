import fs from "fs"
import path from "path"
import yaml from "js-yaml"

export interface Config {
  personal: {
    name: string
    title: string
    subtitle: string
    bio: string
    location: string
    email: string
    phone: string
  }
  social: {
    github: { enabled: boolean; url: string }
    linkedin: { enabled: boolean; url: string }
    twitter: { enabled: boolean; url: string }
    discord: { enabled: boolean; username: string }
    youtube: { enabled: boolean; url: string }
    kofi: { enabled: boolean; url: string }
    website: { enabled: boolean; url: string }
    instagram: { enabled: boolean; url: string }
    tiktok: { enabled: boolean; url: string }
  }
  hero: {
    enabled: boolean
    greeting: string
    name: string
    title: string
    description: string
    cta_primary: string
    cta_secondary: string
    avatar: string
    show_avatar: boolean
    animated_text: boolean
  }
  about: {
    enabled: boolean
    title: string
    description: string
    skills: {
      enabled: boolean
      title: string
      animation_style: "stagger" | "wave" | "bounce" | "fade"
      items: string[]
    }
    stats: {
      enabled: boolean
      experience_years: number
      projects_completed: number
      happy_clients: number
    }
  }
  projects: {
    enabled: boolean
    title: string
    subtitle: string
    show_all_button: boolean
    items: Array<{
      title: string
      description: string
      image: string
      technologies: string[]
      github: string
      demo: string
      featured: boolean
    }>
  }
  services: {
    enabled: boolean
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  experience: {
    enabled: boolean
    title: string
    items: Array<{
      company: string
      position: string
      duration: string
      description: string
    }>
  }
  testimonials: {
    enabled: boolean
    title: string
    items: Array<{
      name: string
      company: string
      role: string
      content: string
      avatar: string
    }>
  }
  contact: {
    enabled: boolean
    title: string
    subtitle: string
    description: string
    form: {
      enabled: boolean
      fields: Array<{
        name: string
        label: string
        type: string
        required: boolean
      }>
    }
  }
  theme: {
    primary_color: string
    secondary_color: string
    accent_color: string
    background_color: string
    text_color: string
  }
  seo: {
    title: string
    description: string
    keywords: string
    og_image: string
  }
  analytics: {
    google_analytics: string
  }
  features: {
    dark_mode: boolean
    animations: boolean
    blog: boolean
    contact_form: boolean
    scroll_to_top: boolean
  }
}

export function getConfig(): Config {
  const configPath = path.join(process.cwd(), "public", "config.yml")
  const fileContents = fs.readFileSync(configPath, "utf8")
  return yaml.load(fileContents) as Config
}
