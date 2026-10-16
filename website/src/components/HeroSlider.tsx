"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Factory, Sparkles } from "lucide-react";

interface HeroSlide {
  headline: string;
  supportingText: string;
  badge: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: HeroSlide[] = [
  {
    badge: "ESTABLISHED IN 2021 | VASAI EAST, MAHARASHTRA",
    headline: "Reliable Paint Roller Manufacturing for Every Market",
    supportingText: "Quality-focused paint rollers and painting tools for distributors, businesses and professional buyers across India.",
    image: "/images/roller-assembly-textured.jpg",
    primaryCtaText: "Explore Our Products",
    primaryCtaLink: "/products",
    secondaryCtaText: "Request a Quote",
    secondaryCtaLink: "/contact#enquiry-form"
  },
  {
    badge: "OEM & CUSTOM BRAND SOLUTIONS",
    headline: "Your Partner for Private Label & OEM Manufacturing",
    supportingText: "Product and branding solutions tailored to your business requirements. We manufacture high-spec paint rollers under your own brand.",
    image: "/images/roller-cage-5wire-red.jpg",
    primaryCtaText: "Explore OEM Solutions",
    primaryCtaLink: "/oem-private-label",
    secondaryCtaText: "Discuss Requirements",
    secondaryCtaLink: "/oem-private-label#oem-form"
  },
  {
    badge: "ZERO PRODUCTION LOSS COMMITMENT",
    headline: "Quality Products. Dependable Supply.",
    supportingText: "A customer-focused approach built on consistent quality, reliable service, and long-term partnerships across India.",
    image: "/images/roller-refill-trio-sizes.jpg",
    primaryCtaText: "Quality Standards",
    primaryCtaLink: "/quality-assurance",
    secondaryCtaText: "Contact Factory",
    secondaryCtaLink: "/contact"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative bg-slate-950 text-white min-h-[580px] md:min-h-[660px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured manufacturing highlights slider"
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Product Image with subtle zoom */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority={idx === 0}
              className={`object-cover object-center transition-transform duration-7000 ease-out ${
                idx === current ? "scale-105" : "scale-100"
              }`}
            />
            {/* Multi-layered dark industrial gradient overlay for pristine text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>

          {/* Slide Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-20 md:py-28">
            <div className="max-w-2xl lg:max-w-3xl space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slide.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {slide.headline}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                {slide.supportingText}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={slide.primaryCtaLink}
                  className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-xl hover:shadow-amber-600/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={slide.secondaryCtaLink}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm shadow-md transition-all flex items-center gap-2 hover:border-amber-500/50"
                >
                  <span>{slide.secondaryCtaText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-amber-600 text-white backdrop-blur-sm border border-slate-700/60 transition-all shadow-lg hover:scale-110 focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-amber-600 text-white backdrop-blur-sm border border-slate-700/60 transition-all shadow-lg hover:scale-110 focus:outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all rounded-full h-2.5 ${
              i === current ? "w-8 bg-amber-500" : "w-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
