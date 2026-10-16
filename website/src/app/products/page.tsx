import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products Catalogue | Shyam Colour Paint Rollers & Handles",
  description: "Browse Shyam Colour's complete range of paint rollers, heavy-duty 5-wire cage handles, roller refills, and texture painting tools manufactured in Vasai East, India.",
  alternates: {
    canonical: "/products"
  }
};

export default function ProductsPage() {
  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        title="Our Product Range"
        subtitle="Precision-manufactured paint rollers, frames, and refill sleeves engineered for professional painting results across India."
        breadcrumbs={[{ label: "Products" }]}
        bgImage="/images/roller-assembly-textured.jpg"
      />

      {/* 2. Introduction & Category Navigation Bar */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              Pan-India Supply Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Paint Rollers & Handles from 2&quot; to 10&quot;
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every tool manufactured at Shyam Colour is made with high-quality raw materials viz. galvanized structural steel, thermo-fused cores, and high-density fabrics. Browse by category below or filter through our complete catalogue.
            </p>
          </div>

          {/* Category Jump Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#all"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-sm hover:bg-slate-800 transition-colors"
            >
              All Products ({PRODUCTS.length})
            </a>
            {PRODUCT_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-amber-100/70 text-slate-700 hover:text-amber-800 text-xs font-semibold border border-slate-200 transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products Grouped by Categories */}
      <section className="py-16 bg-slate-50 border-b border-slate-200" id="all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {PRODUCT_CATEGORIES.map((category) => {
            const catProducts = PRODUCTS.filter((p) => p.category === category.slug);

            return (
              <div key={category.id} id={category.slug} className="scroll-mt-24 space-y-8">
                {/* Category Header */}
                <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      Category
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 self-start md:self-end">
                    {catProducts.length} Products Available
                  </span>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Bulk Order / OEM Enquiry Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            title="Bulk Catalogue Quotation"
            subtitle="Request wholesale price lists, bulk container discounts, or custom private-label combinations."
            initialEnquiryType="Bulk Order"
          />
        </div>
      </section>
    </div>
  );
}
