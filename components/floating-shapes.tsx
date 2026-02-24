"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ShapeProps {
  size: number
  x: number
  y: number
  delay: number
  duration: number
  color: string
  shape: "circle" | "square" | "triangle"
}

function Shape({ size, x, y, delay, duration, color, shape }: ShapeProps) {
  let shapeElement

  switch (shape) {
    case "circle":
      shapeElement = <div className={`w-full h-full rounded-full bg-${color}`} />
      break
    case "square":
      shapeElement = <div className={`w-full h-full rotate-45 bg-${color}`} />
      break
    case "triangle":
      shapeElement = (
        <div
          className={`w-0 h-0 border-l-[${size / 2}px] border-r-[${size / 2}px] border-b-[${size}px] border-l-transparent border-r-transparent border-b-${color}`}
        />
      )
      break
  }

  return (
    <motion.div
      className="absolute opacity-10"
      style={{
        width: size,
        height: size,
        x,
        y,
      }}
      animate={{
        y: [y, y - 100, y],
        x: [x, x + 50, x],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {shapeElement}
    </motion.div>
  )
}

export function FloatingShapes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const shapes = [
    { size: 40, x: "10%", y: "20%", delay: 0, duration: 15, color: "primary-500", shape: "circle" as const },
    { size: 60, x: "70%", y: "60%", delay: 5, duration: 18, color: "primary-300", shape: "square" as const },
    { size: 30, x: "30%", y: "70%", delay: 2, duration: 12, color: "primary-400", shape: "circle" as const },
    { size: 50, x: "80%", y: "30%", delay: 8, duration: 20, color: "primary-200", shape: "circle" as const },
    { size: 35, x: "50%", y: "40%", delay: 4, duration: 16, color: "primary-600", shape: "square" as const },
  ]

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          size={shape.size}
          x={shape.x}
          y={shape.y}
          delay={shape.delay}
          duration={shape.duration}
          color={shape.color}
          shape={shape.shape}
        />
      ))}
    </div>
  )
}
