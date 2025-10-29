# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js personal website/portfolio built with TypeScript and Tailwind CSS. It's based on the "Spotlight" template from Tailwind Plus and serves as a personal portfolio site for Jason Conroy. The site features:

- Personal portfolio with about, projects, speaking, and uses pages
- MDX-powered blog/articles system with syntax highlighting
- RSS feed generation
- Dark mode support via next-themes
- Responsive design with Tailwind CSS v4

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Format code with Prettier
npx prettier --write .
```

## Architecture

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** with strict configuration
- **Tailwind CSS v4** with typography plugin
- **MDX** for article content with syntax highlighting via Prism
- **Headless UI** for accessible components
- **next-themes** for dark mode
- **@plausible-analytics/tracker** for privacy-friendly analytics

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - Reusable React components
- `/src/lib/` - Utility functions and data fetching
- `/src/styles/` - Custom CSS and Tailwind configuration
- `/src/images/` - Static images and assets

### Article System
Articles are written in MDX format and stored in `/src/app/articles/[slug]/page.mdx`. Each article requires:
- Export of `article` object with metadata (title, description, author, date)
- Content written in MDX format
- Automatic syntax highlighting via rehype-prism

### Styling Approach
- Tailwind CSS v4 with PostCSS integration
- Custom typography styles in `/src/styles/findingsimple.css`
- Dark mode classes throughout components
- Responsive design patterns

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Required for RSS feed generation and metadata
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Required for Plausible Analytics tracking

## Code Patterns

### Component Structure
- All components use TypeScript with proper typing
- Styled with Tailwind CSS classes
- Support for both light and dark themes
- Use clsx for conditional class names

### Metadata Management
- Site metadata configured in root layout
- Article metadata extracted from MDX files
- RSS feed automatically generated from articles

### Analytics
- Plausible Analytics integrated via official @plausible-analytics/tracker package
- Client-side tracking component in /src/components/PlausibleAnalytics.tsx
- Automatic page view tracking enabled for SPA navigation
- Custom events can be tracked using the Plausible tracker API

### Path Aliases
- `@/*` maps to `./src/*` for clean imports