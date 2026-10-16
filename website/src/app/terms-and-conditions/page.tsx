import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { COMPANY_DETAILS } from "@/data/products";

export const metadata: Metadata = {
  title: "Terms and Conditions | Shyam Colour",
  description: "Terms and conditions of commercial manufacturing, bulk supply, and private labeling with Shyam Colour.",
  alternates: {
    canonical: "/terms-and-conditions"
  }
};

export default function TermsAndConditionsPage() {
  return (
    <div>
      <PageBanner
        title="Terms & Conditions"
        subtitle="Commercial and operational terms regarding wholesale supply and contract manufacturing."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Commercial Inquiries & Quotes</h2>
            <p>
              Product representations, specifications, and descriptions on this website represent standard manufacturing capabilities. Official proforma invoices and written quotes issued by Shyam Colour detail specific pricing, minimum order quantities (MOQ), and delivery milestones.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. OEM & Private-Label Manufacturing</h2>
            <p>
              Custom OEM products manufactured according to client drawings, proprietary packaging, or bespoke dimensions are produced subject to mutually agreed purchase orders and pre-production sample approvals.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Quality Satisfaction & Inspection</h2>
            <p>
              In accordance with our core commitment of &ldquo;Delivering the Right Quality to the Right Customer,&rdquo; all batches undergo factory inspection prior to dispatch. Any discrepancies must be communicated within standard commercial inspection windows.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Applicable Jurisdiction</h2>
            <p>
              All commercial agreements and supply contracts shall be subject to the legal jurisdiction of courts in Palghar / Mumbai, Maharashtra, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
