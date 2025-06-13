"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: "2021-2023",
    title: "Grafische Technieken",
    description: "Athena, Heule",
    details:
      "Tijdens mijn studie Grafische Technieken heb ik de fundamenten geleerd van visueel ontwerp, typografie en printmedia. Deze opleiding heeft mijn basis gelegd voor creatief denken en technische vaardigheden.",
  },
  {
    year: "2023-2026",
    title: "Media & Entertainment Business",
    description: "VIVES, Kortrijk",
    details:
      "Momenteel studeer ik Media & Entertainment Business waar ik me verder specialiseer in digitale media, videobewerking en de zakelijke kant van de creatieve industrie. Deze opleiding bereidt me voor op mijn toekomstige ondernemerschap.",
  },
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="journey" ref={containerRef} className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">Mijn Reis</h2>
          <p className="text-base sm:text-lg text-muted-foreground">Mijn educatieve reis door de creatieve wereld</p>
        </motion.div>

        {/* Mobile Timeline */}
        <div className="block sm:hidden space-y-6">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative pl-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full shadow-lg">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-2 top-6 w-0.5 h-full bg-primary/30" />
              )}
              <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 p-4">
                <span className="font-bold text-primary text-sm">{event.year}</span>
                <h3 className="text-lg font-semibold mb-1 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground mb-2 text-sm">{event.description}</p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">{event.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden sm:block relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30"
            style={{ scaleY: scaleX }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>
      <div className="w-5/12">
        <div className="p-4 sm:p-6 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg border border-border/50">
          <span className="font-bold text-primary text-sm">{event.year}</span>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{event.title}</h3>
          <p className="text-muted-foreground mb-3 text-sm sm:text-base">{event.description}</p>
          <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">{event.details}</p>
        </div>
      </div>
    </motion.div>
  )
}
