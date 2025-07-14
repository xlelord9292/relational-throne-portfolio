"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Server, Lightbulb, Smartphone, Database } from "lucide-react"
import type { Config } from "@/lib/config"

interface ServicesSectionProps {
  config: Config["services"]
}

const iconMap = {
  code: Code,
  palette: Palette,
  server: Server,
  lightbulb: Lightbulb,
  smartphone: Smartphone,
  database: Database,
}

export function ServicesSection({ config }: ServicesSectionProps) {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">{config.subtitle}</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 text-center group">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20"
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
