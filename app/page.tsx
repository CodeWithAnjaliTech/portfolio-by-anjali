"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { QuoteCarousel } from "@/components/quote-carousel"
import { ParticlesBackground } from "@/components/particles-background"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { FloatingShapes } from "@/components/floating-shapes"
import { ScrollProgress } from "@/components/scroll-progress"
import { ResumeDownload } from "@/components/resume-download"
import { ContactForm } from "@/components/contact-form"
import { TypingAnimation } from "@/components/typing-animation"
import { FloatingElement } from "@/components/floating-element"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactInfoItem } from "@/components/contact-info-item"
import { Toaster } from "@/components/ui/toaster"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Toaster />
      <ScrollProgress />

      {/* Header/Navigation */}
      <motion.header
        className="sticky top-0 z-[100] w-full border-b border-border bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <motion.div
            className="font-semibold text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Anjali Dave
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["about", "experience", "skills", "projects", "education", "quotes", "contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ResumeDownload />
            </motion.div>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-border">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2 text-foreground">Anjali Dave</h2>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
                <nav className="flex flex-col gap-2">
                  {["about", "experience", "skills", "projects", "education", "quotes", "contact"].map((item) => (
                    <SheetClose key={item} asChild>
                      <a
                        href={`#${item}`}
                        className="text-base font-medium hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-4 pt-4 border-t space-y-3">
                  <ThemeToggle />
                  <ResumeDownload />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-12 md:py-20 bg-background overflow-hidden relative">
        <ParticlesBackground />
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center px-4 sm:px-6"
        >
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Anjali Dave
            </motion.h1>
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Engineer |{" "}
              <TypingAnimation texts={["MERN Stack Developer", "Full Stack Developer", "React Specialist"]} />
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-foreground/90 mb-4 sm:mb-6 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A passionate and detail-oriented software engineer with over 4+ years of experience in full-stack web
              development, specializing in MongoDB, Express, React and Node.js. Adept at creating high-performance
              applications and implementing secure, scalable solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button className="gap-2 w-full sm:w-auto" size="sm" asChild>
                  <a href="mailto:anjaliwork0912@gmail.com">
                    <Mail size={18} />
                    Contact Me
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button variant="outline" className="gap-2 w-full sm:w-auto" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/anjali-dave-67234421b" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button variant="outline" className="gap-2 w-full sm:w-auto" size="sm" asChild>
                  <a href="https://github.com/CodeWithAnjaliTechie" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto md:hidden">
                <ResumeDownload />
              </motion.div>
            </motion.div>
          </motion.div>
          <FloatingElement duration={6} yOffset={20}>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white shadow-xl mx-auto md:mx-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Image
                  src="/images/anjali-work.png"
                  alt="Anjali Dave"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </FloatingElement>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-background relative">
        <AnimatedGradientBackground />
        <div className="container px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">About Me</h2>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <ScrollReveal delay={0.2}>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    I'm a Software Engineer with a passion for creating efficient, user-friendly web applications. With over
                    4 years of experience in full-stack development, I specialize in the MERN stack (MongoDB, Express,
                    React, Node.js), building responsive and performant web solutions.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    My expertise includes front-end development with React, Next.js, and Gatsby, as well as working with
                    various CSS frameworks like Tailwind CSS and Material-UI. I'm experienced in integrating third-party
                    APIs and optimizing application performance.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    I enjoy collaborating with teams, mentoring junior developers, and continuously learning new
                    technologies to stay at the forefront of web development.
                  </p>
                </ScrollReveal>
              </div>

              <div className="space-y-4">
                <ScrollReveal delay={0.2} direction="right">
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    Throughout my career, I've had the opportunity to work on diverse projects ranging from gaming desktop
                    applications to marketing analytics platforms. I thrive in environments where I can solve complex
                    technical challenges and deliver solutions that make a real impact.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4} direction="right">
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    I'm particularly passionate about building scalable architectures, implementing robust authentication
                    systems, and creating seamless user experiences. My approach to development emphasizes clean code,
                    best practices, and continuous improvement.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.6} direction="right">
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    When I'm not coding, I enjoy contributing to open-source projects, exploring new technologies, and
                    sharing knowledge with the developer community. I believe in the power of technology to solve real-world
                    problems and am always excited to take on new challenges.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 bg-muted/30 relative">
        <FloatingShapes />
        <div className="container px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Work Experience</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <div className="relative border-l border-border pl-8 pb-10">
                <motion.div
                  className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Briefcase size={14} className="text-primary-foreground" />
                </motion.div>

                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">Software Engineer</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-muted-foreground mb-1">
                    <span className="font-medium">Algoris Pvt., Ahmedabad</span>
                    <span>•</span>
                    <span>May 2022 - Present</span>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/90 mb-4">
                    Algoris is a dynamic startup delivering cutting-edge software solutions for diverse industries,
                    catering primarily to US-based clients.
                  </p>

                  <h4 className="font-semibold text-base sm:text-lg mb-2">Key Contributions</h4>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 text-sm sm:text-base text-foreground/90 mb-4">
                    <li>
                      Built and maintained high-quality web solutions, including Gatsby-based applications, WordPress
                      websites, and custom front-end/back-end development.
                    </li>
                    <li>
                      Resolved bugs, optimized JavaScript and React code, and improved front-end performance to ensure
                      user-friendly, scalable applications.
                    </li>
                    <li>
                      Streamlined workflows by integrating third-party APIs, ensuring seamless data exchange and
                      improved application functionality.
                    </li>
                    <li>
                      Mentored interns, sharing best practices and fostering a collaborative learning environment.
                    </li>
                    <li>
                      Gained advanced expertise in modern JavaScript frameworks, database management, and scalable API
                      integrations.
                    </li>
                  </ul>

                  <h4 className="font-semibold text-base sm:text-lg mb-3">Key Projects</h4>

                  <div className="mb-4">
                    <h5 className="font-semibold text-sm sm:text-base mb-1.5">Chaosground – Gaming Desktop Application (Project Lead)</h5>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-1.5">
                      <span className="font-medium">Tech Stack:</span> Electron.js, Overwolf, React, Supabase, JavaScript
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm text-foreground/90">
                      <li>
                        Led end-to-end development of a cross-platform gaming desktop application as Senior Software Engineer.
                      </li>
                      <li>
                        Architected and delivered the application using Electron.js integrated with Overwolf, enabling real-time overlays and in-game interactions.
                      </li>
                      <li>
                        Owned feature planning, technical decisions, and implementation while coordinating with designers and stakeholders.
                      </li>
                      <li>
                        Built high-performance, responsive UI using React, optimized for low-latency gaming environments.
                      </li>
                      <li>
                        Implemented Supabase for authentication, real-time data synchronization, and backend services, improving scalability and development speed.
                      </li>
                      <li>
                        Ensured modular architecture to support future games, plugins, and feature expansion.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-sm sm:text-base mb-1.5">Real Estate Web Platform (Team Project)</h5>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-1.5">
                      <span className="font-medium">Tech Stack:</span> Next.js, React, JavaScript, REST APIs
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm text-foreground/90">
                      <li>
                        Contributed within a cross-functional team to build a modern real estate web platform.
                      </li>
                      <li>
                        Developed reusable UI components and dynamic property listing modules.
                      </li>
                      <li>
                        Implemented server-side rendering (SSR) and optimized routing for SEO and performance.
                      </li>
                      <li>
                        Integrated REST APIs for property search, filtering, and user interactions.
                      </li>
                      <li>
                        Focused on performance optimization, accessibility, and responsive UI/UX across devices.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-sm sm:text-base mb-1.5">Ogno — Marketing Analytics Dashboard</h5>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-1.5">
                      <span className="font-medium">Tech Stack:</span> Next.js 15, React 19, TypeScript, PostgreSQL, Prisma ORM, NextAuth.js, Stripe, Trigger.dev, Redis, Tailwind CSS, shadcn/ui, Zod, Docker
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm text-foreground/90">
                      <li>
                        Architected and built a multi-tenant marketing analytics platform with omnichannel ad platform integrations (Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads) using a modular sync pipeline.
                      </li>
                      <li>
                        Designed and implemented OAuth 2.0 integration system supporting 6 providers with AES-256-GCM token encryption, automatic token refresh, and CSRF protection.
                      </li>
                      <li>
                        Built a layered backend architecture following Controller → Service → Repository pattern across 15+ services and 17 repositories with versioned REST API routes and Zod validation.
                      </li>
                      <li>
                        Developed PostgreSQL schema with Prisma ORM for time-series metrics with optimized composite indexes and implemented scheduled data sync jobs via Trigger.dev.
                      </li>
                      <li>
                        Integrated Stripe for subscription billing and built a role-based multi-tenant system with organization-scoped data isolation and membership management.
                      </li>
                      <li>
                        Developed 50+ reusable UI components using shadcn/ui with Recharts-powered dashboards and responsive layouts.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-sm sm:text-base mb-1.5">Alloy Automation (Workflow Automation Platform)</h5>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-1.5">
                      <span className="font-medium">Tech Stack:</span> Node.js, Express, TypeScript, React, MobX, MongoDB, Redis, Docker, AWS (S3, SQS, Lambda), OpenAPI (OAS), OAuth 2.0, Vite, Ant Design, Tailwind CSS, Jest, Playwright
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm text-foreground/90">
                      <li>
                        Architected and built 40+ OpenAPI Specification (OAS) connectors from scratch (Jira, HubSpot, Stripe, Zendesk, Airtable, LinkedIn, QuickBooks, TikTok Shop, WooCommerce, Microsoft SharePoint, and more), defining complete YAML specs with authentication and actions.
                      </li>
                      <li>
                        Implemented OAuth 2.0 authentication strategies for 10+ third-party integrations (Klaviyo, Omnisend, Xero, MercadoLibre, LoyaltyLion, etc.), handling authorization flows, token exchange, refresh logic, and credential persistence.
                      </li>
                      <li>
                        Developed and maintained legacy TypeScript connector blocks with full action implementations for connectors like Shopify, Asana, Gorgias, BigCommerce, and Klaviyo.
                      </li>
                      <li>
                        Contributed to the workflow canvas UI, building frontend components in React with MobX state management for the drag-and-drop visual workflow builder.
                      </li>
                      <li>
                        Built features for the Embedded SDK / Connectivity API, including Forge account functionality, team invite flows, credential management, and shareable link support.
                      </li>
                      <li>
                        Wrote integration and smoke tests across connectors using Jest, ensuring end-to-end validation of API interactions and resolved production-critical bugs across the full stack.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative border-l border-border pl-8">
                <motion.div
                  className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <Briefcase size={14} className="text-primary-foreground" />
                </motion.div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold">React Developer Intern</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-muted-foreground mb-1">
                    <span className="font-medium">Infolabz Pvt. Ltd., Ahmedabad</span>
                    <span>•</span>
                    <span>January 2022 - May 2022</span>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/90">
                    Infolabz is a web application development and IT consulting company, offering innovative solutions
                    across various industries. They specialize in React-based web apps, focusing on security, data
                    protection, and enhancing user experience through API integration and state management.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-background relative">
        <AnimatedGradientBackground />
        <div className="container px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Skills & Expertise</h2>
          </ScrollReveal>

          <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    title: "Programming Languages",
                    skills: ["JavaScript", "TypeScript", "PHP", "HTML"],
                  },
                  {
                    title: "Databases",
                    skills: ["MongoDB", "MySQL", "Supabase"],
                  },
                  {
                    title: "Frameworks & Libraries",
                    skills: [
                      "React",
                      "Next.js",
                      "Gatsby",
                      "Electron.js",
                      "WordPress",
                      "CSS",
                      "Tailwind CSS",
                      "LESS",
                      "Bootstrap",
                      "Material-UI",
                      "Ant Design",
                    ],
                  },
                  {
                    title: "Tools & Platforms",
                    skills: [
                      "Git",
                      "GitHub/GitLab",
                      "VS Code",
                      "IntelliJ IDEA",
                      "Sublime Text",
                      "Eclipse",
                      "Figma",
                      "Adobe XD",
                      "StoryBook",
                      "Jira",
                      "Slack",
                      "Microsoft Teams",
                    ],
                  },
                ].map((category, index) => (
                  <ScrollReveal key={category.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                    <Card className="overflow-hidden backdrop-blur-sm bg-card/80 border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Code size={18} className="text-primary" />
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                            >
                              <Badge variant="secondary" className="transition-all duration-300">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soft">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Team Collaboration",
                    description: "Effectively work with cross-functional teams to achieve project goals",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    ),
                  },
                  {
                    title: "Research",
                    description: "Thorough research skills to find optimal solutions for complex problems",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    ),
                  },
                  {
                    title: "Multitasking",
                    description: "Efficiently manage multiple tasks and priorities simultaneously",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                    ),
                  },
                  {
                    title: "Creativity",
                    description: "Creative approach to problem-solving and design challenges",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ),
                  },
                  {
                    title: "Innovation",
                    description: "Innovative thinking to develop new solutions and approaches",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M2 12h5"></path>
                        <path d="M17 12h5"></path>
                        <path d="M12 2v5"></path>
                        <path d="M12 17v5"></path>
                        <path d="M4.93 4.93l3.54 3.54"></path>
                        <path d="M15.54 15.54l3.54 3.54"></path>
                        <path d="M4.93 19.07l3.54-3.54"></path>
                        <path d="M15.54 8.46l3.54-3.54"></path>
                      </svg>
                    ),
                  },
                ].map((skill, index) => (
                  <ScrollReveal key={skill.title} delay={index * 0.1}>
                    <Card className="backdrop-blur-sm bg-card/80 border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <motion.div
                          className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                          whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <h3 className="font-semibold mb-2">{skill.title}</h3>
                        <p className="text-muted-foreground text-sm">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-12 bg-muted/30 relative">
        <FloatingShapes />
        <div className="container px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">Featured Projects</h2>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Here are some of the projects I've worked on that showcase my skills and experience in full-stack development.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io"],
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
              },
              {
                title: "Weather Dashboard",
                description: "A responsive weather application that provides real-time weather data, forecasts, and interactive maps using third-party APIs.",
                technologies: ["React", "API Integration", "Chart.js", "CSS3"],
                image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
              },
              {
                title: "Blog Platform",
                description: "A modern blog platform with content management system, user authentication, and SEO optimization built with Gatsby and headless CMS.",
                technologies: ["Gatsby", "GraphQL", "Contentful", "SEO"],
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
                technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
              },
              {
                title: "API Integration Tool",
                description: "A comprehensive tool for integrating multiple third-party APIs with data transformation and webhook management capabilities.",
                technologies: ["Node.js", "Express", "API Integration", "Webhooks"],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
              },
            ].map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="overflow-hidden backdrop-blur-sm bg-card/80 border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative w-full h-48 bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/90 mb-3 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 bg-muted/30 relative">
        <FloatingShapes />
        <div className="container px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Education</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <div className="relative border-l border-border pl-4 sm:pl-8 pb-8 sm:pb-10">
                <motion.div
                  className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <GraduationCap size={14} className="text-primary-foreground" />
                </motion.div>

                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">B.E. in Computer Engineering</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <span className="font-medium">SAL Institute of Technology & Engineering Research</span>
                    <span>•</span>
                    <span>2019 - 2022</span>
                  </div>
                  <p className="text-foreground/90">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative border-l border-gray-300 pl-4 sm:pl-8">
                <motion.div
                  className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <GraduationCap size={14} className="text-primary-foreground" />
                </motion.div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Diploma in Computer Engineering</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <span className="font-medium">L.J. Polytechnic</span>
                    <span>•</span>
                    <span>2016 - 2019</span>
                  </div>
                  <p className="text-foreground/90">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-12 bg-background overflow-hidden relative">
        <AnimatedGradientBackground />
        <div className="container px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Inspirational Tech Quotes</h2>
          </ScrollReveal>

          <QuoteCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-muted/30 relative">
        <ParticlesBackground />
        <div className="relative z-10 container px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Get In Touch</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <ScrollReveal direction="left">
              <div className="backdrop-blur-sm bg-card/80 p-6 rounded-lg border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <ContactInfoItem
                    icon={<Phone size={18} className="text-primary" />}
                    title="Phone"
                    content="+91 8320259803"
                    noLink={true}
                    index={0}
                  />

                  <ContactInfoItem
                    icon={<Mail size={18} className="text-primary" />}
                    title="Email"
                    content="anjaliwork0912@gmail.com"
                    noLink={true}
                    index={1}
                  />

                  <ContactInfoItem
                    icon={<MapPin size={18} className="text-primary" />}
                    title="Location"
                    content="Ahmedabad, Gujarat, India"
                    index={2}
                  />

                  <ContactInfoItem
                    icon={<Linkedin size={18} className="text-primary" />}
                    title="LinkedIn"
                    content={
                      <a
                        href="https://www.linkedin.com/in/anjali-dave-67234421b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        View Profile <ExternalLink size={14} />
                      </a>
                    }
                    index={3}
                  />

                  <ContactInfoItem
                    icon={<Github size={18} className="text-primary" />}
                    title="GitHub"
                    content={
                      <a
                        href="https://github.com/CodeWithAnjaliTechie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        View Profile <ExternalLink size={14} />
                      </a>
                    }
                    index={4}
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="backdrop-blur-sm bg-card/80 p-6 rounded-lg border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 dark:opacity-30"></div>
        <div className="container relative px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-foreground">Anjali Dave</h3>
              <p className="text-muted-foreground">Software Engineer | MERN Stack Developer</p>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {[
                {
                  icon: <Linkedin size={18} className="text-foreground" />,
                  link: "https://www.linkedin.com/in/anjali-dave-67234421b",
                  label: "LinkedIn",
                },
                {
                  icon: <Github size={18} className="text-foreground" />,
                  link: "https://github.com/CodeWithAnjaliTechie",
                  label: "GitHub",
                },
                {
                  icon: <Mail size={18} className="text-foreground" />,
                  link: "mailto:anjaliwork0912@gmail.com",
                  label: "Email",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer content ends here - no additional elements */}
        </div>
      </footer>
    </main>
  )
}
