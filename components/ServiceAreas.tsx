import Link from "next/link";
import { cities } from "@/lib/cities";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-sky-700 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Greater Houston Metro Area
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            We Serve All of Greater Houston
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            As an install-only company, we're able to serve the entire Houston
            metropolitan area — from The Woodlands to Sugar Land, Katy to Baytown,
            and everywhere in between. If you're in the Greater Houston area, we
            can get you a new Trane system at the guaranteed lowest price.
          </p>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/areas/${city.slug}`}
              className="group bg-white/20 hover:bg-brand-red border border-white/30 hover:border-brand-red text-white hover:text-white px-3 py-3 rounded-xl text-sm font-medium text-center transition-all duration-200"
            >
              {city.name}
              <div className="text-xs text-gray-500 group-hover:text-red-200 mt-0.5">
                {city.county} Co.
              </div>
            </Link>
          ))}
        </div>

        {/* Houston map callout */}
        <div className="bg-white/15 border border-white/20 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-red/10 border border-brand-red/20 shrink-0">
            <svg className="w-10 h-10 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Don't See Your City Listed?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Houston is the 4th largest city in the United States and we serve the
              entire metro area. If you're in the Greater Houston area and don't see
              your specific city or neighborhood listed, just give us a call. There's
              a very good chance we can help you.
            </p>
          </div>
          <a
            href="tel:8322213688"
            className="shrink-0 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
