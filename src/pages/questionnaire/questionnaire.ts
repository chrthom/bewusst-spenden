import { Component } from '@angular/core';
import { LoadingController, NavController, Platform } from 'ionic-angular';
import { trigger, style, transition, animate, query, animateChild } from '@angular/animations'
import { DataService } from "../../app/services/data";
import { Organization } from "../../app/model/organization";
import { OrganizationPage } from "../organization/organization";
import Stack from "ts-data.stack";
import {WebAnalyticsService} from "../../app/services/webanalytics";

@Component({
  selector: 'page-questionaire',
  templateUrl: 'questionnaire.html',
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true})
      ])
    ]),
    trigger('questionTrigger',[
      transition('void => *', [
        style({
          left: -1500
        }),
        animate("0.4s ease-in-out", style({
          left: 0
        }))
      ]),
      transition('* => void', [
        style({
          left: 0
        }),
        animate("0.4s ease-in-out", style({
          left: 1500
        }))
      ])
    ])
  ]
})
export class QuestionnairePage {
  nav: string = 'start';
  navHistory: Stack<string> = new Stack<string>();
  organizations: Organization[] = [];

  constructor(private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private dataService: DataService,
              private webAnalyticsService: WebAnalyticsService,
              private platform: Platform) {
    let params = new URLSearchParams(window.location.search);
    let directOrganization = this.dataService.getByName(params.get('o'));
    if (directOrganization) this.openOrganizationPage({ o: directOrganization });

    /*
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    function printUnique(a) {
      let flattened = [].concat.apply([], a);
      flattened.filter(onlyUnique).sort().forEach(o => console.log(o));
    }
    console.log("\nKategorien:");
    printUnique(this.dataService.organizations.map(o => o.category));
    console.log("\nProblemfelder:");
    printUnique(this.dataService.organizations.map(o => o.cause));
    console.log("\nRegionen:");
    printUnique(this.dataService.organizations.map(o => o.regions));
    console.log("\nFragebogenresultat:");
    printUnique(this.dataService.organizations.map(o => o.questionaireResults));
    console.log("\nEvaluatoren:");
    printUnique([].concat(...this.dataService.organizations.map(o => o.evaluators.map(e => e.evaluator))));
    */
  }

  answer(to: string) {
    // Manipulate nav history
    if (this.navHistory.isEmpty() || to != this.navHistory.peek()) this.navHistory.push(this.nav);
    else this.navHistory.pop();
    // Go to new page
    this.nav = '';
    let toResult = to.startsWith("result ->");
    function loadingTime() {
      if (toResult) return 2500;
      else return 400;
    }
    setTimeout(() => {
      this.nav = to;
    }, loadingTime());
    // Show loading screen for result
    if (toResult) {
      let result = to.replace("result -> ", "");
      this.webAnalyticsService.finishQuestionaire(result);
      this.organizations = this.dataService.organizations.filter( item => {
        return item.questionaireResults.indexOf(result) >= 0;
      });
      let loader = this.loadingCtrl.create({
        content: "Ermittle Testresultat...",
        duration: loadingTime()
      });
      loader.present();
    }
  }

  goBack() {
    this.answer(this.navHistory.peek());
  }

  gotoTabSearch() {
    this.webAnalyticsService.pageView('search', 'Suche')
    this.navCtrl.parent.select(1);
  }

  gotoTabAboutUs() {
    this.webAnalyticsService.pageView('about', 'Über uns')
    this.navCtrl.parent.select(2);
  }

  openOrganizationPage(organization: { o: Organization }) {
    this.webAnalyticsService.pageView('organization/' + organization.o.thumbnail, organization.o.name)
    this.navCtrl.push(OrganizationPage, organization);
  }

  isMobile() {
    return this.platform.is('mobile');
  }
}
