import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
  selector: 'page-betatest',
  templateUrl: 'betatest.html'
})
export class BetatestPage {

  constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
