import { Injectable } from '@angular/core';
import { PrivacyPage } from "../../pages/privacy/privacy";
import { ModalController } from "@ionic/angular";
import { ImpressumPage } from "../../pages/impressum/impressum";

@Injectable()
export class ModalService {
  constructor(private modalCtrl: ModalController) { }

  openPrivacyModal() {
    this.modalCtrl.create({
      component: PrivacyPage
    }).then(m => m.present);
  }

  openImprintModal() {
    this.modalCtrl.create({
      component: ImpressumPage
    }).then(m => m.present);
  }
}
