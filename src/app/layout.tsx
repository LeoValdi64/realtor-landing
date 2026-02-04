import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarah Mitchell | Luxury Real Estate Agent | Your Trusted Partner in Home Buying & Selling",
  description: "Sarah Mitchell is a top-rated luxury real estate agent with 15+ years of experience. Specializing in residential properties, first-time buyers, and investment properties. Contact today for a free consultation.",
  keywords: "real estate agent, luxury homes, property sales, home buying, real estate services, residential real estate",
  authors: [{ name: "Sarah Mitchell" }],
  openGraph: {
    title: "Sarah Mitchell | Luxury Real Estate Agent",
    description: "Your trusted partner in finding the perfect home. 15+ years of experience in luxury real estate.",
    type: "website",
    locale: "en_US",
    siteName: "Sarah Mitchell Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Mitchell | Luxury Real Estate Agent",
    description: "Your trusted partner in finding the perfect home. 15+ years of experience in luxury real estate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Sarah Mitchell",
    description: "Luxury real estate agent specializing in residential properties, first-time buyers, and investment properties.",
    url: "https://www.sarahmitchellrealty.com",
    telephone: "+1-555-123-4567",
    email: "sarah@sarahmitchellrealty.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Luxury Lane, Suite 100",
      addressLocality: "Beverly Hills",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0736,
      longitude: -118.4004,
    },
    image: "https://www.sarahmitchellrealty.com/agent-photo.jpg",
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Beverly Hills",
    },
    sameAs: [
      "https://www.facebook.com/sarahmitchellrealty",
      "https://www.instagram.com/sarahmitchellrealty",
      "https://www.linkedin.com/in/sarahmitchellrealty",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
