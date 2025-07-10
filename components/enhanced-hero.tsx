"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Mail, MapPin, Code, Zap, Activity, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioConfig } from "@/config/portfolio-config"
import { useDiscordStatus } from "@/hooks/use-discord-status"
import Image from "next/image"

export function EnhancedHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { data: discordData, getAvatarUrl, getStatusColor } = useDiscordStatus()

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const user = discordData?.data?.user
  const status = discordData?.data?.discord_status
  const activities = discordData?.data?.activities ?? []
  const spotify = discordData?.data?.spotify

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "idle":
        return "Away"
      case "dnd":
        return "Do Not Disturb"
      case "offline":
        return "Offline"
      default:
        return "Unknown"
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient with better colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950" />

        {/* Interactive mouse-following gradient */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-1000 ease-out"
          style={{
            background: `
              radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(99, 102, 241, 0.15), 
                rgba(168, 85, 247, 0.1) 40%, 
                transparent 70%
              )
            `,
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.5)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
        </div>

        {/* Floating orbs with better colors */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-3/4 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Subtle particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Enhanced Discord Status */}
              {user && (
                <Card
                  className={`inline-block bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={getAvatarUrl(user) || "/placeholder.svg"}
                          alt="Discord Avatar"
                          width={50}
                          height={50}
                          className="rounded-full border-2 border-slate-600/50"
                        />
                        <div
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-900 shadow-lg"
                          style={{ backgroundColor: getStatusColor(status ?? "offline") }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-white">{user.display_name || user.username}</p>
                          <Badge className="text-xs px-2 py-0.5 bg-slate-800/50 border-slate-600/50 text-slate-300">
                            {getStatusText(status ?? "offline")}
                          </Badge>
                        </div>

                        {/* Activity Display */}
                        {activities.length > 0 && (
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Activity className="w-3 h-3" />
                            <span className="truncate">{activities[0].name}</span>
                          </div>
                        )}

                        {/* Spotify Display */}
                        {spotify && (
                          <div className="flex items-center gap-2 mt-2 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <Music className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-white truncate font-medium">{spotify.song}</p>
                              <p className="text-xs text-green-300 truncate">by {spotify.artist}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Enhanced Main Heading */}
              <div className="space-y-6">
                <h1
                  className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {portfolioConfig.personal.name}
                </h1>

                <div
                  className={`flex flex-wrap gap-3 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <Badge className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105">
                    <Code className="w-4 h-4 mr-2" />
                    Full Stack Developer
                  </Badge>
                  <Badge className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-200 border border-violet-500/30 hover:from-violet-500/30 hover:to-fuchsia-500/30 transition-all duration-300 hover:scale-105">
                    <Zap className="w-4 h-4 mr-2" />
                    Open Source Creator
                  </Badge>
                </div>

                <p
                  className={`text-xl text-slate-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {portfolioConfig.personal.bio}
                </p>
              </div>

              {/* Enhanced Contact Info */}
              <div
                className={`flex flex-wrap gap-6 text-slate-400 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="flex items-center gap-2 hover:text-indigo-300 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <span>{portfolioConfig.personal.email}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>{portfolioConfig.personal.location}</span>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 border-0"
                >
                  <span className="group-hover:scale-110 transition-transform">View My Projects</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600/50 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 bg-slate-900/30 backdrop-blur-sm"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right Content - Enhanced Avatar & Stats */}
            <div className="flex flex-col items-center space-y-8">
              {/* Enhanced Main Avatar */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              >
                <div className="relative group">
                  {/* Glowing ring with better colors */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />

                  {/* Avatar container */}
                  <div className="relative z-10 p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full backdrop-blur-sm">
                    <Image
                      src={user ? getAvatarUrl(user) : portfolioConfig.personal.avatar}
                      alt={portfolioConfig.personal.name}
                      width={280}
                      height={280}
                      className="rounded-full border-4 border-slate-700/30 hover:scale-105 transition-transform duration-500 shadow-2xl"
                    />
                  </div>

                  {/* Floating elements with better colors */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce opacity-80 shadow-lg" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full animate-pulse opacity-80 shadow-lg" />
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-60" />
                </div>
              </div>

              {/* Enhanced Quick Stats */}
              <div
                className={`grid grid-cols-2 gap-4 w-full max-w-sm transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Card className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {portfolioConfig.projects.length}
                    </div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {portfolioConfig.skills.length}
                    </div>
                    <div className="text-sm text-slate-400">Skills</div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Social Links */}
              <div
                className={`flex gap-4 transition-all duration-1000 delay-1400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 border-slate-600/50 hover:bg-slate-800/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110 bg-slate-900/30 backdrop-blur-sm group"
                  asChild
                >
                  <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 group-hover:text-indigo-400 transition-colors" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 border-slate-600/50 hover:bg-slate-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 bg-slate-900/30 backdrop-blur-sm group"
                  asChild
                >
                  <a href={portfolioConfig.social.discord} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
