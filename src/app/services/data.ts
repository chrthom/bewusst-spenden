import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  organizations = [
    {
      name: 'Against Malaria Foundation',
      thumbnail: 'against_malaria_foundation',
      website: 'https://www.againstmalaria.com',
      donationLink: 'https://www.againstmalaria.com/Donation.aspx',
      topCharity: true,
      interventions: [ 'Malaria Netze' ],
      questionaireResults: [],
      slogan: 'Insecticide-treated nets to prevent malaria in sub-Saharan Africa.',
      shortDescription: 'Malaria is one of the leading killers of children in Africa. Insecticide-treated nets prevent malaria and are inexpensive — about $5 per net.'
    },
    {
      name: 'END Fund',
      thumbnail: 'end_fund',
      website: 'https://end.org/',
      donationLink: 'https://end.org/engage/invest/',
      topCharity: true,
      interventions: [ 'Entwurmung' ],
      questionaireResults: [],
      slogan: 'Supporting deworming programs in low-income countries.',
      shortDescription: 'The END Fund manages grants, raises funding and supports government programs for controlling and eliminating neglected tropical diseases, including deworming.'
    },
    {
      name: 'Future of Life Institute',
      thumbnail: 'future_of_life',
      website: 'https://futureoflife.org/',
      donationLink: 'https://futureoflife.org/get-involved/',
      topCharity: false,
      interventions: [ 'KI', 'Biotechnik', 'Nukleartechnologie', 'Klimaschutz' ],
      questionaireResults: [],
      slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  ];

  constructor() { }
}
