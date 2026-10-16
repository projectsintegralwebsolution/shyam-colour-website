import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  bgImage = "/images/roller-assembly-textured.jpg"
}: PageBannerProps) {
  return (
    <section className="relative bg-slate-950 text-white py-16 md:py-24 overflow-hidden border-b border-amber-600/20">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950/80" />

      {/* Decorative Brand Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-slate-400">
            <li>
              <Link
                href="/"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-400 font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title and Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
