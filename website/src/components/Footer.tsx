"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Factory, 
  MessageCircle 
} from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from "@/data/products";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-2 border-amber-500/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-12 bg-white/5 rounded-lg p-1 flex items-center justify-center border border-slate-800">
                <Image
                  src="/images/logo.png"
                  alt="Shyam Colour"
                  width={60}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wide block">
                  SHYAM COLOUR
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500">
                  ESTD. 2021
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Professionally managed paint roller and handle manufacturing company based in Vasai East, Maharashtra. Delivering consistent quality, dependability, and private-label solutions for businesses and MNCs across India.
            </p>

            <div className="pt-2 text-xs text-amber-400/90 italic font-medium">
              &ldquo;{COMPANY_DETAILS.commitmentStatement}&rdquo;
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Products Catalogue</span>
                </Link>
              </li>
              <li>
                <Link href="/oem-private-label" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>OEM & Private Label</span>
                </Link>
              </li>
              <li>
                <Link href="/quality-assurance" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Product Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Products & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/oem-private-label"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Bulk Supply & Wholesale</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/oem-private-label"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Customer Brand Manufacturing</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/oem-private-label"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Customized Sizing (2&quot; to 10&quot;)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3.5">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Registered Factory
            </h4>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">SHYAM COLOUR</p>
                <p>{COMPANY_DETAILS.address.line1},</p>
                <p>{COMPANY_DETAILS.address.line2},</p>
                <p>{COMPANY_DETAILS.address.country}</p>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-sm">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>+91 {COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>

              <a
                href={`https://wa.me/91${COMPANY_DETAILS.phone}?text=${encodeURIComponent(
                  COMPANY_DETAILS.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp Instant Support</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <span className="text-slate-500">Director: </span>
              <span className="text-slate-300 font-medium">{COMPANY_DETAILS.director}</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar with Mandatory Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-amber-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-amber-400 transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Mandatory Developer Credit */}
          <div className="text-slate-300">
            Developed by{" "}
            <a
              href="https://integralwebsolution.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 transition-colors"
            >
              Integral Web Solution
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
