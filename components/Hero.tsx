import Link from "next/link";

const PHONE = "832-221-3688";
const PHONE_HREF = "tel:8322213688";

export default function Hero() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #C8102E 0%, transparent 50%), radial-gradient(circle at 75% 20%, #1B3A6B 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 45%, rgba(200,16,46,0.08) 50%, transparent 55%)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">

          {/* Intro badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Introducing a Revolutionary New Way to Replace Your AC System
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">
            Stop Overpaying for a{" "}
            <span className="text-brand-red">New Trane</span>{" "}
            AC System.
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl font-bold text-gray-200 mb-6">
            Guaranteed Lowest Prices in Greater Houston — Period.
          </p>

          {/* Body */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-10">
            At ACSuperCenter.com, we've completely reimagined how you replace your
            home's AC system. <strong className="text-gray-200">No salespeople. No in-home sales visits. No pressure.
            No runaround.</strong> Just real prices, a quick phone call, and a professional
            Trane installation — saving you potentially thousands over traditional
            HVAC companies. Our dramatically reduced overhead means we pass the
            savings directly to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-brand-red/25"
            >
              See Our WOW Prices
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: "✓", label: "Authorized Trane Dealer" },
              { icon: "✓", label: "License #TACLB12058E" },
              { icon: "✓", label: "Licensed & Insured" },
              { icon: "✓", label: "All of Greater Houston" },
              { icon: "✓", label: "Lowest Price Guaranteed" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg"
              >
                <span className="text-brand-red font-bold text-sm">{badge.icon}</span>
                <span className="text-gray-300 text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 60C480 60 240 40 0 0L0 60Z" fill="#F7F9FC" />
        </svg>
      </div>
    </section>
  );
}
