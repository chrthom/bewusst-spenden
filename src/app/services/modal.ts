import { Injectable } from '@angular/core';
import { PrivacyPage } from "../../pages/privacy/privacy";
import { BetatestPage } from "../../pages/betatest/betatest";
import { ModalController } from "ionic-angular";

@Injectable()
export class ModalService {
  constructor(private modalCtrl: ModalController) { }

  openPrivacyModal() {
    let modal = this.modalCtrl.create(PrivacyPage);
    modal.present();
  }

  openImprintModal() {

  }

  openBetaTestModal() {
    let modal = this.modalCtrl.create(BetatestPage);
    modal.present();
  }
}
