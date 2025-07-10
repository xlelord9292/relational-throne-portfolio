"use client"

import { useState, useEffect, useRef } from "react"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  Mail,
  MapPin,
  Music,
  Gamepad2,
  Code,
  Coffee,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioConfig } from "@/config/portfolio-config"
import { useDiscordStatus } from "@/hooks/use-discord-status"
import Image from "next/image"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  dribbble: Dribbble,
  behance: Dribbble,
}

export function AdvancedHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const { data: discordData, loading, getAvatarUrl, getStatusColor } = useDiscordStatus()

  const user = discordData?.data?.user
  const status = discordData?.data?.discord_status
  const activities = discordData?.data?.activities ?? []

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getActivityIcon = (activity: any) => {
    if (activity.name.toLowerCase().includes("spotify")) return Music
    if (activity.name.toLowerCase().includes("code") || activity.name.toLowerCase().includes("visual studio"))
      return Code
    if (activity.type === 0) return Gamepad2
    return Coffee
  }

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ultra Advanced Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950" />

        {/* Animated Mesh Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x / 20}px ${mousePosition.y / 20}px, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at ${100 - mousePosition.x / 30}px ${mousePosition.y / 25}px, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                radial-gradient(circle at ${mousePosition.x / 40}px ${100 - mousePosition.y / 30}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        {/* 3D Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-xl animate-float-3d opacity-20"
              style={{
                width: `${60 + Math.random() * 120}px`,
                height: `${60 + Math.random() * 120}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(135deg, 
                  hsl(${240 + Math.random() * 60}, 70%, 60%) 0%, 
                  hsl(${280 + Math.random() * 40}, 80%, 70%) 100%)`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                transform: `translateZ(${Math.random() * 100}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        {/* Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <circle
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="2"
                fill="url(#neuralGradient)"
                filter="url(#glow)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              {i > 0 && (
                <line
                  x1={Math.random() * 1000}
                  y1={Math.random() * 1000}
                  x2={Math.random() * 1000}
                  y2={Math.random() * 1000}
                  stroke="url(#neuralGradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              )}
            </g>
          ))}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Parallax Layers */}
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse-slow" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Discord Status Card */}
            {user && (
              <Card
                className={`bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={user ? getAvatarUrl(user) : portfolioConfig.personal.avatar || "/placeholder.svg"}
                        alt="Discord Avatar"
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-white/20"
                      />
                      <div
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-black"
                        style={{ backgroundColor: getStatusColor(status ?? "offline") }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-semibold">
                          {user?.display_name ?? user?.username ?? "Discord User"}
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-white/10 text-white/80">
                          {status ?? "offline"}
                        </Badge>
                      </div>
                      {activities?.length ? (
                        <div className="flex items-center gap-2 mt-1">
                          {(() => {
                            const Icon = getActivityIcon(activities[0])
                            return <Icon className="w-4 h-4 text-purple-400" />
                          })()}
                          <span className="text-sm text-gray-300">{activities[0].name}</span>
                        </div>
                      ) : null}
                      {discordData?.data?.listening_to_spotify && discordData?.data?.spotify ? (
                        <div className="flex items-center gap-2 mt-2 p-2 bg-green-500/20 rounded-lg">
                          <Music className="w-4 h-4 text-green-400" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white truncate">{discordData.data.spotify.song}</p>
                            <p className="text-xs text-gray-400 truncate">{discordData.data.spotify.artist}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Name & Title */}
            <div className="space-y-4">
              <h1
                className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {portfolioConfig.personal.name}
              </h1>
              <div
                className={`flex flex-wrap gap-3 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {portfolioConfig.personal.title.split(" & ").map((title, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-white/20 hover:scale-105 transition-transform"
                  >
                    {title}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Bio */}
            <p
              className={`text-lg text-gray-300 leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {portfolioConfig.personal.bio}
            </p>

            {/* Contact Info */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>{portfolioConfig.personal.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span>{portfolioConfig.personal.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="group-hover:scale-110 transition-transform">View My Work</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 bg-black/20 backdrop-blur-sm hover:shadow-xl"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Side - 3D Avatar & Social */}
          <div className="flex flex-col items-center space-y-8">
            {/* 3D Avatar Container */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative group">
                {/* Glowing Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-2xl animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* Avatar */}
                <div className="relative z-10 p-2 bg-black/20 backdrop-blur-xl rounded-full border border-white/20">
                  <Image
                    src={user ? getAvatarUrl(user) : portfolioConfig.personal.avatar || "/placeholder.svg"}
                    alt={portfolioConfig.personal.name}
                    width={300}
                    height={300}
                    className="rounded-full hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-80" />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-ping opacity-60" />
              </div>
            </div>

            {/* Social Links Grid */}
            <div
              className={`grid grid-cols-3 gap-4 transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {Object.entries(portfolioConfig.social).map(([platform, url], index) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                return (
                  <Button
                    key={platform}
                    variant="outline"
                    size="icon"
                    className="w-16 h-16 rounded-2xl border-white/20 bg-black/20 backdrop-blur-xl hover:bg-white/10 hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                    asChild
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-6 h-6 group-hover:scale-125 transition-transform" />
                    </a>
                  </Button>
                )
              })}
            </div>

            {/* Floating Stats */}
            <div
              className={`grid grid-cols-2 gap-4 w-full max-w-sm transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-black/20 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
