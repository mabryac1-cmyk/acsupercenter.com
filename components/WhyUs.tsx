const reasons = [
  {
    title: "Dramatically Lower Overhead",
    description:
      "We focus exclusively on new system installations — no service trucks, no dispatch teams, no service call overhead. That savings goes directly into your pocket through lower prices.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Authorized Trane Dealer",
    description:
      "We are an official, authorized Trane dealer. Every system we install comes with the full Trane manufacturer warranty and is sourced directly through authorized Trane distribution channels.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    description:
      "We are fully licensed by the State of Texas (License #TACLB12058E) and carry full liability insurance. You're protected every step of the way.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "No In-Home Sales Visits Required",
    description:
      "Traditional HVAC companies send salespeople to your home for 90-minute presentations. We skip all that. Snap a photo of your unit label, send it to us, and we call you with a real price — fast.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Easy to Work With",
    description:
      "We're flexible, straightforward, and genuinely easy to work with. No pressure, no confusing quotes, no hidden fees. Just honest people selling quality Trane systems at the lowest prices in Houston.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "39 Years of Houston HVAC Experience",
    description:
      "Behind AC SuperCenter is nearly four decades of HVAC expertise serving the Greater Houston area. We know these systems, this climate, and what it takes to install them right — the first time.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-sky-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            The AC SuperCenter Difference
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-900 mb-5">
            Why Homeowners Choose Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We've built a better way to buy a new AC system — one that puts the
            homeowner first and eliminates every unnecessary cost and hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-navy-900 text-white mb-5">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Novel way callout */}
        <div className="mt-16 bg-sky-700 rounded-3xl p-10 lg:p-14 text-center">
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-5 max-w-3xl mx-auto text-balance">
            Introducing a New Way to Replace Your Home AC System
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            At ACSuperCenter.com, we offer a novel and entirely new way to buy and
            replace your old, worn-out AC and heating system — one that will save you
            potentially thousands of dollars compared to traditional AC &amp; heating
            installations. The future of home comfort shopping is here.
          </p>
        </div>
      </div>
    </section>
  );
}
