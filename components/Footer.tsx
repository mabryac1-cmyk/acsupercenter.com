import Link from "next/link";

const PHONE = "832-221-3688";
const PHONE_HREF = "tel:8322213688";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-white font-black text-2xl tracking-tight">
                AC <span className="text-brand-red">Super</span>Center
              </span>
              <span className="text-gray-500 text-xs font-medium tracking-widest uppercase mt-0.5">
                acsupercenter.com
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Introducing a new way to replace and purchase a new air conditioning
              system for your home — and save potentially thousands in the process.
              Authorized Trane dealer serving all of Greater Houston.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 mt-5 text-white font-bold text-lg hover:text-brand-red transition-colors"
            >
              <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Our Prices</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#trane-systems" className="hover:text-white transition-colors">Trane Systems</Link></li>
              <li><Link href="/#why-us" className="hover:text-white transition-colors">Why AC SuperCenter</Link></li>
              <li><Link href="/#service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Serving</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/areas/the-woodlands" className="hover:text-white transition-colors">The Woodlands</Link></li>
              <li><Link href="/areas/conroe" className="hover:text-white transition-colors">Conroe</Link></li>
              <li><Link href="/areas/katy" className="hover:text-white transition-colors">Katy</Link></li>
              <li><Link href="/areas/sugar-land" className="hover:text-white transition-colors">Sugar Land</Link></li>
              <li><Link href="/areas/cypress" className="hover:text-white transition-colors">Cypress</Link></li>
              <li><Link href="/#service-areas" className="hover:text-white transition-colors text-brand-red">
                + All Greater Houston →
              </Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} AC SuperCenter. All rights reserved. |{" "}
            <span className="text-gray-400">License #TACLB12058E</span> |{" "}
            <span className="text-gray-400">Licensed &amp; Insured</span>
          </p>
          <p className="text-center md:text-right">
            Authorized Trane Dealer | Serving Greater Houston, TX
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-sky-800 text-xs text-gray-600 text-center space-y-1">
          <p>acsupercenter.com is a marketing brand operated by Mabry&apos;s Air Conditioning &amp; Heating, Inc.</p>
          <p>
            Regulated by the Texas Department of Licensing and Regulation, P.O. Box 12157, Austin, Texas 78711 |{" "}
            1-800-803-9202 | 512-463-6599 |{" "}
            <a href="https://www.tdlr.texas.gov" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              www.tdlr.texas.gov
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
