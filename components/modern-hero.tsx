"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Mail, MapPin, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioConfig } from "@/config/portfolio-config"
import { useDiscordStatus } from "@/hooks/use-discord-status"
import Image from "next/image"

export function ModernHero() {
  const [isVisible, setIsVisible] = useState(false)
  const { data: discordData, getAvatarUrl, getStatusColor } = useDiscordStatus()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const user = discordData?.data?.user
  const status = discordData?.data?.discord_status

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Discord Status */}
              {user && (
                <Card
                  className={`inline-block bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={getAvatarUrl(user) || "/placeholder.svg"}
                          alt="Discord Avatar"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div
                          className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-800"
                          style={{ backgroundColor: getStatusColor(status ?? "offline") }}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{user.display_name || user.username}</p>
                        <p className="text-xs text-slate-400 capitalize">{status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Main Heading */}
              <div className="space-y-6">
                <h1
                  className={`text-5xl md:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {portfolioConfig.personal.name}
                </h1>

                <div
                  className={`flex flex-wrap gap-3 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <Badge className="px-4 py-2 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                    <Code className="w-4 h-4 mr-2" />
                    Full Stack Developer
                  </Badge>
                  <Badge className="px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    <Zap className="w-4 h-4 mr-2" />
                    Open Source
                  </Badge>
                </div>

                <p
                  className={`text-xl text-slate-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {portfolioConfig.personal.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div
                className={`flex flex-wrap gap-6 text-slate-400 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>{portfolioConfig.personal.email}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>{portfolioConfig.personal.location}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 bg-transparent"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right Content - Avatar & Stats */}
            <div className="flex flex-col items-center space-y-8">
              {/* Main Avatar */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
                  <Image
                    src={user ? getAvatarUrl(user) : portfolioConfig.personal.avatar}
                    alt={portfolioConfig.personal.name}
                    width={300}
                    height={300}
                    className="relative rounded-full border-4 border-slate-700/50 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div
                className={`grid grid-cols-2 gap-4 w-full max-w-sm transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white">{portfolioConfig.projects.length}</div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white">{portfolioConfig.skills.length}</div>
                    <div className="text-sm text-slate-400">Skills</div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div
                className={`flex gap-4 transition-all duration-1000 delay-1400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-800 hover:border-purple-500 transition-all duration-300 hover:scale-110 bg-transparent"
                  asChild
                >
                  <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 hover:scale-110 bg-transparent"
                  asChild
                >
                  <a href={portfolioConfig.social.discord} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
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
