"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"
import type { Config } from "@/lib/config"

interface ExperienceSectionProps {
  config: Config["experience"]
}

export function ExperienceSection({ config }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {config.items.map((experience, index) => (
                <motion.div
                  key={`${experience.company}-${experience.position}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                  <Card className="ml-0 md:ml-20 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">{experience.position}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                          <Calendar className="w-3 h-3" />
                          {experience.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
