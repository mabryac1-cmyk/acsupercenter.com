import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { cities, getCityBySlug } from "@/lib/cities";

const PHONE = "832-221-3688";
const PHONE_HREF = "tel:8322213688";

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Trane AC Installation ${city.name} TX | Guaranteed Lowest Price`,
    description: `AC SuperCenter installs new Trane AC and heating systems in ${city.name}, TX at the guaranteed lowest price. Authorized Trane dealer. No in-home sales visit needed. Complete system fully installed. Call 832-221-3688 for a free quote.`,
    keywords: [
      `Trane AC installation ${city.name} TX`,
      `AC replacement ${city.name} TX`,
      `new AC system ${city.name}`,
      `replace AC system ${city.name} TX`,
      `air conditioning replacement ${city.name}`,
      `Trane dealer ${city.name} TX`,
      `HVAC installation ${city.name} TX`,
      `HVAC replacement ${city.name} TX`,
      `lowest price AC ${city.name}`,
      `air conditioning installation cost ${city.name}`,
      `new heating system ${city.name} TX`,
      `furnace replacement ${city.name} TX`,
      `air conditioner replacement price ${city.name}`,
      `Trane system price ${city.name}`,
    ],
    alternates: {
      canonical: `https://www.acsupercenter.com/areas/${slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "AC SuperCenter",
    "url": `https://www.acsupercenter.com/areas/${slug}`,
    "telephone": "+18322213688",
    "description": `AC SuperCenter installs new Trane AC and heating systems in ${city.name}, TX at the guaranteed lowest price. Authorized Trane dealer. Complete system fully installed.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4848 W Fork Blvd",
      "addressLocality": "Conroe",
      "addressRegion": "TX",
      "postalCode": "77304",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": "TX"
    },
    "hasCredential": "TACLB12058E",
    "brand": { "@type": "Brand", "name": "Trane" },
    "priceRange": "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 55%, #bae6fd 100%)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Serving {city.name}, TX
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-navy-900 mb-6 text-balance">
              Trane AC Installation in{" "}
              <span className="text-brand-red">{city.name}, TX</span> at the
              Guaranteed Lowest Price
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
              AC SuperCenter serves {city.name} — {city.description} — with
              guaranteed lowest Trane AC and heating system installations. As an
              authorized Trane dealer with nearly 40 years of Houston HVAC experience,
              we deliver unmatched quality at prices no competitor can touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-navy-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-sm"
              >
                See Our Prices
              </Link>
            </div>
          </div>
        </section>

        {/* Local geo content */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-navy-900 mb-3">
              Serving Homeowners Throughout {city.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">{city.geoNote}</p>
            <div className="flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="bg-sky-50 border border-sky-200 text-sky-800 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why AC SuperCenter in [city] */}
        <section className="bg-sky-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-black text-navy-900 mb-6">
                  Why {city.name} Homeowners Choose AC SuperCenter
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      title: "Guaranteed Lowest Trane Prices",
                      body: `We offer guaranteed lowest installed prices on Trane AC and heating systems in ${city.name} and all of Greater Houston. Find a lower price on the same system? We'll beat it.`,
                    },
                    {
                      title: "No Salespeople — No In-Home Sales Visit Required",
                      body: `Traditional ${city.name} HVAC companies send salespeople to your home for lengthy presentations before giving you a price. We skip all of that. Snap a photo of your unit label, text it to us, and we'll call you with a real price — fast.`,
                    },
                    {
                      title: "Authorized Trane Dealer",
                      body: `As an authorized Trane dealer serving ${city.name} and the Greater Houston area, every system we install is backed by the full Trane manufacturer warranty and sourced through official channels.`,
                    },
                    {
                      title: "Licensed & Insured — License #TACLB12058E",
                      body: `We are fully licensed by the State of Texas and carry complete liability insurance. ${city.name} homeowners can trust that every installation is done right, by the book, with full protection.`,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red flex items-center justify-center mt-1">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Authorized Trane Dealer", "TACLB12058E", "Licensed & Insured", "Serving " + city.name].map((b) => (
                    <span key={b} className="bg-navy-900 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-xl font-black text-navy-900 mb-1">
                  Get Your Free {city.name} Quote
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  We'll call you back with a guaranteed, no-games price.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Nearby cities */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy-900 mb-6">
              Also Serving These Greater Houston Communities
            </h2>
            <div className="flex flex-wrap gap-3">
              {cities
                .filter((c) => c.slug !== slug)
                .slice(0, 12)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas/${c.slug}`}
                    className="bg-gray-50 hover:bg-brand-red hover:text-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              <Link
                href="/#service-areas"
                className="bg-navy-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-navy-800 transition-colors"
              >
                View All Areas →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
