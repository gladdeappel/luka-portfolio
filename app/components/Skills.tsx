"use client"

import { motion } from "framer-motion"
import { VideoCameraIcon, PaintBrushIcon, CameraIcon, MegaphoneIcon } from "@heroicons/react/24/outline"

const skills = [
  {
    icon: <VideoCameraIcon className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />,
    title: "Videobewerking",
    description: "Ervaren met Adobe Premiere Pro en After Effects",
  },
  {
    icon: <PaintBrushIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
    title: "Grafisch Ontwerp",
    description: "Creatieve designs met Adobe Photoshop en Illustrator",
  },
  {
    icon: <CameraIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
    title: "Fotografie & Video",
    description: "Passie voor visuele storytelling en compositie",
  },
  {
    icon: <MegaphoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
    title: "Marketing",
    description: "Focus op content en sociale media",
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 bg-primary/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/25 rounded-full"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 sm:mb-12 lg:mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mijn Vaardigheden
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg transition-all duration-300 border border-border/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              <div className="text-center relative z-10">
                <motion.div
                  className="p-2 sm:p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mx-auto w-fit mb-3 sm:mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>
    </section>
  )
}
