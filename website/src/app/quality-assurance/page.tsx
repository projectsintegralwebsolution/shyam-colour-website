import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY_DETAILS } from "@/data/products";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Users, 
  Truck, 
  HeartHandshake, 
  Workflow, 
  Layers, 
  Clock,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance & Standards | Shyam Colour",
  description: "Explore Shyam Colour's documented quality satisfaction principles: efficient production, zero-loss commitments, raw material selection, and continuous workforce development.",
  alternates: {
    canonical: "/quality-assurance"
  }
};

export default function QualityAssurancePage() {
  const commitments = [
    {
      title: "Efficient & Effective Quality Production",
      desc: "Committed to produce material efficiently and effectively of quality completely acceptable to customer standards and job requirements."
    },
    {
      title: "Zero Level Production Loss Commitment",
      desc: "Timely supply to meet customer emergency orders with a strict operational commitment to zero level production loss across manufacturing shifts."
    },
    {
      title: "Systematic Complaint Reduction",
      desc: "Supplying through improved quality checking systems to systematically reduce and eliminate customer complaint levels."
    },
    {
      title: "Desired Quantity On Time, Every Time",
      desc: "Efficient supply management guaranteeing that the exact desired quantity reaches distributors and corporate buyers on time, every time."
    },
    {
      title: "Human Resources & Team Spirit",
      desc: "Continuous human resources training and disciplined teamwork with better team spirit to deliver defect-free material across every dispatch."
    },
    {
      title: "Productivity Through Advanced Technology",
      desc: "Improving overall plant productivity through advanced wire-forming machinery, thermo-fusion core bonding, and achieving shorter lead times."
    }
  ];

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        title="Quality Assurance"
        subtitle="Our documented quality principles: consistent material standards, zero production loss, and continuous improvement."
        breadcrumbs={[{ label: "Quality Assurance" }]}
        bgImage="/images/roller-assembly-textured.jpg"
      />

      {/* 2. Core Commitment Statement Banner */}
      <section className="py-12 bg-amber-500 text-slate-950 border-b border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="text-xs uppercase font-black tracking-widest text-slate-900/80">
            Official Manufacturing Quality Pledge
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
            &ldquo;Delivering the Right Quality to the Right Customer.&rdquo;
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-900/90 max-w-2xl mx-auto">
            Quality is at the heart of Shyam Colour. From raw material intake to final packing, we focus on maintaining consistent product standards.
          </p>
        </div>
      </section>

      {/* 3. Documented Quality Satisfaction Principles */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              Documented Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Quality Satisfaction Principles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The foundational manufacturing standards established and practiced at Shyam Colour since 2021.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pillars of Production Integrity */}
      <section className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                Material & Process Control
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Stringent Control From Wire to Finished Roller
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Every roller manufactured at our Vasai East facility is subjected to multi-point inspection. We check wire concentricity, electro-galvanized plating thickness, core thermo-bond adhesion, and nap shearing uniformity before packing.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">High Quality Raw Materials</h4>
                    <p className="text-xs text-slate-400">
                      High-carbon steel wire rods, impact-resistant polypropylene handle grips, and chemical-tolerant synthetic fabrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Thermo-Bonded Sleeve Construction</h4>
                    <p className="text-xs text-slate-400">
                      Glue-free thermal bonding that prevents sleeve unwinding or solvent degradation during wash cycles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Shorter Lead Time & Dependable Dispatch</h4>
                    <p className="text-xs text-slate-400">
                      Systematized production scheduling to supply high volume consignments without quality compromises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-3 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/roller-assembly-textured.jpg"
                    alt="Quality checking on paint rollers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Finished Goods Quality Check
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Every batch is verified for seamless rotation and zero fabric shedding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality Inquiry */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            title="Request Quality Verification or Samples"
            subtitle="Request sample units to test and evaluate our paint roller performance on your project substrates."
            initialEnquiryType="General Enquiry"
          />
        </div>
      </section>
    </div>
  );
}
