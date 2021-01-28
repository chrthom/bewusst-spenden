import { Component } from '@angular/core';
import { DataService } from "../../app/services/data";
import { ModalService } from "../../app/services/modal";
import { Organization } from "../../app/model/organization";
import { OrganizationPage } from "../organization/organization";
import { NavController, Platform } from "ionic-angular";
import { MapsService } from "../../app/services/maps";
import { WebAnalyticsService } from "../../app/services/webanalytics";
import { ToastController } from "ionic-angular";

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
              private webAnalyticsService: WebAnalyticsService,
              private navCtrl: NavController,
              private platform: Platform,
              private toastController: ToastController) {
    this.organizations = dataService.organizations;
    this.modalService;
    this.webAnalyticsService;
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
      for (let t of [ item.longDescription, item.shortDescription, item.slogan, item.name, item.tags ].concat(item.cause, item.category))
        if (t && t.toString().toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
          return true;
      return false;
    });
  }

  openOrganizationPage(organization: { o: Organization }) {
    this.webAnalyticsService.pageView('organization/' + organization.o.thumbnail, organization.o.name)
    this.navCtrl.push(OrganizationPage, organization);
  }

  isMobile() {
    return this.platform.is('mobile');
  }

  helperTapCount: number = 0;
  itemHelperClick() {
    this.helperTapCount++;
    if (this.helperTapCount >= 5) {
      this.toastController.create({
        duration: 5000,
        message: 'Swipe nach links, um mehr Optionen zu dieser Organisation zu erhalten.',
        position: 'top'
      }).present();
      this.helperTapCount = 0;
    }
    setTimeout(() => {
      this.helperTapCount = 0;
    }, 5000);
  }
}

export class Country {
  code: string;
  name: string;
}
