import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";
import { Organization } from "../../app/model/organization";

@Component({
  templateUrl: 'organization.html'
})
export class OrganizationPage {
  organization: Organization;

  constructor(public viewCtrl: ViewController, public params: NavParams) {
    this.organization = this.params.get('o');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
