import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.phases": "Production",
    "nav.products": "Products",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.comingSoon": "Coming Soon",
    "hero.title": "Shaping Excellence in Every",
    "hero.profile": "Profile",
    "hero.description": "Nasr Kabeer Aluminum Co., Ltd. is establishing a world-class aluminum profile manufacturing facility in the Kingdom of Saudi Arabia, with a total designed capacity of",
    "hero.capacity": "200,000 tons per year",
    "hero.learnMore": "Learn More",
    "hero.viewProducts": "View Products",
    "hero.stat1": "Tons/Year Capacity",
    "hero.stat2": "Production Phases",
    "hero.stat3": "Export Target",
    "hero.certified": "Certified",
    "hero.alloySeries": "Alloy Series",
    "hero.production": "Production",
    
    // About Section
    "about.title1": "Leading the",
    "about.title2": "Aluminum Revolution",
    "about.description": "Aligned with Saudi Vision 2030, Nasr Kabeer Aluminum is committed to advancing the Kingdom's industrial capabilities and export diversification through cutting-edge aluminum profile manufacturing.",
    "about.quality.title": "World-Class Quality",
    "about.quality.desc": "ISO-certified production with stringent quality control at every stage.",
    "about.growth.title": "Phased Growth",
    "about.growth.desc": "Strategic roadmap ensures gradual capacity expansion and market penetration.",
    "about.export.title": "Export Excellence",
    "about.export.desc": "Targeting 40% international markets to support Vision 2030 objectives.",
    
    // Production Phases
    "phases.title": "Production Phases",
    "phases.subtitle": "Our strategic roadmap ensures gradual capacity expansion and product diversification to meet evolving market demands.",
    
    "phase1.title": "High-End Architectural Profiles",
    "phase1.capacity": "Capacity: 35,000-40,000 tons/year",
    "phase1.capacityDesc": "Premium market positioning",
    "phase1.products": "Key Products:",
    "phase1.product1": "• Curtain wall systems for skyscrapers",
    "phase1.product2": "• Thermal break window/door profiles",
    "phase1.product3": "• Decorative architectural profiles",
    "phase1.product4": "• Decorative façade elements",
    "phase1.alloys": "Alloys: 6xxx series (AA6063, AA6061, AA6005)",
    "phase1.standards": "Standards: EN 755, ASTM B221, SASO",
    
    "phase2.badge": "Phase 2",
    "phase2.title": "Industrial Aluminum Profiles",
    "phase2.capacity": "Capacity: 50,000–70,000 tons/year",
    "phase2.capacityDesc": "Diversified manufacturing capabilities",
    "phase2.product1": "• Industrial structural profiles",
    "phase2.product2": "• Solar mounting systems",
    "phase2.product3": "• Automation & logistics profiles",
    "phase2.product4": "• Electronic device enclosures",
    "phase2.alloys": "Alloys: 6xxx & 7xxx series (6061, 6082, 7005, 7020)",
    "phase2.certification": "Certification: ISO 9001",
    
    "phase3.badge": "Phase 3",
    "phase3.title": "Transportation & Heavy-Duty Profiles",
    "phase3.capacity": "Capacity: ~100,000 tons/year",
    "phase3.capacityDesc": "Large-scale industrial production",
    "phase3.product1": "• New energy vehicle battery frames",
    "phase3.product2": "• Automotive structural profiles",
    "phase3.product3": "• Trailer chassis profiles",
    "phase3.product4": "• High-speed rail components",
    "phase3.alloys": "Alloys: 6xxx, 7xxx, 2xxx series (6061, 6082, 7005, 7020, 2024)",
    "phase3.certs": "Certifications: ISO/TS 16949, EN 15085, IRIS",
    
    // Products
    "products.title1": "Product",
    "products.title2": "Portfolio",
    "products.subtitle": "From architectural excellence to industrial innovation, our comprehensive range serves diverse sectors.",
    
    "product.curtainWall.title": "Curtain Wall Systems",
    "product.curtainWall.desc": "Premium facade solutions for high-rise buildings with superior structural integrity.",
    "product.industrial.title": "Industrial Frameworks",
    "product.industrial.desc": "High-rigidity modular profiles for machinery, equipment enclosures, and assembly systems.",
    "product.solar.title": "Solar Mounting Systems",
    "product.solar.desc": "Corrosion-resistant profiles engineered for renewable energy installations and PV projects.",
    "product.window.title": "Window & Door Systems",
    "product.window.desc": "Energy-efficient thermal break systems for enhanced building insulation and performance.",
    "product.transport.title": "Transportation Profiles",
    "product.transport.desc": "Lightweight, high-strength profiles for automotive, rail vehicles, and logistics applications.",
    "product.precision.title": "Precision Instruments",
    "product.precision.desc": "Specialized profiles for optical, medical, and semiconductor equipment applications.",
    
    // Contact
    "contact.title1": "Get in",
    "contact.title2": "Touch",
    "contact.subtitle": "Connect with us to learn more about our capabilities and upcoming launch.",
    "contact.email": "Email: Business@nkaluminum.com",
    "contact.phaseCompletion": "Upon full completion of all phases",
    "contact.location": "Location",
    "contact.address1": "Everwin Industrial Park",
    "contact.address2": "Dammam 3rd Industrial City",
    "contact.address3": "Kingdom of Saudi Arabia",
    "contact.company": "Company Information",
    "contact.cr": "CR No.: 2050202550",
    "contact.unified": "Unified No.: 7043052724",
    "contact.vision": "Vision 2030",
    "contact.visionDesc": "Supporting Saudi Arabia's industrial growth and export diversification",
    "contact.status": "Project Status",
    "contact.phase1": "Phase 1",
    "contact.phase1Status": "Coming in May 2026",
    "contact.phase2": "Phase 2",
    "contact.phase2Status": "Scheduled",
    "contact.phase3": "Phase 3",
    "contact.phase3Status": "Scheduled",
    "contact.totalCapacity": "Tons/Year Total Capacity",
    "contact.phased": "Phased expansion strategy",
    
    // Footer
    "footer.company": "Nasr Kabeer Aluminum Co., Ltd.",
    "footer.vision": "Supporting Saudi Arabia's Vision 2030",
    "footer.rights": "All Rights Reserved",
    
    // Toast
    "toast.comingSoon": "Coming Soon",
    "toast.launch": "We'll be launching in mid-2026!",
    "toast.products": "Product catalog will be available soon!",
  },
  ar: {
    // Navigation
    "nav.about": "عن الشركة",
    "nav.phases": "الإنتاج",
    "nav.products": "المنتجات",
    "nav.contact": "اتصل بنا",
    
    // Hero Section
    "hero.comingSoon": "قريباً",
    "hero.title": "نصنع التميز في كل",
    "hero.profile": "بروفيل",
    "hero.description": "تقوم شركة النصر الكبير للألمنيوم المحدودة بإنشاء منشأة تصنيع ألواح الألمنيوم عالمية المستوى في المملكة العربية السعودية، بطاقة تصميمية إجمالية تبلغ",
    "hero.capacity": "200,000 طن سنوياً",
    "hero.learnMore": "اعرف المزيد",
    "hero.viewProducts": "عرض المنتجات",
    "hero.stat1": "طن/سنة الطاقة الإنتاجية",
    "hero.stat2": "مراحل الإنتاج",
    "hero.stat3": "هدف التصدير",
    "hero.certified": "معتمد",
    "hero.alloySeries": "سلسلة السبائك",
    "hero.production": "الإنتاج",
    
    // About Section
    "about.title1": "قيادة",
    "about.title2": "ثورة الألمنيوم",
    "about.description": "تماشياً مع رؤية السعودية 2030، تلتزم شركة النصر الكبير للألمنيوم بتطوير القدرات الصناعية للمملكة وتنويع الصادرات من خلال تصنيع ألواح الألمنيوم المتطورة.",
    "about.quality.title": "جودة عالمية",
    "about.quality.desc": "إنتاج معتمد من ISO مع رقابة صارمة على الجودة في كل مرحلة.",
    "about.growth.title": "نمو مرحلي",
    "about.growth.desc": "خارطة طريق استراتيجية تضمن التوسع التدريجي في الطاقة واختراق السوق.",
    "about.export.title": "التميز في التصدير",
    "about.export.desc": "استهداف 40٪ من الأسواق الدولية لدعم أهداف رؤية 2030.",
    
    // Production Phases
    "phases.title": "مراحل الإنتاج",
    "phases.subtitle": "تضمن خارطة الطريق الاستراتيجية لدينا التوسع التدريجي في الطاقة وتنويع المنتجات لتلبية متطلبات السوق المتطورة.",
    
    "phase1.title": "ألواح معمارية راقية",
    "phase1.capacity": "الطاقة: 35,000-40,000 طن/سنة",
    "phase1.capacityDesc": "وضع السوق المتميز",
    "phase1.products": "المنتجات الرئيسية:",
    "phase1.product1": "• أنظمة الجدران الساترة لناطحات السحاب",
    "phase1.product2": "• ألواح النوافذ/الأبواب ذات الفاصل الحراري",
    "phase1.product3": "• ألواح معمارية زخرفية",
    "phase1.product4": "• عناصر واجهات زخرفية",
    "phase1.alloys": "السبائك: سلسلة 6xxx (AA6063، AA6061، AA6005)",
    "phase1.standards": "المعايير: EN 755، ASTM B221، SASO",
    
    "phase2.badge": "المرحلة 2",
    "phase2.title": "ألواح الألمنيوم الصناعية",
    "phase2.capacity": "الطاقة: 50,000–70,000 طن/سنة",
    "phase2.capacityDesc": "قدرات تصنيع متنوعة",
    "phase2.product1": "• ألواح إنشائية صناعية",
    "phase2.product2": "• أنظمة تركيب الطاقة الشمسية",
    "phase2.product3": "• ألواح الأتمتة واللوجستيات",
    "phase2.product4": "• حاويات الأجهزة الإلكترونية",
    "phase2.alloys": "السبائك: سلسلة 6xxx و 7xxx (6061، 6082، 7005، 7020)",
    "phase2.certification": "الشهادة: ISO 9001",
    
    "phase3.badge": "المرحلة 3",
    "phase3.title": "ألواح النقل والخدمة الشاقة",
    "phase3.capacity": "الطاقة: ~100,000 طن/سنة",
    "phase3.capacityDesc": "إنتاج صناعي واسع النطاق",
    "phase3.product1": "• إطارات بطاريات السيارات الكهربائية",
    "phase3.product2": "• ألواح إنشائية للسيارات",
    "phase3.product3": "• ألواح هيكل المقطورات",
    "phase3.product4": "• مكونات القطارات عالية السرعة",
    "phase3.alloys": "السبائك: سلسلة 6xxx، 7xxx، 2xxx (6061، 6082، 7005، 7020، 2024)",
    "phase3.certs": "الشهادات: ISO/TS 16949، EN 15085، IRIS",
    
    // Products
    "products.title1": "محفظة",
    "products.title2": "المنتجات",
    "products.subtitle": "من التميز المعماري إلى الابتكار الصناعي، تخدم مجموعتنا الشاملة قطاعات متنوعة.",
    
    "product.curtainWall.title": "أنظمة الجدران الساترة",
    "product.curtainWall.desc": "حلول واجهات متميزة للمباني الشاهقة مع سلامة هيكلية فائقة.",
    "product.industrial.title": "الإطارات الصناعية",
    "product.industrial.desc": "ألواح معيارية عالية الصلابة للآلات وحاويات المعدات وأنظمة التجميع.",
    "product.solar.title": "أنظمة تركيب الطاقة الشمسية",
    "product.solar.desc": "ألواح مقاومة للتآكل مصممة لمنشآت الطاقة المتجددة ومشاريع الطاقة الكهروضوئية.",
    "product.window.title": "أنظمة النوافذ والأبواب",
    "product.window.desc": "أنظمة الفاصل الحراري الموفرة للطاقة لتحسين عزل المباني والأداء.",
    "product.transport.title": "ألواح النقل",
    "product.transport.desc": "ألواح خفيفة الوزن عالية القوة للسيارات والمركبات السككية وتطبيقات اللوجستيات.",
    "product.precision.title": "الأدوات الدقيقة",
    "product.precision.desc": "ألواح متخصصة لتطبيقات المعدات البصرية والطبية وأشباه الموصلات.",
    
    // Contact
    "contact.title1": "تواصل",
    "contact.title2": "معنا",
    "contact.subtitle": "تواصل معنا لمعرفة المزيد عن قدراتنا وإطلاقنا القادم.",
    "contact.email": "البريد الإلكتروني: Business@nkaluminum.com",
    "contact.phaseCompletion": "عند الانتهاء الكامل لجميع المراحل",
    "contact.location": "الموقع",
    "contact.address1": "منطقة إيفروين الصناعية",
    "contact.address2": "المدينة الصناعية الثالثة بالدمام",
    "contact.address3": "المملكة العربية السعودية",
    "contact.company": "معلومات الشركة",
    "contact.cr": "رقم السجل التجاري: 2050202550",
    "contact.unified": "الرقم الموحد: 7043052724",
    "contact.vision": "رؤية 2030",
    "contact.visionDesc": "دعم النمو الصناعي وتنويع الصادرات في المملكة العربية السعودية",
    "contact.status": "حالة المشروع",
    "contact.phase1": "المرحلة 1",
    "contact.phase1Status": "قادمة في مايو 2026",
    "contact.phase2": "المرحلة 2",
    "contact.phase2Status": "مجدولة",
    "contact.phase3": "المرحلة 3",
    "contact.phase3Status": "مجدولة",
    "contact.totalCapacity": "طن/سنة الطاقة الإجمالية",
    "contact.phased": "استراتيجية التوسع المرحلي",
    
    // Footer
    "footer.company": "شركة النصر الكبير للألمنيوم المحدودة",
    "footer.vision": "دعم رؤية المملكة العربية السعودية 2030",
    "footer.rights": "جميع الحقوق محفوظة",
    
    // Toast
    "toast.comingSoon": "قريباً",
    "toast.launch": "سنطلق في منتصف عام 2026!",
    "toast.products": "سيكون كتالوج المنتجات متاحاً قريباً!",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "ar" || saved === "en") ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
