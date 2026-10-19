export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'paint-rollers' | 'roller-handles' | 'roller-refills' | 'roller-assemblies';
  categoryName: string;
  shortDesc: string;
  description: string;
  sizes: string[];
  materials: string[];
  applications: string[];
  features: string[];
  image: string;
  additionalImages?: string[];
  specifications: Record<string, string>;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
}

export const COMPANY_DETAILS = {
  name: "SHYAM COLOUR",
  brandMark: "SCR",
  tagline: "Quality You Can Trust. Performance You Can Depend On.",
  commitmentStatement: "Delivering the Right Quality to the Right Customer.",
  establishedYear: 2021,
  director: "Mr. Bipin Mishra",
  ceos: "Mr. Bipin Mishra & Namita Mahadik",
  phone: "8451845284",
  formattedPhone: "+91 84518 45284",
  phone2: "8459944934",
  formattedPhone2: "+91 84599 44934",
  email: "bipin.mshr@gmail.com",
  address: {
    line1: "Gala No. 7 & 8, Goodwill Industry",
    line2: "Chinchpada, Vasai East – 401208",
    city: "Vasai East",
    district: "Palghar",
    state: "Maharashtra",
    pincode: "401208",
    country: "India"
  },
  whatsappMessage: "Hello Shyam Colour, I would like to enquire about your paint rollers and manufacturing solutions.",
  fullAddressString: "Gala No. 7 & 8, Goodwill Industry, Chinchpada, Vasai East – 401208, Maharashtra, India"
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "paint-rollers",
    slug: "paint-rollers",
    name: "Complete Paint Rollers",
    shortDesc: "Complete roller assemblies with ergonomic handles and high-performance refill sleeves ready for professional application.",
    description: "Engineered for high paint pickup, smooth transfer, and minimal splatter. Available in standard 4-inch to 10-inch assemblies with cage or single-wire frames.",
    image: "/images/roller-assembly-textured.jpg"
  },
  {
    id: "roller-handles",
    slug: "roller-handles",
    name: "Paint Roller Handles & Frames",
    shortDesc: "Heavy-duty wire frames and 5-wire cage handles manufactured with durable galvanized steel and ergonomic grips.",
    description: "Leading manufacturer in central India producing precision roller handles from 2 inches to 10 inches, including cage frames, single wire, and extended reach rods.",
    image: "/images/roller-cage-5wire-red.jpg"
  },
  {
    id: "roller-refills",
    slug: "roller-refills",
    name: "Roller Refill Sleeves",
    shortDesc: "Premium woven, polyester, acrylic, and microfiber roller refills engineered for walls, masonry, ceilings, and enamels.",
    description: "High-density nap refills designed for smooth, semi-rough, and rough surfaces with thermo-fusion bonding that prevents sleeve slippage or delamination.",
    image: "/images/roller-refill-white-plush.jpg"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p2",
    slug: "heavy-duty-5-wire-cage-frame",
    name: "Heavy-Duty 5-Wire Cage Roller Frame (Red)",
    category: "roller-handles",
    categoryName: "Paint Roller Handles & Frames",
    shortDesc: "Industrial-grade 5-wire cage paint roller handle with durable nylon bushings and contoured grip.",
    description: "Designed for demanding contractor use, this 5-wire cage provides full 360-degree support across the roller sleeve, preventing sleeve distortion, wobble, or slippage during fast application. Manufactured with galvanized steel and reinforced nylon endcaps for ultra-smooth rotation.",
    sizes: ["9 Inch (225 mm)", "10 Inch (250 mm)"],
    materials: ["Galvanized spring-steel cage wires", "Reinforced engineering polymer endcaps", "Contoured molded handle"],
    applications: [
      "Interior wall and ceiling painting",
      "Commercial contract painting",
      "Fits standard 1.5-inch diameter roller sleeves",
      "Universal extension pole mounting"
    ],
    features: [
      "5-wire cage eliminates sleeve slippage and flexing",
      "Heavy 8mm main rod geometry delivers steady pressure balance",
      "Smooth internal rotation bushings reduce painter fatigue",
      "Internal pole threading with anti-slip grip texture"
    ],
    image: "/images/roller-cage-5wire-red.jpg",
    additionalImages: ["/images/roller-handle-red-long.jpg", "/images/roller-assembly-textured.jpg"],
    specifications: {
      "Frame Type": "5-Wire contractor cage",
      "Rod Diameter": "7.8 mm heavy-duty",
      "Handle Color": "Industrial Red (custom colors available for OEM)",
      "Cage Diameter": "Standard 38 mm (1.5 Inch)",
      "Endcaps": "Nylon composite wear-resistant caps"
    }
  },
  {
    id: "p4",
    slug: "pro-finish-microfiber-refill-sleeve",
    name: "Pro-Finish White Plush Roller Refill Sleeve",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Ultra-dense white microfiber refill engineered for lint-free mirror-smooth finish on interior walls and ceilings.",
    description: "Manufactured using advanced thermo-bonded microfiber fabrics that virtually eliminate shedding. Designed for interior architectural coatings, gloss, semi-gloss, and satin finishes where an ultra-smooth, uniform surface is essential.",
    sizes: ["9 Inch (225 mm)", "7 Inch (175 mm)", "4 Inch (100 mm)"],
    materials: ["Thermo-bonded virgin microfiber", "Solvent-resistant PVC core", "Polypropylene end rings"],
    applications: [
      "Interior drywall and plastered walls",
      "Ceilings and smooth masonry",
      "Water-based emulsions and luxury paints",
      "Enamels and low-VOC paints"
    ],
    features: [
      "Virtually zero linting or fiber shedding",
      "Exceptional paint release minimizes lap marks",
      "Solvent-resistant core avoids softening during washing",
      "Beveled edges prevent edge tracking lines"
    ],
    image: "/images/roller-refill-white-plush.jpg",
    additionalImages: ["/images/roller-refill-yellow-stripe.jpg", "/images/roller-refill-trio-sizes.jpg"],
    specifications: {
      "Nap Length": "10 mm to 12 mm medium pile",
      "Core Material": "Impact-resistant PVC core",
      "Bonding": "Thermo-fusion (glue-free, solvent-safe)",
      "Surface Finish": "Eggshell, Satin, Semi-Gloss, Matt",
      "Washability": "Reusable with warm water or standard wash"
    }
  },
  {
    id: "p5",
    slug: "multi-surface-yellow-stripe-refill",
    name: "Multi-Surface Yellow-Stripe Roller Refill",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "High-capacity yellow striped poly-blend roller refill for smooth and semi-rough interior/exterior surfaces.",
    description: "Engineered with resilient polyamide-polyester yarn blend with characteristic yellow spiral tracer lines. Offers high paint pickup, rapid spreading, and excellent resilience against matting when working on drywall, plaster, and cement render.",
    sizes: ["9 Inch (225 mm)", "7 Inch (175 mm)"],
    materials: ["Polyamide-polyester blend yarn", "High-strength polymer inner core"],
    applications: [
      "Semi-rough walls and concrete render",
      "Emulsion paints and acrylic primers",
      "Interior and exterior wall surfaces",
      "Contractor bulk painting"
    ],
    features: [
      "High paint loading capacity saves dipping cycles",
      "Distinctive yellow spiral pattern for easy identification",
      "Durable resilient fibers maintain bounce under heavy use",
      "Washable and reusable"
    ],
    image: "/images/roller-refill-yellow-stripe.jpg",
    additionalImages: ["/images/roller-refill-white-plush.jpg", "/images/roller-refill-bluestripe.jpg"],
    specifications: {
      "Nap Height": "14 mm medium-long pile",
      "Core Diameter": "Standard 38 mm inner fit",
      "Fabric Type": "Woven polyamide blend with yellow tracer",
      "Suitable Paints": "All acrylic emulsions, primers, distempers",
      "Packing": "Custom shrink-wrapped or bulk cartons"
    }
  },
  {
    id: "p6",
    slug: "contractor-trio-multi-size-refill-set",
    name: "Contractor Multi-Size Roller Refill Set (2\", 4\", 9\")",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Comprehensive size range of yellow-striped contractor sleeves covering broad walls, trim, and tight architectural corners.",
    description: "Shyam Colour's wide spectrum of professional painting tools spans from 2 inches to 10 inches. This signature yellow-stripe contractor assortment demonstrates our versatile manufacturing capability, delivering matching fabric density across large 9-inch wall rollers, 4-inch trim rollers, and 2-inch mini touch-up rollers.",
    sizes: ["2 Inch (50 mm)", "4 Inch (100 mm)", "9 Inch (225 mm)"],
    materials: ["High-durability acrylic pile with signature yellow spiral tracers", "Reinforced inner sleeves"],
    applications: [
      "Trim, doors, cabinetry and radiator edges (2\" & 4\")",
      "Expansive wall and ceiling spans (9\")",
      "Architectural painting and detail work",
      "OEM private-label combo packs"
    ],
    features: [
      "Full spectrum manufacturing directly from our Vasai East factory",
      "Matching finish quality across broad areas and detail cuts",
      "Compatible with standard wire frames and cage assemblies",
      "Ideal bundle for paint brand private-label programs"
    ],
    image: "/images/roller-refill-trio-sizes.jpg",
    additionalImages: ["/images/roller-refill-yellow-stripe.jpg", "/images/roller-refill-white-plush.jpg"],
    specifications: {
      "Sizes Included": "2-inch, 4-inch, and 9-inch variants",
      "Pattern": "Signature yellow spiral stripe contractor design",
      "Core Construction": "Solvent-tolerant rigid core",
      "Manufacturing Range": "Available up to 10-inch custom variants",
      "Packaging": "Available in bulk carton packs or customized kits"
    }
  },
  {
    id: "p7",
    slug: "single-wire-heavy-rod-roller-handle",
    name: "Single-Wire Heavy-Gauge Paint Roller Handle (Red)",
    category: "roller-handles",
    categoryName: "Paint Roller Handles & Frames",
    shortDesc: "Heavy 6mm single-wire roller handle engineered for reliable push-fit roller sleeves and corner clearance.",
    description: "Manufactured from cold-drawn zinc-plated steel rod with precision 90-degree arm geometry. The single-wire design allows flush painting up against adjoining perpendicular walls and baseboards without frame obstruction.",
    sizes: ["7 Inch (175 mm)", "9 Inch (225 mm)"],
    materials: ["Heavy-duty cold-drawn galvanized steel", "Ergonomic thermoplastic red handle"],
    applications: [
      "General interior and exterior painting",
      "Corner cutting and edge alignment",
      "Heavy emulsion application",
      "Compatible with push-on core refills"
    ],
    features: [
      "Rigid wire geometry prevents lateral bending under roller pressure",
      "Contoured red handle provides anti-fatigue grip during long shifts",
      "Corrosion-resistant electro-plated zinc coating",
      "Hanging hole and extension pole internal socket"
    ],
    image: "/images/roller-handle-red-long.jpg",
    additionalImages: ["/images/roller-handle-red-medium.jpg", "/images/roller-handle-wire-orange.jpg"],
    specifications: {
      "Rod Diameter": "6.0 mm heavy-duty steel wire",
      "Wire Finish": "Bright zinc rust prevention",
      "Grip Length": "130 mm ergonomic grip",
      "Pole Compatibility": "Standard threaded socket",
      "Weight": "Balanced lightweight yet rigid construction"
    }
  },
  {
    id: "p8",
    slug: "offset-wire-roller-frame-orange",
    name: "Offset Single-Wire Roller Frame (Orange Grip)",
    category: "roller-handles",
    categoryName: "Paint Roller Handles & Frames",
    shortDesc: "Precision cranked wire frame with bright orange grip offering superior leverage and smooth wrist clearance.",
    description: "Specially designed crank angle maintains the handle offset from the painted surface, keeping painters' knuckles clear of wet walls while delivering direct downward pressure onto the roller axis.",
    sizes: ["8 Inch (200 mm)", "9 Inch (225 mm)"],
    materials: ["Tempered steel wire", "Molded orange polypropylene grip"],
    applications: [
      "Wall and ceiling painting",
      "Emulsion and primer coatings",
      "High-reach painting with extension poles"
    ],
    features: [
      "Offset crank geometry minimizes wrist strain",
      "Tightly tolerances spindle for smooth refill rotation",
      "High resistance to twisting and torque",
      "Bright safety orange handle for easy jobsite visibility"
    ],
    image: "/images/roller-handle-wire-orange.jpg",
    additionalImages: ["/images/roller-single-wire-yellow.jpg", "/images/roller-handle-mini-orange.jpg"],
    specifications: {
      "Wire Gauge": "5.8 mm structural steel",
      "Handle Style": "Molded anti-slip ribbed pattern",
      "Finish": "Nickel/Zinc chrome plating",
      "Grip Color": "Safety Orange (custom OEM colors available)",
      "Connection": "Standard threaded female socket"
    }
  },
  {
    id: "p9",
    slug: "mini-roller-handle-radiator-frame",
    name: "Mini Roller Long-Reach Radiator Frame",
    category: "roller-handles",
    categoryName: "Paint Roller Handles & Frames",
    shortDesc: "Extended reach wire handle for 4-inch mini rollers, perfect for tight corners, trim, and behind fixtures.",
    description: "Engineered for tight clearance work where standard 9-inch frames cannot fit. The slender steel shaft slips behind pipes, architectural radiators, deep window reveals, and tight cabinetry with minimal effort.",
    sizes: ["4 Inch (100 mm mini sleeve)", "2 Inch (50 mm mini sleeve)"],
    materials: ["Spring-tempered steel wire", "Molded orange ergonomic handle"],
    applications: [
      "Behind radiators, pipes, and wall sconces",
      "Door frames, baseboards, and window trim",
      "Cabinet painting and intricate woodwork",
      "Narrow architectural reveals"
    ],
    features: [
      "Extended slim neck reaches into hard-to-access crevices",
      "Smooth push-fit spindle holds mini refills firmly",
      "Featherweight handling reduces fatigue on fine detailing",
      "Compatible with mini foam, microfiber, and velour refills"
    ],
    image: "/images/roller-handle-mini-orange.jpg",
    additionalImages: ["/images/roller-handle-long-crank.jpg", "/images/roller-handle-slim-yellow.jpg"],
    specifications: {
      "Reach Length": "300 mm total shaft reach",
      "Spindle Diameter": "6.0 mm standard mini refill fit",
      "Grip Type": "Compact ergonomic polypropylene",
      "Surface Treatment": "Bright galvanized chrome finish",
      "Weight": "Under 110 grams for ultra-light precision"
    }
  },
  {
    id: "p10",
    slug: "dual-tone-heavy-emulsion-refill",
    name: "Dual-Tone Teal & Red Stripe Heavy Emulsion Refill",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Premium dual-stripe synthetic roller refill engineered for high coverage acrylic and weather-coat emulsions.",
    description: "Constructed with multi-filament twisted synthetic yarn featuring bold teal and red helical guides. Delivers rapid paint pickup and controlled release without spitting, splatter, or fiber loss.",
    sizes: ["9 Inch (225 mm)"],
    materials: ["Heavy-duty thermo-bonded synthetic yarn", "Rigid moisture-resistant core"],
    applications: [
      "Interior masonry, sand-faced plaster",
      "High-solids acrylic wall paints",
      "Undercoats and primers",
      "Large commercial ceiling spans"
    ],
    features: [
      "Double-twist yarn technology ensures rapid paint pick-up",
      "Thermo-bonded construction withstands water and mineral spirits",
      "Non-matting fiber structure stays springy all day long",
      "Exceptional coverage rate per dip"
    ],
    image: "/images/roller-refill-teal-red.jpg",
    additionalImages: ["/images/roller-refill-rainbow-stripe.jpg", "/images/roller-refill-bluestripe.jpg"],
    specifications: {
      "Nap Height": "16 mm high-volume pile",
      "Core Size": "38 mm ID standard fit",
      "Color Pattern": "Teal and Red helical twin stripes",
      "Solvent Resistance": "High (water-based and mild solvents)",
      "Standard Pack": "Bulk carton packing (custom packaging available)"
    }
  },
  {
    id: "p11",
    slug: "complete-pro-wall-roller-assembly",
    name: "Complete Pro-Wall Interior Roller Assembly (Frame & Sleeve)",
    category: "paint-rollers",
    categoryName: "Interior Roller",
    shortDesc: "Fully assembled professional interior paint roller ready for out-of-the-box wall painting with balanced frame and plush sleeve.",
    description: "The complete interior painting solution manufactured at Shyam Colour's Vasai East facility. Engineered specifically for interior wall emulsions, primers, and smooth finishes. Combines our signature balanced roller frame with an ultra-fine finish interior sleeve, saving contractors setup time and ensuring ideal frame-to-sleeve clearance.",
    sizes: ["9 Inch (225 mm)"],
    materials: ["Zinc-plated rigid frame", "High-density poly-blend refill", "Reinforced grip handle"],
    applications: [
      "Living room and commercial interior walls",
      "Interior drywall and plastered walls",
      "Ceiling painting with extension rod",
      "New construction plaster coats and smooth finishes"
    ],
    features: [
      "Pre-assembled and ready for immediate painting",
      "Optimized rotational balance eliminates sleeve wobbling",
      "Standard extension pole screw socket",
      "Engineered for interior emulsion and primer coats"
    ],
    image: "/images/roller-assembly-textured.jpg",
    additionalImages: ["/images/roller-assembly-white-poly.jpg", "/images/roller-paint-blue-dot.jpg"],
    specifications: {
      "Assembly Type": "Pre-mounted frame + refill sleeve",
      "Roller Type": "Interior Wall Roller Assembly",
      "Frame Style": "Single heavy wire with end guides",
      "Handle Type": "Ergonomic molded polymer with hanging loop",
      "Total Weight": "Approx. 280g balanced",
      "Packaging Options": "Carded sleeve, polybag, or custom OEM pack"
    }
  },
  {
    id: "p12",
    slug: "premium-dual-plush-texture-refills",
    name: "Heavy-Duty Green & Blue Plush Texture Refills",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Vibrant high-pile plush refills engineered for rugged exterior coatings, stippling, and textured masonry.",
    description: "Designed for heavy-duty application where standard thin sleeves quickly wear out. These ultra-dense plush rolls hold deep paint reservoirs to fill plaster crevices, rough concrete, and brickwork in a single pass.",
    sizes: ["9 Inch (225 mm)"],
    materials: ["Deep-pile textured acrylic and nylon blend", "Reinforced thermal core"],
    applications: [
      "Rough exterior stucco and pebble dash",
      "Waterproofing coatings and elastomeric paints",
      "Anti-fungal textured masonry paints",
      "Concrete walls and boundary structures"
    ],
    features: [
      "Deep plush pile penetrates surface pits and grooves effortlessly",
      "Resilient fibers do not flatten under heavy pressure",
      "Reinforced core resists heavy hydraulic pressures",
      "Available in multiple vivid color blends for brand differentiation"
    ],
    image: "/images/roller-refill-green-blue-plush.jpg",
    additionalImages: ["/images/roller-refill-teal-red.jpg", "/images/roller-refill-trio-sizes.jpg"],
    specifications: {
      "Nap Height": "20 mm extra-deep pile",
      "Core Spec": "Heavy-duty impact polymer",
      "Color Variants": "Green plush / Blue plush variants",
      "Recommended Coatings": "Elastomeric, cementitious paints, thick texture coats",
      "Manufacturing Minimums": "Contact for bulk and OEM run volumes"
    }
  },
  {
    id: "p13",
    slug: "scr-commercial-red-handle-roller-pack",
    name: "SCR Commercial Red-Grip Complete Roller Set (Packaged)",
    category: "paint-rollers",
    categoryName: "Complete Paint Rollers",
    shortDesc: "Single-wire steel roller frame with high-grip red handle and sealed SCR green fabric refill sleeve.",
    description: "Professional packaged roller set manufactured by Shyam Colour. Features a balanced single-wire frame with zinc electroplating, an ergonomic red molded polymer handle, and a sealed SCR-branded green nap refill engineered for smooth emulsion flow and maximum durability.",
    sizes: ["9 Inch (225 mm)", "10 Inch (250 mm)"],
    materials: [
      "Galvanized high-tensile wire",
      "Ergonomic polymer handle",
      "High-density green fabric refill",
      "Protective retail packaging"
    ],
    applications: [
      "Interior wall & ceiling emulsions",
      "Exterior smooth masonry",
      "Commercial and residential painting",
      "Contractor & retail distribution"
    ],
    features: [
      "Sealed tamper-evident SCR retail pouch",
      "Heavy-gauge electroplated frame prevents wobbling",
      "Uniform paint distribution with zero fiber loss",
      "Ergonomic anti-slip grip with extension pole socket"
    ],
    image: "/images/roller-pack-red-green.jpg",
    additionalImages: ["/images/roller-handle-red-long.jpg", "/images/roller-assembly-textured.jpg"],
    specifications: {
      "Frame Diameter": "6 mm zinc-plated steel",
      "Refill Length": "9 Inch (225 mm)",
      "Nap Type": "High-density green synthetic plush",
      "Handle Grip": "Molded red anti-slip handle with hanging hole",
      "Packaging": "Branded SCR sealed retail pouch"
    }
  },
  {
    id: "p14",
    slug: "scr-pro-finish-blue-handle-roller-pack",
    name: "SCR Pro-Finish Blue-Grip Complete Roller Set (Packaged)",
    category: "paint-rollers",
    categoryName: "Complete Paint Rollers",
    shortDesc: "Heavy-gauge offset wire roller frame with ergonomic royal blue grip and sealed SCR yellow-stripe refill sleeve.",
    description: "Engineered for superior wall finish and contractor comfort. This packaged set combines our precision offset wire frame with an anti-fatigue royal blue ergonomic handle and a sealed SCR yellow-stripe woven refill sleeve that guarantees smooth, lint-free paint application.",
    sizes: ["9 Inch (225 mm)"],
    materials: [
      "Heavy-gauge zinc-plated steel rod",
      "Molded ergonomic blue handle",
      "Woven yellow-stripe synthetic fabric refill",
      "Sealed SCR retail sleeve"
    ],
    applications: [
      "High-end interior wall finishes",
      "Latex, acrylic, and water-based emulsions",
      "Architectural coating and drywall",
      "Retail hardware & paint store display"
    ],
    features: [
      "Factory sealed in authentic SCR blue-and-white retail pouch",
      "Ergonomic ribbed blue grip reduces painter fatigue",
      "Signature yellow-stripe sleeve ensures streak-free coverage",
      "Fits standard threaded extension poles"
    ],
    image: "/images/roller-pack-blue-white.jpg",
    additionalImages: ["/images/roller-refill-yellow-stripe.jpg", "/images/roller-assembly-white-poly.jpg"],
    specifications: {
      "Frame Construction": "Precision-offset galvanized steel wire",
      "Refill Length": "9 Inch (225 mm)",
      "Nap Pattern": "Woven microfiber with helical yellow stripes",
      "Handle Color": "Royal Blue industrial polymer",
      "Packaging": "Sealed SCR retail pouch with display hang-hole"
    }
  },
  {
    id: "p15",
    slug: "scr-mini-roller-kit-3-refills",
    name: "SCR 4-Inch Multi-Refill Mini Roller Kit (3 Refills + Frame)",
    category: "paint-rollers",
    categoryName: "Complete Paint Rollers",
    shortDesc: "Compact 4-inch painting kit featuring 3 premium white microfiber refill sleeves and a balanced yellow-grip wire frame in a sealed pack.",
    description: "Versatile contractor-grade mini roller kit manufactured at Shyam Colour's Vasai East facility. Includes three 4-inch (100 mm) ultra-smooth white microfiber refills and a durable single-wire handle with an ergonomic yellow grip. Perfect for trim, corners, doors, cabinets, and narrow spaces.",
    sizes: ["4 Inch (100 mm)"],
    materials: [
      "High-density lint-free white microfiber",
      "Galvanized steel rod",
      "Molded yellow handle",
      "Transparent heavy-duty SCR pack"
    ],
    applications: [
      "Door frames, cabinets, and architectural trim",
      "Narrow wall strips, radiators, and behind pipes",
      "Gloss, semi-gloss, and satin finishes",
      "Quick touch-ups and DIY painting"
    ],
    features: [
      "All-in-one kit: 3 replacement sleeves plus 1 frame",
      "Ultra-dense microfiber nap delivers mirror-smooth finish",
      "Lightweight, agile frame for tight access spaces",
      "Sealed retail packaging with clear product view"
    ],
    image: "/images/roller-kit-3refill-yellow.jpg",
    additionalImages: ["/images/roller-single-wire-yellow.jpg", "/images/roller-refill-trio-sizes.jpg"],
    specifications: {
      "Roller Width": "4 Inch (100 mm)",
      "Package Contents": "1x Wire Frame with Yellow Handle + 3x White Refill Sleeves",
      "Nap Type": "Lint-free short-pile microfiber",
      "Wire Thickness": "5.5 mm corrosion-resistant wire",
      "Packaging": "Heavy-gauge clear retail pouch with red SCR header"
    }
  },
  {
    id: "p16",
    slug: "pro-wall-single-wire-roller-assembly-yellow",
    name: "Pro-Wall Single-Wire Roller Assembly (Yellow Handle & Blue-Yellow Stripe Sleeve)",
    category: "paint-rollers",
    categoryName: "Complete Paint Rollers",
    shortDesc: "Precision single-wire roller frame with signature amber-yellow grip handle and plush blue-yellow helical stripe refill sleeve.",
    description: "High-performance complete paint roller engineered for effortless interior wall and ceiling coverage. Combines Shyam Colour's precision single-wire galvanized steel frame with an ergonomic amber-yellow polymer grip and a high-density, multi-color helical stripe microfiber refill sleeve for lint-free, uniform paint distribution.",
    sizes: ["9 Inch (225 mm)"],
    materials: [
      "Galvanized heavy-duty steel wire rod",
      "Molded ergonomic amber-yellow handle",
      "Thermo-bonded dual-color helical stripe plush pile"
    ],
    applications: [
      "Interior plaster and drywall walls",
      "Ceilings and smooth masonry",
      "Water-based emulsions and primers",
      "Residential and commercial interior painting"
    ],
    features: [
      "Pre-assembled frame and sleeve ready for immediate painting",
      "Threaded handle base fits standard extension poles",
      "Helical spiral stripes provide visual rolling indicator and uniform pickup",
      "Smooth low-friction rotation reduces painter fatigue"
    ],
    image: "/images/roller-assembly-blue-yellow-stripe.jpg",
    additionalImages: ["/images/roller-handle-wire-orange.jpg", "/images/roller-refill-green-yellow-spiral.jpg"],
    specifications: {
      "Assembly Type": "Pre-mounted Single-Wire Frame + Refill Sleeve",
      "Roller Length": "9 Inch (225 mm)",
      "Frame Wire Gauge": "6 mm zinc-plated steel",
      "Handle Color": "Signature Amber Yellow",
      "Nap Height": "14 mm medium-density pile",
      "Core Diameter": "Standard 38 mm (1.5 Inch)"
    }
  },
  {
    id: "p17",
    slug: "high-density-sponge-texture-roller-refill",
    name: "High-Density Reticulated Yellow Sponge Texture Roller Refill",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Open-cell reticulated sponge roller sleeve for decorative textured finishes, stippling, and faux effects.",
    description: "Specialized reticulated yellow sponge foam roller refill engineered for textured wall coatings, stipple effects, faux finishing, and uniform solvent application. The open-cell porous matrix holds high liquid volume while creating distinct stippled and patterned textures on interior and exterior walls.",
    sizes: ["9 Inch (225 mm)", "7 Inch (175 mm)"],
    materials: [
      "Heavy-duty reticulated polyurethane foam",
      "Solvent-resistant PVC inner core"
    ],
    applications: [
      "Decorative wall texturing and stipple finishes",
      "Faux painting, sponge effects, and glazing",
      "Primer and sealant application on rough surfaces",
      "Industrial coatings and tile adhesive spread"
    ],
    features: [
      "Open-pore reticulated sponge structure creates rich, uniform texture",
      "Highly absorbent foam holds generous coating volume",
      "Solvent-tolerant inner core fits standard 9-inch wire frames",
      "Washable and reusable across multiple painting cycles"
    ],
    image: "/images/roller-refill-sponge-yellow.jpg",
    additionalImages: ["/images/roller-refill-white-plush.jpg", "/images/roller-refill-yellow-stripe.jpg"],
    specifications: {
      "Refill Type": "Reticulated Sponge / Foam Texture Refill",
      "Length": "9 Inch (225 mm)",
      "Core Diameter": "38 mm standard cage/rod fit",
      "Pore Structure": "Medium-coarse open cell",
      "Material": "Industrial-grade open-cell polyurethane"
    }
  },
  {
    id: "p18",
    slug: "pro-coverage-green-yellow-helical-stripe-refill",
    name: "Pro-Coverage Green & Yellow Helical Stripe Roller Refill",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Dual-tone green and yellow spiral woven refill sleeve engineered for high-capacity emulsion transfer.",
    description: "Engineered for professional painters demanding rapid paint pick-up and splatter-free transfer. Crafted with high-grade synthetic yarn woven with signature green and yellow spiral tracking lines, thermo-fused to a rigid core for long-lasting durability on plaster and drywall.",
    sizes: ["9 Inch (225 mm)"],
    materials: [
      "Thermo-bonded synthetic woven pile",
      "Impact-resistant rigid inner core"
    ],
    applications: [
      "Interior smooth and semi-smooth plastered walls",
      "Ceilings, hallways, and living spaces",
      "Water-based acrylic emulsions and distempers",
      "Contractor high-speed wall coating"
    ],
    features: [
      "Dual green-yellow helical stripes maintain even paint dispersal",
      "Dense yarn density virtually eliminates lint and shedding",
      "Thermo-fused core prevents delamination in water or mild solvents",
      "Delivers smooth, ridge-free wall coverage"
    ],
    image: "/images/roller-refill-green-yellow-spiral.jpg",
    additionalImages: ["/images/roller-refill-green-gold-plush.jpg", "/images/roller-refill-yellow-stripe.jpg"],
    specifications: {
      "Nap Height": "12 mm medium pile",
      "Core Diameter": "38 mm ID standard",
      "Length": "9 Inch (225 mm)",
      "Stripe Pattern": "Green and Yellow dual spiral",
      "Bonding Process": "Advanced thermo-fusion"
    }
  },
  {
    id: "p19",
    slug: "heavy-duty-green-gold-high-capacity-plush-refill",
    name: "Heavy-Duty Green & Gold High-Capacity Plush Roller Refill",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Extra-plush green and gold microfiber nap refill built for high paint pickup on walls and ceilings.",
    description: "A thick, high-pile contractor roller sleeve engineered for high-coverage wall painting. Features an ultra-dense plush fabric blend in vibrant green and gold weave that holds maximum paint volume per dip, drastically speeding up application across large residential and commercial wall spans.",
    sizes: ["9 Inch (225 mm)"],
    materials: [
      "High-pile acrylic-polyester plush yarn",
      "Moisture-resistant reinforced core"
    ],
    applications: [
      "Textured walls, sand-finish plaster, and masonry",
      "High-build emulsions, primers, and exterior paints",
      "Commercial spaces, warehouse walls, and ceilings",
      "Multi-room residential painting"
    ],
    features: [
      "High paint holding capacity cuts reload time in half",
      "Resilient plush fibers resist matting during all-day usage",
      "Reinforced thermal core ensures true, wobble-free spinning",
      "Beveled edges reduce roller tram lines and bead marks"
    ],
    image: "/images/roller-refill-green-gold-plush.jpg",
    additionalImages: ["/images/roller-refill-green-yellow-spiral.jpg", "/images/roller-refill-teal-red.jpg"],
    specifications: {
      "Nap Height": "16 mm deep plush pile",
      "Core Diameter": "38 mm standard fit",
      "Length": "9 Inch (225 mm)",
      "Color Style": "Green and Gold contractor plush",
      "Core Construction": "Solvent-tolerant rigid core"
    }
  },
  {
    id: "p20",
    slug: "scr-contractor-tiger-stripe-yellow-black-refill",
    name: "SCR Contractor Tiger-Stripe Roller Refill (Yellow & Black)",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "Heavy-duty yellow plush refill with signature black helical stripes for maximum durability and coverage.",
    description: "Known among painting contractors as the classic 'Tiger Stripe' roller, this premium refill combines a high-density golden-yellow plush body with distinctive black spiral tracers. Designed to withstand abrasive rough surfaces, thick coatings, and rigorous daily contractor use while ensuring superior paint release.",
    sizes: ["9 Inch (225 mm)", "4 Inch (100 mm)"],
    materials: [
      "Tough multi-filament synthetic plush",
      "Solvent-proof thermo-fused core"
    ],
    applications: [
      "Interior and exterior plaster, brick, and concrete",
      "Heavy emulsions, primers, and weather-proof paints",
      "High-production commercial and industrial painting",
      "Contractor bulk fleet application"
    ],
    features: [
      "Signature black spiral tiger tracers for visual rolling alignment",
      "High-abrasion synthetic fibers resist shedding on rough plaster",
      "Solvent-proof core resists paints, primers, and cleanup solvents",
      "Maximum liquid pickup for rapid wall and ceiling coverage"
    ],
    image: "/images/roller-refill-tiger-stripe-yellow-black.jpg",
    additionalImages: ["/images/roller-refill-yellow-stripe.jpg", "/images/roller-refill-sponge-yellow.jpg"],
    specifications: {
      "Nap Height": "15 mm heavy-duty pile",
      "Core Diameter": "38 mm standard cage/rod fit",
      "Length": "9 Inch (225 mm)",
      "Pattern": "Yellow body with black spiral tiger stripes",
      "Core Spec": "Thermo-fused solvent-resistant polymer"
    }
  },
  {
    id: "p21",
    slug: "ultra-fine-white-microfiber-finish-roller-refill",
    name: "Ultra-Fine White Microfiber Finish Roller Refill",
    category: "roller-refills",
    categoryName: "Roller Refill Sleeves",
    shortDesc: "High-density pure white microfiber nap refill engineered for mirror-smooth finish on interior walls and woodwork.",
    description: "Manufactured at Shyam Colour's facility using ultra-dense lint-free virgin white microfiber that holds generous paint volume while leaving a flawless, orange-peel-free finish. Ideal for premium interior wall coatings, satin, gloss, and low-VOC paints.",
    sizes: ["9 Inch (225 mm)", "4 Inch (100 mm)"],
    materials: [
      "100% thermo-bonded white microfilament pile",
      "Solvent-resistant rigid PVC core"
    ],
    applications: [
      "Interior drywall, living room walls, and ceilings",
      "High-gloss, satin, and luxury emulsion finishes",
      "Cabinetry, doors, and smooth woodwork",
      "Primers, sealers, and low-VOC interior paints"
    ],
    features: [
      "Zero fiber shedding ensures smooth, spray-like wall finish",
      "High-density microfiber prevents dripping and paint spatter",
      "Thermo-fused inner core resists moisture and mineral spirits",
      "Beveled edge profile eliminates roller lap marks"
    ],
    image: "/images/roller-refill-pure-white-microfiber.jpg",
    additionalImages: ["/images/roller-refill-white-plush.jpg", "/images/roller-refill-yellow-stripe.jpg"],
    specifications: {
      "Nap Height": "10 mm short-to-medium pile",
      "Core Diameter": "38 mm standard cage/rod fit",
      "Length": "9 Inch (225 mm)",
      "Color": "Pure White",
      "Fabric Type": "Thermo-bonded microfiber fleece"
    }
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "5-Wire Heavy Duty Contractor Cage Frame",
    category: "Handles & Frames",
    image: "/images/roller-cage-5wire-red.jpg",
    desc: "Precision welded 5-wire cage with red contractor grip."
  },
  {
    id: "g2",
    title: "SCR Pro-Finish Blue-Grip Complete Roller Set",
    category: "Complete Rollers",
    image: "/images/roller-pack-blue-white.jpg",
    desc: "Heavy-gauge offset wire roller frame with ergonomic royal blue grip and yellow-stripe sleeve."
  },
  {
    id: "g3",
    title: "Pro-Finish White Plush Roller Refill",
    category: "Refill Sleeves",
    image: "/images/roller-refill-white-plush.jpg",
    desc: "Lint-free white microfiber refill for smooth drywall & ceiling coats."
  },
  {
    id: "g4",
    title: "Multi-Surface Yellow-Stripe Roller Refill",
    category: "Refill Sleeves",
    image: "/images/roller-refill-yellow-stripe.jpg",
    desc: "High-capacity woven yarn refill with signature yellow helical stripes."
  },
  {
    id: "g5",
    title: "Contractor Trio Multi-Size Assortment",
    category: "Product Range",
    image: "/images/roller-refill-trio-sizes.jpg",
    desc: "From 2 inches to 9 inches: wide spectrum manufacturing from our factory."
  },
  {
    id: "g6",
    title: "SCR Commercial Red-Grip Complete Roller Set",
    category: "Complete Rollers",
    image: "/images/roller-pack-red-green.jpg",
    desc: "Single-wire steel roller frame with high-grip red handle and sealed green refill sleeve."
  },
  {
    id: "g7",
    title: "Precision Offset Orange Roller Frame",
    category: "Handles & Frames",
    image: "/images/roller-handle-wire-orange.jpg",
    desc: "Heavy-gauge offset wire handle providing optimal painter clearance."
  },
  {
    id: "g8",
    title: "Long-Reach Red Heavy Duty Frame",
    category: "Handles & Frames",
    image: "/images/roller-handle-red-long.jpg",
    desc: "Extended shaft 6mm single-wire handle for commercial painting."
  },
  {
    id: "g9",
    title: "Dual-Stripe Teal & Red Roller Refill",
    category: "Refill Sleeves",
    image: "/images/roller-refill-teal-red.jpg",
    desc: "High pickup dual-tone refill sleeve for continuous emulsion transfer."
  },
  {
    id: "g10",
    title: "High-Pile Green & Blue Plush Sleeves",
    category: "Refill Sleeves",
    image: "/images/roller-refill-green-blue-plush.jpg",
    desc: "Deep nap textured sleeves for rough concrete and exterior coatings."
  },
  {
    id: "g11",
    title: "Mini Reach Frame for Radiators & Trim",
    category: "Handles & Frames",
    image: "/images/roller-handle-mini-orange.jpg",
    desc: "Narrow shaft frame engineered for tight corners and architectural trim."
  },
  {
    id: "g12",
    title: "Complete Roller Assembly On Hardwood",
    category: "Complete Rollers",
    image: "/images/roller-assembly-textured.jpg",
    desc: "Pre-mounted contractor roller ready for immediate site application."
  },
  {
    id: "g13",
    title: "Pro-Wall Single-Wire Yellow Assembly",
    category: "Complete Rollers",
    image: "/images/roller-assembly-blue-yellow-stripe.jpg",
    desc: "Single-wire precision frame with ergonomic yellow handle and blue-yellow stripe sleeve."
  },
  {
    id: "g14",
    title: "Reticulated Sponge Texture Refill",
    category: "Refill Sleeves",
    image: "/images/roller-refill-sponge-yellow.jpg",
    desc: "Open-cell reticulated sponge sleeve for wall textures, stipples, and faux finishes."
  },
  {
    id: "g15",
    title: "Contractor Tiger-Stripe Roller Refill",
    category: "Refill Sleeves",
    image: "/images/roller-refill-tiger-stripe-yellow-black.jpg",
    desc: "Signature high-density golden-yellow plush refill with black helical spiral stripes."
  },
  {
    id: "g16",
    title: "Ultra-Fine White Microfiber Finish Refill",
    category: "Refill Sleeves",
    image: "/images/roller-refill-pure-white-microfiber.jpg",
    desc: "Lint-free white microfilament sleeve for ultra-smooth wall and ceiling coatings."
  }
];
