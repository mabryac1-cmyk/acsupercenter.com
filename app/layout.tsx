import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Trane AC Installation Houston TX | Lowest Price Guaranteed | AC SuperCenter",
    template: "%s | AC SuperCenter",
  },
  description:
    "AC SuperCenter installs complete Trane AC & heating systems across 18 Greater Houston cities at the guaranteed lowest price. Authorized Trane dealer. No in-home visit needed. Starting at $9,998 fully installed. Call 832-221-3688.",
  keywords: [
    "Trane AC installation Houston",
    "AC replacement Houston TX",
    "new AC system Houston TX",
    "air conditioning replacement Houston",
    "air conditioner replacement Houston Texas",
    "HVAC replacement Houston TX",
    "HVAC installation Houston TX",
    "new air conditioning system Houston",
    "air conditioning installation cost Houston",
    "AC replacement price Houston",
    "heating system replacement Houston TX",
    "new furnace installation Houston TX",
    "air handler replacement Houston",
    "Trane heat pump installation Houston",
    "replace AC and heater Houston",
    "lowest price AC installation Houston",
    "guaranteed lowest Trane prices Houston",
    "authorized Trane dealer Greater Houston",
    "Trane dealer The Woodlands",
    "Trane dealer Katy TX",
    "Trane dealer Sugar Land TX",
    "Trane dealer Conroe TX",
    "Trane dealer Pearland TX",
    "Trane dealer Cypress TX",
    "14 SEER2 AC installation Houston",
    "15 SEER2 AC Houston TX",
    "18 SEER2 Trane system Houston",
    "RunTru Trane installation Houston",
    "Trane XR15 installation Houston",
    "Trane TruComfort installation Houston",
  ],
  authors: [{ name: "AC SuperCenter" }],
  creator: "AC SuperCenter",
  metadataBase: new URL("https://www.acsupercenter.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.acsupercenter.com",
    siteName: "AC SuperCenter",
    title: "Trane AC Installation Houston TX | Lowest Price Guaranteed | AC SuperCenter",
    description:
      "Complete Trane AC & heating system installations across 18 Greater Houston cities. Guaranteed lowest price. Authorized Trane dealer. Starting at $9,998 fully installed. Call 832-221-3688.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trane AC Installation Houston TX | Lowest Price Guaranteed | AC SuperCenter",
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
