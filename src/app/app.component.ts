import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { SearchPage } from '../pages/search/search';
import { ModalService } from "./services/modal";
import { WebAnalyticsService } from "./services/webanalytics";

@Component({
  templateUrl: 'app.html'
})
export class EADonationApp {
  rootPage:any = QuestionnairePage;

  tab1Root = QuestionnairePage;
  tab2Root = SearchPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  tabsPlacement: string = 'bottom';
  tabsLayout: string = 'icon-top';

  constructor(platform: Platform,
              private modalService: ModalService,
              private webAnalyticsService: WebAnalyticsService) {
    if (!platform.is('mobile')) {
      this.tabsPlacement = 'top';
      this.tabsLayout = 'icon-left';
    }
  }
}
