import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import EnquiryForm from "@/components/EnquiryForm";
import { 
  PRODUCT_CATEGORIES, 
  PRODUCTS, 
  GALLERY_ITEMS, 
  COMPANY_DETAILS 
} from "@/data/products";
import { 
  ShieldCheck, 
  Clock, 
  PackageCheck, 
  Truck, 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  Factory,
  ChevronRight,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 6);
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* 1. Hero Image Slider */}
      <HeroSlider />

      {/* 2. Introduction to Shyam Colour */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5 text-amber-600" />
                <span>Established 2021 | Vasai East, Maharashtra</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                India&apos;s Trusted Manufacturer of Paint Rollers, Handles & Painting Tools
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <strong className="font-semibold text-slate-900">SHYAM COLOUR</strong> is a professionally managed manufacturing enterprise established in 2021. With deep manufacturing expertise centered in Vasai East, Maharashtra, we are committed to consistent quality, dependable supply, competitive pricing, and building lasting partnerships with distributors, retail chains, paint companies, and corporate clients across India.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our manufacturing portfolio covers a wide spectrum of professional painting tools from <span className="font-bold text-amber-700">2 inches to 10 inches</span>, engineered with high-grade raw materials for superior paint retention, smooth finish, and ergonomic handling.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <span>Read Company Profile</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl border border-slate-300 hover:border-amber-600 text-slate-700 hover:text-amber-600 font-semibold text-sm transition-all"
                >
                  Contact Factory Office
                </Link>
              </div>
            </div>

            {/* Showcase Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/80 shadow-2xl bg-slate-900 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/roller-assembly-textured.jpg"
                    alt="Shyam Colour Paint Roller Manufacturing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                </div>
                <div className="p-6 text-white space-y-2">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Core Commitment
                  </div>
                  <h3 className="text-xl font-bold">
                    &ldquo;{COMPANY_DETAILS.commitmentStatement}&rdquo;
                  </h3>
                  <p className="text-xs text-slate-300">
                    Precision wire bending, thermo-bonded sleeves, and stringent quality inspection for zero production loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Categories Grid */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              Manufacturing Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Product Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our core manufacturing spectrum of roller assemblies, frames, and refills built with premium raw materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {cat.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/products#${cat.slug}`}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Showcase */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
                Catalogue Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Featured Paint Rollers & Handles
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. OEM & Private Label Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                B2B Customization Services
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Private Label & OEM Manufacturing Solutions
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                In addition to our own brand, Shyam Colour provides comprehensive contract manufacturing and private-label solutions. We empower paint brands, regional distributors, and hardware retail enterprises across India to launch and scale their own branded paint roller lines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    Custom Specifications
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Custom wire gauges, nap heights, core inner diameters, and lengths from 2&quot; to 10&quot;.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    Brand-Specific Packaging
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Custom shrink wrap, printed hang cards, barcode labeling, and bulk outer cartons.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    Customer-Brand Manufacturing
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Custom color molding on grips, brand logo embossing, and bespoke tracer stripes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    Bulk Production & Supply
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Predictable lead times and reliable shipping routes across all Indian states.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/oem-private-label"
                  className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-xl transition-all flex items-center gap-2"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
                >
                  Talk with Factory Director
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 p-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/roller-cage-5wire-red.jpg"
                    alt="OEM Paint Roller Manufacturing by Shyam Colour"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs text-slate-400 font-mono">
                    High-volume 5-wire cage & handle production line
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Shyam Colour */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Partner with Shyam Colour?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built on verified manufacturing principles, dedicated infrastructure, and consistent customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Manufacturing Experience Since 2021
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focused expertise in paint roller and handle fabrication based in Mumbai / Vasai East, catering to evolving industry demands.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Consistent Product Quality
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strict quality systems reduce customer complaints and deliver uniform paint transfer on every project.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Own-Brand & Private Label
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete flexibility to supply under our established Shyam Colour brand or manufacture under your proprietary label.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Pan-India Supply Network
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Supplying paint rollers to businesses across India, from regional wholesalers to leading paint brands and MNC buyers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Shorter Lead Time & Dependability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Committed to timely supply to meet customer emergencies with zero-level production loss commitment.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Long-Term Business Partnerships
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transparent communication, honest pricing, and continuous customer feedback drive our long-term client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quality Commitment Principle */}
      <section className="py-16 md:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
              Quality Satisfaction Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Committed to Flawless Manufacturing
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our quality assurance process is embedded across every operational stage—from rigorous raw material verification to advanced machinery and workforce skill enhancement.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-amber-500 font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Raw Material Selection
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Utilizing high-grade steel rods, virgin polypropylene handles, and solvent-resistant fabrics.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-amber-500 font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Zero Level Production Loss
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Committed to efficient manufacturing schedules that meet customer delivery deadlines on time, every time.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-amber-500 font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Continuous Improvement
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Improving productivity through modern bending technology, specialized machinery, and shorter lead times.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/quality-assurance"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Learn More About Our Quality Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Manufacturing & Product Gallery Preview */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
                Visual Inspection
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Product & Asset Gallery
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
            >
              <span>View Full Gallery ({GALLERY_ITEMS.length}+ Items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryPreview.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                  <span className="text-white text-xs font-semibold">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Business Enquiry CTA & Quick Form */}
      <section className="py-16 md:py-24 bg-slate-100" id="home-enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-200/60 px-3 py-1 rounded-full">
                B2B Direct Enquiry
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Looking for a Reliable Paint Roller Manufacturing Partner?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Share your product requirements with Shyam Colour for bulk supply, customized painting tools, or contract private-label manufacturing. We provide competitive factory pricing, samples on request, and dependable dispatch across India.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <PhoneCall className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Direct Call & WhatsApp</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="block text-base font-bold text-slate-900 hover:text-amber-600"
                    >
                      +91 {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Factory className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Manufacturing Facility</span>
                    <p className="text-xs text-slate-700 mt-0.5">
                      {COMPANY_DETAILS.fullAddressString}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm
                title="Request a Factory Quotation"
                subtitle="Fill in your requirements below for bulk orders, custom handles, or private labeling."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
