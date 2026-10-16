import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, Product, COMPANY_DETAILS } from "@/data/products";
import { 
  CheckCircle2, 
  Ruler, 
  Layers, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import ProductGallery from "@/components/ProductGallery";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found | Shyam Colour"
    };
  }

  return {
    title: `${product.name} | Shyam Colour Manufacturer`,
    description: `${product.name} manufactured by Shyam Colour. ${product.shortDesc}`,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      title: `${product.name} | Shyam Colour`,
      description: product.shortDesc,
      images: [{ url: product.image }]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or fallback
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const whatsappMessage = `Hello Shyam Colour, I am interested in your product "${product.name}". Please provide details on bulk pricing, available sizes, and lead times.`;
  const whatsappUrl = `https://wa.me/91${COMPANY_DETAILS.phone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        title={product.name}
        subtitle={product.categoryName}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name }
        ]}
        bgImage={product.image}
      />

      {/* 2. Product Details Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Images Gallery with Interactive Thumbnails */}
            <div className="lg:col-span-6">
              <ProductGallery
                productName={product.name}
                categoryName={product.categoryName}
                mainImage={product.image}
                additionalImages={product.additionalImages}
                phone={COMPANY_DETAILS.phone}
                whatsappMessage={whatsappMessage}
              />
            </div>

            {/* Right: Technical Specs & Information */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  Industrial B2B Catalogue
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
                  {product.name}
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Product ID: <span className="font-mono text-slate-700">{product.id}</span> | Manufacturer: Shyam Colour (Vasai East)
                </p>
              </div>

              <div className="prose text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>{product.description}</p>
              </div>

              {/* Sizes Available */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Ruler className="w-4 h-4 text-amber-600" />
                  Available Standard Sizes
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs font-semibold shadow-xs"
                    >
                      {s}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
                    + Custom OEM Sizing
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Key Product Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Recommended Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Technical Specifications
                </h3>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50/60" : "bg-white"}>
                          <th className="py-2.5 px-4 font-semibold text-slate-700 w-2/5 border-r border-slate-100">
                            {key}
                          </th>
                          <td className="py-2.5 px-4 text-slate-600">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Scroll To Enquiry CTA */}
              <div className="pt-2">
                <a
                  href="#enquiry"
                  className="w-full block py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm text-center shadow-md transition-all"
                >
                  Request Bulk Quote for This Product &darr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pre-Filled Product Enquiry Form */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200" id="enquiry">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            title={`Enquire for: ${product.name}`}
            subtitle="Submit your required quantity, delivery destination, or customization specs for direct factory quotation."
            initialProductName={product.name}
            initialEnquiryType="Product Enquiry"
          />
        </div>
      </section>

      {/* 4. Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Related Products in {product.categoryName}
              </h3>
              <Link
                href="/products"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                <span>View All Catalogue</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
