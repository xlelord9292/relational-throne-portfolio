"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Briefcase } from "lucide-react"
import type { Config } from "@/lib/config"

interface AboutSectionProps {
  config: Config["about"]
}

export function AboutSection({ config }: AboutSectionProps) {
  const getSkillAnimation = (index: number) => {
    const baseDelay = index * 0.1

    switch (config.skills.animation_style) {
      case "stagger":
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: baseDelay },
          whileHover: { scale: 1.05, y: -2 },
        }
      case "wave":
        return {
          initial: { opacity: 0, scale: 0 },
          whileInView: { opacity: 1, scale: 1 },
          transition: {
            duration: 0.6,
            delay: baseDelay,
            type: "spring",
            stiffness: 200,
          },
          whileHover: {
            scale: 1.1,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          },
        }
      case "bounce":
        return {
          initial: { opacity: 0, y: -50 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay: baseDelay,
            type: "spring",
            bounce: 0.6,
          },
          whileHover: {
            y: -5,
            transition: { type: "spring", stiffness: 400 },
          },
        }
      case "fade":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8, delay: baseDelay },
          whileHover: {
            opacity: 0.8,
            scale: 1.02,
          },
        }
      default:
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: baseDelay },
        }
    }
  }

  return (
    <section id="about" className="section-padding bg-muted/30">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{config.description}</p>

            {config.stats.enabled && (
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{config.stats.experience_years}+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{config.stats.projects_completed}+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{config.stats.happy_clients}+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </motion.div>
              </div>
            )}
          </motion.div>

          {/* Skills */}
          {config.skills.enabled && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">{config.skills.title}</h3>
              <div className="flex flex-wrap gap-3">
                {config.skills.items.map((skill, index) => (
                  <motion.div key={skill} {...getSkillAnimation(index)} viewport={{ once: true }}>
                    <Badge
                      variant="secondary"
                      className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
