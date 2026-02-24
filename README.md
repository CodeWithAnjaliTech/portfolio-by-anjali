# Portfolio Website - Anjali Dave

A modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. This portfolio showcases professional experience, skills, projects, and provides a contact form for potential collaborations.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Interactive Animations**: Powered by Framer Motion for smooth scroll animations and interactions
- **Particle Background**: Dynamic particle effects using react-particles
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Easy download functionality for resume
- **Theme Support**: Light/dark theme support (configured for light theme by default)
- **Scroll Progress**: Visual scroll progress indicator
- **Quote Carousel**: Rotating inspirational tech quotes
- **SEO Optimized**: Built with Next.js for optimal SEO performance

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15**: React framework for production
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework

### Key Libraries
- **Framer Motion**: Animation library for React
- **shadcn/ui**: High-quality component library
- **react-particles**: Particle effects library
- **react-hook-form**: Form handling
- **Zod**: Schema validation
- **Lucide React**: Icon library
- **next-themes**: Theme management

### Development Tools
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **ESLint**: Code linting (configured to ignore during builds)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm** or **pnpm**: Package manager (npm comes with Node.js)
- **Git**: Version control system

## 🔧 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd portfolio-by-anjali
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or if using pnpm:
   ```bash
   pnpm install
   ```

3. **Environment Setup** (if needed):
   - Create a `.env.local` file in the root directory for any environment variables
   - Currently, the project doesn't require environment variables, but you may add them for:
     - Contact form backend API endpoint
     - Analytics tracking IDs
     - Other third-party service keys

## 🚀 Development

### Start Development Server

Run the development server:

```bash
npm run dev
```

or

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will automatically reload when you make changes to the code.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm run start
```

### Deployment Options

This Next.js application can be deployed to various platforms:

1. **Vercel** (Recommended for Next.js):
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js and configure the build
   - Push to main branch triggers automatic deployments

2. **Netlify**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Docker**:
   - Create a Dockerfile (example structure exists in nested directories)
   - Build and run using Docker commands

4. **Other Platforms**:
   - Any platform that supports Node.js applications
   - Ensure Node.js 18+ is available

## 📁 Project Structure

```
portfolio-by-anjali/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main portfolio page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── animated-gradient-background.tsx
│   ├── contact-form.tsx
│   ├── contact-info-item.tsx
│   ├── floating-element.tsx
│   ├── floating-shapes.tsx
│   ├── particles-background.tsx
│   ├── quote-carousel.tsx
│   ├── resume-download.tsx
│   ├── scroll-progress.tsx
│   ├── scroll-reveal.tsx
│   ├── theme-provider.tsx
│   └── typing-animation.tsx
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                  # Utility functions
│   └── utils.ts
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── placeholder-*    # Placeholder images
├── styles/              # Additional styles
│   └── globals.css
├── components.json       # shadcn/ui configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization Guide

### Updating Personal Information

1. **Hero Section** (`app/page.tsx`):
   - Update name, title, and description
   - Modify social media links (LinkedIn, GitHub, Email)
   - Replace profile image URL

2. **About Section**:
   - Edit the about me text content

3. **Experience Section**:
   - Update work experience details
   - Modify company names, dates, and descriptions
   - Add or remove experience entries

4. **Skills Section**:
   - Update technical skills and soft skills
   - Modify skill categories as needed

5. **Projects Section**:
   - Replace project information
   - Update project images, descriptions, and technologies
   - Add or remove projects

6. **Education Section**:
   - Update educational background
   - Modify institution names, dates, and degrees

7. **Contact Section**:
   - Update contact information (phone, email, location)
   - Modify social media links

### Styling Customization

1. **Colors** (`tailwind.config.ts`):
   - Modify the color scheme in the `colors` section
   - Update CSS variables in `app/globals.css`

2. **Fonts** (`app/layout.tsx`):
   - Change the font import from Google Fonts
   - Update the font variable

3. **Animations**:
   - Adjust animation timings in Framer Motion components
   - Modify scroll reveal effects in `scroll-reveal.tsx`

### Adding New Sections

1. Create a new section component or add to `app/page.tsx`
2. Add navigation link in the header
3. Use `ScrollReveal` component for animations
4. Follow existing section patterns for consistency

### Contact Form Configuration

The contact form (`components/contact-form.tsx`) currently uses client-side validation. To make it functional:

1. Set up a backend API endpoint
2. Update the form submission handler
3. Add environment variables for API URLs
4. Configure email service (e.g., SendGrid, Resend, or custom API)

## 🔍 Key Components

### Custom Components

- **AnimatedGradientBackground**: Animated gradient background effect
- **ParticlesBackground**: Interactive particle system
- **FloatingShapes**: Floating geometric shapes
- **ScrollProgress**: Visual scroll progress indicator
- **ScrollReveal**: Scroll-triggered reveal animations
- **TypingAnimation**: Typewriter effect for text
- **QuoteCarousel**: Rotating quote carousel
- **ContactForm**: Contact form with validation
- **ResumeDownload**: Resume download button

### UI Components (shadcn/ui)

The project uses shadcn/ui components located in `components/ui/`. These include:
- Buttons, Cards, Badges
- Forms, Inputs, Textareas
- Dialogs, Sheets, Tabs
- And many more reusable components

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**:
   - The project is configured to ignore TypeScript and ESLint errors during builds
   - To fix errors, run `npm run lint` and address issues manually

2. **Image Loading Issues**:
   - Ensure image URLs are valid
   - Check `next.config.mjs` for remote image patterns
   - Use optimized images for better performance

3. **Animation Performance**:
   - Reduce animation complexity on low-end devices
   - Disable particles on mobile if needed

4. **Styling Issues**:
   - Clear `.next` cache: `rm -rf .next`
   - Rebuild: `npm run build`

## 📝 Notes

- The project uses Next.js App Router (app directory)
- All components are client components (use "use client" directive)
- Images are configured to be unoptimized (can be changed in `next.config.mjs`)
- TypeScript strict mode is enabled
- The project is configured for light theme by default

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Anjali Dave**
- Email: anjaliwork0912@gmail.com
- LinkedIn: [Anjali Dave](https://www.linkedin.com/in/anjali-dave-67234421b)
- GitHub: [CodeWithAnjaliTechie](https://github.com/CodeWithAnjaliTechie)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library

---

**Last Updated**: 2025
