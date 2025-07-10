"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioConfig } from "@/config/portfolio-config"

interface FormState {
  name: string
  email: string
  message: string
}

interface SubmissionState {
  loading: boolean
  success: boolean
  error: string | null
}

export function ModernContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })
  const [submission, setSubmission] = useState<SubmissionState>({
    loading: false,
    success: false,
    error: null,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setSubmission({ loading: true, success: false, error: null })

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmission({ loading: false, success: true, error: null })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmission({ loading: false, success: false, error: result.error })
      }
    } catch (error) {
      setSubmission({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again.",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    // Clear error when user starts typing
    if (submission.error) {
      setSubmission((prev) => ({ ...prev, error: null }))
    }
  }

  return (
    <section ref={sectionRef} className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Get In Touch
            </h2>
            <p
              className={`text-xl text-slate-400 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Have a project in mind? Let's work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-slate-400 leading-relaxed">
                  I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                  question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-slate-400">{portfolioConfig.personal.email}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-slate-400">{portfolioConfig.personal.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-8">
                  {submission.success ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon!</p>
                      <Button
                        className="mt-4 bg-transparent"
                        variant="outline"
                        onClick={() => setSubmission({ loading: false, success: false, error: null })}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 transition-colors"
                            required
                            disabled={submission.loading}
                          />
                        </div>
                        <div>
                          <Input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 transition-colors"
                            required
                            disabled={submission.loading}
                          />
                        </div>
                      </div>

                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 resize-none transition-colors"
                          required
                          disabled={submission.loading}
                        />
                      </div>

                      {submission.error && (
                        <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm">{submission.error}</span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors disabled:opacity-50"
                        disabled={submission.loading}
                      >
                        {submission.loading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
