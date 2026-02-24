"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedGradientBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[10%] opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #3b82f6, transparent 40%)",
          backgroundSize: "80% 80%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  )
}
