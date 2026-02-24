"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ContactInfoItemProps {
  icon: React.ReactNode
  title: string
  content: React.ReactNode | string
  link?: string
  index?: number
  noLink?: boolean // Added this prop to force no link behavior
}

export function ContactInfoItem({ icon, title, content, link, index = 0, noLink = false }: ContactInfoItemProps) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 5 }}
    >
      <motion.div
        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.2, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        {typeof content === "string" ? (
          noLink || !link ? (
            <p className="text-foreground/90">{content}</p>
          ) : (
            <a
              href={link}
              className="text-foreground/90 hover:text-primary transition-colors cursor-pointer"
              target={link.startsWith("http") ? "_blank" : "_self"}
              rel={link.startsWith("http") ? "noopener noreferrer" : ""}
            >
              {content}
            </a>
          )
        ) : (
          content
        )}
      </div>
    </motion.div>
  )
}
