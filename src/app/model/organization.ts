export class Evaluator {
  evaluator: string;
  link: string;
  top: boolean;
}

export class Organization {
  name: string;
  article: string;
  thumbnail: string;
  website: string;
  donationLink: string;
  taxDeductable: boolean;
  donationLink3rdParty: string;
  // Allowed values for category: Armut, Existenzrisiken, Meta, Politik, Tierleid
  category: string[];
  // Allowed values for cause by category:
  // Armut -> Bildung, Gesundheit, Lebensstandard, Menschenleben
  // Existenzrisiken -> Biotechnologie, Katastrophenschutz, Klimaschutz, Künstliche Intelligenz, Nukleartechnologie
  // Meta -> Evaluation, Öffentlichkeitsarbeit, Strategie
  // Politik -> Institutionen, Menschenrechte, Werte und Moral
  // Tierleid -> Haltungsbedingungen, Tierleben
  cause: string[];
  // Allowed values for impactDirection: proaktiv, reaktiv
  impactDirection: string;
  // ISO ALPHA2 country codes
  regions: string[];
  // Allowed values: animal death, animal suffering, catastrophe, environment, existential risks, human death,
  // human health, human knowledge, human rights, institutions, values
  questionaireResults: string[];
  slogan: string;
  shortDescription: string;
  longDescription: string;
  // Put important search terms in 'tags', which are not included in the organization name, slogan or description
  tags: string[];
  impact1000: string;
  donationDeficit: number;
  evaluators: Evaluator[]
}
