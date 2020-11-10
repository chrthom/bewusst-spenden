import { Component } from '@angular/core';
import { LoadingController, NavController, Platform } from 'ionic-angular';
import { trigger, style, transition, animate, query, animateChild } from '@angular/animations'
import { DataService } from "../../app/services/data";
import { Organization } from "../../app/model/organization";
import { OrganizationPage } from "../organization/organization";
import Stack from "ts-data.stack";
import { WebAnalyticsService } from "../../app/services/webanalytics";
import { ToastController } from "ionic-angular";
import { Question } from "../../app/model/question";

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
              private platform: Platform,
              private toastController: ToastController) {
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

  helperTapCount: number = 0;
  itemHelperClick() {
    this.helperTapCount++;
    if (this.helperTapCount >= 5) {
      this.toastController.create({
        duration: 5000,
        message: 'Swipe nach links, um mehr Optionen zu dieser Organisation zu erhalten.',
        position: 'top'
      }).present();
      this.helperTapCount = 0;
    }
    setTimeout(() => {
      this.helperTapCount = 0;
    }, 5000);
  }

  questions: Question[] = [
    {
      id: 'start',
      title: 'Spend-O-Mat Fragebogen starten',
      question: 'Du möchtest Gutes tun mit deinen Spenden? Hier findest du Vorschläge, wie du gemäß deinen Vorstellungen und \n' +
                'deiner persönlichen Weltsicht am meisten Impact haben kannst. Die Sache ist komplex, wir haben keine definitiven Antworten, \n' +
                'aber vielleicht helfen wir dir, besser zu verstehen, was du unterstützen willst und warum.',
      answers: [
        {
          toId: 'specific reason',
          image: 'start',
          title: 'OK, verstanden',
          subtitle: 'Ich will so viel Gutes tun wie möglich!'
        }
      ]
    },
    {
      id: 'specific reason',
      title: 'Spezieller Zweck?',
      question: 'Empfindest du eine vorrangige Verpflichtung dich für einen bestimmten Zweck oder eine bestimmte Gruppe einzusetzen?',
      answers: [
        {
          toId: 'result -> specific responsibility',
          image: 'specific_reason_yes',
          title: 'Ja',
          subtitle: 'Ich weiß bereits sehr genau was und wem ich helfen will.'
        },
        {
          toId: 'uncertain projects',
          image: 'unknown',
          title: 'Nein',
          subtitle: 'Ich habe höchstens eine vage Vorstellung davon, was und wen ich unterstützen sollte.'
        }
      ]
    },
    {
      id: 'uncertain projects',
      title: 'Risikoreiche Projekte?',
      question: 'Ist es OK für dich risikoreiche Projekte zu priorisieren, falls der potentielle Nutzen hoch genug ist? \n' +
                'Würdest du z.B. eher etwas tun, von dem du denkst, dass es eine 1%-ige Change hätte 1.000 Leben zu retten, \n' +
                'als ein Leben sicher zu bewahren?',
      answers: [
        {
          toId: 'time scope',
          image: 'uncertain_projects_yes',
          title: 'Ja',
          subtitle: 'Wir sollten unabhängig von der Unsicherheit das tun, was im Durchschnitt den größten Effekt hat.'
        },
        {
          toId: 'measurable goals',
          image: 'uncertain_projects_no',
          title: 'Nein',
          subtitle: 'Wir sollten sicherstellen, dass wir wirklich etwas bewirken.'
        }
      ]
    },
    {
      id: 'time scope',
      title: 'Wann willst du helfen?',
      question: 'Sollten wir unsere Aufmerksamkeit auf die nächsten Jahrzehnte richten - vielleicht auf Grund unserer Pflicht \n' +
                'unserer Generation gegenüber - oder weil wir die fernere Zukunft nicht sicher beeinflussen können? \n' +
                'Oder ist es lohnenswert sehr langfristige Ziele zu unterstützen?',
      answers: [
        {
          toId: 'more generations',
          image: 'time_scope_longterm',
          title: 'Langfristig',
          subtitle: 'Zukünftige Leben sind genauso wichtig wie heutige Leben, und wir können ihnen helfen.'
        },
        {
          toId: 'measurable goals',
          image: 'time_scope_lifetime',
          title: 'Lebzeit',
          subtitle: 'Wir sollten uns auf die nächsten Jahrzehnte konzentrieren.'
        }
      ]
    },
    {
      id: 'measurable goals',
      title: 'Messbare Ziele?',
      question: 'Sollten wir uns auf Projekte fokussieren, bei denen es möglich ist unseren Effekt zu messen und mit anderen \n' +
                'Projekten zu vergleichen? Es ist nicht möglich, klar zu trennen welche Projekte hierunter fallen. Daher \n' +
                'empfehlen wir, dass du dir gegebenenfalls auch den von dir nicht gewählten Pfad nochmals ansiehst.',
      answers: [
        {
          toId: 'animals per human',
          image: 'measurable_goals_yes',
          title: 'Ja',
          subtitle: 'Nur messbare Projekte ermöglichen uns, uns kontinuierlich zu verbessern.'
        },
        {
          toId: 'rights catastrophe knowledge',
          image: 'measurable_goals_no',
          title: 'Nein',
          subtitle: 'Schwer zu messende Projekte werden sehr häufig vernachlässigt.'
        }
      ]
    },
    {
      id: 'more generations',
      title: 'Sind mehr Generation besser?',
      question: 'Es wird die Menschheit vermutlich nicht für immer geben. Wenn alles andere gleich bliebe, wäre es ein \n' +
                'signifikant schlechteres Szenario, wenn die Menschheit früher aussterben würde (zum Beispiel in wenigen \n' +
                'hunderten statt tausnden von Jahren)?',
      answers: [
        {
          toId: 'existential risks',
          image: 'more_generations_yes',
          title: 'Ja',
          subtitle: 'Es wäre ein Desaster, der Menschheit nicht die Möglichkeit einer lang andauernden Zukunft zu ermöglichen.'
        },
        {
          toId: 'improve society',
          image: 'more_generations_no',
          title: 'Nein',
          subtitle: 'Sterben ist etwas schlimmes, aber nie geboren zu sein ist es nicht.'
        }
      ]
    },
    {
      id: 'existential risks',
      title: 'Sind existentielle Risiken vermeidbar?',
      question: 'Können wir die die Risiken der zukünftigen Auslöschung der Menschheit reduzieren (z.B. durch die Schaffung \n' +
                'entsprechender Institutionen)?',
      answers: [
        {
          toId: 'result -> existential risks',
          image: 'existential_risks_yes',
          title: 'Ja',
          subtitle: 'Wir können etwas tun, um unser Überleben langfristig wenigstens etwas wahrscheinlicher zu machen.'
        },
        {
          toId: 'improve society',
          image: 'existential_risks_no',
          title: 'Nein',
          subtitle: 'Die Risiken sind so fern, dass wir keinen bedeutsamen Effekt auf diese haben können.'
        }
      ]
    },
    {
      id: 'improve society',
      title: 'Kann man die Gesellschaft verbessern?',
      question: 'Können wir durch gesellschaftliche Verbesserungen einen sehr langfristigen Effekt erzielen \n' +
                '(z.B. indem neue Werte den Menschen durch schwere Zeiten helfen)?',
      answers: [
        {
          toId: 'knowledge values institutions',
          image: 'improve_society_yes',
          title: 'Ja',
          subtitle: 'Wir können Fortschritte erzielen, die lang andauern werden.'
        },
        {
          toId: 'knowledge values institutions',
          image: 'improve_society_maybe',
          title: 'Vielleicht',
          subtitle: 'Unsere Veränderungen könnten lange genug anhalten, um einen langfristigen Effekt zu haben.'
        },
        {
          toId: 'environmental damage',
          image: 'improve_society_no',
          title: 'Nein',
          subtitle: 'Die Veränderung wird sich mit der Zeit umkehren oder nie eintreten.'
        }
      ]
    },
    {
      id: 'knowledge values institutions',
      title: 'Wie erzielen wir den größten langfristigen Effekt?',
      question: 'Die Verbesserung welchen Aspekts würde den größten langfristigen Nutzen bringen: Institutionen, \n' +
                'gesellschaftliche Moralvorstellungen oder das Wissen der Menschheit? \n' +
                'Diese Frage ist schwierig und hängt von vielen Fakten ab: Werden die gesellschaftlichen Werte unabdingbar \n' +
                'früher oder später in die gleiche Richtung driften? Werden bestimmte Technologien für die nahe Zukunft für \n' +
                'das überleben der Menschheit bestimmend sein (z.B. künstliche Intelligenz oder Human-Gentechnik)?',
      answers: [
        {
          toId: 'result -> human knowledge',
          image: 'knowledge',
          title: 'Wissen',
          subtitle: ''
        },
        {
          toId: 'result -> values',
          image: 'values',
          title: 'Werte',
          subtitle: ''
        },
        {
          toId: 'result -> institutions',
          image: 'institutions',
          title: 'Institutionen',
          subtitle: ''
        }
      ]
    },
    {
      id: 'environmental damage',
      title: 'Richten wir einen permanenten Schaden an der Umwelt an?',
      question: 'Besteht eine hohe Wahrscheinlichkeit, dass der Mensch durch sein Handeln eine extreme, langfristige \n' +
                'Veränderung der Umwelt herbeiführt (z.B. Treibhauseffekt, nuklearer Winter oder Kontamination der \n' +
                'Weltmeere), die das Leben der Menschheit über die nächsten Jahrhunderte deutlich beschwerlicher machen würde?',
      answers: [
        {
          toId: 'result -> environment',
          image: 'environmental_damage_yes',
          title: 'Ja',
          subtitle: 'Das Wohlergehen von vielen Generationen ist bedroht.'
        },
        {
          toId: 'measurable goals',
          image: 'environmental_damage_no',
          title: 'Nein',
          subtitle: 'Die Wahrscheinlichkeit derart extremer Umweltbeeinflussung ist gering oder sie wäre nur von kurzer Dauer.'
        }
      ]
    },
    {
      id: 'rights catastrophe knowledge',
      title: 'Was ist wichtiger?',
      question: 'Die ethischen und empirischen Annahmen die wir bis hierhin diskutierten, haben keinen beschränkten Fokus. Die \n' +
                'Vielzahl der Probleme müssen gegen ihre Nachverfolgbarkeit und Vernachlässigkeit geprüft werden. Hier sind \n' +
                'einige Vorschläge für vernachlässigte und nachverfolgbare Problemgebiete. Welches davon wäre dir am \n' +
                'wichtigsten?',
      answers: [
        {
          toId: 'result -> human rights',
          image: 'human_rights',
          title: 'Menschenrechte',
          subtitle: ''
        },
        {
          toId: 'result -> catastrophe',
          image: 'catastrophe',
          title: 'Verhinderung globaler Katastrophen',
          subtitle: ''
        },
        {
          toId: 'result -> human knowledge',
          image: 'knowledge',
          title: 'Erweiterung des menschlichen Wissens',
          subtitle: ''
        },
        {
          toId: 'animals per human',
          image: 'unknown',
          title: 'Etwas Anderes',
          subtitle: ''
        }
      ]
    },
    {
      id: 'animals per human',
      title: 'Wie viele Tierleben ist ein Menschenleben wert?',
      question: 'Wie viele Jahre Leid von Hühnern müssten wir verhindern, um so viel Gutes zu tun wie bei der Verhinderung von einem Jahr Leid \n' +
                'eines Menschen? Wir nutzen an dieser Stelle Hühner, da diese ~95% aller Zuchttiere in \n' +
                'der Landwirtschaft ausmachen.',
      answers: [
        {
          toId: 'opportunity health',
          image: 'animals_per_human_more',
          title: 'Mehr als 100',
          subtitle: 'Menschen zu helfen ist wichtiger.'
        },
        {
          toId: 'farm life',
          image: 'animals_per_human_less',
          title: 'Mehr als 100',
          subtitle: 'Tierleid ist so real wie Menschenleid und moralisch genauso relevant.'
        }
      ]
    },
    {
      id: 'farm life',
      title: 'Ist Leben auf Bio-Höfen lebenswert?',
      question: 'Wäre das Leben für ein Tier auf einem landwirtschaftlichen Betrieb nach Bio-Standard mit Freilauffläche \n' +
                'besser als nie geboren worden zu sein?',
      answers: [
        {
          toId: 'result -> animal suffering',
          image: 'farm_life_yes',
          title: 'Ja',
          subtitle: 'Wir sollten die Haltungsbedingungen verbessern.'
        },
        {
          toId: 'result -> animal death',
          image: 'farm_life_no',
          title: 'Nein',
          subtitle: 'Es bleibt ein unwürdiges Leben in Gefangenschaft.'
        }
      ]
    },
    {
      id: 'opportunity health',
      title: 'Chancen oder Gesundheit?',
      question: 'Ganz allgemein gesprochen, ist es besser sich darauf zu konzentrieren die Armut zu reduzieren und Chancen \n' +
                'für Entwicklung zu ermöglichen oder Tod und Leid zu vermeiden?',
      answers: [
        {
          toId: 'poverty education',
          image: 'opportunities',
          title: 'Chancen',
          subtitle: 'Wir sollten Armut reduzieren und den Ärmsten neue Chancen bieten.'
        },
        {
          toId: 'death suffering',
          image: 'health',
          title: 'Gesundheit',
          subtitle: 'Wir sollten vor allem Leid verhindern.'
        },
        {
          toId: 'result -> other',
          image: 'unknown',
          title: 'Etwas Anderes',
          subtitle: ''
        }
      ]
    },
    {
      id: 'poverty education',
      title: 'Lebensstandard oder Bildung?',
      question: 'Nach derzeitigen statistischen Angaben existieren Hilfsorganisationen die folgendes mit 3.500$ erreichen \n' +
                'können. Was davon sollten wir vorziehen?',
      answers: [
        {
          toId: 'result -> poverty',
          image: 'poverty',
          title: 'Armutsbekämpfung',
          subtitle: 'Das Einkommen von drei Familien für ein Jahr verdoppeln.'
        },
        {
          toId: 'result -> education',
          image: 'education',
          title: 'Bildung',
          subtitle: '10 Schuljahre für drei Kinder ermöglichen.'
        }
      ]
    },
    {
      id: 'death suffering',
      title: 'Tode oder Leid verhindern?',
      question: 'Nach derzeitigen statistischen Angaben existieren Hilfsorganisationen die folgendes mit 3.500$ erreichen \n' +
                'können. Was davon sollten wir vorziehen?',
      answers: [
        {
          toId: 'result -> human death',
          image: 'death',
          title: 'Tod',
          subtitle: 'Den Tod eines Kindes durch Malaria verhindern.'
        },
        {
          toId: 'result -> human health',
          image: 'suffering',
          title: 'Leid',
          subtitle: '1000 Menschen 10 Jahre lang benötigte Vitamine verabreichen.'
        }
      ]
    }
  ];
}
