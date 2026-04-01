import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Get a free, no-pressure quote on a new Trane AC system for your Greater Houston home. Text us a photo of your unit label or fill out our form. Call 832-221-3688.",
  alternates: {
    canonical: "https://www.acsupercenter.com/contact",
  },
};

const PHONE = "832-221-3688";
const PHONE_HREF = "tel:8322213688";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 55%, #bae6fd 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-black text-navy-900 mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We'll call you back fast with a real, guaranteed price — no in-home visit
              required. Just send us your info and we'll take it from there.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-sky-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: info + contact options */}
              <div>
                <h2 className="text-2xl font-black text-navy-900 mb-6">
                  The Fastest Way to Get a Quote
                </h2>

                {/* Phone */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-red rounded-xl shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 mb-0.5">Call or Text</div>
                      <a href={PHONE_HREF} className="text-2xl font-black text-brand-red hover:underline">
                        {PHONE}
                      </a>
                      <p className="text-gray-500 text-sm mt-1">
                        Call to talk now, or text us a photo of your unit label for a fast, accurate quote.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photo tip */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-bold text-blue-900 mb-1">Pro Tip: Snap a Photo</div>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Take a quick photo of the model/serial number label on your existing
                        outdoor AC unit and indoor air handler. Text them to{" "}
                        <a href={PHONE_HREF} className="font-semibold underline">{PHONE}</a>{" "}
                        and we'll use that to give you a precise, accurate quote — often in the
                        same day.
                      </p>
                      <p className="text-blue-700 text-xs mt-2 font-medium">
                        The label is usually on the side of the outdoor unit and inside the panel of the indoor air handler.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-navy-900 mb-4">What Happens Next</h3>
                  <ul className="space-y-3">
                    {[
                      "We review your info and existing system details",
                      "We call you back with your exact, guaranteed price",
                      "You approve, we schedule — it's that simple",
                      "Our licensed team installs your new Trane system",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="flex items-center justify-center w-5 h-5 bg-brand-red text-white rounded-full text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-xl font-black text-navy-900 mb-2">
                  Send Us Your Info
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form below and we'll get back to you with a quote fast.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
