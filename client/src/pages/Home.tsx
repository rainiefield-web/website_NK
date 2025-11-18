import React from "react";
import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, Globe2, MapPin, TrendingUp, Award, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const showToast = (message: string, subtitle: string) => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-24 right-4 z-50 px-6 py-4 rounded-lg bg-card border border-primary/30 shadow-2xl animate-in slide-in-from-top-5';
    toast.innerHTML = `<div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div><span class="font-semibold">${message}</span></div><div class="text-sm text-muted-foreground mt-1">${subtitle}</div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-silver rounded-lg blur-sm opacity-50"></div>
                <img src={APP_LOGO} alt="ALX Logo" className="relative h-12 w-auto bg-gradient-silver rounded-lg p-2 shadow-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gold">Nasr Kabeer Aluminum</span>
                <span className="text-xs text-muted-foreground">النصر الكبير للألمنيوم</span>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">{t("nav.about")}</a>
              <a href="#phases" className="text-sm hover:text-primary transition-colors">{t("nav.phases")}</a>
              <a href="#products" className="text-sm hover:text-primary transition-colors">{t("nav.products")}</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">{t("nav.contact")}</a>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 font-bold"
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              >
                <span className="text-base font-black text-gold">E/ع</span>
                {language === "en" ? "العربية" : "English"}
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-border">
            <div className="container py-4 space-y-3">
              <a 
                href="#about" 
                className="block py-2 text-sm hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t("nav.about")}
              </a>
              <a 
                href="#phases" 
                className="block py-2 text-sm hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t("nav.phases")}
              </a>
              <a 
                href="#products" 
                className="block py-2 text-sm hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t("nav.products")}
              </a>
              <a 
                href="#contact" 
                className="block py-2 text-sm hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {t("nav.contact")}
              </a>
              <div className="pt-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 font-bold justify-center"
                  onClick={() => {
                    setLanguage(language === "en" ? "ar" : "en");
                    closeMobileMenu();
                  }}
                >
                  <span className="text-base font-black text-gold">E/ع</span>
                  {language === "en" ? "العربية" : "English"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0">
          {/* YouTube video embed as background */}
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ width: '100vw', height: '100vh', transform: 'scale(1.5)' }}
            src="https://www.youtube.com/embed/P8BWQBP4Vhk?autoplay=1&mute=1&loop=1&playlist=P8BWQBP4Vhk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Aluminum Extrusion Process"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* Fallback background image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/factory-1.jpg)' }}></div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 z-10"></div>
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 z-10"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-semibold text-primary">{t("hero.comingSoon")}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                {t("hero.title")} <span className="text-metallic">{t("hero.profile")}</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t("hero.description")} <span className="text-primary font-bold">{t("hero.capacity")}</span>.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shine-effect bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => {
                  showToast(t("toast.comingSoon"), t("toast.launch"));
                }}>
                  {t("hero.learnMore")}
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" onClick={() => {
                  showToast(t("toast.comingSoon"), t("toast.products"));
                }}>
                  {t("hero.viewProducts")}
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-gold">200K</div>
                  <div className="text-sm text-muted-foreground">{t("hero.stat1")}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-gold">3</div>
                  <div className="text-sm text-muted-foreground">{t("hero.stat2")}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-gold">40%</div>
                  <div className="text-sm text-muted-foreground">{t("hero.stat3")}</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative rounded-2xl shadow-2xl border border-primary/20 overflow-hidden bg-card/50 backdrop-blur-sm p-8">
                <div className="aspect-video rounded-lg overflow-hidden bg-secondary/50">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ELgtjeJyFw8?autoplay=1&mute=1&loop=1&playlist=ELgtjeJyFw8&controls=1&modestbranding=1"
                    title="Aluminum Extrusion Manufacturing"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="glass rounded-lg p-4">
                    <div className="text-2xl font-bold text-gold">ISO 9001</div>
                    <div className="text-xs text-muted-foreground mt-1">{t("hero.certified")}</div>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <div className="text-2xl font-bold text-gold">6xxx</div>
                    <div className="text-xs text-muted-foreground mt-1">{t("hero.alloySeries")}</div>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <div className="text-2xl font-bold text-gold">24/7</div>
                    <div className="text-xs text-muted-foreground mt-1">{t("hero.production")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/50 diagonal-top">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-black" style={{paddingTop: '100px'}}>
              {t("about.title1")} <span className="text-gold">{t("about.title2")}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-primary/20 shine-effect hover:border-primary/40 transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t("about.quality.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about.quality.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 shine-effect hover:border-primary/40 transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t("about.growth.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about.growth.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20 shine-effect hover:border-primary/40 transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t("about.export.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about.export.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Phases Section */}
      <section id="phases" className="py-24">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              {t("phases.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("phases.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <Card className="bg-card border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-10 space-y-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <span className="text-sm font-bold text-primary">Phase 1</span>
                    </div>
                    <h3 className="text-3xl font-black">{t("phase1.title")}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Factory className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-lg">Capacity: 30,000–50,000 tons/year</div>
                          <div className="text-muted-foreground">Flexible production based on specifications</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold">{t("phase1.products")}</div>
                          <ul className="text-muted-foreground space-y-1 mt-1">
                            <li>• Curtain wall profiles for skyscrapers</li>
                            <li>• Thermal break window & door systems</li>
                            <li>• Decorative façade elements</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">{t("phase1.alloys")}</div>
                        <div className="text-sm text-muted-foreground">{t("phase1.standards")}</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[400px]">
                    <img 
                      src="/building-1.webp" 
                      alt="Architectural Aluminum" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="bg-card border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-full min-h-[400px] order-2 lg:order-1">
                    <img 
                      src="/industrial-production-new.jpg" 
                      alt="Industrial Aluminum" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-10 space-y-6 order-1 lg:order-2">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <span className="text-sm font-bold text-primary">{t("phase2.badge")}</span>
                    </div>
                    <h3 className="text-3xl font-black">{t("phase2.title")}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Factory className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-lg">{t("phase2.capacity")}</div>
                          <div className="text-muted-foreground">{t("phase2.capacityDesc")}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold">{t("phase1.products")}</div>
                          <ul className="text-muted-foreground space-y-1 mt-1">
                            <li>{t("phase2.product1")}</li>
                            <li>{t("phase2.product2")}</li>
                            <li>{t("phase2.product3")}</li>
                            <li>{t("phase2.product4")}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">{t("phase2.alloys")}</div>
                        <div className="text-sm text-muted-foreground">{t("phase2.certification")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="bg-card border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-10 space-y-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <span className="text-sm font-bold text-primary">{t("phase3.badge")}</span>
                    </div>
                    <h3 className="text-3xl font-black">{t("phase3.title")}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Factory className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-lg">{t("phase3.capacity")}</div>
                          <div className="text-muted-foreground">{t("phase3.capacityDesc")}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold">{t("phase1.products")}</div>
                          <ul className="text-muted-foreground space-y-1 mt-1">
                            <li>{t("phase3.product1")}</li>
                            <li>{t("phase3.product2")}</li>
                            <li>{t("phase3.product3")}</li>
                            <li>{t("phase3.product4")}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">{t("phase3.alloys")}</div>
                        <div className="text-sm text-muted-foreground">{t("phase3.certs")}</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[400px]">
                    <img 
                      src="/ev-production-new.jpg" 
                      alt="Transportation Aluminum" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-24 bg-secondary/50 diagonal-top">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              {t("products.title1")} <span className="text-gold">{t("products.title2")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20 overflow-hidden group hover:border-primary/40 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/curtain-wall-premium.jpg" 
                  alt="Curtain Wall Systems" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{t("product.curtainWall.title")}</h3>
                <p className="text-muted-foreground">
                  Premium façade solutions for skyscrapers and commercial buildings with superior structural integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 overflow-hidden group hover:border-primary/40 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/profiles-1.jpg" 
                  alt="Industrial Profiles" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{t("product.industrial.title")}</h3>
                <p className="text-muted-foreground">
                  {t("product.industrial.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 overflow-hidden group hover:border-primary/40 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/solar-frame.jpg" 
                  alt="Solar Mounting" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{t("product.solar.title")}</h3>
                <p className="text-muted-foreground">
                  {t("product.solar.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 overflow-hidden group hover:border-primary/40 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/thermal-break.jpg" 
                  alt="Window Systems" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{t("product.window.title")}</h3>
                <p className="text-muted-foreground">
                  {t("product.window.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 overflow-hidden group hover:border-primary/40 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/ev-battery-frame.jpg" 
                  alt="Transportation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{t("product.transport.title")}</h3>
                <p className="text-muted-foreground">
                  {t("product.transport.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 overflow-hidden group hover:border-primary/40 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/precision-parts.webp" 
                  alt="Precision Equipment" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{t("product.precision.title")}</h3>
                <p className="text-muted-foreground">
                  {t("product.precision.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-black">
                {t("contact.title1")} <span className="text-gold">{t("contact.title2")}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                {t("contact.subtitle")}
              </p>
              <div className="text-lg text-primary font-semibold mt-2">
                {t("contact.email")}
              </div>
            </div>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Location</div>
                        <div className="text-muted-foreground">
                          {t("contact.address1")}<br />
                          {t("contact.address2")}<br />
                          {t("contact.address3")}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Company Information</div>
                        <div className="text-muted-foreground space-y-1">
                          <div>{t("contact.cr")}</div>
                          <div>{t("contact.unified")}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Vision 2030</div>
                        <div className="text-muted-foreground">
                          {t("contact.visionDesc")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-secondary/50 border border-primary/20">
                      <h3 className="text-xl font-bold mb-4">{t("contact.status")}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">{t("contact.phase1")}</span>
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold whitespace-nowrap">
                            {t("contact.phase1Status")}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">{t("contact.phase2")}</span>
                          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-semibold">
                            Scheduled
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">{t("contact.phase3")}</span>
                          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-semibold">
                            Scheduled
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-gradient-gold text-background">
                      <div className="text-3xl font-black mb-2" style={{color: '#f0c850'}}>200,000</div>
                      <div className="text-sm font-semibold opacity-90" style={{color: '#f0c850'}}>
                        {t("contact.totalCapacity")}
                      </div>
                      <div className="text-xs opacity-75 mt-1" style={{color: '#f0c850'}}>
                        {t("contact.phaseCompletion")}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt="ALX Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-gold">{t("footer.company")}</span>
                <span className="text-xs text-muted-foreground">شركة النصر الكبير للألمنيوم</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <div>{t("contact.address3")}</div>
              <div className="mt-1">Supporting Vision 2030</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 {t("footer.company")} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
