import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Trane AC Installation Conroe & The Woodlands TX | Lowest Price Guaranteed | AC SuperCenter",
    template: "%s | AC SuperCenter",
  },
  description:
    "AC SuperCenter installs complete Trane AC & heating systems in Conroe, The Woodlands & across 18 Greater Houston cities at the guaranteed lowest price. Available 24/7 — text or call anytime. Authorized Trane dealer. Starting at $11,995 fully installed. Call or text 832-221-3688.",
  keywords: [
    "Trane AC installation Conroe TX",
    "Trane AC installation The Woodlands TX",
    "AC replacement Conroe TX",
    "AC replacement The Woodlands TX",
    "new AC system Conroe TX",
    "new AC system The Woodlands TX",
    "HVAC replacement Conroe TX",
    "HVAC installation The Woodlands TX",
    "air conditioning installation Conroe TX",
    "air conditioning replacement The Woodlands TX",
    "Trane dealer Conroe TX",
    "Trane dealer The Woodlands TX",
    "Trane AC installation Houston",
    "AC replacement Houston TX",
    "new AC system Houston TX",
    "HVAC replacement Houston TX",
    "lowest price AC installation Houston",
    "guaranteed lowest Trane prices Houston",
    "authorized Trane dealer Greater Houston",
    "heating system replacement Houston TX",
    "Trane heat pump installation Houston",
    "15.2 SEER2 AC installation Houston",
    "16 SEER2 AC Houston TX",
    "18 SEER2 Trane system Houston",
    "RunTru Trane installation Houston",
    "Trane XR15 installation Houston",
    "Trane TruComfort installation Houston",
    "Trane dealer Katy TX",
    "Trane dealer Cypress TX",
    "Trane dealer Spring TX",
  ],
  authors: [{ name: "AC SuperCenter" }],
  creator: "AC SuperCenter",
  metadataBase: new URL("https://www.acsupercenter.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.acsupercenter.com",
    siteName: "AC SuperCenter",
    title: "Trane AC Installation Conroe & The Woodlands TX | Lowest Price Guaranteed | AC SuperCenter",
    description:
      "Complete Trane AC & heating system installations in Conroe, The Woodlands & across 18 Greater Houston cities. Guaranteed lowest price. Authorized Trane dealer. Starting at $11,995 fully installed. Call 832-221-3688.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trane AC Installation Conroe & The Woodlands TX | Lowest Price Guaranteed | AC SuperCenter",
    description:
      "Guaranteed lowest Trane AC installation prices in Greater Houston. Complete systems starting at $9,998 fully installed. Authorized Trane dealer. Call 832-221-3688.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.acsupercenter.com",
  },
  verification: {
    google: "vj2hpXme4AjczS5Kts06FYvLHnF_Kvc5nSc_T5J3XOo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
