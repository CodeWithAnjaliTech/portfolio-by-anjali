"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle, Loader2, Send, AlertCircle } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission with a delay
    try {
      // In a real application, you would send this data to your server
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: `Thank you ${formData.name}, your message has been sent to Anjali.`,
      })

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError("Something went wrong. Please try again later.")
      toast({
        title: "Error sending message",
        description: "Please try again or contact directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-full flex flex-col items-center justify-center text-center p-6"
      >
        <motion.div
          className="mb-6 text-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, 0] }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <CheckCircle size={60} />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="gap-2">
          <Send size={16} />
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Your name"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Your email"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Subject"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Your message"
          required
        ></textarea>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button className="w-full group" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  )
}
