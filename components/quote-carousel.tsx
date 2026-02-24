"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  {
    text: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
  },
  {
    text: "The best way to predict the future is to implement it.",
    author: "David Heinemeier Hansson",
  },
  {
    text: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Software is a great combination of artistry and engineering.",
    author: "Bill Gates",
  },
  {
    text: "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
  },
]

export function QuoteCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length)
      }, 4000) // Auto-scroll every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isHovered, currentQuote])

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <div
      className="max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <CardContent className="p-8 md:p-12 relative">
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10 dark:opacity-5">
                <Quote size={80} className="text-primary" />
              </div>

              {/* Quote Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="mt-1">
                    <Quote size={32} className="text-primary" />
                  </div>
                  <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {quotes[currentQuote].text}
                  </motion.p>
                </div>

                <motion.div
                  className="flex items-center gap-3 mt-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  <p className="text-muted-foreground font-semibold text-lg">
                    {quotes[currentQuote].author}
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent"></div>
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevQuote}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous quote"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextQuote}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next quote"
              >
                <ChevronRight size={20} />
              </button>
            </CardContent>
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>

          {/* Quote Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {currentQuote + 1} / {quotes.length}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
