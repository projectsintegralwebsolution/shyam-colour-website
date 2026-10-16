"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Layers,
  Factory
} from "lucide-react";
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from "@/data/products";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { 
      label: "Products", 
      href: "/products",
      isMega: true 
    },
    { label: "OEM & Private Label", href: "/oem-private-label" },
    { label: "Quality Assurance", href: "/quality-assurance" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      {/* Top Bar for Industrial B2B presence */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Factory className="w-3.5 h-3.5" />
              Established 2021 | Vasai East, Maharashtra
            </span>
            <span className="hidden md:inline text-slate-400">
              Pan-India Paint Roller & Handle Manufacturer
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{COMPANY_DETAILS.formattedPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="hover:text-amber-400 transition-colors hidden sm:flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-amber-500" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-12 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Shyam Colour Logo - SCR"
                width={70}
                height={48}
                priority
                className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans group-hover:text-amber-600 transition-colors">
                SHYAM COLOUR
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 -mt-1">
                Paint Roller Manufacturer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              if (item.isMega) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setProductsMegaOpen(true)}
                    onMouseLeave={() => setProductsMegaOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        isActive(item.href)
                          ? "text-amber-600 bg-amber-50"
                          : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsMegaOpen ? "rotate-180 text-amber-600" : ""
                        }`}
                      />
                    </Link>

                    {/* Products Mega Menu Dropdown */}
                    {productsMegaOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 pt-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="col-span-2 pb-3 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              Comprehensive Paint Roller Portfolio
                            </h4>
                            <p className="text-xs text-slate-500">
                              Direct from our factory in Vasai East (2&quot; to 10&quot; sizes)
                            </p>
                          </div>
                          <Link
                            href="/products"
                            className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                          >
                            <span>View All Products</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {PRODUCT_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products#${cat.slug}`}
                            className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/60 transition-all group/item"
                          >
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                              <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                sizes="56px"
                                className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-bold text-slate-900 group-hover/item:text-amber-700 transition-colors block">
                                {cat.name}
                              </span>
                              <span className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                                {cat.shortDesc}
                              </span>
                            </div>
                          </Link>
                        ))}

                        <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between text-xs text-slate-600">
                          <span className="flex items-center gap-1.5 font-medium">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            Private-Label & OEM branding available on bulk quantities
                          </span>
                          <Link
                            href="/oem-private-label"
                            className="font-bold text-amber-600 hover:text-amber-700"
                          >
                            Explore OEM Program &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-amber-600 bg-amber-50"
                      : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Request Quote Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact#enquiry-form"
              className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:text-amber-600 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-amber-50 text-amber-700"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isMega && (
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                      4 Categories
                    </span>
                  )}
                </Link>

                {/* Subcategories shown in mobile under Products */}
                {item.isMega && (
                  <div className="pl-6 pr-2 py-1 space-y-1 bg-slate-50/50 rounded-xl my-1 border border-slate-100">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products#${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-xs font-medium text-slate-600 hover:text-amber-600"
                      >
                        • {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <Link
              href="/contact#enquiry-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3 px-4 rounded-xl bg-amber-600 text-white font-bold text-sm shadow-md"
            >
              Request a Quote
            </Link>

            <div className="text-xs text-slate-600 space-y-1.5 pt-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call: {COMPANY_DETAILS.formattedPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>{COMPANY_DETAILS.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Vasai East, Maharashtra</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
