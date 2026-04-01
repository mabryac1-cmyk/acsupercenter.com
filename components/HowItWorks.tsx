const PHONE_HREF = "tel:8322213688";
const PHONE = "832-221-3688";

const steps = [
  {
    number: "01",
    title: "Snap a Photo of Your Unit Label",
    description:
      "Find the model and serial number label on your existing outdoor condenser and indoor air handler. Snap a quick photo with your phone — it usually takes less than 2 minutes. This gives us everything we need for an accurate, no-surprise quote.",
    tip: "The label is typically on the side of the outdoor unit and inside the door panel of the indoor air handler.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Text or Email Us — We Call You Back Fast",
    description:
      "Text your photos to 832-221-3688 or send them through our contact form. We'll review your system info and call you back quickly with your exact, no-games price — fully installed, parts and labor included. No sales pressure, no games.",
    tip: "Not ready to send photos? No problem — just call us and we'll work with what you have. We're flexible and easy to work with.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Install Your New Trane System",
    description:
      "Once you approve the price, we schedule your installation at a time that works for you. Our licensed, experienced technicians handle everything — removal of the old system, installation of the new Trane unit, startup and testing. You'll have cool air the same day.",
    tip: "Most installations are completed in a single day. We leave your home clean and your new system running perfectly.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-600/10 text-navy-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Simple. Fast. Hassle-Free.
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-900 mb-5">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            We've stripped out everything that makes buying a new AC system painful.
            Here's how easy it is to get a new Trane system at the guaranteed lowest price.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-brand-red via-navy-600 to-brand-red opacity-20" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Step number + icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-900 text-white shrink-0 shadow-lg">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-red flex items-center justify-center text-white text-xs font-black">
                    {idx + 1}
                  </div>
                </div>
                <div className="text-5xl font-black text-gray-100 leading-none">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 flex-1">{step.description}</p>

              {/* Pro tip */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Pro Tip</div>
                <p className="text-blue-800 text-sm leading-snug">{step.tip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4 text-lg">Ready to get started? It couldn't be easier.</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-brand-red/25"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call {PHONE} Now
          </a>
        </div>
      </div>
    </section>
  );
}
