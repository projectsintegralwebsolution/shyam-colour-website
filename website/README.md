# SHYAM COLOUR — Official Manufacturing Website

Complete, modern, multi-page B2B manufacturing website for **SHYAM COLOUR** (SCR), a leading paint roller, handles, and painting tools manufacturer based in Vasai East, Maharashtra, India.

---

## 🚀 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: Nodemailer (Server-side API Route)
- **Image Optimization**: Next.js Image Optimization
- **Data Architecture**: Structured TypeScript catalogue with support for dynamic additions

---

## 🏢 Company Profile & Details

- **Company Name**: SHYAM COLOUR
- **Established**: 2021
- **Registered Office & Factory**:
  Gala No. 7 & 8, Goodwill Industry,
  Chinchpada, Vasai East – 401208,
  Maharashtra, India.
- **Director**: Mr. Bipin Mishra
- **Phone**: +91 8451845284
- **Email**: bipin.mshr@gmail.com
- **Core Commitment**: *"Delivering the Right Quality to the Right Customer."*
- **Spectrum**: Professional painting tools from 2 inches to 10 inches.

---

## 📄 Site Structure & Pages

1. **Home (`/`)**: Hero slider with real product photography, introduction, category grid, featured products, OEM section, "Why Choose Us" icon grid, quality principles, asset gallery preview, and business enquiry form.
2. **About Us (`/about`)**: Company background, 2021 establishment in Vasai East, vision, mission, core values, and pan-India reach.
3. **Products (`/products`)**: Complete catalogue categorized by assemblies, cage handles, and refill sleeves with size tags and direct CTAs.
4. **Product Detail Pages (`/products/[slug]`)**: Individual pages with multi-image gallery, technical specifications table, WhatsApp enquiry button, and pre-filled enquiry form.
5. **OEM & Private Label (`/oem-private-label`)**: 4-step workflow, customization capabilities, custom packaging, and quote generator.
6. **Quality Assurance (`/quality-assurance`)**: Documented principles (zero-loss commitment, material control, training, and modern technology).
7. **Gallery (`/gallery`)**: Category-filtered image grid with a responsive click-to-enlarge lightbox and keyboard controls (ESC, Arrow keys).
8. **Contact Us (`/contact`)**: Two-column layout with clickable phone/email, instant WhatsApp button, Google Maps location embed, and factory enquiry form.
9. **Privacy Policy (`/privacy-policy`)**: B2B data protection and inquiry handling.
10. **Terms & Conditions (`/terms-and-conditions`)**: Commercial quotation terms, MOQ, and sample policy.
11. **SEO Files**: Automated `sitemap.xml` and `robots.txt`.

---

## ⚙️ Running Locally

### 1. Install Dependencies
```bash
cd website
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and set your credentials:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ENQUIRY_TO_EMAIL=bipin.mshr@gmail.com
NEXT_PUBLIC_SITE_URL=https://shyamcolour.com
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🎨 Mandatory Developer Credit
Every page displays the mandatory footer attribution:
> **Developed by [Integral Web Solution](https://integralwebsolution.in/)**
