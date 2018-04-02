import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'questionaire',
  templateUrl: 'questionnaire.html'
})
export class QuestionnairePage {
  nav = 'start';
  result = null;

  constructor(public navCtrl: NavController) {

  }

}
