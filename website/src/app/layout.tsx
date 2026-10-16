import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: {
    default: "Shyam Colour | Paint Roller & Handles Manufacturer in India",
    template: "%s | Shyam Colour"
  },
  description:
    "Shyam Colour is a premier paint roller and painting tools manufacturer based in Vasai East, Maharashtra, India. Established in 2021, specializing in paint roller handles, refills, bulk B2B supply, and OEM / private-label manufacturing across India.",
  keywords: [
    "Paint Roller Manufacturer in India",
    "Paint Roller Handles Manufacturer",
    "Paint Roller Supplier in India",
    "Paint Rollers Wholesale",
    "Private Label Paint Rollers",
    "OEM Paint Roller Manufacturing",
    "Painting Tools Manufacturer",
    "Shyam Colour Vasai East",
    "Paint Roller Factory Maharashtra"
  ],
  authors: [{ name: "Shyam Colour" }],
  creator: "Shyam Colour",
  publisher: "Shyam Colour",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shyamcolour.com"),
  openGraph: {
    title: "Shyam Colour | Paint Roller & Handles Manufacturer in India",
    description: "Quality paint rollers and painting tools for distributors, businesses and private-label partners across India.",
    url: "https://shyamcolour.com",
    siteName: "Shyam Colour",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/roller-assembly-textured.jpg",
        width: 1200,
        height: 630,
        alt: "Shyam Colour Professional Paint Rollers"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SHYAM COLOUR",
    "alternateName": "SCR",
    "url": "https://shyamcolour.com",
    "logo": "https://shyamcolour.com/images/logo.png",
    "foundingDate": "2021",
    "founder": {
      "@type": "Person",
      "name": "Mr. Bipin Mishra"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gala No. 7 & 8, Goodwill Industry, Chinchpada",
      "addressLocality": "Vasai East",
      "addressRegion": "Maharashtra",
      "postalCode": "401208",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8451845284",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
