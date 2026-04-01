export interface TraneSystem {
  tier: "Value" | "Performance" | "Comfort";
  tagline: string;
  seer: string;
  price: string;
  highlights: string[];
  badge: string;
  popular?: boolean;
}

export const systems: TraneSystem[] = [
  {
    tier: "Value",
    tagline: "Reliable Comfort at an Unbeatable Price",
    seer: "Up to 16 SEER2",
    price: "Call for WOW Price",
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
    tagline: "More Efficiency. More Savings. More Comfort.",
    seer: "Up to 18 SEER2",
    price: "Call for WOW Price",
    badge: "Most Popular",
    popular: true,
    highlights: [
      "Higher efficiency = lower monthly bills",
      "Two-stage operation for even temperatures",
      "Quieter operation than standard systems",
      "Full manufacturer warranty",
      "Professional installation included",
    ],
  },
  {
    tier: "Comfort",
    tagline: "The Ultimate in Home Comfort & Efficiency",
    seer: "Up to 22 SEER2",
    price: "Call for WOW Price",
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
