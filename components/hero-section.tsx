"use client"

import { useState, useEffect } from "react"
import { useDiscordAvatar } from "@/hooks/use-discord-avatar"
import { Github, Linkedin, Twitter, Instagram, Dribbble, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioConfig } from "@/config/portfolio-config"
import Image from "next/image"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  dribbble: Dribbble,
  behance: Dribbble,
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Use Discord avatar
  const discordAvatar = useDiscordAvatar("545789216869711884")

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.15),transparent_50%)]" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-slow" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg animate-float-medium" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-md animate-float-fast" />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg animate-float-slow" />
        </div>

        {/* Dynamic Light Rays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse" />
          <div
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Interactive Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-radial from-pink-500/10 via-pink-500/5 to-transparent rounded-full blur-2xl transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x / -20,
            top: mousePosition.y / -20,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Morphing Shapes */}
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-morph" />
        <div className="absolute bottom-1/3 right-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-morph-reverse" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          {/* Avatar */}
          {portfolioConfig.personal.avatar?.enabled && (
            <div
              className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg animate-pulse" />
                <Image
                  src={portfolioConfig.personal.avatar.url || "/placeholder.svg"}
                  alt={portfolioConfig.personal.avatar.alt || portfolioConfig.personal.name}
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 border-white/20 hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          )}

          {/* Name */}
          <h1
            className={`text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {portfolioConfig.personal.name}
          </h1>

          {/* Title */}
          <p
            className={`text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {portfolioConfig.personal.title}
          </p>

          {/* Bio */}
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {portfolioConfig.personal.bio}
          </p>

          {/* Contact Info */}
          <div
            className={`flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-5 h-5" />
              <span>{portfolioConfig.personal.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>{portfolioConfig.personal.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-4 mb-8 transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {Object.entries(portfolioConfig.social).map(([platform, url], index) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons]
              return (
                <Button
                  key={platform}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                  asChild
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
