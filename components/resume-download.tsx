"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"

export function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Create a link to the PDF file
    const link = document.createElement("a")
    link.href = "/Anjali_Dave_Resume.pdf"
    link.download = "Anjali_Dave_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <Button onClick={handleDownload} className="gap-2" disabled={isDownloading}>
      <Download size={18} />
      {isDownloading ? "Downloading..." : "Download Resume"}
    </Button>
  )
}
