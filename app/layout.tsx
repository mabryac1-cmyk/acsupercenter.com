import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AC SuperCenter | Guaranteed Lowest Trane Prices in Greater Houston",
    template: "%s | AC SuperCenter",
  },
  description:
    "Stop overpaying for a new AC system. AC SuperCenter offers guaranteed lowest Trane prices in Greater Houston — The Woodlands, Conroe, Katy, Sugar Land & all surrounding areas. Authorized Trane dealer. Licensed & insured. Call 832-221-3688.",
  keywords: [
    "Trane AC installation Houston",
    "new AC system Houston TX",
    "Trane dealer The Woodlands",
    "Trane dealer Conroe TX",
    "lowest price AC installation Houston",
    "replace AC system Houston",
    "authorized Trane dealer Greater Houston",
    "new air conditioning system Houston",
    "HVAC installation Houston TX",
    "Trane heat pump installation Houston",
  ],
  authors: [{ name: "AC SuperCenter" }],
  creator: "AC SuperCenter",
  metadataBase: new URL("https://www.acsupercenter.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.acsupercenter.com",
    siteName: "AC SuperCenter",
    title: "AC SuperCenter | Guaranteed Lowest Trane Prices in Greater Houston",
    description:
      "A revolutionary new way to replace your home AC system and save thousands. Authorized Trane dealer serving all of Greater Houston. Call 832-221-3688.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC SuperCenter | Guaranteed Lowest Trane Prices in Greater Houston",
    description:
      "Stop overpaying. Guaranteed lowest Trane AC prices in Greater Houston. Call 832-221-3688.",
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
