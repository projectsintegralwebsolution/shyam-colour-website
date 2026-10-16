import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY_DETAILS } from "@/data/products";
import { 
  CheckCircle2, 
  Package, 
  Settings, 
  Tag, 
  Truck, 
  ArrowRight, 
  ShieldCheck, 
  FileText,
  Clock,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "OEM & Private Label Manufacturing | Shyam Colour",
  description: "Custom paint roller and handle contract manufacturing by Shyam Colour. Brand-specific packaging, custom specifications, and bulk OEM solutions for paint brands across India.",
  alternates: {
    canonical: "/oem-private-label"
  }
};

export default function OEMPrivateLabelPage() {
  const steps = [
    {
      num: "01",
      title: "Share Your Requirements",
      desc: "Provide your target specifications: roller sizes (2\" to 10\"), wire handle gauges, nap materials, fabric colors, and expected volume."
    },
    {
      num: "02",
      title: "Discuss Product & Branding Specifications",
      desc: "Align on handle grip color molding, custom tracer pattern, branded sleeve shrink wrap, insert cards, and carton packaging."
    },
    {
      num: "03",
      title: "Confirm Proposed Solution",
      desc: "Review pre-production sample prototypes, technical tolerance benchmarks, production schedules, and competitive factory rates."
    },
    {
      num: "04",
      title: "Coordinate Manufacturing & Supply",
      desc: "Bulk fabrication at our Vasai East plant followed by rigorous batch inspection and scheduled logistics dispatch across India."
    }
  ];

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        title="OEM & Private Label Manufacturing"
        subtitle="Custom paint roller and handle solutions tailored to your brand identity, product standards, and pan-India supply needs."
        breadcrumbs={[{ label: "OEM & Private Label" }]}
        bgImage="/images/roller-cage-5wire-red.jpg"
      />

      {/* 2. Overview Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
                Turnkey Contract Manufacturing
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Manufacture Paint Rollers Under Your Own Brand
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                At <strong className="font-semibold text-slate-900">SHYAM COLOUR</strong>, we understand that every paint company, regional distributor, and hardware enterprise has its own unique market positioning. Therefore, we offer private-label and OEM contract manufacturing solutions for customers looking to develop or expand their own paint roller range.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We manufacture products strictly according to customer requirements, including brand-specific packaging, customized dimensions, specialty wire handles, and custom fabric density. Our objective is to become a dependable manufacturing partner—not simply a supplier.
              </p>

              <div className="pt-2">
                <a
                  href="#oem-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <span>Request an OEM Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl p-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/roller-cage-5wire-yellow.jpg"
                    alt="Custom Paint Roller Handles by Shyam Colour"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="pt-3 text-center">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Custom Grip Colors & Wire Diameters
                  </span>
                  <p className="text-slate-300 text-xs mt-1">
                    Direct OEM manufacturing from our factory in Vasai East, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core OEM Capabilities */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              OEM & Private Label Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive manufacturing capabilities adapted to your brand identity and distribution demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Custom Product Requirements</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Precision wire diameter configurations, custom nap heights (microfiber, poly-blend, acrylic, foam), and core diameter variants matching your exact tool standards.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Brand-Specific Packaging</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Custom branded sleeve shrink-wrapping, retail display cards, barcode labels, and master cartons designed in strict alignment with your brand packaging guidelines.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Customer-Brand Manufacturing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Color molding of polymer grips matching your corporate brand hues, custom handle branding, and custom color tracer lines on roller fabric.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Bulk Production & Supply</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reliable production volume capacity to feed pan-India supply chains, regional depots, or seasonal promotional spikes with predictable delivery schedules.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Customized Solutions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Flexible project-based solutions designed around your product development stage—whether launching a single specialty roller or an entire painting accessory range.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Confidentiality & Quality</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete intellectual integrity for your private-label proprietary designs, paired with rigorous batch inspection for consistent defect-free material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Work (4-Step Process) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              Customer Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Work With OEM Partners
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, collaborative approach to bring your custom paint roller specifications into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-amber-600 font-mono mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Step {step.num}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 italic max-w-2xl mx-auto">
            * Note: Workflow steps represent our proposed collaboration roadmap. Production timeframes and customization details are confirmed subject to specific order volumes and technical requirements.
          </div>
        </div>
      </section>

      {/* 5. Business Enquiry Form */}
      <section className="py-16 md:py-24 bg-slate-100" id="oem-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            title="Request an OEM & Private Label Quotation"
            subtitle="Tell us about your brand requirements, target specifications, and expected batch volume."
            initialEnquiryType="OEM / Private Label"
          />
        </div>
      </section>
    </div>
  );
}
