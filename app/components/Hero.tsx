"use client"

import { motion } from "framer-motion"
import { BriefcaseIcon, BookOpenIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-background min-h-screen lg:h-[90vh] flex items-center hero-section pt-16 sm:pt-0">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-20 left-5 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/20 to-blue-400/15 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.4, 1.2, 1],
            opacity: [0.15, 0.4, 0.25, 0.15],
            y: [0, -20, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/3 w-32 h-32 sm:w-60 sm:h-60 bg-gradient-to-br from-green-400/15 to-primary/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.5, 1.2],
            opacity: [0.1, 0.3, 0.2, 0.1],
            x: [0, 30, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute -bottom-16 right-10 sm:right-20 w-28 h-28 sm:w-48 sm:h-48 bg-gradient-to-br from-purple-400/18 to-pink-400/12 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.12, 0.35, 0.18, 0.12],
            y: [0, -25, -5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 w-32 h-32 sm:w-52 sm:h-52 bg-gradient-to-br from-yellow-400/12 to-orange-400/15 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.1, 1.6, 1, 1.1],
            opacity: [0.08, 0.28, 0.15, 0.08],
            x: [0, -40, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute -bottom-24 left-1/2 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-cyan-400/16 to-blue-500/14 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1.4, 1],
            opacity: [0.14, 0.32, 0.22, 0.14],
            y: [0, -30, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute top-20 right-10 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 bg-primary/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-16 sm:right-32 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/20 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 right-8 sm:right-16 w-2 h-2 sm:w-3 sm:h-3 bg-green-400/25 rounded-full"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-60 right-4 sm:right-8 w-3 h-3 sm:w-5 sm:h-5 bg-purple-400/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute top-16 right-20 sm:right-40 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-full blur-lg sm:blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-12 sm:right-24 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400/10 to-primary/10 rounded-full blur-md sm:blur-lg"
          animate={{
            scale: [1, 0.7, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-8 lg:px-8 relative z-10">
        <div className="col-span-1 lg:col-span-6 xl:col-span-5 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Student Media & Entertainment Business
            </span>
          </motion.div>
          <motion.h1
            className="mt-6 lg:mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-gradient">Luka Dekeerle</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Student. Creator. Toekomstige Mediaprofessional.
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ik ben Luka Dekeerle, een ambitieuze creativeling met een passie voor videobewerking en de droom om ooit
            mijn eigen mediabedrijf op te richten.
          </motion.p>
          <motion.div
            className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-x-6 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="max-w-[240px] w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 hover:scale-105"
            >
              <BriefcaseIcon className="w-4 h-4" />
              Bekijk Mijn Werk
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="max-w-[240px] w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold leading-6 text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-primary/5"
            >
              <BookOpenIcon className="w-4 h-4" />
              Lees Meer Over Mij <span aria-hidden="true">→</span>
            </button>
          </motion.div>
        </div>
        <div className="col-span-1 lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-center items-center mt-12 sm:mt-8 lg:mt-0 order-1 lg:order-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-3 h-3 lg:w-4 lg:h-4 bg-primary/40 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-3 lg:-top-4 -right-6 lg:-right-8 w-4 h-4 lg:w-5 lg:h-5 bg-blue-400/30 rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute -bottom-3 lg:-bottom-4 -left-6 lg:-left-8 w-5 h-5 lg:w-6 lg:h-6 bg-green-400/25 rounded-full"
              animate={{
                x: [0, 8, 0],
                scale: [1, 0.8, 1],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 w-3 h-3 lg:w-4 lg:h-4 bg-purple-400/35 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [0.35, 0.8, 0.35],
              }}
              transition={{
                duration: 2.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <motion.div
              className="absolute top-8 lg:top-12 -left-8 lg:-left-10 w-2 h-2 lg:w-3 lg:h-3 bg-red-400/40 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
            <motion.div
              className="absolute bottom-8 lg:bottom-12 -right-8 lg:-right-10 w-4 h-4 lg:w-5 lg:h-5 bg-yellow-400/30 rounded-full"
              animate={{
                x: [0, -12, 0],
                y: [0, -8, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-blue-400/20 to-green-400/20 blur-md"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <Image
                src="/images/luka_1.png"
                alt="Luka Dekeerle"
                width={220}
                height={220}
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-[220px] lg:h-[220px] rounded-full object-cover shadow-xl ring-2 ring-primary/20 "
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          className="cursor-pointer group hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToNextSection}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <motion.div
              className="text-primary font-semibold text-xs tracking-[0.15em]"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              SCROLL
            </motion.div>

            <div className="flex space-x-1">
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0,
                }}
              />
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
            </div>

            <motion.div
              className="flex items-center"
              animate={{
                y: [0, 2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-primary"></div>
            </motion.div>
          </div>
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>
    </div>
  )
}
