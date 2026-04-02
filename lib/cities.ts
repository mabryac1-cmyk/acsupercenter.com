export interface City {
  name: string;
  slug: string;
  county: string;
  description: string;
  neighborhoods: string[];
  geoNote: string;
}

export const cities: City[] = [
  {
    name: "The Woodlands",
    slug: "the-woodlands",
    county: "Montgomery",
    description: "a premier master-planned community north of Houston",
    neighborhoods: ["Creekside Park", "Sterling Ridge", "Panther Creek", "Cochran's Crossing", "Grogan's Mill", "Indian Springs", "Alden Bridge"],
    geoNote: "The Woodlands is a large master-planned community with dozens of distinct villages and neighborhoods spread across Montgomery County. Many homes here were built in the 1980s and 1990s and are now due for a full HVAC system replacement — making it one of our most active service areas. We serve every village and subdivision in The Woodlands.",
  },
  {
    name: "Conroe",
    slug: "conroe",
    county: "Montgomery",
    description: "the fast-growing county seat of Montgomery County",
    neighborhoods: ["Grand Central Park", "Woodforest", "Bentwater", "April Sound", "Panorama Village", "Teaswood"],
    geoNote: "Conroe is the county seat of Montgomery County and one of the fastest-growing cities in Texas. From established neighborhoods near downtown Conroe to newer master-planned communities like Grand Central Park and Woodforest, we install Trane systems throughout the entire Conroe area.",
  },
  {
    name: "Katy",
    slug: "katy",
    county: "Harris/Fort Bend",
    description: "one of Houston's fastest-growing western suburbs",
    neighborhoods: ["Cinco Ranch", "Cross Creek Ranch", "Firethorne", "Elyson", "Nottingham Country", "Seven Meadows"],
    geoNote: "Katy spans parts of Harris, Fort Bend, and Waller counties and is home to some of Greater Houston's most desirable master-planned communities. With rapid growth along the I-10 and Grand Parkway corridors, Katy homeowners frequently need new Trane system installations — and we serve every subdivision from Cinco Ranch to Cross Creek Ranch.",
  },
  {
    name: "Sugar Land",
    slug: "sugar-land",
    county: "Fort Bend",
    description: "a thriving city in Fort Bend County southwest of Houston",
    neighborhoods: ["First Colony", "Riverstone", "Telfair", "New Territory", "Greatwood", "Sugar Creek"],
    geoNote: "Sugar Land is one of Fort Bend County's premier cities, known for well-established communities like First Colony and newer developments like Riverstone and Telfair. Homes throughout Sugar Land — from older neighborhoods near Hwy 6 to newer builds along the Fort Bend Parkway — rely on us for guaranteed lowest Trane AC and heating system installations.",
  },
  {
    name: "Pearland",
    slug: "pearland",
    county: "Brazoria",
    description: "one of the fastest-growing cities in the Houston metro area",
    neighborhoods: ["Shadow Creek Ranch", "Silverlake", "Southdown", "Country Place", "Pearland Town Center area", "Brookside Village"],
    geoNote: "Pearland has grown dramatically over the past two decades, with a mix of established older neighborhoods and newer master-planned communities like Shadow Creek Ranch and Silverlake. Located just south of Beltway 8 along Hwy 288, Pearland is well within our service area and we regularly install Trane systems throughout the city.",
  },
  {
    name: "League City",
    slug: "league-city",
    county: "Galveston",
    description: "a major suburban city southeast of Houston",
    neighborhoods: ["South Shore Harbour", "Tuscan Lakes", "Bay Colony", "Marina Del Sol", "Clear Creek area", "Westover Park"],
    geoNote: "League City is one of Galveston County's largest cities, situated between Houston and Galveston along I-45. With a mix of waterfront communities, established subdivisions, and newer developments throughout the city, League City homeowners frequently replace aging HVAC systems — and we're the lowest-priced authorized Trane dealer serving the area.",
  },
  {
    name: "Friendswood",
    slug: "friendswood",
    county: "Harris/Galveston",
    description: "a highly desirable community between Houston and Galveston",
    neighborhoods: ["Friendswood Lakes", "Quail Run", "Rancho Viejo", "West Ranch", "Stevenson Park area", "Downtown Friendswood area"],
    geoNote: "Friendswood is a well-established and highly desirable community straddling Harris and Galveston counties, known for excellent schools and quiet residential neighborhoods. Many Friendswood homes were built in the 1970s through 1990s and are prime candidates for a full Trane system replacement — we serve all of Friendswood with our guaranteed lowest prices.",
  },
  {
    name: "Spring",
    slug: "spring",
    county: "Harris",
    description: "a vibrant community north of Houston along I-45",
    neighborhoods: ["Gleannloch Farms", "Harmony", "Champions", "Klein area", "Rayford/Sawdust corridor", "Springwoods Village"],
    geoNote: "Spring is an unincorporated community in northern Harris County encompassing a wide range of neighborhoods from the Champions area in the west to communities along I-45 and US-59. The diverse mix of home ages in Spring — from 1970s ranch homes to modern builds in Springwoods Village — means there is constant demand for new Trane HVAC system installations.",
  },
  {
    name: "Humble",
    slug: "humble",
    county: "Harris",
    description: "a growing community northeast of Houston",
    neighborhoods: ["Atascocita", "Eagle Springs", "Fall Creek", "Summerwood", "Kings Manor", "Lakeshore"],
    geoNote: "Humble and the surrounding Atascocita area make up one of northeast Houston's most active residential markets. From the lakeside communities of Lakeshore and Fall Creek to the large master-planned Atascocita area, homeowners throughout this corridor rely on us for competitive Trane AC and heating system replacements.",
  },
  {
    name: "Cypress",
    slug: "cypress",
    county: "Harris",
    description: "one of Houston's most popular northwest suburban communities",
    neighborhoods: ["Bridgeland", "Towne Lake", "Blackhorse Ranch", "Fairfield", "Copper Lakes", "Stone Gate"],
    geoNote: "Cypress is one of the most densely populated unincorporated communities in the United States and one of Harris County's fastest-growing areas. With master-planned communities like Bridgeland and Towne Lake as well as well-established neighborhoods along Hwy 290 and Hwy 6, Cypress homeowners regularly need new Trane system installations — and we serve the entire area.",
  },
  {
    name: "Tomball",
    slug: "tomball",
    county: "Harris",
    description: "a charming northwest Houston suburb with rapid growth",
    neighborhoods: ["Lakewood", "Rosehill", "Canyon Lakes at Spring Trails", "Tomball Parkway corridor", "Willow Creek Farms", "Lonestar Crossing"],
    geoNote: "Tomball is a charming northwest Houston suburb experiencing significant residential growth along Hwy 249, FM 2920, and FM 2978. From older established neighborhoods near downtown Tomball to newer subdivisions in the surrounding area, we regularly install Trane systems throughout this community at the guaranteed lowest prices in Greater Houston.",
  },
  {
    name: "Kingwood",
    slug: "kingwood",
    county: "Harris",
    description: "the 'Livable Forest' community northeast of Houston",
    neighborhoods: ["Kings Forest", "Fosters Mill", "Forest Cove", "Sherwood Trails", "Elm Grove", "Kingwood Lakes"],
    geoNote: "Kingwood — known as the 'Livable Forest' — is a large master-planned community northeast of Houston along the US-59 corridor. Many Kingwood homes were built in the 1970s and 1980s, making full HVAC system replacement a common need throughout its many villages. We serve all Kingwood neighborhoods with our guaranteed lowest Trane prices.",
  },
  {
    name: "Baytown",
    slug: "baytown",
    county: "Harris",
    description: "a major city east of Houston on Galveston Bay",
    neighborhoods: ["Goose Creek", "Rollingbrook", "San Jacinto", "Sterling Green", "West Baytown", "Chaparral Village"],
    geoNote: "Baytown is a substantial city east of Houston along I-10 and Hwy 146, situated on the shores of Galveston Bay. The humid, coastal climate in Baytown puts extra demand on air conditioning and heating systems, making reliable Trane equipment especially valuable here. We serve all Baytown neighborhoods with full system replacements at guaranteed lowest prices.",
  },
  {
    name: "Pasadena",
    slug: "pasadena",
    county: "Harris",
    description: "a large city southeast of Houston",
    neighborhoods: ["Deer Park adjacent", "South Houston", "Fairmont Park", "Burke Road corridor", "Strawberry Park", "Red Bluff area"],
    geoNote: "Pasadena is one of Harris County's largest cities, located southeast of Houston along Hwy 225 and Beltway 8. With a large base of established residential neighborhoods — many built in the 1960s through 1980s — Pasadena has a high demand for full HVAC system replacements. We bring guaranteed lowest Trane prices to homeowners throughout Pasadena.",
  },
  {
    name: "Missouri City",
    slug: "missouri-city",
    county: "Fort Bend/Harris",
    description: "a growing suburb southwest of Houston",
    neighborhoods: ["Sienna", "Quail Valley", "Lake Olympia", "Ridgemont", "Staffordshire", "Hunters Glen"],
    geoNote: "Missouri City spans both Fort Bend and Harris counties and is home to a wide range of communities — from the large master-planned Sienna development to well-established neighborhoods like Quail Valley near Hwy 6. We serve homeowners throughout Missouri City with guaranteed lowest Trane AC and heating system installations.",
  },
  {
    name: "Stafford",
    slug: "stafford",
    county: "Fort Bend/Harris",
    description: "a business-friendly community southwest of Houston",
    neighborhoods: ["Sugarmill", "Colony Meadows", "Stafford Run", "Dulles area", "Mission Bend adjacent", "Alief adjacent"],
    geoNote: "Stafford is a small but centrally located community in southwest Houston known for its business-friendly environment and lack of city property tax. Bordered by Sugar Land, Missouri City, and Houston, Stafford and its surrounding residential areas are conveniently served by our team for Trane system installations at the guaranteed lowest prices.",
  },
  {
    name: "Rosenberg",
    slug: "rosenberg",
    county: "Fort Bend",
    description: "the county seat of Fort Bend County, southwest of Houston",
    neighborhoods: ["Brazos Landing", "Kingdom Heights", "Rivers Edge", "Texana Plantation", "Cinco Ranch South area", "Downtown Rosenberg area"],
    geoNote: "Rosenberg is the county seat of Fort Bend County and a growing city located along Hwy 59 (I-69) southwest of Houston. With a mix of newer master-planned communities like Kingdom Heights and established neighborhoods near downtown, Rosenberg homeowners increasingly rely on high-efficiency Trane systems — and we deliver at the guaranteed lowest prices in the area.",
  },
  {
    name: "Richmond",
    slug: "richmond",
    county: "Fort Bend",
    description: "a historic city in Fort Bend County",
    neighborhoods: ["Long Meadow Farms", "Veranda", "Pecan Grove", "Aliana", "Waterside", "Greatwood adjacent"],
    geoNote: "Richmond is one of Texas's oldest cities and the historic heart of Fort Bend County, located along Hwy 59 and the Brazos River. The Richmond area has seen tremendous residential growth with communities like Long Meadow Farms, Veranda, and Aliana joining established neighborhoods like Pecan Grove. We serve all of Richmond and surrounding Fort Bend County communities.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
