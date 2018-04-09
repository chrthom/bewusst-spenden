import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, style, transition, animate, query, animateChild } from '@angular/animations'

@Component({
  selector: 'questionaire',
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
  public nav: String = 'start';
  result = null;

  constructor(public navCtrl: NavController) { }

  answer(to: String) {
    this.nav = '';
    setTimeout(() => {
      this.nav = to;
    }, 500);
  }
}
