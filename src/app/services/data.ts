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
      longDescription: 'The Against Malaria Foundation (AMF) is a United Kingdom-based charity that provides long-lasting insecticidal nets (LLINs) to populations at high risk of malaria, primarily in Africa. Nets are distributed through partnerships with the International Red Cross, the Malaria Consortium, and others, with partners responsible for costs of distribution. Distributions include malaria education for the local population, and they are documented through reports, photos, and video. Post-distribution check-ups are carried out 6, 12, 18, 24, and 30 months to assess net usage and conditions.',
      impact1000: 'Was wird mit 1000€ erreicht? Ungefähr 250 Netze werden verteilt: grob geschätzt reicht die Verteilung von 900 Netze, um ein Leben zu retten.',
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
    },    {
      name: 'Schistosomiasis Control Initiative',
      thumbnail: 'schistosomiasis_control_initiative',
      website: 'http://www.imperial.ac.uk/schistosomiasis-control-initiative',
      donationLink: 'http://www.imperial.ac.uk/schistosomiasis-control-initiative/donate/',
      category: [ 'Armut' ],
      cause: [ 'Globale Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: ['Afrika'],
      questionaireResults: ["human death"],
      slogan: 'Treating neglected tropical diseases in sub-Saharan Africa.',
      shortDescription: 'SCI treats children and at risk adults for schistosomiasis and soil transmitted helminths (whipworm, hookworm, and roundworm), preventing anaemia, impaired growth and development in children and the development of life-threatening conditions of bladder cancer, kidney malfunction or liver and spleen damage.',
      longDescription: 'SCI assists Ministries of Health across sub-Saharan Africa to control and then eliminate schistosomiasis and soil transmitted helminths from their population utilising the World Health Organization’s Drug Donation Programme for praziquantel and albendazole. 230 million people, one-third of the total population of Africa, need a regular annual treatment of praziquantel, and 400 million people need a regular annual treatment of albendazole, to eliminate these parasitic diseases from their bodies.',
      impact1000: 'Was wird mit 1000€ erreicht? Ungefähr 2000 Menschen werden behandelt.',
      donationDeficit: 30000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/Schistosomiasis-Control-Initiative',
          top: true
        },
        {
          evaluator: 'The Life You Can Save',
          link: 'https://www.thelifeyoucansave.org/where-to-donate/schistosomiasis-control-initiative',
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
