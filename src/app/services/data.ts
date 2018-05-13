import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  organizations = [
    // Armut
    {
      name: 'Against Malaria Foundation',
      thumbnail: 'against_malaria_foundation',
      website: 'https://www.againstmalaria.com',
      donationLink: 'https://www.againstmalaria.com/Donation.aspx',
      category: [ 'Armut' ],
      cause: [ 'Lebenssicherung' ],
      impactDirection: 'reaktiv',
      regions: ['Afrika'],
      questionaireResults: ["human death"],
      slogan: 'Insecticide-treated nets to prevent malaria in sub-Saharan Africa.',
      shortDescription: 'Malaria is one of the leading killers of children in Africa. Insecticide-treated nets prevent malaria and are inexpensive — about $5 per net.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
      impact1000: 'Was wird mit 1000€ erreicht? ...',
      donationDeficit: 20000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/AMF',
          top: true
        },
        {
          evaluator: 'The Life You Can Save',
          link: 'https://www.thelifeyoucansave.org/where-to-donate/against-malaria-foundation',
          top: false
        }
      ]
    },
    {
      name: 'END Fund',
      thumbnail: 'end_fund',
      website: 'https://end.org/',
      donationLink: 'https://end.org/engage/invest',
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: ['Afrika'],
      questionaireResults: ["human health"],
      slogan: 'Supporting deworming programs in low-income countries.',
      shortDescription: 'The END Fund manages grants, raises funding and supports government programs for controlling and eliminating neglected tropical diseases, including deworming.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
      impact1000: 'Was wird mit 1000€ erreicht? ...',
      donationDeficit: 15000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/AMF',
          top: true
        }
      ]
    },
    // Existenzrisiken
    {
      name: 'Future of Life Institute',
      thumbnail: 'future_of_life',
      website: 'https://futureoflife.org',
      donationLink: 'https://futureoflife.org/get-involved/',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz', 'Biotechnologie', "Nukleartechnologie", "Klimaschutz" ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: ["existential risk"],
      slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
      impact1000: 'Was wird mit 1000€ erreicht? ...',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'The Life You Can Save',
          link: 'https://www.thelifeyoucansave.org/where-to-donate/against-malaria-foundation',
          top: false
        }
      ]
    },
    {
      name: 'Machine Intelligence Research Institute',
      thumbnail: 'miri',
      website: 'https://intelligence.org',
      donationLink: 'https://intelligence.org/donate/',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: ["human knowledge"],
      slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
      impact1000: 'Was wird mit 1000€ erreicht? ...',
      donationDeficit: null,
      evaluators: []
    },
    {
      name: 'Cool Earth',
      thumbnail: 'cool_earth',
      website: 'https://www.coolearth.org',
      donationLink: 'https://www.coolearth.org/#donate',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Klimaschutz' ],
      impactDirection: 'reaktiv',
      regions: ["Ozeanien", "Südamerika", "Afrika"],
      questionaireResults: ["environment"],
      slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
      impact1000: 'Was wird mit 1000€ erreicht? ...',
      donationDeficit: null,
      evaluators: []
    },
    {
      name: 'Future of Humanity Institute',
      thumbnail: 'future_of_humanity',
      website: 'https://www.fhi.ox.ac.uk',
      donationLink: '',
      category: [ 'Existenzrisiken', "Meta" ],
      cause: [ 'Künstliche Intelligenz', "Biotechnologie", "Strategie" ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: ["existential risk"],
      slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
      impact1000: 'Was wird mit 1000€ erreicht? ...',
      donationDeficit: null,
      evaluators: []
    }
    // Meta
    // Politik
    // Tierleid
  ];

  constructor() { }
}
