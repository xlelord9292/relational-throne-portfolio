"use client"

import { useState, useEffect, useRef } from "react"
import { Github, ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioConfig } from "@/config/portfolio-config"
import Image from "next/image"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const featuredProjects = portfolioConfig.projects.filter((p) => p.featured)
  const otherProjects = portfolioConfig.projects.filter((p) => !p.featured)

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="10" height="8.66" patternUnits="userSpaceOnUse">
                <polygon
                  points="5,0 9.33,2.5 9.33,7.5 5,10 0.67,7.5 0.67,2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-purple-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Animated Data Streams */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-stream" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-stream-reverse" />
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-stream"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* 3D Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 transform rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 transform rotate-45 animate-spin-reverse" />
          <div
            className="absolute top-2/3 right-1/3 w-4 h-4 bg-gradient-to-br from-pink-500/30 to-purple-500/30 transform rotate-45 animate-spin-slow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Glowing Network Nodes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-20" />
          <div
            className="absolute top-3/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-20"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-xl text-gray-400 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Some of my recent work
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 bg-slate-900"
                  style={{ imageRendering: 'auto' }}
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={
                        tag === "JavaScript"
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-200 text-gray-900 border border-yellow-300 shadow-md"
                          : tag === "Go"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-400 text-white border border-cyan-400 shadow-md"
                          : tag === "Node.js"
                          ? "bg-gradient-to-r from-green-500 to-green-300 text-white border border-green-400 shadow-md"
                          : tag === "React"
                          ? "bg-gradient-to-r from-sky-400 to-blue-300 text-white border border-sky-300 shadow-md"
                          : tag === "MongoDB"
                          ? "bg-gradient-to-r from-green-700 to-green-400 text-white border border-green-500 shadow-md"
                          : tag === "Proxmox"
                          ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white border border-orange-400 shadow-md"
                          : tag === "Linux"
                          ? "bg-gradient-to-r from-gray-700 to-gray-400 text-white border border-gray-500 shadow-md"
                          : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/20 text-purple-300 bg-transparent cursor-not-allowed opacity-60"
                      disabled
                    >
                      <Github className="w-4 h-4 mr-2" />
                      No Source
                    </Button>
                  )}
                  <Button size="sm" className="bg-purple-500 hover:bg-purple-600" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3
            className={`text-2xl font-bold text-white mb-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Other Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group bg-slate-800/30 border-slate-700 hover:border-purple-500/30 transition-all duration-300 hover:scale-102 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(index + featuredProjects.length) * 100}ms` }}
            >
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300 p-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300 p-2" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
