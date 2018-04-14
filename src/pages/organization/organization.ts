import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

@Component({
  templateUrl: 'organization.html'
})
export class OrganizationPage {
  organization;

  constructor(public viewCtrl: ViewController, public params: NavParams) {
    this.organization = this.params.get('o');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
