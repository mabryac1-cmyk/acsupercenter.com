const tiers = [
  {
    name: "Value Series",
    seer: "Up to 14 SEER2",
    color: "bg-slate-50 border-slate-200",
    accentColor: "text-slate-700",
    description:
      "Trane's entry-level series delivers the reliability and build quality the brand is known for — at the most accessible price point. A major upgrade from any aging system.",
    models: ["RunTru by Trane"],
    bestFor: "Budget-conscious homeowners who want Trane® quality at the guaranteed lowest cost",
  },
  {
    name: "Performance Series",
    seer: "Up to 15 SEER2",
    color: "bg-brand-red/5 border-brand-red/20",
    accentColor: "text-brand-red",
    description:
      "The sweet spot of efficiency and value. Delivers meaningful energy savings, quieter operation, and lower monthly utility bills — outstanding Trane performance at a price that will make you say WOW.",
    models: ["Trane XR15"],
    bestFor: "Homeowners who want higher efficiency and a noticeably more comfortable home",
    popular: true,
  },
  {
    name: "Comfort Series",
    seer: "Up to 18 SEER2",
    color: "bg-navy-600/5 border-navy-600/20",
    accentColor: "text-navy-600",
    description:
      "Trane's premium TruComfort line. Variable-speed technology delivers whisper-quiet operation, precise temperature control, and the absolute lowest energy bills — the pinnacle of home comfort.",
    models: ["TruComfort 18"],
    bestFor: "Homeowners who want the best of the best — maximum efficiency, maximum comfort",
  },
];

export default function TraneProducts() {
  return (
    <section id="trane-systems" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-600/10 text-navy-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Authorized Trane® Dealer
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-900 mb-5">
            Trane System Lines We Install
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trane® is one of the most trusted names in home comfort. We install{" "}
            <strong>all Trane product lines</strong> — from the reliable Value Series
            to the premium Comfort Series. Not sure which is right for you? Just call
            — we'll help you choose the best system for your home and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 p-8 ${tier.color} ${
                tier.popular ? "shadow-xl" : "shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
                  Most Popular
                </div>
              )}

              <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.accentColor}`}>
                {tier.seer}
              </div>
              <h3 className="text-2xl font-black text-navy-900 mb-3">{tier.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{tier.description}</p>

              {/* Models */}
              <div className="mb-5">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Featured Model
                </div>
                <div className="flex flex-wrap gap-2">
                  {tier.models.map((model) => (
                    <span
                      key={model}
                      className="bg-white border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Best for */}
              <div className="bg-white/70 rounded-xl px-4 py-3 border border-white">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                  Best For
                </div>
                <p className="text-gray-700 text-sm">{tier.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer notes */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-2 text-sm">
            All systems include professional installation, startup, and testing.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Not sure which system is right for you?{" "}
            <a href="tel:8322213688" className="text-brand-red font-semibold hover:underline">
              Call us — we'll help you decide.
            </a>
          </p>

          {/* Pricing & models disclaimer */}
          <div className="border-t border-gray-100 pt-6 max-w-3xl mx-auto">
            <p className="text-gray-400 text-xs leading-relaxed">
              <span className="font-semibold text-gray-500">Please Note:</span>{" "}
              Models, prices, and availability are subject to change without notice.
              Advertised pricing may only be locked in on the date your installation is
              scheduled. Trane® manufactures a wide range of additional models beyond
              those featured here — we are happy to provide a custom quote on any
              Trane system upon request. Contact us to discuss your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
