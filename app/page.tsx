import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import TraneProducts from "@/components/TraneProducts";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import Link from "next/link";

const PHONE_HREF = "tel:8322213688";
const PHONE = "832-221-3688";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PricingSection />
        <HowItWorks />
        <WhyUs />
        <TraneProducts />
        <ServiceAreas />

        {/* Final CTA section */}
        <section className="bg-brand-red py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Stop Overpaying?
            </h2>
            <p className="text-red-100 text-lg mb-8 leading-relaxed">
              Call us today and let us show you just how affordable a brand-new
              Trane system can be. Guaranteed lowest price in Greater Houston.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-brand-red font-black px-10 py-4 rounded-xl text-xl transition-colors shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors"
              >
                Get a Free Quote Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
