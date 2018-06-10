export class Evaluator {
  evaluator: string;
  link: string;
  top: boolean;
}

export class Organization {
  name: string;
  thumbnail: string;
  website: string;
  donationLink: string;
  // donationLinkDirect: string;
  category: string[];
  cause: string[];
  impactDirection: string;
  regions: string[];
  questionaireResults: string[];
  slogan: string;
  shortDescription: string;
  longDescription: string;
  impact1000: string;
  donationDeficit: number;
  evaluators: Evaluator[]
}
