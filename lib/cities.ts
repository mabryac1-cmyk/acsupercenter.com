export interface City {
  name: string;
  slug: string;
  county: string;
  description: string;
}

export const cities: City[] = [
  { name: "The Woodlands", slug: "the-woodlands", county: "Montgomery", description: "a premier master-planned community north of Houston" },
  { name: "Conroe", slug: "conroe", county: "Montgomery", description: "the fast-growing county seat of Montgomery County" },
  { name: "Katy", slug: "katy", county: "Harris/Fort Bend", description: "one of Houston's fastest-growing western suburbs" },
  { name: "Sugar Land", slug: "sugar-land", county: "Fort Bend", description: "a thriving city in Fort Bend County southwest of Houston" },
  { name: "Pearland", slug: "pearland", county: "Brazoria", description: "one of the fastest-growing cities in the Houston metro area" },
  { name: "League City", slug: "league-city", county: "Galveston", description: "a major suburban city southeast of Houston" },
  { name: "Friendswood", slug: "friendswood", county: "Harris/Galveston", description: "a highly desirable community between Houston and Galveston" },
  { name: "Spring", slug: "spring", county: "Harris", description: "a vibrant community north of Houston along I-45" },
  { name: "Humble", slug: "humble", county: "Harris", description: "a growing community northeast of Houston" },
  { name: "Cypress", slug: "cypress", county: "Harris", description: "one of Houston's most popular northwest suburban communities" },
  { name: "Tomball", slug: "tomball", county: "Harris", description: "a charming northwest Houston suburb with rapid growth" },
  { name: "Kingwood", slug: "kingwood", county: "Harris", description: "the 'Livable Forest' community northeast of Houston" },
  { name: "Baytown", slug: "baytown", county: "Harris", description: "a major city east of Houston on Galveston Bay" },
  { name: "Pasadena", slug: "pasadena", county: "Harris", description: "a large city southeast of Houston" },
  { name: "Missouri City", slug: "missouri-city", county: "Fort Bend/Harris", description: "a growing suburb southwest of Houston" },
  { name: "Stafford", slug: "stafford", county: "Fort Bend/Harris", description: "a business-friendly community southwest of Houston" },
  { name: "Rosenberg", slug: "rosenberg", county: "Fort Bend", description: "the county seat of Fort Bend County, southwest of Houston" },
  { name: "Richmond", slug: "richmond", county: "Fort Bend", description: "a historic city in Fort Bend County" },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
