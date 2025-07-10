"use client"

import { useState, useEffect, useRef } from "react"
import { Building, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioConfig } from "@/config/portfolio-config"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        {/* Flowing Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="url(#gradient1)"
              strokeWidth="0.2"
              fill="none"
              className="animate-draw"
            />
            <path
              d="M0,60 Q25,40 50,60 T100,60"
              stroke="url(#gradient2)"
              strokeWidth="0.2"
              fill="none"
              className="animate-draw"
              style={{ animationDelay: "1s" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139,92,246,0)" />
                <stop offset="50%" stopColor="rgba(139,92,246,0.5)" />
                <stop offset="100%" stopColor="rgba(139,92,246,0)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236,72,153,0)" />
                <stop offset="50%" stopColor="rgba(236,72,153,0.5)" />
                <stop offset="100%" stopColor="rgba(236,72,153,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Ambient Lighting */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow transform -translate-x-1/2" />
        <div
          className="absolute bottom-0 right-1/2 w-80 h-80 bg-gradient-radial from-pink-500/8 to-transparent rounded-full blur-2xl animate-pulse-slow transform translate-x-1/2"
          style={{ animationDelay: "3s" }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Experience
          </h2>
          <p
            className={`text-xl text-gray-400 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            My professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

            {portfolioConfig.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-800 z-10" />

                <div className="ml-16 flex-1">
                  <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-102">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-purple-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 mb-3">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
