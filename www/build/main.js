webpackJsonp([0],{

/***/ 101:
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
            // Armut
            {
                name: 'Against Malaria Foundation',
                thumbnail: 'against_malaria_foundation',
                website: 'https://www.againstmalaria.com',
                donationLink: 'https://www.againstmalaria.com/Donation.aspx',
                category: ['Armut'],
                cause: ['Menschenleben'],
                impactDirection: 'reaktiv',
                regions: ['Afrika'],
                questionaireResults: ['human death'],
                slogan: 'Insecticide-treated nets to prevent malaria in sub-Saharan Africa.',
                shortDescription: 'Malaria is one of the leading killers of children in Africa. Insecticide-treated nets prevent malaria and are inexpensive — about $5 per net.',
                longDescription: 'The Against Malaria Foundation (AMF) is a United Kingdom-based charity that provides long-lasting insecticidal nets (LLINs) to populations at high risk of malaria, primarily in Africa. Nets are distributed through partnerships with the International Red Cross, the Malaria Consortium, and others, with partners responsible for costs of distribution. Distributions include malaria education for the local population, and they are documented through reports, photos, and video. Post-distribution check-ups are carried out 6, 12, 18, 24, and 30 months to assess net usage and conditions.',
                impact1000: 'Was wird mit 1000€ erreicht? Ungefähr 250 Netze werden verteilt: grob geschätzt reicht die Verteilung von 900 Netze, um ein Leben zu retten.',
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
                name: 'Malaria Consortium',
                thumbnail: 'malaria_consortium',
                website: 'https://www.malariaconsortium.org',
                donationLink: 'https://www.malariaconsortium.org/support/donate.htm',
                category: ['Armut'],
                cause: ['Menschenleben'],
                impactDirection: 'reaktiv',
                regions: ['Afrika'],
                questionaireResults: ['human death'],
                slogan: 'Improving prevention, diagnosis and treatment for neglected tropical diseases.',
                shortDescription: 'Malaria Consortium is one of the world’s leading non-profit organisations specialising in the prevention, control and treatment of malaria and other communicable diseases among vulnerable populations.',
                longDescription: 'Malaria Consortium is one of the world’s leading non-profit organisations specialising in the prevention, control and treatment of malaria and other communicable diseases among vulnerable populations. They create tailored, evidence-based solutions that have a positive impact on the wider health system and economy. It is this combination of activities and the depth of their expertise that sets them apart from others.',
                impact1000: 'Was wird mit 1000€ erreicht? Ungefähr 150 Netze könnten gekauft werden, oder 15000 Malaria Diagnostic tests gemacht, oder 250 Kinder könnten von Malaria durch Chemoprevention geschützt werden.',
                donationDeficit: 10000000,
                evaluators: [
                    {
                        evaluator: 'GiveWell',
                        link: 'https://www.givewell.org/charities/malaria-consortium',
                        top: true
                    }
                ]
            },
            {
                name: 'Schistosomiasis Control Initiative',
                thumbnail: 'sci',
                website: 'http://www.imperial.ac.uk/schistosomiasis-control-initiative',
                donationLink: 'http://www.imperial.ac.uk/schistosomiasis-control-initiative/donate/',
                category: ['Armut'],
                cause: ['Gesundheit'],
                impactDirection: 'reaktiv',
                regions: ['Afrika'],
                questionaireResults: ['human health'],
                slogan: 'Treating neglected tropical diseases in sub-Saharan Africa.',
                shortDescription: 'SCI treats children and at risk adults for schistosomiasis and soil transmitted helminths (whipworm, hookworm, and roundworm), preventing anaemia, impaired growth and development in children and the development of life-threatening conditions of bladder cancer, kidney malfunction or liver and spleen damage.',
                longDescription: 'SCI assists Ministries of Health across sub-Saharan Africa to control and then eliminate schistosomiasis and soil transmitted helminths from their population utilising the World Health Organization’s Drug Donation Programme for praziquantel and albendazole. 230 million people, one-third of the total population of Africa, need a regular annual treatment of praziquantel, and 400 million people need a regular annual treatment of albendazole, to eliminate these parasitic diseases from their bodies.',
                impact1000: 'Was wird mit 1000€ erreicht? Ungefähr 2000 Menschen werden behandelt.',
                donationDeficit: 30000000,
                evaluators: [
                    {
                        evaluator: 'GiveWell',
                        link: 'https://www.givewell.org/charities/Schistosomiasis-Control-Initiative',
                        top: true
                    },
                    {
                        evaluator: 'The Life You Can Save',
                        link: 'https://www.thelifeyoucansave.org/where-to-donate/schistosomiasis-control-initiative',
                        top: false
                    }
                ]
            },
            {
                name: 'Helen Keller International',
                thumbnail: 'helen_keller_international',
                website: 'http://www.hki.org',
                donationLink: 'http://hekein.convio.net/site/Donation2?df_id=1860&mfc_pref=T&1860.donation=form1&_ga=2.184512229.218491984.1529773877-1415190627.1529773877',
                category: ['Armut'],
                cause: ['Gesundheit'],
                impactDirection: 'reaktiv',
                regions: ['Weltweit'],
                questionaireResults: ['human health'],
                slogan: 'Helping stop blindness and malnutrition',
                shortDescription: 'Helen Keller International (HKI) combats the causes and consequences of blindness and malnutrition by establishing programs based on evidence and research in vision, health and nutrition.',
                longDescription: 'Helen Keller International is dedicated to saving the sight and lives of the most vulnerable and disadvantaged. They combat the causes and consequences of blindness and malnutrition by establishing programs based on evidence and research in vision, health and nutrition. They currently have more than 100 programs in 20 African and Asian countries, as well as in the United States.',
                impact1000: 'Was wird mit 1000€ erreicht? About 1500 Vitamin A supplements will be distributed.',
                donationDeficit: 40000000,
                evaluators: [
                    {
                        evaluator: 'GiveWell',
                        link: 'https://www.givewell.org/charities/helen-keller-international',
                        top: true
                    },
                    {
                        evaluator: 'The Life You Can Save',
                        link: 'https://www.thelifeyoucansave.org/where-to-donate/helen-keller-internationals-vitamin-a-supplementation',
                        top: true
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
                questionaireResults: ['human health'],
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
                name: 'Evidence Action\'s - No Lean Season',
                thumbnail: 'evidence_action_nls',
                website: 'https://www.evidenceaction.org/beta-no-lean-season/#intro-no-lean-season',
                donationLink: 'https://effektiveraltruismus.de/spenden/',
                category: ['Armut'],
                cause: ['Gesundheit', 'Lebensstandard'],
                impactDirection: 'reactive',
                regions: ['Asien'],
                questionaireResults: ['poverty'],
                slogan: 'Eine einfache Fahrkarte genügt, um saisonale Armut zu vermindern.',
                shortDescription: 'No Lean Season verringert saisionale Armut in ländlichen Region, indem sie Arbeitsmobilität ermöglicht und so Einkommen erhöht.',
                longDescription: 'Sasionale Armut ensteht in der Zeit zwischen Saat und Ernte in denen es wenig Jobs gibt, die Nahrungvorräte ausgehen und es so zu Mangelernährung insbesondere von Schwangeren und kleinen Kindern kommt. No Lean Season unterstützt teilnehmende Haushalte mit $20, um eine Reise zu städtischen Gebieten in der Umgebung möglich zu machen, die in dieser Zeit mehr Jobs bieten. Studien der Universität Yale haben ergeben, dass diese saisonalen Arbeitsmöglichkeiten in jedem Haushalt durschnittlich eine Mahlzeit pro Kopf mehr an Tag möglich machen.',
                impact1000: 'In Haushalt, die an dem Programm teilnehmen, konnte ein Drittel mehr für Nahrung und andere Notwendigkeiten ausgeben werden, pro Person wurden ca. 600 Kalorien mehr am Tag konsumiert.',
                donationDeficit: null,
                evaluators: [
                    {
                        evaluator: 'GiveWell',
                        link: 'https://www.givewell.org/charities/no-lean-season',
                        top: true
                    },
                    {
                        evaluator: 'The Life You Can Save',
                        link: 'https://www.thelifeyoucansave.org/where-to-donate/evidence-action',
                        top: true
                    }
                ]
            },
            // Existenzrisiken
            {
                name: 'Future of Life Institute',
                thumbnail: 'future_of_life',
                website: 'https://futureoflife.org',
                donationLink: 'https://futureoflife.org/get-involved/',
                category: ['Existenzrisiken'],
                cause: ['Künstliche Intelligenz', 'Biotechnologie', 'Nukleartechnologie', 'Klimaschutz'],
                impactDirection: 'proaktiv',
                regions: [],
                questionaireResults: ['existential risks'],
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
            },
            {
                name: 'Machine Intelligence Research Institute',
                thumbnail: 'miri',
                website: 'https://intelligence.org',
                donationLink: 'https://intelligence.org/donate/',
                category: ['Existenzrisiken'],
                cause: ['Künstliche Intelligenz'],
                impactDirection: 'proaktiv',
                regions: [],
                questionaireResults: ['human knowledge'],
                slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
                impact1000: 'Was wird mit 1000€ erreicht? ...',
                donationDeficit: null,
                evaluators: []
            },
            {
                name: 'Cool Earth',
                thumbnail: 'cool_earth',
                website: 'https://www.coolearth.org',
                donationLink: 'https://www.coolearth.org/#donate',
                category: ['Existenzrisiken'],
                cause: ['Klimaschutz'],
                impactDirection: 'reaktiv',
                regions: ['Ozeanien', 'Südamerika', 'Afrika'],
                questionaireResults: ['environment'],
                slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
                impact1000: 'Was wird mit 1000€ erreicht? ...',
                donationDeficit: null,
                evaluators: []
            },
            {
                name: 'Future of Humanity Institute',
                thumbnail: 'future_of_humanity',
                website: 'https://www.fhi.ox.ac.uk',
                donationLink: '',
                category: ['Existenzrisiken', 'Meta'],
                cause: ['Künstliche Intelligenz', 'Biotechnologie', 'Strategie'],
                impactDirection: 'proaktiv',
                regions: [],
                questionaireResults: ['existential risks'],
                slogan: 'Investigating what we can do now to ensure a long flourishing future.',
                shortDescription: 'The Future of Humanity Institute is a multidisciplinary research institute at the University of Oxford. Academics at FHI bring the tools of mathematics, philosophy and social sciences to bear on big-picture questions about humanity and its prospects.',
                longDescription: 'The Future of Humanity Institute is a research institute at the university of Oxford. Using tools from mathematics, philosophy and social sciences, the researchers try to identify and understand potential major threats to humanity and strategies for avoiding them. Such threats include drastic climate change, nuclear warfare and nuclear terrorism, molecular nanotechnology, and artificial general intelligence ',
                impact1000: 'Was wird mit 1000€ erreicht? ...',
                donationDeficit: null,
                evaluators: []
            },
            // Meta
            {
                name: 'GiveWell',
                thumbnail: 'givewell',
                website: 'https://www.givewell.org',
                donationLink: 'https://secure.givewell.org/support-givewell',
                category: ['Meta'],
                cause: ['Evaluation'],
                impactDirection: 'reaktiv',
                regions: [],
                questionaireResults: [],
                slogan: 'High impact giving opportunities that are supported by in-depth charity research.',
                shortDescription: 'GiveWell is a nonprofit dedicated to finding outstanding giving opportunities and publishing the full details of their analysis to help donors decide where to give. Their current primary focus is on improving life in the developing world.',
                longDescription: 'Unlike charity evaluators that focus solely on financials, assessing administrative or fundraising costs, GiveWell conduct in-depth research aiming to determine how much good a given program accomplishes (in terms of lives saved, lives improved, etc.) per dollar spent. Rather than try to rate as many charities as possible, they focus on the few charities that stand out most in order to find and confidently recommend high-impact giving opportunities.',
                impact1000: null,
                donationDeficit: null,
                evaluators: []
            },
            {
                name: 'ImpactMatters',
                thumbnail: 'impactmatters',
                website: 'https://www.impactm.org',
                donationLink: null,
                category: ['Meta'],
                cause: ['Evaluation'],
                impactDirection: 'reaktiv',
                regions: [],
                questionaireResults: [],
                slogan: 'Auditing nonprofits to rigorously estimate their philanthropic impact',
                shortDescription: 'ImpactMatters conducts “impact audits” of nonprofits to rigorously estimate their philanthropic impact, compelling them and their funders to make evidence-based decisions.',
                longDescription: 'Even the best run nonprofits can benefit from an outside perspective on how to increase their accountability and impact. ImpactMatters provide an objective, independent estimate of the impact and cost of the nonprofit, and then provide the nonprofit with specific, actionable guidance on how to improve evaluation and data systems. If the nonprofit agrees to publication, ImpactMatters issues a report, which includes estimates of impact and cost, ratings of the quality of evidence undergirding those estimates and ratings of monitoring systems and data protocols. The impact audit team then issues a private management letter outlining ways that the auditee can improve its effectiveness.',
                impact1000: null,
                donationDeficit: null,
                evaluators: []
            },
            {
                name: 'Innovations for Poverty Action',
                thumbnail: 'innovations_for_poverty_action',
                website: 'https://www.poverty-action.org',
                donationLink: 'https://www.poverty-action.org/monthly-donation',
                category: ['Meta'],
                cause: ['Evaluation'],
                impactDirection: 'reaktiv',
                regions: [],
                questionaireResults: [],
                slogan: 'Randomised controlled trials of programs and policies for the poor.',
                shortDescription: 'Innovations for Poverty Action conducts controlled, randomized studies of aid programs. Their studies are conducted in much the same matter as scientific studies to determine the impact of such programs and find effective methods for reducing poverty',
                longDescription: 'Innovations for Poverty Action (IPA) is a research and policy nonprofit that discovers and promotes effective solutions to global poverty problems. IPA brings together researchers and decision-makers to design, rigorously evaluate, and refine these solutions and their applications, ensuring that the evidence created is used to improve the lives of the world’s poor.',
                impact1000: 'Was wird mit 1000€ erreicht? Eine Studie wird teilweise unterstützt (Eine Studie kostet normalerweise zwischen 50 000 und 500 000 euro).',
                donationDeficit: 2000000,
                evaluators: [
                    {
                        evaluator: 'GiveWell',
                        link: 'https://www.givewell.org/international/charities/ipa',
                        top: false
                    },
                    {
                        evaluator: 'The Life You Can Save',
                        link: 'https://www.thelifeyoucansave.org/where-to-donate/innovations-for-poverty-action',
                        top: false
                    }
                ]
            },
            {
                name: 'Copenhagen Consensus Center',
                thumbnail: 'copenhagen_consensus_center',
                website: 'http://www.copenhagenconsensus.com',
                donationLink: 'http://www.copenhagenconsensus.com/make-donation',
                category: ['Meta'],
                cause: ['Strategie'],
                impactDirection: 'proaktiv',
                regions: [],
                questionaireResults: ['human knowledge'],
                slogan: 'Expert advice to do the most good.',
                shortDescription: 'The Copenhagen Consensus Center is a think tank that researches the smartest solutions for the biggest problems facing the world, advising policy-makers and philanthropists how to spend their money most effectively.',
                longDescription: 'The Copenhagen Consensus Center is a US non-profit think tank, founded and headed by Bjørn Lomborg.[2] The Center organizes the Copenhagen Consensus, a conference of prominent economists held every four years, where potential solutions to global issues are examined and prioritized using cost-benefit analysis. Recently, the Copenhagen Consensus Center has refocused its efforts into nationally oriented research, and is currently working extensively in Haiti and Bangladesh, while also planning expansion to India, where it is partnering with high profile and influential organisations.',
                impact1000: null,
                donationDeficit: null,
                evaluators: []
            },
            {
                name: 'Centre for Effective Altruism',
                thumbnail: 'centre_for_effective_altruism',
                website: 'https://www.centreforeffectivealtruism.org',
                donationLink: 'https://www.centreforeffectivealtruism.org/donate/',
                category: ['Meta'],
                cause: ['Öffentlichkeitsarbeit'],
                impactDirection: 'proaktiv',
                regions: [],
                questionaireResults: [],
                slogan: 'Growing and maintaining the Effective Altruism movement',
                shortDescription: 'The Centre for Effective Altruism acts as a springboard for the effective altruism community. It aims to promote and strengthen effective altruism as an idea and a community, help figure out how best to advance the wellbeing of all, and inspire people to take action based on that knowledge.',
                longDescription: 'The Centre for Effective Altruism runs and coordinates a variety of projects aimed at supporting and growing the effective altruism community. It supports local groups, funds research, runs conferences, produces a newsletter and collates and produces effective altruism-related content online. It also provides grants to new projects within that community, together with organisational support to help them grow and develop quickly. ',
                impact1000: null,
                donationDeficit: null,
                evaluators: []
            },
            {
                name: '80,000 hours',
                thumbnail: '80000_hours',
                website: 'https://80000hours.org',
                donationLink: 'https://80000hours.org/support-us/donate/',
                category: ['Meta'],
                cause: ['Öffentlichkeitsarbeit'],
                impactDirection: 'proaktiv',
                regions: [],
                questionaireResults: ['values'],
                slogan: 'Helping as many people as possible lead high-impact careers',
                shortDescription: '80,000 hours provides career advice for talented young people who want to have a social impact.',
                longDescription: '80,000 hours does in-depth research into how graduates can make the biggest difference possible with their careers, both through overall career choice and within a given field. Based on this, they provide an online career guide with supporting articles and tools; in-person advice including a workshop and one-on-one follow up; and links to a global community of people who want to work together to have the greatest possible positive impact.',
                impact1000: null,
                donationDeficit: null,
                evaluators: []
            },
            {
                name: 'Stiftung für Effektiven Altruismus',
                thumbnail: 'ea_stiftung',
                website: 'https://ea-stiftung.org',
                donationLink: 'https://ea-stiftung.org/spenden/',
                category: ['Meta'],
                cause: ['Öffentlichkeitsarbeit'],
                impactDirection: 'proaktiv',
                regions: ['Deutschland'],
                questionaireResults: ['values'],
                slogan: 'Die Philosophie des Effektiven Altruismus weiterentwickeln, verbreiten und umsetzen',
                shortDescription: 'Die Stiftung für Effektiven Altruismus trägt zum nachhaltigen Wachstum der Bewegung des Effektiven Altruismus bei. Dabei streben sie eine Welt ohne extremes Leid an. Um die Philosophie des Effektiven Altruismus weiterzuentwickeln, zu verbreiten und umzusetzen, verfolgen sie Projekte in drei Bereichen: Forschung, Community und Philanthropie.',
                longDescription: 'Die Stiftung für Effektiven Altruismus versucht eine Gemeinschaft von außerordentlich engagierten Menschen aufzubauen, die ihr Leben für andere einsetzen wollen und sich der Komplexität der Herausforderung bewusst sind. Sie stellen Infrastruktur in Form von Veranstaltungen und Lokalgruppen bereit, damit die Bewegung nachhaltig wachsen kann und die Kernideen des Effektiven Altruismus erhalten bleiben. In der Öffentlichkeit wollen sie den Effektiven Altruismus in all seinen Nuancen darstellen, um eine konstruktive Diskussion darüber zu ermöglichen.',
                impact1000: null,
                donationDeficit: null,
                evaluators: []
            }
            // Politik
            // Tierleid
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

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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

var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/about/about.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content padding>\n  <ion-grid>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PrivacyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/privacy/privacy.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Datenschutzerkl&auml;rung</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item text-wrap>\n      <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>\n      <p><b>Abcdef</b></p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Ihre Betroffenenrechte</h2>\n      <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>\n      <ul>\n        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>\n        <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>\n        <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>\n        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>\n        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>\n        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>\n      </ul>\n      <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>\n      <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>\n      <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="nofollow noopener">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>\n      <h3>Art und Zweck der Verarbeitung:</h3>\n      <p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.</p>\n      <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>\n      <ul>\n        <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>\n        <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>\n        <li>Auswertung der Systemsicherheit und -stabilität sowie</li>\n        <li>zu weiteren administrativen Zwecken.</li>\n      </ul>\n      <p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>\n      <h3>Rechtsgrundlage:</h3>\n      <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p>\n      <h3>Empfänger:</h3>\n      <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p>\n      <h3>Speicherdauer:</h3>\n      <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>\n      <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>\n      <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen. </p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Newsletter</h2>\n      <h3>Art und Zweck der Verarbeitung:</h3>\n      <p>Ihre Daten werden ausschließlich dazu verwendet, Ihnen den abonnierten Newsletter per E-Mail zuzustellen. Die Angabe Ihres Namens erfolgt, um Sie im Newsletter persönlich ansprechen zu können und ggf. zu identifizieren, falls Sie von Ihren Rechten als Betroffener Gebrauch machen wollen.</p>\n      <p>Für den Empfang des Newsletters ist die Angabe Ihrer E-Mail-Adresse ausreichend. Bei der Anmeldung zum Bezug unseres Newsletters werden die von Ihnen angegebenen Daten ausschließlich für diesen Zweck verwendet. Abonnenten können auch über Umstände per E-Mail informiert werden, die für den Dienst oder die Registrierung relevant sind (bspw. Änderungen des Newsletterangebots oder technische Gegebenheiten).</p>\n      <p>Für eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das „Double-opt-in“-Verfahren ein. Hierzu protokollieren wir die Bestellung des Newsletters, den Versand einer Bestätigungsmail und den Eingang der hiermit angeforderten Antwort. Weitere Daten werden nicht erhoben. Die Daten werden ausschließlich für den Newsletterversand verwendet und nicht an Dritte weitergegeben.</p>\n      <h3>Rechtsgrundlage:</h3>\n      <p>Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), übersenden wir Ihnen regelmäßig unseren Newsletter bzw. vergleichbare Informationen per E-Mail an Ihre angegebene E-Mail-Adresse. </p>\n      <p>Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den Newsletterversand können Sie jederzeit mit Wirkung für die Zukunft widerrufen. In jedem Newsletter findet sich dazu ein entsprechender Link. Außerdem können Sie sich jederzeit auch direkt auf dieser Website abmelden oder uns Ihren Widerruf über die am Ende dieser Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.</p>\n      <h3>Empfänger:</h3>\n      <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>\n      <h3>Speicherdauer:</h3>\n      <p>Die Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt. Danach werden sie gelöscht.</p>\n      <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>\n      <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne bestehende Einwilligung können wir Ihnen unseren Newsletter leider nicht zusenden.</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Kontaktformular</h2>\n      <h3>Art und Zweck der Verarbeitung:</h3>\n      <p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>\n      <h3>Rechtsgrundlage:</h3>\n      <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art 6 Abs. 1 lit. f DSGVO).</p>\n      <p>Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>\n      <p>Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art 6 Abs. 1 lit. b DSGVO).</p>\n      <h3>Empfänger:</h3>\n      <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>\n      <h3>Speicherdauer:</h3>\n      <p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>\n      <p>Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen. </p>\n      <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>\n      <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>SSL-Verschlüsselung</h2>\n      <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Änderung unserer Datenschutzbestimmungen</h2>\n      <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Fragen an den Datenschutzbeauftragten</h2>\n      <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>\n      <p>abcdef@xyz123.com</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/privacy/privacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/organization/organization.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ organization.name }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item text-wrap>\n    <h2>{{ organization.slogan }}</h2>\n    <h3>{{ organization.shortDescription }}</h3>\n    <p>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,\n      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n      takimata sanctus est Lorem ipsum dolor sit amet.\n    </p>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/organization/organization.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrganizationPage);
    return OrganizationPage;
}());

//# sourceMappingURL=organization.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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

var ContactPage = /** @class */ (function () {
    function ContactPage() {
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/contact/contact.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-list>\n      <ion-list-header>Spendenberatung</ion-list-header>\n      <ion-item>\n        <ion-icon name="contact" item-start></ion-icon>\n        @ea\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_modal__ = __webpack_require__(33);
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
    function QuestionnairePage(navCtrl, loadingCtrl, dataService, modalService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.modalService = modalService;
        this.nav = 'start';
        this.organizations = [];
        this.modalService;
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
            this.organizations = this.dataService.organizations.filter(function (item) {
                return item.questionaireResults.indexOf(to.replace("result -> ", "")) >= 0;
            });
            var loader = this.loadingCtrl.create({
                content: "Ermittle Testresultat...",
                duration: loadingTime()
            });
            loader.present();
        }
    };
    QuestionnairePage.prototype.gotoTabSearch = function () {
        this.navCtrl.parent.select(1);
    };
    QuestionnairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'questionaire',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/questionnaire/questionnaire.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content>\n  <!-- QUESTIONS -->\n  <ion-list no-lines *ngIf="!nav.startsWith(\'result ->\')" [ngSwitch]="nav" @ngIfAnimation>\n    <ion-item *ngSwitchCase="\'start\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Spend-O-Mat Fragebogen starten</h2>\n        <p text-wrap>\n          Dieser Fragebogen ist darauf ausgelegt eine grobe Einschätzung darüber zu erhalten, welche Zwecke du basierend\n          auf deinen moralischen Vorstellungen und deiner Weltsicht vermutlich unterstützen wolltest. Dieser Fragebogen\n          macht hierbei jedoch viele vereinfachte Annahmen, doch wir hoffen, dass er dir helfen wird, deine eigenen\n          Beweggründe für altruistisches Handeln zu verstehe sowie die Beweggründe anderer.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'specific reason\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Spezieller Zweck?</h2>\n        <p text-wrap>\n          Empfindest du eine vorrangige Verpflichtung dich für einen bestimmten Zweck oder eine bestimmte Gruppe\n          einzusetzen?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'uncertain projects\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Risikoreiche Projekte?</h2>\n        <p text-wrap>\n          Ist es ok für dich risikoreiche Projekte zu priorisieren, falls der potentielle Nutzen hoch genug ist?\n          Würdest du z.B. eher etwas tun, von dem du denkst, dass es eine 1%-ige Change hätte 1.000 Leben zu retten,\n          als ein Leben sicher zu bewahren.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'time scope\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Wann willst du helfen?</h2>\n        <p text-wrap>\n          Sollten wir unsere Aufmerksamkeit auf die nächsten Dekaden richten, vielleicht auf Grund unserer Pflicht\n          unserer Generation gegenüber oder einfach weil wir die Zukunft nicht zuverlässig beeinflussen können?\n          Oder ist es es wert sehr langfristige Ziele zu unterstützen?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'measurable goals\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Messbare Ziele?</h2>\n        <p text-wrap>\n          Sollten wir uns auf Projekte fokussieren, bei denen es möglich ist unseren Effekt zu messen und mit anderen\n          Projekten zu vergleichen? Es ist nicht möglich klar zu trennen welche Projekte hierunter fallen. Daher\n          empfehlen wir, dass du dir evtl. auch den von dir nicht gewählten Pfad nochmals ansiehst.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'more generations\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Sind mehr Generation besser?</h2>\n        <p text-wrap>\n          Es wird die Menschheit vermutlich nicht für immer geben. Wenn alles andere gleich bliebe, wäre es ein\n          signifikant schlechteres Szenario, wenn die Menschheit früher aussterben würde (zum Beispiel in weniger\n          hunderten statt tausnden von Jahren)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'existential risks\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Sind existentielle Risiken vermeidbar?</h2>\n        <p text-wrap>\n          Können wir die die Risiken der zukünftigen menschlichen Auslöschung reduzieren (z.B. durch die Schaffung\n          entsprechender Institutionen)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'improve society\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Kann man die Gesellschaft verbessern?</h2>\n        <p text-wrap>\n          Können wir durch irgendwelche gesellschaftliche Verbesserungen einen extrem lang andauernden Effekt erzielen\n          (z.B. indem neue Werte den Menschen durch schwere Zeiten helfen)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'knowledge values institutions\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Wie erzielen wir den größten langfristigen Effekt?</h2>\n        <p text-wrap>\n          Die Verbesserung welchen Aspekts würde den größten langfristigen Nutzen bringen: Institutionen,\n          gesellschaftliche Moralvorstellungen oder das Wissen der Menschheit?\n          Diese Frage ist schwierig und hängt von vielen Fakten ab: Werden die gesellschaftlichen Werte unabdingbar eh\n          früher oder später in die gleiche Richtung driften? Werden bestimmte Technologien für die nahe Zukunft für\n          das Überleben der MEnschheit bestimmend sein (z.B. künstliche Intelligenz oder Humangentechnik)?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'environmental damage\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Richten wir einen permanten Schaden an der Umwelt an?</h2>\n        <p text-wrap>\n          Besteht eine hohe Wahrscheinlichkeit, dass der Mensch durch sein Handeln eine extreme, langfristige\n          Veränderung der Umwelt herbeiführt (z.B. Treibhaus Effekt, nuklearer Winter oder Kontamination der\n          Weltmeere), die das Leben der Menschheit über die nächsten Jahrhunderte deutlich beschwerlicher machen würde.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'rights catastrophe knowledge\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Was ist wichtiger?</h2>\n        <p text-wrap>\n          Die ethischen und emipirischen Annahmen die wir bis hierhin diskutiert haben keinen beschränkten Fokus. Die\n          Vielzahl der Probleme müssen gegen ihre Nachverfolgbarkeit und Vernachlässigkeit geprüft werden. Hier sind\n          einige Vorschläge für vernachlässigte und nachverfolgbare Problemgebiete. Welches davon wäre dir am\n          wichtigsten?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'animals per human\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Wie viele Tierleben ist ein Menschenleben wert?</h2>\n        <p text-wrap>\n          Wie viele Jahre Leid von Hühnern müssten wir verhindern, um mehr Gutes zu tun als wenn wir ein Jahr Leid\n          eines Menschen verhindern könnten? Wir nutzen an dieser Stelle Hühner, da diese ~95% aller Zuchttiere in\n          der Landwirtschaft ausmachen.\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'farm life\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Ist Leben auf Bio-Höfen lebenswert?</h2>\n        <p text-wrap>\n          Wäre das Leben für ein Tier auf einem landwirtschaftlichen Betrieb nach Bio Standard mit Freilauffläche\n          besser als nie geboren worden zu sein?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'opportunity health\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Chancen oder Gesundheit?</h2>\n        <p text-wrap>\n          Ganz allgemein gesprochen, ist es besser sich darauf zu konzentrieren die Armut zu reduzieren und Chancen zu\n          für Entwicklung zu ermöglichen oder Tod und Leid zu vermeiden?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'poverty education\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Lebensstandard oder Bildung?</h2>\n        <p text-wrap>\n          Nach derzeitigen statistischen Angaben existieren Hilfsorganisationen die folgendes mit 3.500$ erreichen\n          können. Was davon sollten wir vorziehen?\n        </p>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngSwitchCase="\'death suffering\'" @questionTrigger>\n      <ion-grid fixed>\n        <h2>Tode oder Leid verhindern?</h2>\n        <p text-wrap>\n          Nach derzeitigen statistischen Angaben existieren Hilfsorganisationen die folgendes mit 3.500$ erreichen\n          können. Was davon sollten wir vorziehen?\n        </p>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- Answers -->\n  <ion-list no-lines *ngIf="!nav.startsWith(\'result ->\')">\n    <ion-item class="card-background-page">\n      <ion-grid fixed>\n        <ion-row [ngSwitch]="nav" justify-content-center>\n          <ion-col *ngSwitchCase="\'start\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'specific reason\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/start.jpg"/>\n              <div class="card-title">OK, verstanden</div>\n              <div class="card-subtitle">Ich will so viel Gutes tun wie möglich!</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'specific reason\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> specific responsibility\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/specific_reason_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Ich weiß bereits sehr genau was und wem ich helfen will.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'specific reason\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'uncertain projects\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/unknown.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Ich habe höchstens eine wage Vorstellung davon, was und wen ich unterstützen sollte.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'uncertain projects\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'time scope\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/uncertain_projects_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Wir sollten tun, was auch immer den größten erwarteten Wert hat.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'uncertain projects\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'measurable goals\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/uncertain_projects_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Wir sollten sicherstellen, dass wir einen Unterschied machen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'measurable goals\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'animals per human\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/measurable_goals_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Nur messbare Projekte ermöglichen uns, uns kontinuierlich zu verbessern.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'measurable goals\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'rights catastrophe knowledge\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/measurable_goals_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Schwer zu messende Projekte werden sehr häufig vernachlässigt.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'time scope\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'more generations\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/time_scope_longterm.jpg"/>\n              <div class="card-title">Langfristig</div>\n              <div class="card-subtitle">Zukünftige Leben sind genauso wichtig wie heutige Leben, und wir können ihnen helfen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'time scope\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'measurable goals\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/time_scope_lifetime.jpg"/>\n              <div class="card-title">Lebzeit</div>\n              <div class="card-subtitle">Wir sollten uns auf die nächsten Jahrzehnte konzentrieren.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'more generations\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'existential risks\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/more_generations_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Es wäre ein Desaster, der Menschheit nicht die Möglichkeit einer lang andauernden Zukunft zu ermöglichen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'more generations\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'improve society\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/more_generations_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Sterben ist etwas schlimmes, aber nie geboren zu sein ist es nicht.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'existential risks\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> existential risks\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/existential_risks_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Wir können etwas tun, um unser Überleben langfristig wenigstens etwas wahrscheinlicher zu machen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'existential risks\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'improve society\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/existential_risks_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Die Risiken sind so fern, dass wir keinen bedeutsamen Effekt auf diese haben können.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'improve society\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'knowledge values institutions\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/improve_society_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Wir können Fortschritte erzielen, die lang andauern werden.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'improve society\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'knowledge values institutions\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/improve_society_maybe.jpg"/>\n              <div class="card-title">Vielleicht</div>\n              <div class="card-subtitle">Unsere Veränderungen könnten lange genug anhalten, um einen langfristigen Effekt zu haben.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'improve society\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'environmental damage\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/improve_society_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Die Veränderung wird mit der Zeit verschwinden oder nie eintreten.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'knowledge values institutions\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human knowledge\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/knowledge.jpg"/>\n              <div class="card-title">Wissen</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'knowledge values institutions\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> values\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/values.jpg"/>\n              <div class="card-title">Werte</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'knowledge values institutions\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> institutions\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/institutions.jpg"/>\n              <div class="card-title">Institutionen</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'environmental damage\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> environment\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/environmental_damage_yes.jpg"/>\n              <div class="card-title">Ja</div>\n              <div class="card-subtitle">Das Wohlergehen von hunderten Generationen ist beroht.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'environmental damage\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'measurable goals\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/environmental_damage_no.jpg"/>\n              <div class="card-title">Nein</div>\n              <div class="card-subtitle">Die Wahrscheinlichkeit derart extremer Umweltbeeinflussung ist gering oder nur von kurzer Zeit.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human rights\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/human_rights.jpg"/>\n              <div class="card-title">Menschenrechte</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> catastrophe\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/catastrophe.jpg"/>\n              <div class="card-title">Verhinderung globaler Katastrophen</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human knowledge\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/knowledge.jpg"/>\n              <div class="card-title">Erweiterung des menschlichen Wissens</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'rights catastrophe knowledge\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'animals per human\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/unknown.jpg"/>\n              <div class="card-title">Etwas Anderes</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'animals per human\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'opportunity health\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/animals_per_human_more.jpg"/>\n              <div class="card-title">&gt;100</div>\n              <div class="card-subtitle">Menschen zu helfen ist wichtiger, unter anderem weil es weitere indirekte Effekte hat.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'animals per human\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'farm life\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/animals_per_human_less.jpg"/>\n              <div class="card-title">&lt;100</div>\n              <div class="card-subtitle">Tierleid ist so real wie Menschenleid und moralisch genauso relevant.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'farm life\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> animal suffering\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/farm_life_yes.jpg"/>\n              <div class="card-title">Ja</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'farm life\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> animal death\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/farm_life_no.jpg"/>\n              <div class="card-title">Nein</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'opportunity health\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'poverty education\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/opportunities.jpg"/>\n              <div class="card-title">Chancen</div>\n              <div class="card-subtitle">Wir sollten Armut reduzieren und den ärmsten neue Chancen bieten.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'opportunity health\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'death suffering\')" class="clickable bright" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/health.jpg"/>\n              <div class="card-title">Gesundheit</div>\n              <div class="card-subtitle">Wir sollten vor allem Leid verhindern.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'opportunity health\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> other\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/unknown.jpg"/>\n              <div class="card-title">Etwas Anderes</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'poverty education\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> poverty\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/poverty.jpg"/>\n              <div class="card-title">Armutsbekämpfung</div>\n              <div class="card-subtitle">Das Einkommen von drei Familien für ein Jahr verdoppeln.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'poverty education\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> education\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/education.jpg"/>\n              <div class="card-title">Bildung</div>\n              <div class="card-subtitle">10 Schuljahre für 3 Kinder ermöglichen.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'death suffering\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human death\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/death.jpg"/>\n              <div class="card-title">Tod</div>\n              <div class="card-subtitle">Den Tod eines Kindes durch Malaria verhindern.</div>\n            </ion-card>\n          </ion-col>\n          <ion-col *ngSwitchCase="\'death suffering\'" col-12 col-md-6 col-xl-4 @ngIfAnimation>\n            <ion-card (click)="answer(\'result -> human health\')" class="clickable" @questionTrigger text-wrap>\n              <img src="../../assets/imgs/questionaire/suffering.jpg"/>\n              <div class="card-title">Leid</div>\n              <div class="card-subtitle">1000 Menschen 10 Jahre lang benötigte Vitamine verabreichen.</div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- RESULTS -->\n  <ion-grid fixed *ngIf="nav.startsWith(\'result ->\')" [ngSwitch]="nav">\n    <ion-row justify-content-center>\n      <ion-col *ngSwitchCase="\'result -> existential risks\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Existentielle Risiken reduzieren</ion-card-title>\n            <p>\n              Da mehr Generationen besser sind und da Zivilisationen für Jahrtausende oder gar Jahrmillionen überdauern\n              könnten, ist der Wert der Zukunft gewaltig. Selbst eine minimale Reduzierung der Wahrscheinlichkeit der\n              gloabeln menschlichen Auslöschung, hat großen Wert. Dies kann durch verschiedene Maßnahmen erreicht werden:\n            </p>\n            <ul>\n              <li>Internationale Kooperationen verbessern, um die generelle Wahrnehmung von Risiken zu verbessern, um\n                besser auf unvorgesehende neue Technologien vorbereitet zu sein.</li>\n              <li>Schutz vor Bedrohungen, die diese Kooperationen auflösen könnten.</li>\n              <li>Arbeit daran den Klimawandel besser zu verstehen, um für den Menschen drastische Veränderungen zu\n                verhindern.</li>\n              <li>Die Aufmerksamkeit bzgl. Risiken künstlicher Intelligenzen erhöhen und an wegen Arbeiten, damit\n                KIs moralisch handeln.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> specific responsibility\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Deine spezifische Verantwortung</ion-card-title>\n            <p>\n              Wenn du eine übergeornete Berufung hast für eine bestimmte Gruppe oder einen bestimmten Grund tätig zu\n              werden, dann solltest du dieser Berufung folgen. Falls du mehrere solcher Ziele verfolgst, oder dir nicht\n              sicher bist, ob vorhandene Organisationen dein Ziel auch unterstützen, hilft es dir vielleicht dir unsere\n              <u (click)="gotoTabSearch()">Datenbank zu effektiven Hilfsorganisationen</u> anzusehen.\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human knowledge\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Das menschliche Wissen erweitern</ion-card-title>\n            <p>\n              Forschung und Entwicklung ist üblicherweise etwas, was primär auch von anderen Parteien aus unterschiedlichen\n              Motiven betrieben wird, sofern es dringend oder lohnenswert erscheint. Da etwas früher oder später also\n              von jemand anderem in diesem bereich eh gemacht werden würde, handelt es sich hierbei in der Regel nicht um\n              langfristige Verbesserungen. Dennoch kann es manchmal einen großen Unterschied machen eine bestimmte\n              Schlüsseltechnologie oder verbessertes Wissen einige Jahre oder Dekaden früher zu erlangen.\n              Derzeitige Beispiele hierfür:\n            </p>\n            <ul>\n              <li>\n                Die Entwicklung effektiverer Energiequellen, bevor die Knappheit Öl-Vorräte zu internationalen\n                Konflikten führt.\n              </li>\n              <li>\n                Die Entwicklung besserer landwirtschaftlicher Methoden, um die Auswirkung der Landwirtschaft auf den\n                Klimawandel zu reduzieren.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> values\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Werte und Moralvorstellungen</ion-card-title>\n            <p>\n              Die Werte nach denen Menschen leben können eine signifikante Auswirkung auf den langfristige Weg der\n              Menschheit haben. Es wäre möglich, dass in den nächsten Jahrhunderten ein "Value lock-in" stattfinden:\n              Das Bebedeutet, dass durch Technologie oder Institutionen verhindert wird, dass gesellschaftliche\n              Werte einzelner Individuen stark abweichen oder sich verändern. Falls dies eintritt, sollten wir dafür\n              Sorge tragen, dass unsere sozialen Werte bereits zuvor so gut wie möglich sind.\n              Dies betrifft derzeit insbesondere diese Aspekte:\n            </p>\n            <ul>\n              <li>\n                Rassismus und andere Formen der Diskriminierung könnten in unseren Gesellschaften unbegrenzt weiter\n                existieren, wenn Menschen nicht die nötige Empathie besitzen. Eventuell gibt es wege, dies grundlegend\n                zu ändern.\n              </li>\n              <li>\n                Wenn alle Menschen altruistischer wären, dann wären sie auch eher bereit zusammenzuarbeiten und unsere\n                globale Probleme zu lösen.\n              </li>\n              <li>\n                Nicht-menschliche Lebewesen könnten auch zukünftig zu wenig Rechte besitzen, falls kein moralischer\n                Konsens frühzeitig erzielt wird.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> institutions\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Institutionen verbessern</ion-card-title>\n            <p>\n              Institutionen waren in der bisherigen Menschheitsgeschichte ein kritischer Faktor in der\n              Gesellschaftsentwicklung und werden es vermutlich auch zukünftig sein.\n              Einige Dinge können wir jedoch besser machen als bisher:\n            </p>\n            <ul>\n              <li>\n                Wir könnten die internationale Kooperation verbessern, um potentiell gefärliche Technologien besser zu\n                regulieren und ein Wettrüsten zu verhindern.\n              </li>\n              <li>\n                Wir könnten die Transparenz der Regierungen und Berichterstattungsstandards verbessern, um die Entstehung\n                permanenter totalitäter Regime durch neue Technologien zu verhindern.\n              </li>\n              <li>\n                Wir könnten versuchen langfritig agierende Institutionen zu finden die gut für die Gesellschaft sind,\n                aber aus irgendeinem Grund bislang nicht erschaffen wurden und es vielleicht auch in Zukunft nicht würden.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> environment\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Permanente Umweltschäden verhindern</ion-card-title>\n            <p>\n              Während Zivilisationen sich von allen erdenklichen Katastrophen innerhalb von wenigen tausend Jahren\n              erholen kann, sind dies dennoch hunderte oder tausende von Generationen die auf dem Weg dorthin darunter\n              leiden müssen. Selbst wenn es nur eine kleine Chance gibt einen katastrophalen Schaden wie diesen zu\n              verhindern, ist der potentielle Effekt es wert:\n            </p>\n            <ul>\n              <li>\n                Rückläufer Effekte wie das schmelzen der permafrost Polkappen, könnten durch das dadurch freigesetzte\n                Methangas den Großteil der Erde in eine Wüste verwandeln.\n              </li>\n              <li>\n                Zur Neige gehende natürliche Ressourcen könnten die Wiederaufbau der Zivilisation nach einer\n                Katastrophe erschweren.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human rights\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Menschenrechte</ion-card-title>\n            <p>\n              Für viele Menschen ist die Welt auf Grund von Gewalt und Unterdrückung durch andere ein unfreundlicher\n              und unsicherer Ort. Für einige Menschen, wie zum Beispiel Sklaven, ist dies noch schlimmer.\n              Diese Probleme zu lösen wird neben den direkten Effekten vermutlich auch noch weitere positive\n              Durchlauf-Effekte für die kommenden Jahrezehnte haben:\n            </p>\n            <ul>\n              <li>\n                Wir könnten Menschen in totalitäten Regimen beraten und unterstützen, um ihnen die Werkzeuge zu geben\n                sich zu wehren oder zu entkommen.\n              </li>\n              <li>\n                Wir könnten mit nicht-totalitären Regierungen zusammenarbeiten, um kriminielle Misshandlungen zu ahnden\n                die bis dahin ignoriert wurden.\n              </li>\n              <li>\n                Wir könnten unabhängig von Regierungen Dienste zum Schutz von Menschenrechten bereitstellen, um dort\n                zu handeln, wo die Regierungsbehörden nicht schnell genug reagieren können.\n              </li>\n              <li>\n                Wir könnten uns für vielerlei Arten des strukturellen Wandels in politischen und ökonomischen Systemen\n                einsetzen.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> catastrophe\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Katastrophen verhindern</ion-card-title>\n            <p>\n              Globale katastrophen werden häufig vernachlässigt, da sie beispiellos sind und sich ihre Effekte einfach\n              auf zahlreiche Länder ausbreiten können.\n            </p>\n            <ul>\n              <li>Der Klimawandel könnte hohe Opferzahlen durch Hungersnöte, Überschwemmungen und Massenflucht fordern.</li>\n              <li>\n                Epidemologisten sagen voraus, dass eine natürliche Pandemie in absehbarer Zeit auftreten und hunderte\n                Millionen Opfer fordern könnte.\n              </li>\n              <li>Die derzeitige Wahrscheinlichekeit eines nuklearen Kriegs ist groß genug, um besorgt zu sein.</li>\n              <li>\n                Einige betrachten das Altern als eine existente Katastrophe: Es sterben jedes Jahr Millionen Menschen.\n                Viel Geld wird in die Behandlung der Symptome gesteckt, nur wenig in die Erforschung einer Heilung.\n              </li>\n              <li>\n                Einige betrachten das Leid von Wildtieren als eine existente Katastrophe. Viele Milliarden Tiere werden\n                jedes Jahr lebendig gefressen oder verhungern.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> animal suffering\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Tierleid mindern</ion-card-title>\n            <p>\n              Auch wenn Tiere für die Lebensmittelproduktion in humaner Weiser durchgeführt werden kann, ist\n              Massentierhaltung doch einer der Hauptgründe für unnötiges Tierleid.\n            </p>\n            <ul>\n              <li>Wir könnten Produkte aus Massentierhaltung regulieren oder boykotieren.</li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> animal death\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Tierleben retten</ion-card-title>\n            <p>\n              Die Anzahl Tierleben die in Gefangenschaft geboren werden und für die Lebensmittelproduktion sterben ist\n              gewaltig.\n            </p>\n            <ul>\n              <li>Wir könnten eine vegetarische oder vegane Lebensweise bewerben, um den Fleischkonsum zu reduzieren.</li>\n              <li>\n                Wir könnten bessere Verfahren zur Herstellung künstlicher Tierprodukte entwickeln, um den Bedarf an Fleich\n                von Tierfarmen zu verringern.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> poverty\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Lebensstandards</ion-card-title>\n            <p>\n              Mehr als eine Milliarden Menschen leben derzeit von weniger als 1,05 € am Tag. Systematische Ungleichheit\n              und derzeitige Regierungspolitik der Industrienationen vorausgesetzt, könnten legislative Änderungen und\n              direkte Interventionen die dramatische Verbesserung der Lebenswualität dieser Menschen bei nur geringen\n              Kosten bewirken.\n            </p>\n            <ul>\n              <li>\n                Regierungen könnten durch Lobbyarbeit dazu gebracht werden grundlegende Dienstleistungen und Infrastruktur\n                für die Menschen bereitzustellen, die es am dringendsten brauchen.\n              </li>\n              <li>\n                Dienstleistungen und Infrastruktur können teilweise direkt von nicht-kommerziellen, durch Privatspenden\n                gesponsert Hilfsorganisationen (NGOs) bereitgestellt werden.\n              </li>\n              <li>\n                Auch Geld direkt an diese benachteiligte Gemeinschaften zu geben, sofern die Verteilung korrekt umgesetzt\n                ist, kann signifikanten Investitionserfolge mit sich bringen.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> education\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Bildung</ion-card-title>\n            <p>\n              In vielen Ländern ist Bildung eine Seltenheit, besonders für Mädchen. Schulen sind oft schlecht\n              ausgestattet. Als Resultat sind Millionen von Menschen Analphabeten und ohne relevante Bildung und haben\n              somit große Schwierigkeiten der Armut zu entkommen.\n            </p>\n            <ul>\n              <li>Günstige Privatschulen in Lagos kosten im Schnitt 30 € pro Schüler und Schuljahr.</li>\n              <li>Der durchschnittliche Lohn eines Lehrers in Niger beträgt 1.250 €.</li>\n              <li>\n                Kinder zu entwurmen, und damit vom in vielen Entwicklungsländern gewöhnlichen Parasitenbefall zu befreien,\n                ermöglicht ihnen häufiger in die Schule zu gehen und führt nachweislich zu einer deutlichen Verbesserung\n                ihres späteren Lebensstandards.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human death\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Menschenleben retten</ion-card-title>\n            <p>\n              In Entwicklungsländern sterben jeden Tag tausende von Menschen durch Hunger oder einfach zu verhindernde\n              Krankheiten.\n            </p>\n            <ul>\n              <li>\n                Anti-Moskitonetze könnten gekauft und in betroffenen Regionen verteilt werden.\n                Im Schnitt kann dadurch je 2.500 € ein Kind davor bewahrt werden an Malaria zu sterben.\n              </li>\n              <li>\n                Wir könnten die Untersuchung von vernachlässigten Krankheiten und Epidemien fördern, um gezielt\n                Heilmittel, Präventionsmittel und Behandlungen zu entwickeln und anzuwenden.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> human health\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Globale Gesundheit</ion-card-title>\n            <p>\n              Millionen von Menschen leiden an leicht zu verhindernen Krankheiten, Parasitenbefall oder Vitaminmangel.\n              Weitere Millionen haben keinen Zugang zu sauberem Trinkwasser oder ausgewogener Nahrung.\n            </p>\n            <ul>\n              <li>\n                Essentielle Vitamine und Mineralstoffe könnten in ärmlichen Gegenden verteilt werden.\n                Die kosten für die komplette Nahrungsmittelergänzung für ein Jahr betrüge pro Person nur 0.25 €.\n                Dies würde vor allem betroffenen Kindern helfen gesünder Aufzuwachsen und würde der geistigen und\n                körperlichen Unterentwicklung entgegenwirken.\n              </li>\n              <li>\n                Regierungen könnten durch Lobbyarbeit auf den wirtschaftlichen Nutzen von Investitionen in das\n                Gesundheitswesen aufmerksam gemacht werden.\n              </li>\n              <li>\n                Wir könnten die Untersuchung von vernachlässigten Krankheiten und Epidemien fördern, um gezielt\n                Heilmittel, Präventionsmittel und Behandlungen zu entwickeln und anzuwenden.\n              </li>\n            </ul>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngSwitchCase="\'result -> other\'" col-12 col-md-6 col-xl-6>\n        <ion-card>\n          <ion-card-header>Dein Testresultat</ion-card-header>\n          <ion-card-content text-wrap>\n            <ion-card-title>Wir wissen es nicht</ion-card-title>\n            <p>\n              Vermutlich fehlen uns noch ein paar Ziele zur Verbesserung der Welt. Wenn dir Ursachen und Fragen einfallen,\n              die in diesem Fragebogen auftauchen sollten, dann teile uns dies gerne mit.\n            </p>\n            <p>\n              Eventuell empfiehlt es sich für dich, dass du unsere <u (click)="gotoTabSearch()">Datenbank effektiver Hilfsorganisationen</u> mit deinen\n              eigenen Suchkriterien erkundest.\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-md-6 col-xl-6>\n        <ion-card *ngIf="organizations.length > 0">\n          <ion-card-content text-wrap>\n            <p>Diese Hilfsorganisationen haben sich dem von dir präferierten Ziel gewidmet.</p>\n          </ion-card-content>\n        </ion-card>\n        <ion-list>\n          <ion-item-sliding *ngFor="let o of organizations">\n            <ion-item text-wrap>\n              <ion-thumbnail item-start>\n                <img src="../../assets/imgs/organizations/{{ o.thumbnail }}.jpg"/>\n              </ion-thumbnail>\n              <h2>{{ o.name }}</h2>\n              <h3>{{ o.slogan }}</h3>\n              <p>{{ o.shortDescription }}</p>\n              <ion-badge *ngFor="let e of o.evaluators" color="{{ e.top && \'danger\' || \'secondary\' }}" style="margin-right: 3px">{{e.evaluator}}</ion-badge>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="primary" (click)="modalService.openOrganizationModal({o: o})">\n                <ion-icon name="information-circle"></ion-icon>\n                Mehr Info\n              </button>\n              <a [href]="o.website">\n                <button ion-button color="secondary">\n                  <ion-icon name="browsers"></ion-icon>\n                  Website\n                </button>\n              </a>\n              <a [href]="o.donationLink">\n                <button ion-button color="danger">\n                  <ion-icon name="cash"></ion-icon>\n                  Spenden\n                </button>\n              </a>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n        <button ion-button block (click)="answer(\'start\')">Test wiederholen</button>\n        <button ion-button block color="secondary" (click)="gotoTabSearch()">Mehr Organisationen finden</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/questionnaire/questionnaire.html"*/,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_data__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_modal__["a" /* ModalService */]])
    ], QuestionnairePage);
    return QuestionnairePage;
}());

//# sourceMappingURL=questionnaire.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_modal__ = __webpack_require__(33);
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
    function SearchPage(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.searchTerm = '';
        this.searchCategories = [];
        this.searchCauses = [];
        this.searchImpactDirection = [];
        this.searchRegion = [];
        this.searchRecommendedBy = [];
        this.organizations = dataService.organizations;
        this.modalService;
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
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/thomsen/dev/ea/src/pages/search/search.html"*/'<ion-header><ion-navbar></ion-navbar></ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-list>\n      <ion-searchbar placeholder="Fang hier an zu suchen..." [(ngModel)]="searchTerm" (ionInput)="search()"></ion-searchbar>\n      <ion-item>\n        <ion-label>Erweiterte Suche</ion-label>\n        <ion-toggle [(ngModel)]="advancedSearch" checked="false" (ionChange)="search()"></ion-toggle>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Kategorie</ion-label>\n        <ion-select [(ngModel)]="searchCategories" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="Armut">Armut</ion-option>\n          <ion-option value="Existenzrisiken">Existenzrisiken</ion-option>\n          <ion-option value="Meta">Meta</ion-option>\n          <ion-option value="Politik">Politik</ion-option>\n          <ion-option value="Tierleid">Tierleid</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Problemfeld</ion-label>\n        <ion-select [(ngModel)]="searchCauses" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Bildung">Bildung</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Biotechnologie">Biotechnologie</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Meta\')" value="Evaluation">Evaluation</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Tierleid\')" value="Haltungsbedingungen">Haltungsbedingungen</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Gesundheit">Gesundheit</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Politik\')" value="Institutionen">Institutionen</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Katastrophenschutz">Katastrophenschutz</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Klimaschutz">Klimaschutz</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Künstliche Intelligenz">Künstliche Intelligenz</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Lebensstandard">Lebensstandard</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Armut\')" value="Menschenleben">Menschenleben</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Politik\')" value="Menschenrechte">Menschenrechte</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Existenzrisiken\')" value="Nukleartechnologie">Nukleartechnologie</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Meta\')" value="Öffentlichkeitsarbeit">Öffentlichkeitsarbeit</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Meta\')" value="Strategie">Stategie</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Tierleid\')" value="Tierleben">Tierleben</ion-option>\n          <ion-option *ngIf="listContains(searchCategories, \'Politik\')" value="Werte und Moral">Werte und Moral</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Wirkrichtung</ion-label>\n        <ion-select [(ngModel)]="searchImpactDirection" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="proaktiv">proaktiv</ion-option>\n          <ion-option value="reaktiv">reaktiv</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Region</ion-label>\n        <ion-select [(ngModel)]="searchRegion" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="Afrika">Afrika</ion-option>\n          <ion-option value="Asien">Asien</ion-option>\n          <ion-option value="Deutschland">Deutschland</ion-option>\n          <ion-option value="Europa">Europa</ion-option>\n          <ion-option value="Indien">Indien</ion-option>\n          <ion-option value="Naher Osten">Naher Osten</ion-option>\n          <ion-option value="Ozeanien">Ozeanien</ion-option>\n          <ion-option value="Südamerika">Südamerika</ion-option>\n          <ion-option value="Südost Asien">Südost Asien</ion-option>\n          <ion-option value="USA">USA</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="advancedSearch">\n        <ion-label>Empfohlen durch Evalutator</ion-label>\n        <ion-select [(ngModel)]="searchRecommendedBy" multiple="true" submitText="Suchen" cancelText="Abbrechen" (ionChange)="search()">\n          <ion-option value="80.000 hours">80.000 hours</ion-option>\n          <ion-option value="Animal Charity Evalutators">Animal Charity Evalutators</ion-option>\n          <ion-option value="Charity Science">Charity Science</ion-option>\n          <ion-option value="GiveWell">GiveWell</ion-option>\n          <ion-option value="ImpactM">ImpactM</ion-option>\n          <ion-option value="Open Philantrophy Project">Open Philantrophy Project</ion-option>\n          <ion-option value="Phineo">Phineo</ion-option>\n          <ion-option value="Stiftung für Effektiven Altruismus">Stiftung für Effektiven Altruismus</ion-option>\n          <ion-option value="The Life You Can Save">The Life You Can Save</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item-sliding *ngFor="let o of organizations">\n        <ion-item text-wrap>\n          <ion-thumbnail item-start>\n            <img src="../../assets/imgs/organizations/{{ o.thumbnail }}.jpg"/>\n          </ion-thumbnail>\n          <h2>{{ o.name }}</h2>\n          <h3>{{ o.slogan }}</h3>\n          <p>{{ o.shortDescription }}</p>\n          <ion-badge *ngFor="let e of o.evaluators" color="{{ e.top && \'danger\' || \'secondary\' }}" style="margin-right: 3px">{{e.evaluator}}</ion-badge>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="modalService.openOrganizationModal({o: o})">\n            <ion-icon name="information-circle"></ion-icon>\n            Mehr Info\n          </button>\n          <a [href]="o.website">\n            <button ion-button color="secondary">\n              <ion-icon name="browsers"></ion-icon>\n              Website\n            </button>\n          </a>\n          <a [href]="o.donationLink">\n            <button ion-button color="danger">\n              <ion-icon name="cash"></ion-icon>\n              Spenden\n            </button>\n          </a>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_data__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__app_services_modal__["a" /* ModalService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_questionnaire_questionnaire__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_modal__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_organization_organization__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__ = __webpack_require__(197);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__["a" /* PrivacyPage */],
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
                __WEBPACK_IMPORTED_MODULE_13__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_data__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_10__services_modal__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EADonationApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_questionnaire_questionnaire__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_modal__ = __webpack_require__(33);
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
    function EADonationApp(platform, statusBar, splashScreen, modalService) {
        this.modalService = modalService;
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
        modalService;
    }
    EADonationApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thomsen/dev/ea/src/app/app.html"*/'<ion-header no-border>\n  <ion-toolbar fixed color="primary">\n    <ion-title>\n      <img id="logo" alt="logo" height="40" src="../assets/icon/logo.png"/>\n      <span id="title">{{title}}</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-tabs color="primary" [tabsPlacement]="tabsPlacement" [tabsLayout]="tabsLayout">\n  <ion-tab [root]="tab1Root" tabTitle="Spend-O-Mat" (ionSelect)="this.title =\'Spend-O-Mat\'" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Suche" (ionSelect)="this.title =\'Hilfsorganisationen\'" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="EA" (ionSelect)="this.title =\'Effektiver Altruismus\'" tabIcon="school"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Kontakt" (ionSelect)="this.title =\'Kontakt\'" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n\n<ion-footer no-border>\n  <ion-toolbar fixed color="dark">\n    <span class="clickable" (click)="modalService.openImprintModal()">Impressum</span>\n    |\n    <span class="clickable" (click)="modalService.openPrivacyModal()">Datenschutzerkl&auml;rung</span>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/thomsen/dev/ea/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_modal__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_modal__["a" /* ModalService */]) === "function" && _d || Object])
    ], EADonationApp);
    return EADonationApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_privacy_privacy__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_organization_organization__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalService = /** @class */ (function () {
    function ModalService(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ModalService.prototype.openOrganizationModal = function (organization) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_organization_organization__["a" /* OrganizationPage */], organization);
        modal.present();
    };
    ModalService.prototype.openPrivacyModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__pages_privacy_privacy__["a" /* PrivacyPage */]);
        modal.present();
    };
    ModalService.prototype.openImprintModal = function () {
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */]) === "function" && _a || Object])
    ], ModalService);
    return ModalService;
    var _a;
}());

//# sourceMappingURL=modal.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map