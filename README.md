# Real Estate Agent Landing Page

A professional, production-ready landing page for real estate agents built with Next.js 16, React 19, and Tailwind CSS.

## 🌐 Live Demo

**[https://realtor-landing-six.vercel.app](https://realtor-landing-six.vercel.app)**

## ✨ Features

### Page Sections
- **Hero** - Full-screen hero with agent photo placeholder, tagline, CTAs, and trust indicators
- **Market Stats** - Blue banner showcasing $250M+ sales, 15+ years experience, 500+ clients, 98% satisfaction
- **Featured Listings** - 6 property cards with images, prices, beds/baths/sqft, status badges
- **Services** - 6 service offerings (Buyer Rep, Seller Rep, Market Analysis, Investment Consulting, Relocation, Luxury Properties)
- **About** - Agent bio with photo placeholder and achievement badges
- **Testimonials** - 3 client testimonials with star ratings
- **Contact Form** - Full form with name, email, phone, buy/sell toggle, property type dropdown, message
- **Footer** - Quick links, contact info, social icons, copyright

### Design
- Light theme with blue (`#1e40af`) and gold (`#d4a853`) accents
- Playfair Display for headings, Inter for body text
- Mobile-first responsive design with hamburger menu
- Hover states, transitions, and shadows for polish

### SEO
- Full Schema.org `RealEstateAgent` JSON-LD structured data
- OpenGraph and Twitter meta tags
- Semantic HTML with proper heading hierarchy

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Turbopack** - Fast bundler

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx      # Main landing page component
│   ├── layout.tsx    # Root layout with fonts and SEO
│   └── globals.css   # Global styles and CSS variables
```

## 🎨 Customization

To customize for your own real estate business:

1. Replace placeholder images in the Hero, About, and Listings sections
2. Update agent name, contact info, and bio in `page.tsx`
3. Modify color scheme in `globals.css` CSS variables
4. Update Schema.org data in `layout.tsx`

## 📄 License

MIT
