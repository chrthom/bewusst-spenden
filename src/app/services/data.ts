import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  organizations = [
    {
      name: 'Against Malaria Foundation',
      thumbnail: 'against_malaria_foundation.jpg',
      website: 'https://www.againstmalaria.com',
      donationLink: 'https://www.againstmalaria.com/Donation.aspx',
      topCharity: true,
      interventions: [ 'Marlaria Netze' ],
      questionaireResults: [],
      slogan: 'Insecticide-treated nets to prevent malaria in sub-Saharan Africa.',
      shortDescription: 'Malaria is one of the leading killers of children in Africa. Insecticide-treated nets prevent malaria and are inexpensive — about $5 per net.'
    },
    {
      name: 'END Fund',
      thumbnail: 'end_fund.jpg',
      website: 'https://end.org/',
      donationLink: 'https://end.org/engage/invest/',
      topCharity: true,
      intervention: [ 'Entwurmung' ],
      questionaireResults: [],
      slogan: 'Supporting deworming programs in low-income countries.',
      shortDescription: 'The END Fund manages grants, raises funding and supports government programs for controlling and eliminating neglected tropical diseases, including deworming.'
    }
  ]

  constructor() { }
}
