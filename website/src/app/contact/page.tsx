import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY_DETAILS } from "@/data/products";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  User, 
  Factory,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Shyam Colour Factory Vasai East",
  description: "Contact Shyam Colour registered office & factory at Gala No. 7 & 8, Goodwill Industry, Chinchpada, Vasai East – 401208, Maharashtra. Call 8451845284 or email bipin.mshr@gmail.com.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/91${COMPANY_DETAILS.phone}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappMessage
  )}`;

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        title="Contact Shyam Colour"
        subtitle="Get in touch directly with our manufacturing unit in Vasai East, Maharashtra for orders, specifications, and distributor partnerships."
        breadcrumbs={[{ label: "Contact Us" }]}
        bgImage="/images/roller-assembly-textured.jpg"
      />

      {/* 2. Contact Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Factory Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full">
                  Direct Factory Liaison
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                  Let&apos;s Build a Reliable Partnership
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Whether you require full container bulk dispatches, custom handles, or wish to start an OEM private-label line, our team is ready to assist.
                </p>
              </div>

              {/* Verified Details Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Registered Office & Factory Address
                      </h4>
                      <p className="text-sm font-bold text-slate-900 mt-1">
                        {COMPANY_DETAILS.name}
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                        {COMPANY_DETAILS.address.line1},<br />
                        {COMPANY_DETAILS.address.line2},<br />
                        {COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.state} – {COMPANY_DETAILS.address.pincode}, India.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Direct Phone Line
                      </h4>
                      <a
                        href={`tel:${COMPANY_DETAILS.phone}`}
                        className="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-1"
                      >
                        +91 {COMPANY_DETAILS.phone}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Direct call for quotes and order dispatches
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Official Email
                      </h4>
                      <a
                        href={`mailto:${COMPANY_DETAILS.email}`}
                        className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-1"
                      >
                        {COMPANY_DETAILS.email}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Send formal purchase orders and OEM drawings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Factory Management
                      </h4>
                      <p className="text-sm font-bold text-slate-900 mt-1">
                        Director: {COMPANY_DETAILS.director}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Personal attention to corporate and contract accounts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                <span>Chat Instantly on WhatsApp (+91 {COMPANY_DETAILS.phone})</span>
              </a>
            </div>

            {/* Right Column: Reusable Enquiry Form */}
            <div className="lg:col-span-7" id="enquiry-form">
              <EnquiryForm
                title="Send Your Enquiry Directly to Factory"
                subtitle="Fill out the form below. Enquiries are delivered securely to our sales desk."
                initialEnquiryType="General Enquiry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Location Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Location Map
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Our Manufacturing Facility in Vasai East
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Goodwill Industry, Chinchpada, Vasai East, Palghar District, Maharashtra – 401208
            </p>
          </div>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-200">
            <iframe
              title="Shyam Colour Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15061.328458763567!2d72.8464303!3d19.3888362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a96677fbe6db%3A0x6b840e79ecb9b8c3!2sChinchpada%2C%20Vasai%20East%2C%20Vasai-Virar%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
