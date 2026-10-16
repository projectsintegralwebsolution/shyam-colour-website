"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { GALLERY_ITEMS } from "@/data/products";
import { X, ZoomIn, ChevronLeft, ChevronRight, Filter } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ["All", "Handles & Frames", "Refill Sleeves", "Complete Rollers", "Product Range"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        title="Manufacturing & Product Gallery"
        subtitle="Visual catalogue of our authentic paint rollers, 5-wire cage frames, single-wire handles, and refills."
        breadcrumbs={[{ label: "Gallery" }]}
        bgImage="/images/roller-assembly-textured.jpg"
      />

      {/* 2. Gallery Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedImageIndex(null);
                }}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-amber-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative w-full h-full p-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold mt-1 line-clamp-1">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.desc}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Accessible Click-to-Enlarge Lightbox */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            type="button"
            aria-label="Close lightbox"
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white hover:bg-amber-600 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(
                (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            type="button"
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-600 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(
                (selectedImageIndex + 1) % filteredItems.length
              );
            }}
            type="button"
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-amber-600 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-100 flex items-center justify-center p-6">
              <Image
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400">
                  {filteredItems[selectedImageIndex].category}
                </span>
                <h3 className="text-lg font-bold">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {filteredItems[selectedImageIndex].desc}
                </p>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
