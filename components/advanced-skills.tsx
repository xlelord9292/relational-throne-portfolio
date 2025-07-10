"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioConfig } from "@/config/portfolio-config"

export function AdvancedSkills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          portfolioConfig.skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, index])
            }, index * 150)
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

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(rgba(236, 72, 153, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 72, 153, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
              backgroundPosition: "0 0, 0 0, 0 0, 0 0",
            }}
          />
        </div>

        {/* Floating Code Symbols */}
        <div className="absolute inset-0">
          {["</", "{}", "()", "[]", "=>", "&&", "||", "++"].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-purple-500/20 font-mono text-2xl animate-float-code opacity-30 hover:opacity-60 transition-opacity"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + Math.sin(i) * 30}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Skills & Expertise
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Cutting-edge technologies and frameworks I work with to build exceptional digital experiences
          </p>
        </div>

        {/* 3D Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {portfolioConfig.skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`group relative bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: hoveredSkill === index ? "rotateY(10deg) rotateX(5deg)" : "rotateY(0deg) rotateX(0deg)",
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Glowing Background */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: skill.color }}
              />

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                    {skill.name}
                  </h3>
                  <Badge
                    className="text-xs px-2 py-1 border-0"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    {skill.level}%
                  </Badge>
                </div>

                {/* 3D Progress Bar */}
                <div className="relative">
                  <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                      style={{
                        backgroundColor: skill.color,
                        width: animatedSkills.includes(index) ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                        boxShadow: `0 0 20px ${skill.color}40`,
                      }}
                    >
                      {/* Animated Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                  </div>

                  {/* Floating Percentage */}
                  <div
                    className={`absolute -top-8 right-0 text-sm font-bold transition-all duration-1000 ${animatedSkills.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    style={{ color: skill.color, transitionDelay: `${index * 200 + 500}ms` }}
                  >
                    {skill.level}%
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </CardContent>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}10, transparent)`,
                  filter: "blur(1px)",
                }}
              />
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Card className="inline-block bg-black/20 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{portfolioConfig.skills.length}</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {Math.round(
                      portfolioConfig.skills.reduce((acc, skill) => acc + skill.level, 0) /
                        portfolioConfig.skills.length,
                    )}
                    %
                  </div>
                  <div className="text-sm text-gray-400">Avg Proficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
