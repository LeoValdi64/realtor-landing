"use client";

import { useState } from "react";
import {
  Star,
  ArrowRight,
  Home as HomeIcon,
  DollarSign,
  BarChart3,
  TrendingUp,
  MapPin,
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  User,
  Users,
  BadgeCheck,
  Quote,
  BedDouble,
  Bath,
  Maximize,
  Menu,
  X,
  Loader2,
  Check,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

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
    icon: <HomeIcon className="w-8 h-8" />,
  },
  {
    title: "Seller Representation",
    description: "Strategic marketing and negotiation to maximize your property's value and minimize time on market.",
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    title: "Market Analysis",
    description: "Comprehensive market reports and property valuations to help you make informed decisions.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Investment Consulting",
    description: "Strategic advice for real estate investors looking to build and diversify their property portfolio.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    title: "Relocation Services",
    description: "Seamless relocation assistance including area tours, school information, and community insights.",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "Luxury Properties",
    description: "Exclusive access to off-market luxury properties and high-end real estate opportunities.",
    icon: <Sparkles className="w-8 h-8" />,
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
    <div className="min-h-screen bg-[#fafafa] overflow-x-hidden">
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
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1a1a2e]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1a1a2e]" />
              )}
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
          <div className="absolute top-20 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#1e40af]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-[#d4a853]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#1e40af]/10 text-[#1e3a8a] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Top-Rated Luxury Real Estate Agent
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Find Your <span className="text-[#1e40af]">Dream Home</span> With Expert Guidance
              </h1>

              <p className="text-lg text-[#475569] mb-8 max-w-xl mx-auto lg:mx-0">
                With over 15 years of experience in luxury real estate, I help clients navigate the market with confidence and find properties that perfectly match their lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-[#1e40af] text-white px-8 py-4 rounded-full hover:bg-[#1e3a8a] transition-colors font-medium text-lg inline-flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
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
                        <User className="w-5 h-5 text-[#64748b]" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-[#1a1a2e]">500+ Happy Clients</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-[#d4a853] fill-[#d4a853]" />
                      ))}
                      <span className="text-[#475569] ml-1">4.9/5</span>
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
                    <User className="w-24 h-24 mb-4" />
                    <p className="text-sm font-medium">Agent Photo</p>
                    <p className="text-xs mt-1">Replace with your image</p>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 left-0 sm:-left-6 bg-white rounded-xl shadow-xl p-4 border border-[#e2e8f0]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#d4a853]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#d4a853]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a2e]">Licensed Agent</p>
                      <p className="text-sm text-[#475569]">CA DRE #01234567</p>
                    </div>
                  </div>
                </div>

                {/* Another Floating Card */}
                <div className="absolute -top-4 right-0 sm:-right-4 bg-white rounded-xl shadow-xl p-4 border border-[#e2e8f0]">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#1e40af]">$250M+</p>
                    <p className="text-sm text-[#475569]">Sales Volume</p>
                  </div>
                </div>
              </div>

              {/* Background Decorations - hidden on small mobile */}
              <div className="hidden sm:block absolute top-10 right-10 w-72 h-72 bg-[#1e40af]/10 rounded-full blur-2xl -z-10" />
              <div className="hidden sm:block absolute bottom-10 left-10 w-48 h-48 bg-[#d4a853]/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12 sm:py-16 bg-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {stat.value}
                </p>
                <p className="text-[#dbeafe] text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-16 sm:py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Featured Listings
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Discover exceptional properties handpicked for their unique charm, prime locations, and outstanding value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {listings.map((listing) => (
              <article key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative aspect-[4/3] bg-[#e2e8f0]">
                  <div className="absolute inset-0 flex items-center justify-center text-[#64748b]">
                    <HomeIcon className="w-16 h-16" strokeWidth={1} />
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
                <div className="p-5 sm:p-6">
                  <p className="text-xl sm:text-2xl font-bold text-[#1e40af] mb-2">{listing.price}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#1e40af] transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-[#475569] text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate">{listing.address}</span>
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 text-sm text-[#475569] pt-4 border-t border-[#e2e8f0]">
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4 shrink-0" />
                      {listing.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4 shrink-0" />
                      {listing.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4 shrink-0" />
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
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Services I Offer
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Comprehensive real estate services tailored to meet your unique needs and exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] hover:border-[#1e40af] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-[#1e40af]/10 rounded-xl flex items-center justify-center text-[#1e40af] mb-6 group-hover:bg-[#1e40af] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{service.title}</h3>
                <p className="text-[#475569]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#64748b]">
                  <User className="w-20 h-20 mb-4" />
                  <p className="text-sm font-medium">About Photo</p>
                </div>
              </div>
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-[#d4a853] rounded-2xl p-4 sm:p-6 text-white shadow-xl">
                <p className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                About Sarah Mitchell
              </h2>
              <p className="text-[#475569] mb-6">
                With over 15 years of experience in luxury real estate, I&apos;ve helped hundreds of families find their perfect homes in the most prestigious neighborhoods of Southern California.
              </p>
              <p className="text-[#475569] mb-6">
                My approach combines deep market knowledge with a genuine passion for matching people with properties that enhance their lives. I believe that buying or selling a home should be an exciting journey, not a stressful one.
              </p>
              <p className="text-[#475569] mb-8">
                As a Beverly Hills resident myself, I offer insider knowledge of the community, schools, and lifestyle that you won&apos;t find in any listing. My commitment to excellence has earned me recognition as a top producer and trusted advisor in the industry.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-5 h-5 text-[#d4a853] fill-[#d4a853] shrink-0" />
                  <span className="text-sm font-medium text-[#1a1a2e]">Top Producer Award</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                  <BadgeCheck className="w-5 h-5 text-[#1e40af] shrink-0" />
                  <span className="text-sm font-medium text-[#1a1a2e]">Licensed Since 2009</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                  <Users className="w-5 h-5 text-[#d4a853] shrink-0" />
                  <span className="text-sm font-medium text-[#1a1a2e]">500+ Clients Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              What My Clients Say
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Real stories from real clients who found their dream homes with my guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-2xl p-6 sm:p-8 relative"
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-[#d4a853] rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#d4a853] fill-[#d4a853]" />
                  ))}
                </div>

                <p className="text-[#475569] mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#e2e8f0] rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-[#64748b]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">{testimonial.name}</p>
                    <p className="text-sm text-[#475569]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 sm:py-20 bg-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Let&apos;s Find Your Perfect Home
              </h2>
              <p className="text-[#dbeafe] mb-8">
                Ready to start your real estate journey? Fill out the form and I&apos;ll personally reach out to discuss your needs and how I can help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#dbeafe] text-sm">Phone</p>
                    <p className="font-semibold">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#dbeafe] text-sm">Email</p>
                    <p className="font-semibold break-all">sarah@sarahmitchellrealty.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#dbeafe] text-sm">Office</p>
                    <p className="font-semibold">123 Luxury Lane, Suite 100, Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">Thank You!</h3>
                  <p className="text-[#475569]">I&apos;ll be in touch with you shortly.</p>
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
                    <div className="flex flex-wrap gap-4">
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
                        <Loader2 className="animate-spin w-5 h-5" />
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#1e40af] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>SM</span>
                </div>
                <span className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Sarah Mitchell
                </span>
              </div>
              <p className="text-[#cbd5e1] mb-4 max-w-md">
                Your trusted partner in luxury real estate. Helping clients find their dream homes in Beverly Hills and surrounding areas for over 15 years.
              </p>
              <p className="text-[#cbd5e1] text-sm">
                CA DRE License #01234567
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#cbd5e1]">
                <li><a href="#listings" className="hover:text-white transition-colors">Listings</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-[#cbd5e1]">
                <li>(555) 123-4567</li>
                <li className="break-all">sarah@sarahmitchellrealty.com</li>
                <li>123 Luxury Lane, Suite 100</li>
                <li>Beverly Hills, CA 90210</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#cbd5e1] text-sm">
              &copy; {new Date().getFullYear()} Sarah Mitchell Real Estate. All rights reserved.
            </p>
            <div className="flex gap-6 text-[#cbd5e1] text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
