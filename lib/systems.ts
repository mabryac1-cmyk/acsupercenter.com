export interface TraneSystem {
  tier: "Value" | "Choice" | "Priority" | "Premier";
  subtitle: string;
  tagline: string;
  seer: string;
  price: string;
  priceNote: string;
  highlights: string[];
  badge: string;
  popular?: boolean;
}

export const systems: TraneSystem[] = [
  {
    tier: "Value",
    subtitle: "RunTru by Trane",
    tagline: "Reliable Comfort at an Unbeatable Price",
    seer: "Up to 15.2 SEER2",
    price: "$12,645",
    priceNote: "All Sizes — Fully Installed",
    badge: "Best Value",
    highlights: [
      "Complete system — AC unit & Coil + heater included",
      "Entry-level Trane quality & reliability",
      "Significant upgrade over worn-out systems",
      "Full manufacturer warranty",
      "Professional installation included",
    ],
  },
  {
    tier: "Choice",
    subtitle: "Trane 16 Single-Stage",
    tagline: "Trusted Trane Reliability for Everyday Comfort",
    seer: "Up to 16 SEER2",
    price: "$14,744",
    priceNote: "All Sizes — Fully Installed",
    badge: "Most Popular",
    popular: true,
    highlights: [
      "Complete system — AC unit & Coil + heater included",
      "Trusted Trane single-stage reliability",
      "A real step up from entry-level systems",
      "Full Trane manufacturer warranty",
      "Professional installation included",
    ],
  },
  {
    tier: "Priority",
    subtitle: "Trane 17 Multi-Speed",
    tagline: "More Efficiency. More Savings. More Comfort.",
    seer: "Up to 17 SEER2",
    price: "$15,859",
    priceNote: "All Sizes — Fully Installed",
    badge: "Smart Upgrade",
    highlights: [
      "Complete system — AC unit & Coil + heater included",
      "Multi-Two-Speed technology",
      "Higher efficiency = lower monthly bills",
      "Legendary Trane Quality & Endurance",
      "Quieter operation than single-stage systems",
      "Full manufacturer warranty",
      "Professional installation included",
    ],
  },
  {
    tier: "Premier",
    subtitle: "Trane 18 TruComfort Series",
    tagline: "The Ultimate in Home Comfort & Efficiency",
    seer: "Up to 18 SEER2",
    price: "$18,687",
    priceNote: "All Sizes — Fully Installed",
    badge: "Top of the Line",
    highlights: [
      "Complete system — AC unit & Coil + heater included",
      "Variable-speed technology for maximum comfort",
      "Whisper-quiet operation",
      "Highest energy savings — lowest utility bills",
      "Smart thermostat compatible",
      "Full manufacturer warranty",
      "Professional installation included",
    ],
  },
];
