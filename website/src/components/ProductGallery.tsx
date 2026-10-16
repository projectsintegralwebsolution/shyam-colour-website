"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface ProductGalleryProps {
  productName: string;
  categoryName: string;
  mainImage: string;
  additionalImages?: string[];
  phone: string;
  whatsappMessage: string;
}

export default function ProductGallery({
  productName,
  categoryName,
  mainImage,
  additionalImages = [],
  phone,
  whatsappMessage,
}: ProductGalleryProps) {
  // All images for this product (main image first, followed by additional variants)
  const allImages = [mainImage, ...additionalImages];
  const [selectedImage, setSelectedImage] = useState<string>(mainImage);

  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="space-y-4">
      {/* Big Display Image */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md flex items-center justify-center p-6">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4 transition-all duration-300"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase">
          {categoryName}
        </span>
      </div>

      {/* Thumbnails Row: Clicking any thumbnail switches the big image */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {allImages.map((img, idx) => {
            const isSelected = selectedImage === img;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                aria-label={`View image variant ${idx + 1} of ${productName}`}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 p-2 transition-all cursor-pointer focus:outline-none ${
                  isSelected
                    ? "border-2 border-amber-500 shadow-sm ring-2 ring-amber-400/40 scale-102"
                    : "border border-slate-200 hover:border-amber-400 opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  fill
                  sizes="25vw"
                  className="object-contain p-1"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Instant WhatsApp Order / Call Bar */}
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-950">
              Need Instant Specifications?
            </h4>
            <p className="text-xs text-emerald-700">
              Chat directly with our factory coordinator on WhatsApp
            </p>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-wide shadow-md transition-all text-center flex-shrink-0"
        >
          WhatsApp Enquiry
        </a>
      </div>
    </div>
  );
}
