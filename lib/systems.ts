export interface TraneSystem {
  tier: "Value" | "Performance" | "Comfort";
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
    seer: "Up to 14 SEER2",
    price: "$9,998",
    priceNote: "All Sizes — Fully Installed",
    badge: "Best Value",
    highlights: [
      "Entry-level Trane quality & reliability",
      "Significant upgrade over worn-out systems",
      "Single-stage cooling & heating",
      "Full manufacturer warranty",
      "Professional installation included",
    ],
  },
  {
    tier: "Performance",
    subtitle: "Trane XR15",
    tagline: "More Efficiency. More Savings. More Comfort.",
    seer: "Up to 15 SEER2",
    price: "$11,995",
    priceNote: "All Sizes — Fully Installed",
    badge: "Most Popular",
    popular: true,
    highlights: [
      "Higher efficiency = lower monthly bills",
      "Legendary Trane Quality & Endurance",
      "Quieter operation than standard systems",
      "Full manufacturer warranty",
      "Professional installation included",
    ],
  },
  {
    tier: "Comfort",
    subtitle: "Trane 18 TruComfort Series",
    tagline: "The Ultimate in Home Comfort & Efficiency",
    seer: "Up to 18 SEER2",
    price: "$15,399",
    priceNote: "All Sizes — Fully Installed",
    badge: "Top of the Line",
    highlights: [
      "Variable-speed technology for maximum comfort",
      "Whisper-quiet operation",
      "Highest energy savings — lowest utility bills",
      "Smart thermostat compatible",
      "Full manufacturer warranty",
      "Professional installation included",
    ],
  },
];
