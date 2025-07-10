"use client"

import { useState, useEffect, useRef } from "react"
import { portfolioConfig } from "@/config/portfolio-config"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars with delay
          portfolioConfig.skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, index])
            }, index * 200)
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M0 10h20M10 0v20"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-purple-400 animate-pulse"
                />
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-purple-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating Code Blocks */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-24 h-16 bg-slate-700/30 rounded border border-purple-500/20 animate-float-code opacity-20">
            <div className="p-2 text-xs text-purple-400 font-mono">{"<div>"}</div>
          </div>
          <div className="absolute top-2/3 right-1/4 w-20 h-12 bg-slate-700/30 rounded border border-pink-500/20 animate-float-code-reverse opacity-20">
            <div className="p-2 text-xs text-pink-400 font-mono">{"{ }"}</div>
          </div>
          <div className="absolute top-1/2 left-3/4 w-16 h-10 bg-slate-700/30 rounded border border-blue-500/20 animate-float-code opacity-20">
            <div className="p-1 text-xs text-blue-400 font-mono">{"fn()"}</div>
          </div>
        </div>

        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-pink-500/5 to-transparent rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Skills & Expertise
          </h2>
          <p
            className={`text-xl text-gray-400 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioConfig.skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                  style={{
                    backgroundColor: skill.color,
                    width: animatedSkills.includes(index) ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
