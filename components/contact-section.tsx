"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Send, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioConfig } from "@/config/portfolio-config"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Dynamic Contact Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        {/* Animated Constellation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Constellation Lines */}
            <g className="animate-constellation">
              <line x1="20" y1="30" x2="40" y2="20" stroke="rgba(139,92,246,0.3)" strokeWidth="0.1" />
              <line x1="40" y1="20" x2="60" y2="35" stroke="rgba(139,92,246,0.3)" strokeWidth="0.1" />
              <line x1="60" y1="35" x2="80" y2="25" stroke="rgba(139,92,246,0.3)" strokeWidth="0.1" />
              <line x1="30" y1="70" x2="50" y2="80" stroke="rgba(236,72,153,0.3)" strokeWidth="0.1" />
              <line x1="50" y1="80" x2="70" y2="65" stroke="rgba(236,72,153,0.3)" strokeWidth="0.1" />
            </g>

            {/* Stars */}
            <circle cx="20" cy="30" r="0.5" fill="rgba(139,92,246,0.8)" className="animate-twinkle" />
            <circle
              cx="40"
              cy="20"
              r="0.3"
              fill="rgba(139,92,246,0.6)"
              className="animate-twinkle"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="60"
              cy="35"
              r="0.4"
              fill="rgba(139,92,246,0.7)"
              className="animate-twinkle"
              style={{ animationDelay: "2s" }}
            />
            <circle
              cx="80"
              cy="25"
              r="0.3"
              fill="rgba(139,92,246,0.5)"
              className="animate-twinkle"
              style={{ animationDelay: "3s" }}
            />
            <circle
              cx="30"
              cy="70"
              r="0.4"
              fill="rgba(236,72,153,0.8)"
              className="animate-twinkle"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="50"
              cy="80"
              r="0.3"
              fill="rgba(236,72,153,0.6)"
              className="animate-twinkle"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="70"
              cy="65"
              r="0.5"
              fill="rgba(236,72,153,0.7)"
              className="animate-twinkle"
              style={{ animationDelay: "2.5s" }}
            />
          </svg>
        </div>

        {/* Message Bubbles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-16 h-10 bg-purple-500/10 rounded-full animate-float-message opacity-30">
            <div className="w-2 h-2 bg-purple-400 rounded-full m-2 animate-pulse" />
          </div>
          <div className="absolute top-2/3 right-1/4 w-12 h-8 bg-pink-500/10 rounded-full animate-float-message-reverse opacity-30">
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full m-2 animate-pulse" />
          </div>
          <div className="absolute bottom-1/4 left-1/2 w-14 h-9 bg-blue-500/10 rounded-full animate-float-message opacity-30">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full m-2 animate-pulse" />
          </div>
        </div>

        {/* Radial Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 via-purple-500/2 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-xl text-gray-400 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Let's work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-slate-700/30 border-slate-600 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">{portfolioConfig.personal.email}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/30 border-slate-600 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">{portfolioConfig.personal.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Card className="bg-slate-700/30 border-slate-600">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
