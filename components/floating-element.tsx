"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  yOffset = 15,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
