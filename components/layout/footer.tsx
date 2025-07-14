"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Youtube, Coffee, Globe, MessageSquare, Heart } from "lucide-react"
import type { Config } from "@/lib/config"

interface FooterProps {
  config: Config
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  kofi: Coffee,
  website: Globe,
  discord: MessageSquare,
  instagram: MessageSquare,
  tiktok: MessageSquare,
}

export function Footer({ config }: FooterProps) {
  const enabledSocials = Object.entries(config.social).filter(([_, value]) => value.enabled)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary">{config.personal.name}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{config.personal.subtitle}</p>
            <p className="text-sm text-muted-foreground">{config.personal.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {config.about.enabled && (
                <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              )}
              {config.projects.enabled && (
                <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              )}
              <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                All Projects
              </Link>
              {config.services.enabled && (
                <Link href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              )}
              {config.contact.enabled && (
                <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {enabledSocials.map(([platform, data]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons]
                const href =
                  platform === "discord" ? `https://discord.com/users/${data.username || data.url}` : data.url

                return (
                  <motion.div key={platform} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} {config.personal.name}. Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            <Link
              href="https://github.com/xlelord9292/relational-throne-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Relational Throne Portfolio Template
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
