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
      intervention: 'Marlaria Netze',
      slogan: 'Insecticide-treated nets to prevent malaria in sub-Saharan Africa.',
      shortDescription: 'Malaria is one of the leading killers of children in Africa. Insecticide-treated nets prevent malaria and are inexpensive — about $5 per net.'
    }
  ]

  constructor() { }
}
