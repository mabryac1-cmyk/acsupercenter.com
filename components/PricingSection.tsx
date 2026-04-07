import { systems } from "@/lib/systems";

const PHONE_HREF = "tel:8322213688";
const PHONE = "832-221-3688";

function Starburst({ label }: { label: string }) {
  // 16-point starburst using alternating inner/outer radius
  const points = Array.from({ length: 32 }, (_, i) => {
    const angle = (i * Math.PI) / 16 - Math.PI / 2;
    const radius = i % 2 === 0 ? 46 : 32;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");

  return (
    <div className="relative flex items-center justify-center w-28 h-28 mx-auto -mt-6 -mb-2">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points={points} fill="#C8102E" />
      </svg>
      <div className="relative z-10 text-center text-white leading-none">
        <div className="text-3xl font-black">WOW!</div>
        <div className="text-[10px] font-bold uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-sky-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Real Prices. No Runaround.
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-900 mb-5">
            Our Trane System Prices
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We list our prices because we're confident they're the lowest in Houston.
            No hidden fees. No bait-and-switch. No surprises.
          </p>
        </div>

        {/* Complete system callout */}
        <div className="bg-white border-2 border-brand-red/20 rounded-2xl p-6 lg:p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-brand-red text-white px-5 py-2 rounded-full text-sm font-bold mb-3">
              ⭐ What Every Price Includes
            </div>
            <h3 className="text-xl font-black text-navy-900">
              Complete System — Air Conditioning <span className="text-brand-red">+</span> Heater Included
            </h3>
            <p className="text-gray-600 text-sm mt-2 max-w-2xl mx-auto">
              Every price listed is for a <strong>complete replacement system</strong> — includes the
              outdoor AC/cooling unit, coil, <em>and</em> the indoor heater (gas furnace or electric air handler).
              Full year-round comfort at one guaranteed price. No surprises. No add-ons.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {[
              "New Outdoor AC Unit & Coil",
              "New Gas Furnace or Electric Air Handler",
              "Professional Installation",
              "Basic Digital Thermostat",
              "Emergency Drain Pan",
              "Safety Float Switch",
            ].map((item) => (
              <div key={item} className="bg-sky-50 rounded-xl px-3 py-3 text-center">
                <div className="text-brand-red font-black text-lg mb-1">✓</div>
                <div className="text-navy-900 text-xs font-semibold leading-snug">{item}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row gap-3 justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-sky-600 font-bold">→</span>
              <span><strong>Prefer a heat pump?</strong> We offer those at an upcharge — call for a custom quote.</span>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div className="flex items-center gap-2">
              <span className="text-sky-600 font-bold">→</span>
              <span><strong>Need cooling only?</strong> We can quote a reduced-price AC-only system too.</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {systems.map((system) => (
            <div
              key={system.tier}
              className={`relative rounded-2xl overflow-visible bg-white shadow-lg flex flex-col ${
                system.popular
                  ? "ring-2 ring-brand-red shadow-2xl shadow-brand-red/10 scale-105 z-10"
                  : ""
              }`}
            >
              {system.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
                  Most Popular
                </div>
              )}

              {/* Starburst */}
              <div className="pt-8 px-6">
                <Starburst label={system.badge} />
              </div>

              {/* Card body */}
              <div className="px-6 pb-8 flex flex-col flex-1">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-navy-900 mb-0.5">
                    {system.tier} Series
                  </h3>
                  <p className="text-brand-red text-sm font-semibold mb-1">{system.subtitle}</p>
                  <p className="text-gray-600 text-xs mb-3">{system.tagline}</p>
                  <div className="inline-block bg-navy-50 text-navy-600 text-xs font-bold px-3 py-1 rounded-full border border-navy-100">
                    {system.seer}
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6 bg-navy-900 rounded-xl py-5 px-4">
                  <div className="text-sky-200 text-xs font-semibold uppercase tracking-wider mb-1">
                    Complete System — Fully Installed
                  </div>
                  <div className="text-4xl font-black text-white mb-1">
                    {system.price}
                  </div>
                  <div className="text-sky-300 text-xs font-semibold mb-1">
                    {system.priceNote}
                  </div>
                  <div className="text-brand-red text-xs font-semibold">
                    Guaranteed Lowest in Greater Houston
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {system.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-red mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={PHONE_HREF}
                  className={`block text-center font-bold py-3.5 rounded-xl transition-colors text-sm ${
                    system.popular
                      ? "bg-brand-red hover:bg-brand-red-dark text-white"
                      : "bg-navy-900 hover:bg-navy-800 text-white"
                  }`}
                >
                  Call to Lock In This Price
                  <div className="text-xs font-normal opacity-80 mt-0.5">{PHONE}</div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-2xl shadow-lg">
            <svg className="w-8 h-8 text-brand-red shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <div className="font-black text-lg">Lowest Price Guarantee</div>
              <div className="text-sky-100 text-sm">Find a lower installed price on the same Trane® system? We'll beat it.</div>
            </div>
          </div>
        </div>

        {/* Financing + Payment banner */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-4">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-xl shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-black text-emerald-900 text-sm leading-snug">100% Financing Available*</div>
              <div className="text-emerald-700 text-xs mt-0.5">With approved credit</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-sky-50 border border-sky-200 rounded-2xl px-6 py-4">
            <div className="flex items-center justify-center w-12 h-12 bg-sky-600 rounded-xl shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <div className="font-black text-sky-900 text-sm leading-snug">All Major Credit Cards Accepted</div>
              <div className="text-sky-700 text-xs mt-0.5">Visa, Mastercard, Amex, Discover</div>
            </div>
          </div>
        </div>

        {/* Accessories note */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl px-8 py-5 text-center max-w-2xl mx-auto">
          <p className="text-blue-800 text-sm leading-relaxed">
            <span className="font-bold">Looking for accessories or upgrades?</span>{" "}
            We're happy to quote air purifiers, UV lights, smart thermostats, upgraded filtration,
            and other add-ons upon request. Just ask!
          </p>
          <a
            href={PHONE_HREF}
            className="inline-block mt-3 text-brand-red font-semibold text-sm hover:underline"
          >
            Call {PHONE} to discuss accessories →
          </a>
        </div>

        {/* Installation disclosure */}
        <div className="mt-8 border-t border-gray-200 pt-6 max-w-4xl mx-auto">
          <p className="text-gray-600 text-xs leading-relaxed text-center">
            <span className="font-semibold text-gray-700">Installation &amp; Pricing Disclosure:</span>{" "}
            New equipment shall be attached to existing plenum, ductwork, refrigerant lines, electrical,
            gas lines, drain lines, and flue pipe as applicable. All new installations also include a
            basic digital thermostat, new emergency drain pan, and safety float switch, as applicable.
            Any additional items may incur an additional charge. Any accessories requested shall be
            quoted as an additional charge. Prices include all applicable discounts, special offers,
            coupons, and rebates. No additional price reductions are permitted. Advertised prices may be
            financed at standard rates in effect at the time of credit application. Prices cannot be
            combined with any special or promotional financing offers. *100% financing available with
            approved credit through participating lenders; standard rates apply. Financing terms are
            subject to change without notice. Trane® is a registered trademark of Trane Technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
