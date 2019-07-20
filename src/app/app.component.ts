import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { SearchPage } from '../pages/search/search';
import { ModalService } from "./services/modal";

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
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private modalService: ModalService) {
    this.modalService;
    if (!platform.is('mobile')) {
      this.tabsPlacement = 'top';
      this.tabsLayout = 'icon-left';
    }
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
