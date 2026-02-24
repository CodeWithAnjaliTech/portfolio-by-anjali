"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <motion.div
                  className="text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, 0] }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Quote size={40} />
                </motion.div>
              </div>
              <motion.p
                className="text-xl md:text-2xl font-medium mb-6 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {quotes[currentQuote].text}
              </motion.p>
              <motion.p
                className="text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                — {quotes[currentQuote].author}
              </motion.p>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? "w-8 bg-primary" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
