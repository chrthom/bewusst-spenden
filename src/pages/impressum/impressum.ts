import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
  selector: 'page-impressum',
  templateUrl: 'impressum.html'
})
export class ImpressumPage {

  constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
