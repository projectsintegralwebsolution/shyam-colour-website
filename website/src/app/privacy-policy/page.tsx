import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { COMPANY_DETAILS } from "@/data/products";

export const metadata: Metadata = {
  title: "Privacy Policy | Shyam Colour",
  description: "Privacy policy and data handling principles for Shyam Colour website visitors and B2B customers.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageBanner
        title="Privacy Policy"
        subtitle="How Shyam Colour collects, protects, and handles B2B enquiry information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              At <strong>SHYAM COLOUR</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating from Gala No. 7 & 8, Goodwill Industry, Chinchpada, Vasai East – 401208, Maharashtra, India, we value your privacy. This policy outlines how we handle information submitted through our official website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>
              We only collect business and commercial inquiry details willingly provided by you when submitting enquiry forms, requesting quotation documents, or contacting us via WhatsApp and phone. These details include your Name, Company Name, Business Email Address, Contact Number, and Project Requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. How Information is Used</h2>
            <p>
              Information collected is used solely to evaluate quotation requests, communicate manufacturing specifications, provide product samples, and maintain legitimate B2B business correspondence.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Data Protection & Security</h2>
            <p>
              We do not sell, rent, trade, or distribute your corporate contact data to third parties. Technical and procedural protections are in place to safeguard the transmission and storage of enquiry records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact our director Mr. Bipin Mishra via email at{" "}
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-600 font-semibold underline">
                {COMPANY_DETAILS.email}
              </a>{" "}
              or by phone at <strong>+91 {COMPANY_DETAILS.phone}</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
