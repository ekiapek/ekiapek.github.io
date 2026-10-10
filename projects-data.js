"use strict";
/* Single source of truth for the seven reviewed case studies.
   Loaded by both index.html and projects.html. Keep product
   capabilities separate from personal contribution. */
window.PROJECTS = [
  {
    id: "berandatoko",
    name: "BerandaToko",
    tagline: "WhatsApp-first commerce and reseller/PPOB platform.",
    urls: [
      { label: "berandatoko.com", href: "https://berandatoko.com/" },
      { label: "site.berandatoko.com", href: "https://site.berandatoko.com/" },
    ],
    period: null,
    role: "Senior Backend Engineer, Jatis Mobile",
    context:
      "Public site describes a WhatsApp-based reseller/PPOB service: mobile data, PLN tokens, e-wallet top-ups, BPJS, PDAM, and an LPG ordering flow. Product copy, not a result claim.",
    contribution: [
      "Led re-platforming of the WhatsApp-first commerce system from a monolith toward approximately 30 Go/Fiber v2 services.",
      "Created reusable service boilerplate and shared libraries; mapped RabbitMQ-backed chatbot flows across commerce, payment, refund, voucher, and digital-product areas.",
      "Delivered bill-payment and digital-product capabilities for PLN, PDAM, BPJS, mobile data, and game vouchers, alongside virtual-account, BI-SNAP, QRIS, WhatsApp ordering, and seller-registration flows.",
      "Refactored the monolithic e-commerce service from Gin to Fiber: eliminated weekly OOM kills during peak weekend traffic, improved performance by 80%, and reduced memory use by approximately 75%.",
    ],
    stack: ["Go", "Fiber v2", "RabbitMQ", "BI-SNAP", "QRIS", "WhatsApp Business API"],
    image: { src: "assets/projects/berandatoko-home-hero.png", alt: "BerandaToko public homepage hero describing WhatsApp-based reselling without deposits or capital", width: 1280, height: 633 },
    notes: [],
  },
  {
    id: "berandapos",
    name: "BerandaPOS",
    tagline: "POS platform for Indonesian UMKM, now in production.",
    urls: [{ label: "pos.berandatoko.com", href: "https://pos.berandatoko.com/" }],
    period: null,
    role: "Senior Backend Engineer, Jatis Mobile: backend architecture and technical delivery (user-confirmed)",
    context:
      "Public onboarding describes recording offline and online orders in one place, daily profit/loss calculation, and financial reports for KUR applications. Onboarding text, not proof every workflow is live.",
    contribution: [
      "Led backend architecture and technical delivery for the microservice-based POS platform.",
      "Defined service boundaries, RBAC, PostgreSQL/Redis/RabbitMQ foundations, and API contracts.",
      "Authored functional specifications, technical requirements, API documentation, and implementation hand-offs (approximately 100 design/engineering documents per the CV).",
      "Led development of the audit, reporting, transaction, and payment services, plus the external inventory integration.",
    ],
    stack: ["Go", "Fiber v3", "PostgreSQL", "Redis", "RabbitMQ", "Flutter", "Next.js"],
    image: { src: "assets/projects/berandapos-public-onboarding.png", alt: "BerandaPOS public onboarding screen for recording offline and online orders in one system", width: 1280, height: 633 },
    notes: [],
  },
  {
    id: "hashmato",
    name: "Hashmato",
    tagline: "Restaurant and retail software; public name for the DineConnect backend work.",
    urls: [{ label: "hashmato.com", href: "https://hashmato.com/" }],
    period: "December 2024–February 2025",
    role: "Backend Developer",
    context:
      "Public site title describes software solutions for restaurants and retail. Page body was empty at latest check; no product detail inferred from the title.",
    contribution: [
      "Implemented DeliveryHero catalog-push and incoming-order webhook flows.",
      "Built accept/reject endpoints with menu-combo/order-tag, time-slot, image, and custom-price handling.",
      "Added RabbitMQ messaging/worker integration, attachments, and email reconnection.",
    ],
    stack: ["Go", "RabbitMQ"],
    image: { src: "assets/projects/hashmato-home-hero.png", alt: "Hashmato public homepage hero for restaurant and retail POS software", width: 1280, height: 633 },
    notes: [],
  },
  {
    id: "simtaru-rembang",
    name: "SIMTARU Rembang",
    tagline: "Government spatial-planning and geospatial public-information platform for Kabupaten Rembang.",
    urls: [
      { label: "simtaru.rembangkab.go.id", href: "https://simtaru.rembangkab.go.id/" },
      { label: "Interactive map", href: "https://simtaru.rembangkab.go.id/peta" },
    ],
    period: "2026",
    role: "System Architect and Engineer",
    context:
      "Public portal for spatial transparency and regional regulation for Kabupaten Rembang.",
    contribution: [
      "Architected the complete platform across a Laravel 13/PHP API, Next.js SSR/React frontend, PostgreSQL/PostGIS, Redis, asynchronous workers, and governed published-data workflows.",
      "Designed GIS ingestion/validation, versioned publishing, zoning/ITBX analysis, guarded external WMS/WFS/OGC API Features, map capabilities, static vector-tile delivery/recovery, and upload/security hardening.",
    ],
    stack: ["Laravel 13", "PHP", "Next.js", "React", "PostgreSQL", "PostGIS", "Redis"],
    image: { src: "assets/projects/simtaru-rembang-public.png", alt: "SIMTARU Rembang public homepage hero welcoming visitors to the spatial information portal", width: 1280, height: 633 },
    notes: [],
  },
  {
    id: "simtaru-blora",
    name: "SIMTARU Blora",
    tagline: "Government spatial-planning portal; maintenance and porting work.",
    urls: [{ label: "simtaru.blorakab.go.id/simtaru-blora", href: "https://simtaru.blorakab.go.id/simtaru-blora" }],
    period: "September–October 2026",
    role: "Engineering/development",
    context:
      "Government spatial-planning portal. Public URL was blocked by a browser challenge during review; the live UI was not verified and was not bypassed.",
    contribution: [
      "Supported local Docker setup, compatibility route/asset aliases, smoke-test fixes, and map/upload settings.",
    ],
    stack: ["PHP legacy application (framework/version not confirmed)"],
    image: null,
    notes: ["Maintenance/porting scope, not ownership of the complete system."],
  },
  {
    id: "namaa-ads",
    name: "Namaa Ads",
    tagline: "Saudi-first advertising platform for campaign planning and management.",
    urls: [],
    period: "2026",
    role: "Product Research, System Architecture, and Engineering",
    context:
      "Saudi-first digital advertising platform for campaign planning and management. Public URL TBA.",
    contribution: [
      "Researched and architected the platform, then developed it from scratch with FastAPI and Next.js.",
      "Registered business accounts required for system/app integrations.",
      "Built campaign, approval, and multi-channel workflows.",
    ],
    stack: ["FastAPI", "Next.js", "PostgreSQL"],
    image: null,
    notes: [],
  },
  {
    id: "gbi-sion-banjarbaru",
    name: "GBI Sion Banjarbaru",
    tagline: "Church-management system reported in use by the church.",
    urls: [{ label: "gbi-sion.bitnbuilt.com", href: "https://gbi-sion.bitnbuilt.com/" }],
    period: "February 2026 (from repository commit dates; exact engagement range not supplied)",
    role: "Engineering and architecture, whole system",
    context:
      "Public page titled “Statistik Data Jemaat GBI Sion Banjarbaru”. It remained loading (“Memuat data...”) during review; no member records were exposed.",
    contribution: ["Engineered and architected the whole church-management system (member/family records, organization and cell-group management, and related administration per local code and feature notes)."],
    stack: ["React", "TypeScript", "Supabase"],
    image: null,
    notes: [],
  },
];
