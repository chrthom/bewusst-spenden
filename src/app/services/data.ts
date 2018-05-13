import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  organizations = [
    {
      name: 'Against Malaria Foundation',
      thumbnail: 'against_malaria_foundation',
      website: 'https://www.againstmalaria.com',
      donationLink: 'https://www.againstmalaria.com/Donation.aspx',
      category: [ 'Armut' ],
      cause: [ 'Lebenssicherung', 'Gesundheit' ],
      impactDirection: 'reactive',
      regions: ['Afrika'],
      questionaireResults: [],
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
          evaluator: 'The life you can save',
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
      impactDirection: 'reactive',
      regions: ['Afrika'],
      questionaireResults: [],
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
    {
      name: 'Future of Life Institute',
      thumbnail: 'future_of_life',
      website: 'https://futureoflife.org',
      donationLink: 'https://futureoflife.org/get-involved/',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz', 'Biotechnologie', "Nukleartechnologie", "Klimaschutz" ],
      impactDirection: 'proactive',
      regions: ['Asien', "Europa", "USA"],
      questionaireResults: [],
      slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
      impact1000: 'Was wird mit 1000€ erreicht? ...',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'The life you can save',
          link: 'https://www.thelifeyoucansave.org/where-to-donate/against-malaria-foundation',
          top: false
        }
      ]
    }
  ];

  constructor() { }
}
