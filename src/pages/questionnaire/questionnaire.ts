import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { trigger, style, transition, animate, query, animateChild } from '@angular/animations'
import { DataService } from "../../app/services/data";
import { Organization } from "../../app/model/organization";
import { ModalService } from "../../app/services/modal";
import { OrganizationPage } from "../organization/organization";

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
  organizations: Organization[] = [];

  constructor(private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private dataService: DataService,
              private modalService: ModalService) {
    this.modalService;

    /*
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    function printUnique(a) {
      let flattened = [].concat.apply([], a);
      flattened.filter(onlyUnique).forEach(o => console.log(o));
    }
    console.log("\nKategorien:");
    printUnique(this.dataService.organizations.map(o => o.category));
    console.log("\nProblemfelder:");
    printUnique(this.dataService.organizations.map(o => o.cause));
    console.log("\nRegionen:");
    printUnique(this.dataService.organizations.map(o => o.regions));
    console.log("\nFragebogenresultat:");
    printUnique(this.dataService.organizations.map(o => o.questionaireResults));
    */

    // Only for beta test phase
    if (!this.getCookie("betatest_intro")) {
      document.cookie = "betatest_intro=1;expires=Sat, 01 Jun 2019 00:00:00 UTC";
      this.showBetaTestInfos();
    }
  }

  // Only for beta test phase
  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // Only for beta test phase
  showBetaTestInfos() {
    this.modalService.openBetaTestModal();
  }

  answer(to: string) {
    this.nav = '';
    let toResult = to.startsWith("result ->");
    function loadingTime() {
      if (toResult) return 2500;
      else return 400;
    }
    setTimeout(() => {
      this.nav = to;
    }, loadingTime());
    if (toResult) {
      this.organizations = this.dataService.organizations.filter( item => {
        return item.questionaireResults.indexOf(to.replace("result -> ", "")) >= 0;
      });
      let loader = this.loadingCtrl.create({
        content: "Ermittle Testresultat...",
        duration: loadingTime()
      });
      loader.present();
    }
  }

  gotoTabSearch() {
    this.navCtrl.parent.select(1);
  }

  openOrganizationPage(organization: Organization) {
    this.navCtrl.push(OrganizationPage, organization);
  }
}
