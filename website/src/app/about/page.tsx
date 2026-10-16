import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY_DETAILS } from "@/data/products";
import { 
  CheckCircle2, 
  Target, 
  Compass, 
  HeartHandshake, 
  ShieldCheck, 
  Factory, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Shyam Colour Paint Roller Manufacturer",
  description: "Learn about Shyam Colour, established in 2021 in Vasai East, Maharashtra. Discover our paint roller manufacturing expertise, vision, mission, core values, and pan-India reach.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Quality",
      desc: "We never compromise on the importance of quality and consistency across every batch of roller frames and sleeves produced."
    },
    {
      title: "Customer Focus",
      desc: "Our customers' operational requirements guide our products, service enhancements, and continuous manufacturing improvements."
    },
    {
      title: "Reliability",
      desc: "We believe in being a dependable manufacturing and supply partner for distributors, paint brands, and retail networks."
    },
    {
      title: "Innovation",
      desc: "We continuously explore better materials, ergonomic grip designs, and high-productivity fabrication solutions."
    },
    {
      title: "Integrity",
      desc: "We believe in transparent, professional, and long-term business relationships with fair pricing and honest commitments."
    }
  ];

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        title="About Shyam Colour"
        subtitle="Professionally managed paint roller and handle manufacturer committed to consistent quality and long-term business partnerships."
        breadcrumbs={[{ label: "About Us" }]}
        bgImage="/images/roller-assembly-textured.jpg"
      />

      {/* 2. Company Overview & Background */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5 text-amber-600" />
                <span>Established in 2021 | Mumbai & Vasai East</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Premium Paint Roller Manufacturer & Private Label Partner
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <strong className="font-semibold text-slate-900">SHYAM COLOUR</strong> is a professionally managed paint roller manufacturing enterprise established in 2021 in Mumbai, Maharashtra, with our registered office and manufacturing facility situated at Goodwill Industry, Chinchpada, Vasai East.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We specialize in the manufacturing and supply of a comprehensive range of paint rollers, heavy-duty paint roller handles, and specialty painting tools designed for various decorative and industrial painting applications. Our product portfolio covers a wide spectrum from <strong className="text-slate-900 font-semibold">2 inches to 10 inches</strong>, engineered to serve evolving demands of paint manufacturers, contractors, and retail dealers.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Our Guiding Principle
                </span>
                <p className="text-lg font-bold text-slate-900 italic">
                  &ldquo;{COMPANY_DETAILS.commitmentStatement}&rdquo;
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Whether you choose our own established brand or partner with us for your private-label requirements, we are committed to providing quality products, dependable service, and a professional manufacturing experience.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/3]">
                  <Image
                    src="/images/roller-assembly-textured.jpg"
                    alt="Shyam Colour Paint Roller Manufacturing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                      Manufacturing Excellence
                    </span>
                    <p className="text-sm font-semibold">
                      Gala No. 7 & 8, Goodwill Industry, Vasai East
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-amber-600">2021</div>
                    <div className="text-xs font-medium text-slate-600 mt-1">Established Year</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-amber-600">2&quot; - 10&quot;</div>
                    <div className="text-xs font-medium text-slate-600 mt-1">Tool Size Spectrum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To establish Shyam Colour as a trusted and recognized paint roller manufacturing company in India, known for premium quality, innovation, reliability, and complete customer satisfaction.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our mission is to manufacture and supply high-quality paint rollers that deliver dependable performance and value, while building long-term partnerships with customers across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Company Values
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The values that dictate our factory floor protocols, partner relations, and material selection every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-amber-600 mb-2">0{idx + 1}</div>
                  <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="h-1 w-8 bg-amber-500 rounded-full mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pan-India Market Reach & OEM Capabilities */}
      <section className="py-16 md:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                Pan-India Distribution
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Serving Businesses, Wholesalers & MNCs Nationwide
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Shyam Colour supplies paint rollers to customers across India and works with businesses of different sizes—from growing regional brands and distributors to established corporate and MNC buyers.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our strategic factory location in Vasai East, near Mumbai&apos;s primary transportation corridors, ensures rapid logistics dispatch across Western, Central, Northern, and Southern India.
              </p>

              <div className="pt-2">
                <Link
                  href="/oem-private-label"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <span>Explore OEM & Private Label Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Quality Commitment</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero level production loss commitment, preventing delays and defective batches.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <Factory className="w-6 h-6 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Factory-Direct Pricing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Direct manufacturing eliminating intermediary distributor markups for bulk procurement.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <HeartHandshake className="w-6 h-6 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Customer Relationships</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Long term partnerships driven by reliable dispatch schedules and consistent standards.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Evolving Product Lines</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Introducing indigenously developed painting products to serve specialized industry demands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact / Direct Inquiry */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            title="Connect with Our Factory Leadership"
            subtitle="Send your inquiry directly to our management team for bulk orders or contract partnerships."
          />
        </div>
      </section>
    </div>
  );
}
