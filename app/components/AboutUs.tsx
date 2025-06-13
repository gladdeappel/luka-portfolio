"use client"

import { motion } from "framer-motion"
import { AcademicCapIcon, HeartIcon, RocketLaunchIcon } from "@heroicons/react/24/outline"

export default function AboutMe() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-16 sm:-bottom-32 left-8 sm:left-16 w-32 h-32 sm:w-56 sm:h-56 bg-gradient-to-br from-blue-400/12 to-primary/18 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.5, 1.2, 1],
            opacity: [0.08, 0.25, 0.15, 0.08],
            x: [0, 25, -10, 0],
          }}
          transition={{
            duration: 11,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-10 sm:-bottom-20 right-10 sm:right-20 w-24 h-24 sm:w-44 sm:h-44 bg-gradient-to-br from-green-400/14 to-cyan-400/16 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.4, 1.2],
            opacity: [0.12, 0.3, 0.18, 0.12],
            y: [0, -20, -5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
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
          Over Mij
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 rounded-2xl border border-primary/10">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Momenteel studeer ik <span className="text-primary font-semibold">Media & Entertainment Business</span>{" "}
                aan VIVES Hogeschool. Mijn interesses liggen vooral bij videobewerking, grafisch ontwerp en fotografie.
                Met mijn vaardigheden in Adobe-tools geef ik graag creatieve ideeën vorm.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Naast mijn studies houd ik me bezig met fitness en werk ik aan verschillende creatieve projecten. Mijn
                droom is om in de toekomst mijn eigen mediabedrijf op te richten en de creatieve industrie te verrijken
                met innovatieve content.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <div className="grid gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card/50 rounded-xl border border-border/50">
                <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg flex-shrink-0">
                  <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Educatie</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Media & Entertainment Business aan VIVES Hogeschool
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card/50 rounded-xl border border-border/50">
                <div className="p-2 sm:p-3 bg-red-500/10 rounded-lg flex-shrink-0">
                  <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Passies</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Fitness, Videobewerking, Grafisch Ontwerp & Fotografie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card/50 rounded-xl border border-border/50">
                <div className="p-2 sm:p-3 bg-green-500/10 rounded-lg flex-shrink-0">
                  <RocketLaunchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Ambitie</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Eigen mediabedrijf oprichten en de creatieve industrie verrijken
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>
    </section>
  )
}
