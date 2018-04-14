import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { DataService } from "../../app/services/data";
import { OrganizationPage } from "../organization/organization";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  organizations;
  searchTerm: string = '';
  searchInterventions = [];
  advancedSearch: boolean;

  constructor(public navCtrl: NavController, public dataService: DataService, public modalCtrl: ModalController) {
    this.organizations = dataService.organizations;
  }

  search() {
    this.organizations = this.dataService.organizations.filter((item) => {
      if (this.advancedSearch) {
        if (this.searchInterventions.length > 0
          && item.interventions.filter(i1 => this.searchInterventions.filter(i2 => i1 == i2).length > 0).length == 0)
          return false;
      }
      for (let key in item)
        if (item[key].toString().toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
          return true;
      return false;
    });
  }

  openOrganizationModal(organization) {
    let modal = this.modalCtrl.create(OrganizationPage, organization);
    modal.present();
  }
}
