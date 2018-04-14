import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from "../../app/services/data";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  searchTerm: String = '';
  organizations = null;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.organizations = dataService.organizations;
  }

  search() {
    this.organizations = this.dataService.organizations.filter((item) => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }
}
