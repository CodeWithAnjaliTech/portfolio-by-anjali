"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 50,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance }
      case "down":
        return { opacity: 0, y: -distance }
      case "left":
        return { opacity: 0, x: distance }
      case "right":
        return { opacity: 0, x: -distance }
      default:
        return { opacity: 0, y: distance }
    }
  }

  const getFinalPosition = () => {
    return {
      opacity: 1,
      y: 0,
      x: 0,
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
