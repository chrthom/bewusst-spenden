import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from "../../app/services/data";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController, public dataService: DataService) { }

  search(event) {

  }
}
