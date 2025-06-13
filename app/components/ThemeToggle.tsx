"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".theme-toggle-container")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <div className="relative theme-toggle-container">
      <Button variant="outline" size="icon" className="rounded-full ml-4" onClick={() => setIsOpen(!isOpen)}>
        {theme === "dark" ? (
          <MoonIcon className="h-5 w-5" />
        ) : theme === "light" ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <ComputerDesktopIcon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
          <div
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
            onClick={() => {
              setTheme("system")
              setIsOpen(false)
            }}
          >
            <ComputerDesktopIcon className="h-4 w-4 mr-2" />
            <span>Systeem</span>
          </div>
          <div
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
            onClick={() => {
              setTheme("dark")
              setIsOpen(false)
            }}
          >
            <MoonIcon className="h-4 w-4 mr-2" />
            <span>Donker</span>
          </div>
          <div
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
            onClick={() => {
              setTheme("light")
              setIsOpen(false)
            }}
          >
            <SunIcon className="h-4 w-4 mr-2" />
            <span>Licht</span>
          </div>
        </div>
      )}
    </div>
  )
}
