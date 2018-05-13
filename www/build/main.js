webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.organizations = [
            {
                name: 'Against Malaria Foundation',
                thumbnail: 'against_malaria_foundation',
                website: 'https://www.againstmalaria.com',
                donationLink: 'https://www.againstmalaria.com/Donation.aspx',
                category: ['Armut'],
                cause: ['Lebenssicherung'],
                impactDirection: 'reaktiv',
                regions: ['Afrika'],
                questionaireResults: [],
                slogan: 'Insecticide-treated nets to prevent malaria in sub-Saharan Africa.',
                shortDescription: 'Malaria is one of the leading killers of children in Africa. Insecticide-treated nets prevent malaria and are inexpensive — about $5 per net.',
                longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
                impact1000: 'Was wird mit 1000€ erreicht? ...',
                donationDeficit: 20000000,
                evaluators: [
                    {
                        evaluator: 'GiveWell',
                        link: 'https://www.givewell.org/charities/AMF',
                        top: true
                    },
                    {
                        evaluator: 'The Life You Can Save',
                        link: 'https://www.thelifeyoucansave.org/where-to-donate/against-malaria-foundation',
                        top: false
                    }
                ]
            },
            {
                name: 'END Fund',
                thumbnail: 'end_fund',
                website: 'https://end.org/',
                donationLink: 'https://end.org/engage/invest',
                category: ['Armut'],
                cause: ['Gesundheit'],
                impactDirection: 'reaktiv',
                regions: ['Afrika'],
                questionaireResults: [],
                slogan: 'Supporting deworming programs in low-income countries.',
                shortDescription: 'The END Fund manages grants, raises funding and supports government programs for controlling and eliminating neglected tropical diseases, including deworming.',
                longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
                impact1000: 'Was wird mit 1000€ erreicht? ...',
                donationDeficit: 15000000,
                evaluators: [
                    {
                        evaluator: 'GiveWell',
                        link: 'https://www.givewell.org/charities/AMF',
                        top: true
                    }
                ]
            },
            {
                name: 'Future of Life Institute',
                thumbnail: 'future_of_life',
                website: 'https://futureoflife.org',
                donationLink: 'https://futureoflife.org/get-involved/',
                category: ['Existenzrisiken'],
                cause: ['Künstliche Intelligenz', 'Biotechnologie', "Nukleartechnologie", "Klimaschutz"],
                impactDirection: 'proaktiv',
                regions: ["Europa", "USA"],
                questionaireResults: [],
                slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
                impact1000: 'Was wird mit 1000€ erreicht? ...',
                donationDeficit: null,
                evaluators: [
                    {
                        evaluator: 'The Life You Can Save',
                        link: 'https://www.thelifeyoucansave.org/where-to-donate/against-malaria-foundation',
                        top: false
                    }
                ]
            }
        ];
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/about/about.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/contact/contact.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-list>\n      <ion-list-header>Spendenberatung</ion-list-header>\n      <ion-item>\n        <ion-icon name="contact" item-start></ion-icon>\n        @ea\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_data__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionnairePage = /** @class */ (function () {
    function QuestionnairePage(navCtrl, dataService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.nav = 'start';
    }
    QuestionnairePage.prototype.answer = function (to) {
        var _this = this;
        this.nav = '';
        var toResult = to.startsWith("result ->");
        function loadingTime() {
            if (toResult)
                return 2500;
            else
                return 400;
        }
        setTimeout(function () {
            _this.nav = to;
        }, loadingTime());
        if (toResult) {
            var loader = this.loadingCtrl.create({
                content: "Ermittle Testresultat...",
                duration: loadingTime()
            });
            loader.present();
        }
    };
    QuestionnairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'questionaire',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/questionnaire/questionnaire.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content>\n  <!-- QUESTIONS -->\n  <ion-list no-lines *ngIf="!nav.startsWith(\'result ->\')" [ngSwitch]="nav" @ngIfAnimation>\n    <ion-item *ngSwitchCase="\'start\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Spend-O-Mat Fragebogen starten</h2>\n        <p text-wrap>\n          Dieser Fragebogen ist darauf ausgelegt eine grobe Einschätzung darüber zu erhalten, welche Zwecke du basierend\n          auf deinen moralischen Vorstellungen und deiner Weltsicht vermutlich unterstützen wolltest. Dieser Fragebogen\n          macht hierbei jedoch viele vereinfachte Annahmen, doch wir hoffen, dass er dir helfen wird, deine eigenen\n          Beweggründe für altruistisches Handeln zu verstehe sowie die Beweggründe anderer.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'specific reason\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Spezieller Zweck?</h2>\n        <p text-wrap>\n          Empfindest du eine vorrangige Verpflichtung dich für einen bestimmten Zweck oder eine bestimmte Gruppe\n          einzusetzen?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'uncertain projects\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Risikoreiche Projekte?</h2>\n        <p text-wrap>\n          Ist es ok für dich risikoreiche Projekte zu priorisieren, falls der potentielle Nutzen hoch genug ist?\n          Würdest du z.B. eher etwas tun, von dem du denkst, dass es eine 1%-ige Change hätte 1.000 Leben zu retten,\n          als ein Leben sicher zu bewahren.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'time scope\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Wann willst du helfen?</h2>\n        <p text-wrap>\n          Sollten wir unsere Aufmerksamkeit auf die nächsten Dekaden richten, vielleicht auf Grund unserer Pflicht\n          unserer Generation gegenüber oder einfach weil wir die Zukunft nicht zuverlässig beeinflussen können?\n          Oder ist es es wert sehr langfristige Ziele zu unterstützen?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'measurable goals\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Messbare Ziele?</h2>\n        <p text-wrap>\n          Sollten wir uns auf Projekte fokussieren, bei denen es möglich ist unseren Effekt zu messen und mit anderen\n          Projekten zu vergleichen? Es ist nicht möglich klar zu trennen welche Projekte hierunter fallen. Daher\n          empfehlen wir, dass du dir evtl. auch den von dir nicht gewählten Pfad nochmals ansiehst.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'more generations\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Sind mehr Generation besser?</h2>\n        <p text-wrap>\n          Es wird die Menschheit vermutlich nicht für immer geben. Wenn alles andere gleich bliebe, wäre es ein\n          signifikant schlechteres Szenario, wenn die Menschheit früher aussterben würde (zum Beispiel in weniger\n          hunderten statt tausnden von Jahren)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'existential risks\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Sind existentielle Risiken vermeidbar?</h2>\n        <p text-wrap>\n          Können wir die die Risiken der zukünftigen menschlichen Auslöschung reduzieren (z.B. durch die Schaffung\n          entsprechender Institutionen)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'improve society\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Kann man die Gesellschaft verbessern?</h2>\n        <p text-wrap>\n          Können wir durch irgendwelche gesellschaftliche Verbesserungen einen extrem lang andauernden Effekt erzielen\n          (z.B. indem neue Werte den Menschen durch schwere Zeiten helfen)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'knowledge values institutions\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Wie erzielen wir den größten langfristigen Effekt?</h2>\n        <p text-wrap>\n          Die Verbesserung welchen Aspekts würde den größten langfristigen Nutzen bringen: Institutionen,\n          gesellschaftliche Moralvorstellungen oder das Wissen der Menschheit?\n          Diese Frage ist schwierig und hängt von vielen Fakten ab: Werden die gesellschaftlichen Werte unabdingbar eh\n          früher oder später in die gleiche Richtung driften? Werden bestimmte Technologien für die nahe Zukunft für\n          das Überleben der MEnschheit bestimmend sein (z.B. künstliche Intelligenz oder Humangentechnik)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'environmental damage\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Richten wir einen permanten Schaden an der Umwelt an?</h2>\n        <p text-wrap>\n          Besteht eine hohe Wahrscheinlichkeit, dass der Mensch durch sein Handeln eine extreme, langfristige\n          Veränderung der Umwelt herbeiführt (z.B. Treibhaus Effekt, nuklearer Winter oder Kontamination der\n          Weltmeere), die das Leben der Menschheit über die nächsten Jahrhunderte deutlich beschwerlicher machen würde.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'rights catastrophe knowledge\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Was ist wichtiger?</h2>\n        <p text-wrap>\n          Die ethischen und emipirischen Annahmen die wir bis hierhin diskutiert haben keinen beschränkten Fokus. Die\n          Vielzahl der Probleme müssen gegen ihre Nachverfolgbarkeit und Vernachlässigkeit geprüft werden. Hier sind\n          einige Vorschläge für vernachlässigte und nachverfolgbare Problemgebiete. Welches davon wäre dir am\n          wichtigsten?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'animals per human\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Wie viele Tierleben ist ein Menschenleben wert?</h2>\n        <p text-wrap>\n          Wie viele Jahre Leid von Hühnern müssten wir verhindern, um mehr Gutes zu tun als wenn wir ein Jahr Leid\n          eines Menschen verhindern könnten? Wir nutzen an dieser Stelle Hühner, da diese ~95% aller Zuchttiere in\n          der Landwirtschaft ausmachen.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'farm life\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Ist Leben auf Bio-Höfen lebenswert?</h2>\n        <p text-wrap>\n          Wäre das Leben für ein Tier auf einem landwirtschaftlichen Betrieb nach Bio Standard mit Freilauffläche\n          besser als nie geboren worden zu sein?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'opportunity health\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Chancen oder Gesundheit?</h2>\n        <p text-wrap>\n          Ganz allgemein gesprochen, ist es besser sich darauf zu konzentrieren die Armut zu reduzieren und Chancen zu\n          für Entwicklung zu ermöglichen oder Tod und Leid zu vermeiden?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'poverty education\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Lebensstandard oder Bildung?</h2>\n        <p text-wrap>\n          Nach derzeitigen statistischen Angaben existieren Hilfsorganisationen die folgendes mit 3.500$ erreichen\n          können. Was davon sollten wir vorziehen?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'death suffering\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Tode oder Leid verhindern?</h2>\n        <p text-wrap>\n          Nach derzeitigen statistischen Angaben existieren Hilfsorganisationen die folgendes mit 3.500$ erreichen\n          können. Was davon sollten wir vorziehen?\n        </p>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- Answers -->\n  <ion-list no-lines *ngIf="!nav.startsWith(\'result ->\')">\n    <ion-item class="card-background-page">\n      <ion-grid fixed>\n        <ion-row [ngSwitch]="nav" justify-content-center>\n          <ion-col *ngSwitchCase="\'start\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'specific reason\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/start.jpg"/>\n              <div class="card-title">OK, verstanden</div>\n              <div class="card-subtitle">Ich will so viel Gutes tun wie möglich!</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'specific reason\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> specific responsibility\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/specific_reason_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Ich weiß bereits sehr genau was und wem ich helfen will.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'specific reason\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'uncertain projects\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/unknown.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Ich habe höchstens eine wage Vorstellung davon, was und wen ich unterstützen sollte.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'uncertain projects\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'time scope\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/uncertain_projects_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Wir sollten tun, was auch immer den größten erwarteten Wert hat.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'uncertain projects\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'measurable goals\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/uncertain_projects_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Wir sollten sicherstellen, dass wir einen Unterschied machen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'measurable goals\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'animals per human\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/measurable_goals_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Nur messbare Projekte ermöglichen uns, uns kontinuierlich zu verbessern.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'measurable goals\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'rights catastrophe knowledge\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/measurable_goals_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Schwer zu messende Projekte werden sehr häufig vernachlässigt.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'time scope\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'more generations\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/time_scope_longterm.jpg"/>\n              <div class="card-title">Langfristig</div>\n              <div class="card-subtitle">Zukünftige Leben sind genauso wichtig wie heutige Leben, und wir können ihnen helfen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'time scope\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'measurable goals\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/time_scope_lifetime.jpg"/>\n              <div class="card-title">Lebzeit</div>\n              <div class="card-subtitle">Wir sollten uns auf die nächsten Jahrzehnte konzentrieren.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'more generations\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'existential risks\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/more_generations_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Es wäre ein Desaster, der Menschheit nicht die Möglichkeit einer lang andauernden Zukunft zu ermöglichen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'more generations\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'improve society\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/more_generations_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Sterben ist etwas schlimmes, aber nie geboren zu sein ist es nicht.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'existential risks\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> existential risk\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/existential_risks_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Wir können etwas tun, um unser Überleben langfristig wenigstens etwas wahrscheinlicher zu machen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'existential risks\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'improve society\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/existential_risks_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Die Risiken sind so fern, dass wir keinen bedeutsamen Effekt auf diese haben können.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'improve society\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'knowledge values institutions\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/improve_society_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Wir können Fortschritte erzielen, die lang andauern werden.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'improve society\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'knowledge values institutions\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/improve_society_maybe.jpg"/>\n              <div class="card-title">Vielleicht</div>\n              <div class="card-subtitle">Unsere Veränderungen könnten lange genug anhalten, um einen langfristigen Effekt zu haben.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'improve society\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'environmental damage\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/improve_society_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Die Veränderung wird mit der Zeit verschwinden oder nie eintreten.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'knowledge values institutions\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human knowledge\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/knowledge.jpg"/>\n              <div class="card-title">Wissen</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'knowledge values institutions\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> values\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/values.jpg"/>\n              <div class="card-title">Werte</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'knowledge values institutions\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> institutions\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/institutions.jpg"/>\n              <div class="card-title">Institutionen</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'environmental damage\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> environment\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/environmental_damage_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Das Wohlergehen von hunderten Generationen ist beroht.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'environmental damage\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'measurable goals\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/environmental_damage_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Die Wahrscheinlichkeit derart extremer Umweltbeeinflussung ist gering oder nur von kurzer Zeit.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human rights\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/human_rights.jpg"/>\n              <div class="card-title">Menschenrechte</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> catastrophe\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/catastrophe.jpg"/>\n              <div class="card-title">Verhinderung globaler Katastrophen</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human knowledge\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/knowledge.jpg"/>\n              <div class="card-title">Erweiterung des menschlichen Wissens</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'animals per human\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/unknown.jpg"/>\n              <div class="card-title">Etwas Anderes</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'animals per human\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'opportunity health\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/animals_per_human_more.jpg"/>\n              <div class="card-title">&gt;100</div>\n              <div class="card-subtitle">Menschen zu helfen ist wichtiger, unter anderem weil es weitere indirekte Effekte hat.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'animals per human\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'farm life\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/animals_per_human_less.jpg"/>\n              <div class="card-title">&lt;100</div>\n              <div class="card-subtitle">Tierleid ist so real wie Menschenleid und moralisch genauso relevant.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'farm life\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> animal suffering\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/farm_life_yes.jpg"/>\n              <div class="card-title">Ja</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'farm life\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> animal death\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/farm_life_no.jpg"/>\n              <div class="card-title">Nein</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'opportunity health\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'poverty education\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/opportunities.jpg"/>\n              <div class="card-title">Chancen</div>\n              <div class="card-subtitle">Wir sollten Armut reduzieren und den ärmsten neue Chancen bieten.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'opportunity health\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'death suffering\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/health.jpg"/>\n              <div class="card-title">Gesundheit</div>\n              <div class="card-subtitle">Wir sollten vor allem Leid verhindern.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'opportunity health\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> other\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/unknown.jpg"/>\n              <div class="card-title">Etwas Anderes</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'poverty education\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> poverty\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/poverty.jpg"/>\n              <div class="card-title">Armutsbekämpfung</div>\n              <div class="card-subtitle">Das Einkommen von drei Familien für ein Jahr verdoppeln.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'poverty education\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> education\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/education.jpg"/>\n              <div class="card-title">Bildung</div>\n              <div class="card-subtitle">10 Schuljahre für 3 Kinder ermöglichen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'death suffering\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human death\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/death.jpg"/>\n              <div class="card-title">Tod</div>\n              <div class="card-subtitle">Den Tod eines Kindes durch Malaria verhindern.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'death suffering\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human health\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/suffering.jpg"/>\n              <div class="card-title">Leid</div>\n              <div class="card-subtitle">1000 Menschen 10 Jahre lang benötigte Vitamine verabreichen.</div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- RESULTS -->\n  <ion-grid fixed *ngIf="nav.startsWith(\'result ->\')" [ngSwitch]="nav">\n    <ion-row justify-content-center>\n      <ion-col *ngSwitchCase="\'result -> existential risk\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Existentielle Risiken reduzieren</ion-card-title>\n            <p>\n              Da mehr Generationen besser sind und da Zivilisationen für Jahrtausende oder gar Jahrmillionen überdauern\n              könnten, ist der Wert der Zukunft gewaltig. Selbst eine minimale Reduzierung der Wahrscheinlichkeit der\n              gloabeln menschlichen Auslöschung, hat großen Wert. Dies kann durch verschiedene Maßnahmen erreicht werden:\n            </p>\n            <ul>\n              <li>Internationale Kooperationen verbessern, um die generelle Wahrnehmung von Risiken zu verbessern, um\n                besser auf unvorgesehende neue Technologien vorbereitet zu sein.</li>\n              <li>Schutz vor Bedrohungen, die diese Kooperationen auflösen könnten.</li>\n              <li>Arbeit daran den Klimawandel besser zu verstehen, um für den Menschen drastische Veränderungen zu\n                verhindern.</li>\n              <li>Die Aufmerksamkeit bzgl. Risiken künstlicher Intelligenzen erhöhen und an wegen Arbeiten, damit\n                KIs moralisch handeln.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> specific responsibility\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Deine spezifische Verantwortung</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human knowledge\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Das menschliche Wissen erweitern</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> values\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Werte und Moralvorstellungen</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> institutions\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Institutionen verbessern</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> environment\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Permanente Umweltschäden verhindern</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human rights\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Menschenrechte</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> catastrophe\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Katastrophen verhindern</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> animal suffering\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Tierleid mindern</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> animal death\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Tierleben retten</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> poverty\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Lebensstandards</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> education\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Bildung</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human death\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Menschenleben retten</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human health\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Globale Gesundheit</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> other\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Wir wissen es nicht</ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            </p>\n            <ul>\n              <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua.</li>\n              <li>At vero eos et accusam et justo duo dolores et ea rebum.</li>\n              <li>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-md-6 col-xl-6>\n        <ion-list>\n          <ion-item-sliding *ngFor="let o of dataService.organizations">\n            <ion-item text-wrap>\n              <ion-thumbnail item-start>\n                <img src="../../assets/imgs/organizations/{{ o.thumbnail }}.jpg"/>\n              </ion-thumbnail>\n              <h2>{{ o.name }}</h2>\n              <h3>{{ o.slogan }}</h3>\n              <p>{{ o.shortDescription }}</p>\n              <ion-badge item-end *ngIf="o.topCharity" color="danger">Top</ion-badge>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="primary">\n                <ion-icon name="information-circle"></ion-icon>\n                Mehr Info\n              </button>\n              <a [href]="o.website">\n                <button ion-button color="secondary">\n                  <ion-icon name="browsers"></ion-icon>\n                  Website\n                </button>\n              </a>\n              <a [href]="o.donationLink">\n                <button ion-button color="danger">\n                  <ion-icon name="cash"></ion-icon>\n                  Spenden\n                </button>\n              </a>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n        <button ion-button block (click)="answer(\'start\')">Test wiederholen</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/questionnaire/questionnaire.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('ngIfAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])('@*', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* animateChild */])(), { optional: true })
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('questionTrigger', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                            left: -1500
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])("0.4s ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                            left: 0
                        }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                            left: 0
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])("0.4s ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                            left: 1500
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_data__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], QuestionnairePage);
    return QuestionnairePage;
}());

//# sourceMappingURL=questionnaire.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_data__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organization_organization__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, dataService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.searchTerm = '';
        this.searchCategories = [];
        this.searchCauses = [];
        this.searchImpactDirection = [];
        this.searchRegion = [];
        this.searchRecommendedBy = [];
        this.organizations = dataService.organizations;
    }
    SearchPage.prototype.listContains = function (list, find) {
        return list.length == 0 || list.filter(function (i) { return i == find; }).length > 0;
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        this.organizations = this.dataService.organizations.filter(function (item) {
            if (_this.advancedSearch) {
                if (_this.searchCategories.length > 0
                    && item.category.filter(function (i1) { return _this.searchCategories.filter(function (i2) { return i1 == i2; }).length > 0; }).length == 0)
                    return false;
                else if (_this.searchCauses.length > 0
                    && item.cause.filter(function (i1) { return _this.searchCauses.filter(function (i2) { return i1 == i2; }).length > 0; }).length == 0)
                    return false;
                else if (_this.searchImpactDirection.length > 0
                    && _this.searchImpactDirection.filter(function (i) { return item.impactDirection == i; }).length == 0)
                    return false;
                else if (_this.searchRegion.length > 0
                    && item.regions.filter(function (i1) { return _this.searchRegion.filter(function (i2) { return i1 == i2; }).length > 0; }).length == 0)
                    return false;
                else if (_this.searchRecommendedBy.length > 0
                    && item.evaluators.filter(function (i1) { return _this.searchRecommendedBy.filter(function (i2) { return i1.evaluator == i2; }).length > 0; }).length == 0)
                    return false;
            }
            for (var key in item)
                if (item[key].toString().toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1)
                    return true;
            return false;
        });
    };
    SearchPage.prototype.openOrganizationModal = function (organization) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__organization_organization__["a" /* OrganizationPage */], organization);
        modal.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/search/search.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-list>\n      <ion-searchbar placeholder="Fang hier an zu suchen..." [(ngModel)]="searchTerm" (ionInput)="search()"></ion-searchbar>\n      <ion-item>\n        <ion-label>Erweiterte Suche</ion-label>\n        <ion-toggle [(ngModel)]="advancedSearch" checked="false" (ionChange)="search()"></ion-toggle>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Kategorie</ion-label>\n        <ion-select [(ngModel)]="searchCategories" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="Armut">Armut</ion-option>\n          <ion-option value="Existenzrisiken">Existenzrisiken</ion-option>\n          <ion-option value="Meta">Meta</ion-option>\n          <ion-option value="Politik">Politik</ion-option>\n          <ion-option value="Tierleid">Tierleid</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Problemfeld</ion-label>\n        <ion-select [(ngModel)]="searchCauses" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Bildung">Bildung</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Biotechnologie">Biotechnologie</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Meta\')" value="Evaluation">Evaluation</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Tierleid\')" value="Haltungsbedingungen">Haltungsbedingungen</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Gesundheit">Gesundheit</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Politik\')" value="Institutionen">Institutionen</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Katastrophenschutz">Katastrophenschutz</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Klimaschutz">Klimaschutz</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Künstliche Intelligenz">Künstliche Intelligenz</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Lebensstandard">Lebensstandard</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Menschenleben">Menschenleben</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Politik\')" value="Menschenrechte">Menschenrechte</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Nukleartechnologie">Nukleartechnologie</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Meta\')" value="Öffentlichkeitsarbeit">Öffentlichkeitsarbeit</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Meta\')" value="Strategie">Stategie</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Tierleid\')" value="Tierleben">Tierleben</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Politik\')" value="Werte und Moral">Werte und Moral</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Wirkrichtung</ion-label>\n        <ion-select [(ngModel)]="searchImpactDirection" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="proaktiv">proaktiv</ion-option>\n          <ion-option value="reaktiv">reaktiv</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Region</ion-label>\n        <ion-select [(ngModel)]="searchRegion" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="Afrika">Afrika</ion-option>\n          <ion-option value="Asien">Asien</ion-option>\n          <ion-option value="Deutschland">Deutschland</ion-option>\n          <ion-option value="Europa">Deutschland</ion-option>\n          <ion-option value="Indien">Indien</ion-option>\n          <ion-option value="Naher Osten">Naher Osten</ion-option>\n          <ion-option value="Südamerika">Südamerika</ion-option>\n          <ion-option value="Südost Asien">Südost Asien</ion-option>\n          <ion-option value="USA">USA</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Empfohlen durch Evalutator</ion-label>\n        <ion-select [(ngModel)]="searchRecommendedBy" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="80.000 hours">80.000 hours</ion-option>\n          <ion-option value="Animal Charity Evalutators">Animal Charity Evalutators</ion-option>\n          <ion-option value="Charity Science">Charity Science</ion-option>\n          <ion-option value="GiveWell">GiveWell</ion-option>\n          <ion-option value="ImpactM">ImpactM</ion-option>\n          <ion-option value="Open Philantrophy Project">Open Philantrophy Project</ion-option>\n          <ion-option value="Phineo">Phineo</ion-option>\n          <ion-option value="Stiftung für Effektiven Altruismus">Stiftung für Effektiven Altruismus</ion-option>\n          <ion-option value="The Life You Can Save">The Life You Can Save</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item-sliding *ngFor="let o of organizations">\n        <ion-item text-wrap>\n          <ion-thumbnail item-start>\n            <img src="../../assets/imgs/organizations/{{ o.thumbnail }}.jpg"/>\n          </ion-thumbnail>\n          <h2>{{ o.name }}</h2>\n          <h3>{{ o.slogan }}</h3>\n          <p>{{ o.shortDescription }}</p>\n          <ion-badge item-end *ngIf="o.topCharity" color="danger">Top</ion-badge>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="openOrganizationModal({o: o})">\n            <ion-icon name="information-circle"></ion-icon>\n            Mehr Info\n          </button>\n          <a [href]="o.website">\n            <button ion-button color="secondary">\n              <ion-icon name="browsers"></ion-icon>\n              Website\n            </button>\n          </a>\n          <a [href]="o.donationLink">\n            <button ion-button color="danger">\n              <ion-icon name="cash"></ion-icon>\n              Spenden\n            </button>\n          </a>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_data__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services_data__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _c || Object])
    ], SearchPage);
    return SearchPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganizationPage = /** @class */ (function () {
    function OrganizationPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.organization = this.params.get('o');
    }
    OrganizationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrganizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/organization/organization.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ organization.name }}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item text-wrap>\n    <h2>{{ organization.slogan }}</h2>\n    <h3>{{ organization.shortDescription }}</h3>\n    <p>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n      takimata sanctus est Lorem ipsum dolor sit amet.\n    </p>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/organization/organization.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrganizationPage);
    return OrganizationPage;
}());

//# sourceMappingURL=organization.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_questionnaire_questionnaire__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_organization_organization__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* EADonationApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* EADonationApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* EADonationApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_data__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EADonationApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_questionnaire_questionnaire__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EADonationApp = /** @class */ (function () {
    function EADonationApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */];
        this.tabsPlacement = 'bottom';
        this.tabsLayout = 'icon-top';
        if (!platform.is('mobile')) {
            this.tabsPlacement = 'top';
            this.tabsLayout = 'icon-left';
        }
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    EADonationApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thomsen/dev/ea/src/app/app.html"*/'<ion-header no-border>\n  <ion-toolbar fixed color="primary">\n    <ion-title>\n      <img id="logo" alt="logo" height="40" src="../assets/icon/logo.png"/>\n      <span id="title">{{title}}</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-tabs color="primary" [tabsPlacement]="tabsPlacement" [tabsLayout]="tabsLayout">\n  <ion-tab [root]="tab1Root" tabTitle="Spend-O-Mat" (ionSelect)="this.title =\'Spend-O-Mat\'" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Suche" (ionSelect)="this.title =\'Hilfsorganisationen\'" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="EA" (ionSelect)="this.title =\'Effektiver Altruismus\'" tabIcon="school"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Kontakt" (ionSelect)="this.title =\'Kontakt\'" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], EADonationApp);
    return EADonationApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map