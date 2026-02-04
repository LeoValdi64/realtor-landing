"use client";

import { useState } from "react";
import Image from "next/image";

const listings = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    address: "1234 Palm Drive, Beverly Hills",
    price: "$4,250,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image: "/listing-1.jpg",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Contemporary Estate",
    address: "567 Sunset Blvd, Malibu",
    price: "$6,800,000",
    beds: 6,
    baths: 5,
    sqft: "5,800",
    image: "/listing-2.jpg",
    status: "For Sale",
  },
  {
    id: 3,
    title: "Elegant Townhouse",
    address: "890 Wilshire Ave, Santa Monica",
    price: "$2,150,000",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    image: "/listing-3.jpg",
    status: "Pending",
  },
  {
    id: 4,
    title: "Beachfront Paradise",
    address: "321 Ocean View, Pacific Palisades",
    price: "$8,500,000",
    beds: 7,
    baths: 6,
    sqft: "7,200",
    image: "/listing-4.jpg",
    status: "For Sale",
  },
  {
    id: 5,
    title: "Hillside Retreat",
    address: "456 Canyon Road, Hollywood Hills",
    price: "$3,750,000",
    beds: 4,
    baths: 4,
    sqft: "3,600",
    image: "/listing-5.jpg",
    status: "Sold",
  },
  {
    id: 6,
    title: "Urban Penthouse",
    address: "789 Downtown Blvd, Los Angeles",
    price: "$5,200,000",
    beds: 4,
    baths: 3,
    sqft: "3,100",
    image: "/listing-6.jpg",
    status: "For Sale",
  },
];

const services = [
  {
    title: "Buyer Representation",
    description: "Expert guidance through every step of your home buying journey, from property search to closing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Seller Representation",
    description: "Strategic marketing and negotiation to maximize your property's value and minimize time on market.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Market Analysis",
    description: "Comprehensive market reports and property valuations to help you make informed decisions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Investment Consulting",
    description: "Strategic advice for real estate investors looking to build and diversify their property portfolio.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Relocation Services",
    description: "Seamless relocation assistance including area tours, school information, and community insights.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Luxury Properties",
    description: "Exclusive access to off-market luxury properties and high-end real estate opportunities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Michael & Jennifer Thompson",
    location: "Beverly Hills",
    text: "Sarah made our dream of owning a luxury home a reality. Her expertise in the Beverly Hills market is unmatched, and her dedication to finding us the perfect property exceeded all expectations.",
    rating: 5,
  },
  {
    name: "David Chen",
    location: "Malibu",
    text: "As a first-time luxury home buyer, I was nervous about the process. Sarah's patience, knowledge, and professionalism made everything seamless. She truly goes above and beyond for her clients.",
    rating: 5,
  },
  {
    name: "The Rodriguez Family",
    location: "Pacific Palisades",
    text: "We've worked with Sarah on three transactions now, and each time she delivers exceptional service. Her market insights helped us sell our home for 15% above asking price.",
    rating: 5,
  },
];

const stats = [
  { value: "$250M+", label: "Total Sales Volume" },
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

const propertyTypes = [
  "Single Family Home",
  "Condominium",
  "Townhouse",
  "Luxury Estate",
  "Investment Property",
  "Vacation Home",
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
    buyOrSell: "buy",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      message: "",
      buyOrSell: "buy",
    });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1e40af] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>SM</span>
              </div>
              <span className="text-xl font-semibold text-[#1a1a2e]" style={{ fontFamily: "var(--font-playfair)" }}>
                Sarah Mitchell
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#listings" className="text-[#64748b] hover:text-[#1e40af] transition-colors">Listings</a>
              <a href="#services" className="text-[#64748b] hover:text-[#1e40af] transition-colors">Services</a>
              <a href="#about" className="text-[#64748b] hover:text-[#1e40af] transition-colors">About</a>
              <a href="#testimonials" className="text-[#64748b] hover:text-[#1e40af] transition-colors">Testimonials</a>
              <a
                href="#contact"
                className="bg-[#1e40af] text-white px-6 py-2.5 rounded-full hover:bg-[#1e3a8a] transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-[#1a1a2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#e2e8f0]">
              <div className="flex flex-col gap-4">
                <a href="#listings" className="text-[#64748b] hover:text-[#1e40af] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Listings</a>
                <a href="#services" className="text-[#64748b] hover:text-[#1e40af] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#about" className="text-[#64748b] hover:text-[#1e40af] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#testimonials" className="text-[#64748b] hover:text-[#1e40af] transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
                <a
                  href="#contact"
                  className="bg-[#1e40af] text-white px-6 py-2.5 rounded-full hover:bg-[#1e3a8a] transition-colors font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#1e40af]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4a853]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#d4a853]/10 text-[#b8942e] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Top-Rated Luxury Real Estate Agent
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Find Your <span className="text-[#1e40af]">Dream Home</span> With Expert Guidance
              </h1>

              <p className="text-lg text-[#64748b] mb-8 max-w-xl mx-auto lg:mx-0">
                With over 15 years of experience in luxury real estate, I help clients navigate the market with confidence and find properties that perfectly match their lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-[#1e40af] text-white px-8 py-4 rounded-full hover:bg-[#1e3a8a] transition-colors font-medium text-lg inline-flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#listings"
                  className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-4 rounded-full hover:bg-[#1e40af] hover:text-white transition-colors font-medium text-lg inline-flex items-center justify-center gap-2"
                >
                  View Listings
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-[#e2e8f0] border-2 border-white flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#64748b]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-[#1a1a2e]">500+ Happy Clients</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-[#d4a853]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-[#64748b] ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Photo Placeholder */}
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-[4/5] max-w-md mx-auto bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#64748b]">
                    <svg className="w-24 h-24 mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium">Agent Photo</p>
                    <p className="text-xs mt-1">Replace with your image</p>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-[#e2e8f0]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#d4a853]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a2e]">Licensed Agent</p>
                      <p className="text-sm text-[#64748b]">CA DRE #01234567</p>
                    </div>
                  </div>
                </div>

                {/* Another Floating Card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-[#e2e8f0]">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#1e40af]">$250M+</p>
                    <p className="text-sm text-[#64748b]">Sales Volume</p>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-10 right-10 w-72 h-72 bg-[#1e40af]/10 rounded-full blur-2xl -z-10" />
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#d4a853]/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {stat.value}
                </p>
                <p className="text-[#93c5fd] text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Featured Listings
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Discover exceptional properties handpicked for their unique charm, prime locations, and outstanding value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <article key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative aspect-[4/3] bg-[#e2e8f0]">
                  <div className="absolute inset-0 flex items-center justify-center text-[#64748b]">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    listing.status === "For Sale"
                      ? "bg-[#1e40af] text-white"
                      : listing.status === "Pending"
                      ? "bg-[#d4a853] text-white"
                      : "bg-[#64748b] text-white"
                  }`}>
                    {listing.status}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-bold text-[#1e40af] mb-2">{listing.price}</p>
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#1e40af] transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-[#64748b] text-sm mb-4 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {listing.address}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[#64748b] pt-4 border-t border-[#e2e8f0]">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {listing.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      {listing.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {listing.sqft} Sq Ft
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1e40af] text-white px-8 py-4 rounded-full hover:bg-[#1e3a8a] transition-colors font-medium"
            >
              View All Properties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Services I Offer
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Comprehensive real estate services tailored to meet your unique needs and exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-[#e2e8f0] hover:border-[#1e40af] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-[#1e40af]/10 rounded-xl flex items-center justify-center text-[#1e40af] mb-6 group-hover:bg-[#1e40af] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{service.title}</h3>
                <p className="text-[#64748b]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#64748b]">
                  <svg className="w-20 h-20 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">About Photo</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#d4a853] rounded-2xl p-6 text-white shadow-xl">
                <p className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                About Sarah Mitchell
              </h2>
              <p className="text-[#64748b] mb-6">
                With over 15 years of experience in luxury real estate, I&apos;ve helped hundreds of families find their perfect homes in the most prestigious neighborhoods of Southern California.
              </p>
              <p className="text-[#64748b] mb-6">
                My approach combines deep market knowledge with a genuine passion for matching people with properties that enhance their lives. I believe that buying or selling a home should be an exciting journey, not a stressful one.
              </p>
              <p className="text-[#64748b] mb-8">
                As a Beverly Hills resident myself, I offer insider knowledge of the community, schools, and lifestyle that you won&apos;t find in any listing. My commitment to excellence has earned me recognition as a top producer and trusted advisor in the industry.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <svg className="w-5 h-5 text-[#d4a853]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-[#1a1a2e]">Top Producer Award</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <svg className="w-5 h-5 text-[#1e40af]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-[#1a1a2e]">Licensed Since 2009</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <svg className="w-5 h-5 text-[#d4a853]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="text-sm font-medium text-[#1a1a2e]">500+ Clients Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              What My Clients Say
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Real stories from real clients who found their dream homes with my guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-2xl p-8 relative"
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-[#d4a853] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#d4a853]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#64748b] mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#e2e8f0] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#64748b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">{testimonial.name}</p>
                    <p className="text-sm text-[#64748b]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Let&apos;s Find Your Perfect Home
              </h2>
              <p className="text-[#93c5fd] mb-8">
                Ready to start your real estate journey? Fill out the form and I&apos;ll personally reach out to discuss your needs and how I can help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#93c5fd] text-sm">Phone</p>
                    <p className="font-semibold">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#93c5fd] text-sm">Email</p>
                    <p className="font-semibold">sarah@sarahmitchellrealty.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#93c5fd] text-sm">Office</p>
                    <p className="font-semibold">123 Luxury Lane, Suite 100, Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">Thank You!</h3>
                  <p className="text-[#64748b]">I&apos;ll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      I&apos;m interested in *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="buyOrSell"
                          value="buy"
                          checked={formData.buyOrSell === "buy"}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#1e40af] border-[#e2e8f0] focus:ring-[#1e40af]"
                        />
                        <span className="text-[#1a1a2e]">Buying</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="buyOrSell"
                          value="sell"
                          checked={formData.buyOrSell === "sell"}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#1e40af] border-[#e2e8f0] focus:ring-[#1e40af]"
                        />
                        <span className="text-[#1a1a2e]">Selling</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="buyOrSell"
                          value="both"
                          checked={formData.buyOrSell === "both"}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#1e40af] border-[#e2e8f0] focus:ring-[#1e40af]"
                        />
                        <span className="text-[#1a1a2e]">Both</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your real estate needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1e40af] text-white py-4 rounded-lg font-semibold hover:bg-[#1e3a8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#1e40af] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>SM</span>
                </div>
                <span className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Sarah Mitchell
                </span>
              </div>
              <p className="text-[#94a3b8] mb-4 max-w-md">
                Your trusted partner in luxury real estate. Helping clients find their dream homes in Beverly Hills and surrounding areas for over 15 years.
              </p>
              <p className="text-[#94a3b8] text-sm">
                CA DRE License #01234567
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#94a3b8]">
                <li><a href="#listings" className="hover:text-white transition-colors">Listings</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>(555) 123-4567</li>
                <li>sarah@sarahmitchellrealty.com</li>
                <li>123 Luxury Lane, Suite 100</li>
                <li>Beverly Hills, CA 90210</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94a3b8] text-sm">
              &copy; {new Date().getFullYear()} Sarah Mitchell Real Estate. All rights reserved.
            </p>
            <div className="flex gap-6 text-[#94a3b8] text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
