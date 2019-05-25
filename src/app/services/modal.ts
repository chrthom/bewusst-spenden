import { Injectable } from '@angular/core';
import { PrivacyPage } from "../../pages/privacy/privacy";
import { ModalController } from "ionic-angular";
import { ImpressumPage } from "../../pages/impressum/impressum";

@Injectable()
export class ModalService {
  constructor(private modalCtrl: ModalController) { }

  openPrivacyModal() {
    let modal = this.modalCtrl.create(PrivacyPage);
    modal.present();
  }

  openImprintModal() {
    let modal = this.modalCtrl.create(ImpressumPage);
    modal.present();
  }
}
