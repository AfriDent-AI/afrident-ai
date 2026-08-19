// data/SearchAnswers.ts - New file for shared search answers
export interface SearchAnswer {
  keywords: string[];
  title: string;
  diagnosis: string;
  symptoms: string[];
  treatment: string[];
  recommendation: string;
}

export const SEARCH_ANSWERS: SearchAnswer[] = [
  {
    keywords: ["cavity", "cavities", "tooth decay", "decay", "hole in tooth", "tooth hole"],
    title: "Symptoms of a Cavity",
    diagnosis: "Dental cavity / tooth decay",
    symptoms: [
      "Tooth sensitivity",
      "Toothache",
      "White, brown, or black spots",
      "Visible hole in the tooth",
      "Pain when eating or chewing"
    ],
    treatment: [
      "Early decay → Fluoride treatment",
      "Cavity → Dental filling",
      "Deep decay → Root canal",
      "Severely damaged → Extraction"
    ],
    recommendation: "See a dentist for an examination and X-ray if needed."
  },
  {
    keywords: ["severe tooth pain", "sever", "tooth pain at night", "night tooth pain", "throbbing tooth", "pulp infection", "dental abscess", "abscess", "cracked tooth"],
    title: "Severe Tooth Pain",
    diagnosis: "Deep cavity, Pulp inflammation/infection, Dental abscess, or Cracked tooth",
    symptoms: [
      "Severe or throbbing pain",
      "Sensitivity to hot/cold",
      "Swelling",
      "Pain when biting"
    ],
    treatment: [
      "Cavity → Filling",
      "Pulp infection → Root canal",
      "Abscess → Dental treatment ± antibiotics",
      "Cracked tooth → Restoration or extraction"
    ],
    recommendation: "Arrange a dental visit promptly. Seek urgent care if you have facial swelling, fever, or difficulty swallowing/breathing."
  },
  {
    keywords: ["sensitive", "sensitivity", "hot", "cold", "temperature"],
    title: "Tooth Sensitivity",
    diagnosis: "Dentin hypersensitivity, Enamel erosion, or Gum recession",
    symptoms: [
      "Sharp pain when consuming hot or cold foods/drinks",
      "Pain when eating sweet or acidic foods",
      "Discomfort when brushing teeth",
      "Pain when breathing cold air"
    ],
    treatment: [
      "Desensitizing toothpaste",
      "Fluoride gel/varnish application",
      "Dental bonding for exposed roots",
      "Gum grafting for severe recession"
    ],
    recommendation: "Use desensitizing toothpaste with potassium nitrate. Avoid acidic foods and drinks. Consult your dentist for a proper diagnosis."
  },
  {
    keywords: ["swollen", "swollen gum", "swollen gums", "gum swelling", "gum infection", "periodontitis", "gingivitis"],
    title: "Swollen or Bleeding Gums",
    diagnosis: "Gingivitis, Periodontitis, or Gum infection",
    symptoms: [
      "Swollen, red, or tender gums",
      "Bleeding when brushing or flossing",
      "Receding gums",
      "Persistent bad breath",
      "Loose teeth"
    ],
    treatment: [
      "Professional dental cleaning",
      "Improved oral hygiene",
      "Antibacterial mouthwash",
      "Scaling and root planing (deep cleaning)",
      "Periodontal surgery for severe cases"
    ],
    recommendation: "Improve your oral hygiene routine. Visit your dentist for a professional cleaning. Seek immediate care if you have severe pain or swelling."
  },
  {
    keywords: ["wisdom tooth", "wisdom teeth", "impacted wisdom", "molar pain"],
    title: "Wisdom Tooth Problems",
    diagnosis: "Impacted wisdom tooth, Pericoronitis, or Infection",
    symptoms: [
      "Pain at the back of the jaw",
      "Swollen or tender gums",
      "Difficulty opening mouth",
      "Bad breath or unpleasant taste",
      "Headache or earache"
    ],
    treatment: [
      "Antibiotics for infection",
      "Pain relief medication",
      "Surgical extraction if impacted",
      "Improved cleaning around the tooth"
    ],
    recommendation: "Visit your dentist for an X-ray to assess the position of your wisdom teeth. Prompt treatment can prevent complications."
  },
  {
    keywords: ["gum disease", "gum", "gingivitis", "periodontitis"],
    title: "Gum Disease",
    diagnosis: "Gingivitis / Periodontitis - Gum inflammation and infection",
    symptoms: [
      "Red or swollen gums",
      "Bleeding when brushing",
      "Bad breath",
      "Tender or receding gums",
      "Loose teeth in advanced cases"
    ],
    treatment: [
      "Professional dental cleaning",
      "Improved brushing and flossing",
      "Deep cleaning (scaling and root planing)",
      "Additional periodontal treatment if needed"
    ],
    recommendation: "See a dentist for a gum examination, especially if bleeding or swelling persists."
  },
  {
    keywords: ["children", "child", "kids", "children's oral health", "kids oral health"],
    title: "Children's Oral Health",
    diagnosis: "Common Concerns & Prevention for young smiles",
    symptoms: [
      "Cavities/tooth decay",
      "Gum inflammation",
      "Tooth sensitivity",
      "Early tooth loss",
      "Thumb sucking or other oral habits"
    ],
    treatment: [
      "Professional dental cleaning",
      "Fluoride treatments",
      "Dental sealants for prevention",
      "Early intervention for developmental issues",
      "Cavity fillings if needed"
    ],
    recommendation: "Start dental visits early and have children checked regularly to monitor tooth development."
  }
];

// Utility function to search for answers
export function getSearchAnswer(query: string): SearchAnswer | null {
  if (!query.trim()) return null;
  
  const normalizedQuery = query.toLowerCase().trim();
  
  for (const answer of SEARCH_ANSWERS) {
    const matched = answer.keywords.some(keyword => 
      normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)
    );
    if (matched) {
      return answer;
    }
  }
  return null;
}