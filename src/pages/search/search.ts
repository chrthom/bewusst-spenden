import { Component } from '@angular/core';
import { DataService } from "../../app/services/data";
import { ModalService } from "../../app/services/modal";
import { Organization } from "../../app/model/organization";
import { OrganizationPage } from "../organization/organization";
import { NavController, Platform } from "ionic-angular";
import { MapsService } from "../../app/services/maps";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  organizations: Organization[];
  searchTerm: string = '';
  searchCategories: string[] = [];
  searchCauses: string[] = [];
  searchImpactDirection: string[] = [];
  searchRegion: string[] = [];
  searchRecommendedBy: string[] = [];
  advancedSearch: boolean;
  countries: Country[] = [];

  constructor(private dataService: DataService,
              private mapsService: MapsService,
              private modalService: ModalService,
              private navCtrl: NavController,
              private platform: Platform) {
    this.organizations = dataService.organizations;
    this.modalService;
    this.countries = Object.keys(mapsService.countryMapping).map(key => {
      return {
        code: key,
        name: mapsService.countryMapping[key]
      };
    }).filter(c =>
      this.dataService.organizations.filter(o =>
        o.regions.filter(r => r == c.code).length > 0
      ).length > 0
    );
  }

  listContains(list: string[], find: string) {
    return list.length == 0 || list.filter(i => i == find).length > 0;
  }

  search() {
    this.organizations = this.dataService.organizations.filter(item => {
      if (this.advancedSearch) {
        let searchCountries: string[] = this.mapsService.toCountryCodeList(this.searchRegion);
        if (this.searchCategories.length > 0
          && item.category.filter(i1 => this.searchCategories.filter(i2 => i1 == i2).length > 0).length == 0)
          return false;
        else if (this.searchCauses.length > 0
          && item.cause.filter(i1 => this.searchCauses.filter(i2 => i1 == i2).length > 0).length == 0)
          return false;
        else if (this.searchImpactDirection.length > 0
          && this.searchImpactDirection.filter(i => item.impactDirection == i).length == 0)
          return false;
        else if (searchCountries.length > 0
          && item.regions.filter(i1 => searchCountries.filter(i2 => i1 == i2).length > 0).length == 0)
          return false;
        else if (this.searchRecommendedBy.length > 0
          && item.evaluators.filter(i1 => this.searchRecommendedBy.filter(i2 => i1.evaluator == i2).length > 0).length == 0)
          return false;
      }
      for (let key in item)
        if (item[key] && item[key].toString().toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
          return true;
      return false;
    });
  }

  openOrganizationPage(organization: { o: Organization }) {
    this.navCtrl.push(OrganizationPage, organization);
  }

  isMobile() {
    return this.platform.is('mobile');
  }
}

export class Country {
  code: string;
  name: string;
}
