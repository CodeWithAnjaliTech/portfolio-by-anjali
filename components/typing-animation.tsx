"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleTyping = () => {
      const fullText = texts[currentTextIndex]

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1))

        // If we've typed the full text
        if (currentText === fullText) {
          setIsBlinking(true)
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setIsDeleting(true)
            setIsBlinking(false)
          }, delayBetweenTexts)
          return
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1))

        // If we've deleted all text
        if (currentText === "") {
          setIsDeleting(false)
          // Move to the next text
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          return
        }
      }

      // Set the next timeout
      timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    }

    timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <motion.span className="inline-block" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {currentText}
      <span
        className={`inline-block w-0.5 h-6 bg-primary ml-1 align-middle ${isBlinking ? "animate-blink" : ""}`}
      ></span>
    </motion.span>
  )
}
