import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { WebAnalyticsService } from "../../app/services/webanalytics";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private navCtrl: NavController, private webAnalyticsService: WebAnalyticsService) { }

  gotoTabContact() {
    this.webAnalyticsService.pageView('contact', 'Kontakt')
    this.navCtrl.parent.select(3);
  }

}
