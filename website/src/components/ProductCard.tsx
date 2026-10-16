import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Ruler } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Pill */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide uppercase">
          {product.categoryName}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        {/* Available Sizes Badge Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
          <Ruler className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
          <span className="truncate font-medium">
            Sizes: {product.sizes.join(", ")}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/products/${product.slug}`}
            className="py-2.5 px-3 rounded-lg border border-slate-300 hover:border-amber-600 text-slate-700 hover:text-amber-600 font-semibold text-xs text-center transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/products/${product.slug}#enquiry`}
            className="py-2.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs text-center transition-colors shadow-sm"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
