import { Injectable } from '@angular/core';
import { PrivacyPage } from "../../pages/privacy/privacy";
import { OrganizationPage } from "../../pages/organization/organization";
import { ModalController } from "ionic-angular";
import { Organization } from "../model/organization";

@Injectable()
export class ModalService {
  constructor(private modalCtrl: ModalController) { }

  openOrganizationModal(organization: Organization) {
    let modal = this.modalCtrl.create(OrganizationPage, organization);
    modal.present();
  }

  openPrivacyModal() {
    let modal = this.modalCtrl.create(PrivacyPage);
    modal.present();
  }

  openImprintModal() {

  }
}
