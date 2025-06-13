"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  UserIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  ClockIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import ThemeToggle from "./ThemeToggle"

const navItems = [
  { id: "about", name: "Over Mij", icon: <UserIcon className="w-5 h-5" /> },
  { id: "skills", name: "Vaardigheden", icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
  { id: "work", name: "Portfolio", icon: <BriefcaseIcon className="w-5 h-5" /> },
  { id: "journey", name: "Reis", icon: <ClockIcon className="w-5 h-5" /> },
  { id: "contact", name: "Contact", icon: <EnvelopeIcon className="w-5 h-5" /> },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isManualScrolling = useRef(false)

  const scrollToTop = () => {
    isManualScrolling.current = true
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setActiveSection("")
    setMobileMenuOpen(false)
    setTimeout(() => {
      isManualScrolling.current = false
    }, 1000)
  }

  const scrollToSection = (id: string) => {
    isManualScrolling.current = true
    setActiveSection(id)
    setMobileMenuOpen(false)

    const section = document.getElementById(id)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }

    setTimeout(() => {
      isManualScrolling.current = false
    }, 1000)
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -20% 0px",
      threshold: 0.3,
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (!isManualScrolling.current) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      }
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    const heroSection = document.querySelector(".hero-section")
    if (heroSection) observer.observe(heroSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <button onClick={scrollToTop} className="-m-1.5 p-1.5">
              <span className="text-xl sm:text-2xl font-bold text-gradient">Luka Dekeerle</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-xl p-1.5 border border-border/30 shadow-sm">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md"
                    layoutId="activeNavPill"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      duration: 0.25,
                    }}
                  />
                )}

                <div className={`relative z-10 flex items-center gap-2.5`}>
                  <div className={activeSection === item.id ? "text-white/90" : "text-blue-600"}>{item.icon}</div>
                  <span className="font-medium">{item.name}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="flex lg:flex-1 justify-end items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </motion.header>

      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/10">
            <div className="flex items-center justify-between">
              <button onClick={scrollToTop} className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-gradient">Luka Dekeerle</span>
              </button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex w-full items-center gap-x-3 rounded-lg px-3 py-3 text-base font-semibold leading-7 transition-all duration-200 ${
                        activeSection === item.id ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <div className={activeSection === item.id ? "text-white" : "text-primary"}>{item.icon}</div>
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        </motion.div>
      )}
    </>
  )
}
