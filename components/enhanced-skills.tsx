"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioConfig } from "@/config/portfolio-config"

export function EnhancedSkills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          portfolioConfig.skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, index])
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillsByCategory = portfolioConfig.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof portfolioConfig.skills>,
  )

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Language":
        return "from-indigo-500/20 to-blue-500/20 border-indigo-500/30"
      case "Framework":
        return "from-purple-500/20 to-violet-500/20 border-purple-500/30"
      case "Frontend":
        return "from-pink-500/20 to-rose-500/20 border-pink-500/30"
      case "Runtime":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30"
      case "Tool":
        return "from-orange-500/20 to-amber-500/20 border-orange-500/30"
      default:
        return "from-slate-500/20 to-gray-500/20 border-slate-500/30"
    }
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Skills & Technologies
            </h2>
            <p
              className={`text-xl text-slate-400 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Technologies I work with to build amazing projects
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
              <div
                key={category}
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  {category}
                  <Badge variant="outline" className="text-xs border-slate-600/50 text-slate-400 bg-slate-800/30">
                    {skills.length}
                  </Badge>
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <Card
                      key={skill.name}
                      className={`bg-gradient-to-br ${getCategoryColor(skill.category)} backdrop-blur-xl border hover:scale-105 transition-all duration-300 hover:shadow-lg group`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-medium text-white group-hover:text-indigo-200 transition-colors">
                            {skill.name}
                          </h4>
                          <span
                            className="text-sm font-bold px-2 py-1 rounded-full bg-slate-800/50"
                            style={{ color: skill.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                          <div
                            className="h-full rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                            style={{
                              backgroundColor: skill.color,
                              width: animatedSkills.includes(portfolioConfig.skills.indexOf(skill))
                                ? `${skill.level}%`
                                : "0%",
                              transitionDelay: `${index * 100}ms`,
                              boxShadow: `0 0 10px ${skill.color}40`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
