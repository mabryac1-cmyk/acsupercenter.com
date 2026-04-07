import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import TraneProducts from "@/components/TraneProducts";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trane AC Installation Houston TX | Lowest Price Guaranteed | AC SuperCenter",
  description:
    "AC SuperCenter installs complete Trane AC & heating systems across 18 Greater Houston cities at the guaranteed lowest price. Authorized Trane dealer. No in-home visit needed. Starting at $9,998 fully installed. Call 832-221-3688.",
  alternates: {
    canonical: "https://www.acsupercenter.com",
  },
};

const schemaData = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "AC SuperCenter",
    "alternateName": "ACSuperCenter.com",
    "url": "https://www.acsupercenter.com",
    "telephone": "+18322213688",
    "description": "AC SuperCenter installs new Trane AC and heating systems across Greater Houston at the guaranteed lowest price. Authorized Trane dealer. Install-only specialist serving 18 cities.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4848 W Fork Blvd",
      "addressLocality": "Conroe",
      "addressRegion": "TX",
      "postalCode": "77304",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -95.5630
    },
    "areaServed": [
      "The Woodlands, TX", "Conroe, TX", "Katy, TX", "Sugar Land, TX",
      "Pearland, TX", "League City, TX", "Friendswood, TX", "Spring, TX",
      "Humble, TX", "Cypress, TX", "Tomball, TX", "Kingwood, TX",
      "Baytown, TX", "Pasadena, TX", "Missouri City, TX", "Stafford, TX",
      "Rosenberg, TX", "Richmond, TX"
    ],
    "priceRange": "$$",
    "brand": { "@type": "Brand", "name": "Trane" },
    "hasCredential": "TACLB12058E",
    "knowsAbout": [
      "Trane AC installation", "HVAC replacement", "air conditioning installation",
      "heating system replacement", "new AC system Houston"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ]
  },
  offers: {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Complete Trane HVAC System — Fully Installed",
    "description": "Complete Trane AC and heating system installation. Includes outdoor AC unit & coil, indoor heater (gas furnace or electric air handler), professional installation, thermostat, drain pan, and float switch. All sizes — one price.",
    "lowPrice": "9998",
    "highPrice": "16995",
    "priceCurrency": "USD",
    "offerCount": "3",
    "seller": { "@type": "Organization", "name": "AC SuperCenter" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Value Series — RunTru by Trane (Up to 14 SEER2)",
        "description": "Complete system — AC unit & Coil + heater included. Fully installed, all sizes.",
        "price": "9998",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": "Greater Houston, TX",
        "seller": { "@type": "Organization", "name": "AC SuperCenter" }
      },
      {
        "@type": "Offer",
        "name": "Performance Series — Trane XR15 (Up to 15 SEER2)",
        "description": "Complete system — AC unit & Coil + heater included. Fully installed, all sizes.",
        "price": "12995",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": "Greater Houston, TX",
        "seller": { "@type": "Organization", "name": "AC SuperCenter" }
      },
      {
        "@type": "Offer",
        "name": "Comfort Series — Trane 18 TruComfort Series (Up to 18 SEER2)",
        "description": "Complete system — AC unit & Coil + heater included. Fully installed, all sizes.",
        "price": "16995",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": "Greater Houston, TX",
        "seller": { "@type": "Organization", "name": "AC SuperCenter" }
      }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a new Trane AC system cost in Houston?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AC SuperCenter offers complete Trane system installations starting at $9,998 for the Value Series (RunTru by Trane, up to 14 SEER2), $12,995 for the Performance Series (Trane XR15, up to 15 SEER2), and $16,995 for the Comfort Series (Trane 18 TruComfort, up to 18 SEER2). All prices are for complete systems — outdoor AC unit & coil plus indoor heater — fully installed. All sizes at one price."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the AC SuperCenter installation price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every installation includes the complete system: new outdoor AC unit and coil, indoor heater (gas furnace or electric air handler), professional installation, basic digital thermostat, emergency drain pan, and safety float switch. No hidden fees. No surprise add-ons."
        }
      },
      {
        "@type": "Question",
        "name": "What cities in Houston does AC SuperCenter serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AC SuperCenter serves all of Greater Houston including The Woodlands, Conroe, Katy, Sugar Land, Pearland, League City, Friendswood, Spring, Humble, Cypress, Tomball, Kingwood, Baytown, Pasadena, Missouri City, Stafford, Rosenberg, and Richmond, TX."
        }
      },
      {
        "@type": "Question",
        "name": "Is AC SuperCenter an authorized Trane dealer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AC SuperCenter is an authorized Trane dealer. Every system we install is sourced through official Trane distribution channels and backed by the full Trane manufacturer warranty. We are licensed by the State of Texas (License #TACLB12058E) and fully insured."
        }
      },
      {
        "@type": "Question",
        "name": "Does AC SuperCenter offer financing on new Trane systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. 100% financing is available with approved credit through participating lenders at standard rates. We also accept all major credit cards including Visa, Mastercard, American Express, and Discover."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a salesperson to visit my home before getting a price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. AC SuperCenter does not require an in-home sales visit. Simply take a photo of your existing unit's model and serial number label and text it to 832-221-3688. We will call you back quickly with your exact, guaranteed price — fully installed, no pressure."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a Trane AC installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most complete Trane system installations are finished in a single day. Our licensed technicians handle everything — removal of the old system, installation of the new Trane unit, startup, and testing. You will have cool air the same day."
        }
      },
      {
        "@type": "Question",
        "name": "What is AC SuperCenter's Lowest Price Guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AC SuperCenter guarantees the lowest installed price on Trane systems in Greater Houston. If you find a lower installed price on the same Trane system from another licensed dealer, we will beat it."
        }
      }
    ]
  }
};

const PHONE_HREF = "tel:8322213688";
const PHONE = "832-221-3688";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.offers) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }}
      />
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
