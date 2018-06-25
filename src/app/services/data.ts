import { Injectable } from '@angular/core';
import { Organization } from '../model/organization';

@Injectable()
export class DataService {
  organizations: Organization[] = [
    // Armut
    {
      name: 'Against Malaria Foundation',
      thumbnail: 'against_malaria_foundation',
      website: 'https://www.againstmalaria.com',
      donationLink: 'https://www.againstmalaria.com/Donation.aspx',
      category: [ 'Armut' ],
      cause: [ 'Menschenleben' ],
      impactDirection: 'reaktiv',
      regions: [ 'Afrika' ],
      questionaireResults: [ 'human death' ],
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
      category: [ 'Armut' ],
      cause: [ 'Menschenleben' ],
      impactDirection: 'reaktiv',
      regions: [ 'Afrika' ],
      questionaireResults: [ 'human death' ],
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
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [ 'Afrika' ],
      questionaireResults: [ 'human health' ],
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
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [ 'Weltweit' ],
      questionaireResults: [ 'human health' ],
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
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [ 'Afrika' ],
      questionaireResults: [ 'human health' ],
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
      // donationLinkDirect: 'https://donate.evidenceaction.org/campaign/general-fundraising-page/c139764',
      category: [ 'Armut' ],
      cause: [ 'Gesundheit', 'Lebensstandard' ],
      impactDirection: 'reactive',
      regions: [ 'Indien', "Südostasien" ],
      questionaireResults: [ 'poverty' ],
      slogan: 'Eine einfache Fahrkarte genügt, um saisonale Armut zu vermindern.',
      shortDescription: 'No Lean Season verringert saisionale Armut in ländlichen Region, indem sie Arbeitsmobilität ermöglicht und so Einkommen erhöht.',
      longDescription: 'Sasionale Armut ensteht in der Zeit zwischen Saat und Ernte in denen es wenig Jobs gibt, die Nahrungvorräte ausgehen und es so zu Mangelernährung insbesondere von Schwangeren und kleinen Kindern kommt. No Lean Season unterstützt teilnehmende Haushalte mit $20, um eine Reise zu städtischen Gebieten in der Umgebung möglich zu machen, die in dieser Zeit mehr Jobs bieten. Studien der Universität Yale haben ergeben, dass diese saisonalen Arbeitsmöglichkeiten in jedem Haushalt durschnittlich eine Mahlzeit pro Kopf mehr an Tag möglich machen.',
      impact1000: 'In Haushalt, die an dem Programm teilnehmen, konnte ein Drittel mehr für Nahrung und andere Notwendigkeiten ausgeben werden, pro Person wurden ca. 600 Kalorien mehr am Tag konsumiert.',
      donationDeficit: null, // Im Dezember 2017 wurde von Good Ventures 11,5 Millionen Dollar zum No Lean Season Programm gegeben, welches das Programm für die nächsten drei Jahre im Wesentlichen finanziert. Zusätzliche Spenden können für Forschung und Erweiterung des Programms genutzt werden.
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
    {
      name: 'GiveDirectly',
      thumbnail: 'give_directly',
      website: 'https://givedirectly.org/',
      donationLink: 'https://givedirectly.org/give-now',
      category: [ 'Armut' ],
      cause: [ 'Lebensstandard' ],
      impactDirection: 'reactive',
      regions: [ 'Afrika' ],
      questionaireResults: [ 'poverty' ],
      slogan: 'Geld direkt an extrem arme Menschen spenden.',
      shortDescription: 'GiveDirectly macht extrem arme Gemeinschaften ausfinding, überprüft die individuelle Bedürftigkeit und sendet per Mobiltelefon etwa 1000 Dollar für ein Jahr an besonders bedürftige Haushalte.',
      longDescription: 'GiveDirectly macht extrem arme Gemeinschaften ausfinding, überprüft die individuelle Bedürftigkeit und sendet per Mobiltelefon etwa 1000 Dollar für ein Jahr an besonders bedürftige Haushalte. GiveDirectly forscht intensiv daran festzustellen, welche Auswirkungen die Geld-Tranfers auf teilnehmende Haushalte haben. Auf der Website https://live.givedirectly.org/ lässt sich nachvollziehen, was einzelne Individuen mit dem Geld gemacht haben.',
      impact1000: 'GiveDirectly gibt 83% der Spenden direkt an bedürftige Haushalte weiter. Eine Untersuchung zeigt, dass dieses Geld die Nahrungsversorgung, Finanzierung von Bildung und Gesundheit verbessert und nicht für Alkohol oder Tabak ausgegeben wurde. Nach der Eintschätzung von GiveWell hat GiveDirectly verglichen mit anderen besonders effektiven Interventionen wahrscheinlich eine geringere Effektivität. Dafür ist GiveDirectly außerordentlich transparent und hat den direkten Nutzen die Armut zu reduzieren und ist somit in dieser Hinsicht wenig mit Unischerheiten behaftet.',
      donationDeficit: 200000000, //'Nach der Einschätzung von GiveWell könnte GiveDirectly 2018-2020 noch weiter 200 Millionen Dollar sinnvoll verwenden.',
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/give-directly',
          top: true
        },
        {
          evaluator: 'The Life You Can Save',
          link: 'https://www.thelifeyoucansave.org/where-to-donate/givedirectly',
          top: true
        },
        {
          evaluator: 'Giving What We Can',
          link: 'https://www.givingwhatwecan.org/charity/givedirectly/',
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
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz', 'Biosicherheit', 'Nuklearsicherheit', 'Klimaschutz' ],
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
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz' ],
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
      category: [ 'Existenzrisiken' ],
      cause: [ 'Klimaschutz' ],
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
      category: [ 'Existenzrisiken', 'Meta' ],
      cause: [ 'Künstliche Intelligenz', 'Biosicherheit', 'Strategie' ],
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
      category: [ 'Meta' ],
      cause: [ 'Evaluation' ],
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
      category: [ 'Meta' ],
      cause: [ 'Evaluation' ],
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
      category: [ 'Meta' ],
      cause: [ 'Evaluation' ],
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
      category: [ 'Meta' ],
      cause: [ 'Strategie' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'human knowledge' ],
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
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Growing and maintaining the Effective Altruism movement.',
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
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'values' ],
      slogan: 'Helping as many people as possible lead high-impact careers.',
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
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [ 'Deutschland' ],
      questionaireResults: [ 'values' ],
      slogan: 'Die Philosophie des Effektiven Altruismus weiterentwickeln, verbreiten und umsetzen.',
      shortDescription: 'Die Stiftung für Effektiven Altruismus trägt zum nachhaltigen Wachstum der Bewegung des Effektiven Altruismus bei. Dabei streben sie eine Welt ohne extremes Leid an. Um die Philosophie des Effektiven Altruismus weiterzuentwickeln, zu verbreiten und umzusetzen, verfolgen sie Projekte in drei Bereichen: Forschung, Community und Philanthropie.',
      longDescription: 'Die Stiftung für Effektiven Altruismus versucht eine Gemeinschaft von außerordentlich engagierten Menschen aufzubauen, die ihr Leben für andere einsetzen wollen und sich der Komplexität der Herausforderung bewusst sind. Sie stellen Infrastruktur in Form von Veranstaltungen und Lokalgruppen bereit, damit die Bewegung nachhaltig wachsen kann und die Kernideen des Effektiven Altruismus erhalten bleiben. In der Öffentlichkeit wollen sie den Effektiven Altruismus in all seinen Nuancen darstellen, um eine konstruktive Diskussion darüber zu ermöglichen.',
      impact1000: null,
      donationDeficit: null,
      evaluators: []
    },

    // Politik


    // Tierleid
    {
      name: 'Animal Equality International - Zur Verteidigung aller Tiere',
      thumbnail: 'animal_equality',
      website: 'https://www.animalequality.de/',
      donationLink: 'https://www.animalequality.de/spenden',
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben', 'Haltungsbedingungen' ],
      impactDirection: 'reaktiv',
      regions: [ 'Deutschland', 'USA', 'Europa', 'Mittelamerika', 'Südamerika', 'Indien' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'Wir arbeiten für eine bessere Welt für alle Tiere.',
      shortDescription: 'Animal Equality ist eine internationale Organisation, die gemeinsam mit Gesellschaft, Politik und Unternehmen daran arbeitet, Grausamkeit in der Massentierhaltung zu beenden.',
      longDescription: 'Animal Equality arbeitet für eine gerechtere und bessere Welt für alle Lebewesen, die diesen Planeten bewohnen. Die Organisation setzt sich für die Verringerung von Ungerechtigkeiten gegenüber Tieren ein, mit der Vision jedem Tier ein Leben ohne Schmerzen und Leiden zu ermöglichen. Durch groß angelegte Bildungsprogramme, Undercover-Recherchen, medienwirksame Aktionen sowie Unternehmenskampagnen will Animal Equality einen langfristigen sozialen Wandel herbeiführen und eine Welt schaffen, in der alle Tiere Respekt und Schutz erfahren. Dabei liegt der Fokus ihrer Arbeit auf der sogenannten Nutztierindustrie, da sie international für das größte Tierleid verantwortlich ist.',
      impact1000: 'Hilft dabei: Durchschnittliche 5000 Tiere in der Massentierhaltung vor Leid zu bewahren; oder durch Online-Kampagnen mehr als 900.000 Menschen über die Zustände in der Massentierhaltung zu informieren; oder finanziert 26 iAnimal Aktionen innerhalb des Virtual-Reality-Projects, durch das zahlreiche Menschen einen authentischen Einblick in das Leben der Tiere in der Massentierhaltung bekommen - Widerspruch zu ACE Aussage',
      donationDeficit: 4200000, //'Animal Charity Evalutors schätzt das Potential für zusätzliche finanzielle Förderung auf 2 Millionen bis 4.2 Millionen Dollar. Sie würden zusätzliche Mittel für die Bereitstellung von Infrastrukturinvestitionen (in Bereichen wie Betrieb, Personalwesen und IT) sowie für die Ausweitung ihrer Programme im Allgemeinen und die Durchführung von Unternehmenseinsätzen in Deutschland und den USA verwenden.',
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/animal-equality/',
          top: true
        }
      ]
    },
    {
      name: 'The Good Food Institut',
      thumbnail: 'good_food_institute',
      website: 'https://www.gfi.org/',
      donationLink: 'https://www.gfi.org/donate',
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'animal death' ],
      slogan: 'Erzeugung eines gesunden, tiergerechten und nachhaltigen Nahrungsangebots',
      shortDescription: 'The Good Food Institut arbeitet mit Wissenschaftlern, Investoren und Entrepreneuren zusammen, mit dem Fokus auf "clean meat" und pflanzliche Nahrungsalternativen zu tierischen Produkten.',
      longDescription: 'Das Good Food Institute (GFI) arbeitet daran, die Tierzuchtbranche zu verändern, indem es die Entwicklung von wettbewerbsfähigen Alternativen zu tierischem Fleisch, Milchprodukten und Eiern fördert. GFI sucht nach Unternehmern und Wissenschaftlern, die Start-ups in dem Marktsektor pflanzlichen und kultivierten Fleisches fördern oder beitreten. Sie bieten geschäftliche, rechtliche, wissenschaftliche und strategische Leitlinien für Unternehmen und betreiben politische (regulatorische und gesetzliche) Arbeit, um das Feld für pflanzliche und zelluläre Produkte auf dem Markt zu ebnen. GFI baut Beziehungen zu Restaurantketten, Lebensmittelgeschäfte und Foodservice-Unternehmen auf, um pflanzliche Alternativen zu Tierprodukten zu verbessern und zu fördern. Schließlich arbeitet GFI mit Fördereinrichtungen, Unternehmen und Regierungen zusammen, um Ressourcen für die Forschung in der synthetischen und pflanzlichen Biologie und Gewebetechnologie zu mobilisieren.',
      impact1000: 'Eine Spende unterstützt GFI-Programme und hilft beim Aufbau ihrer Rücklagen für den Betriebsablauf, die für die Aufrechterhaltung der Betriebskontinuität benötigt werden. Von einer durchschnittlichen Spende von 1.000 US-Dollar, würde GFI etwa 220 US-Dollar für sein Wissenschafts- und Technologieprogramm und etwa 200 US-Dollar für den Aufbau seiner Rücklagen für den Betriebsablauf ausgeben. GFI würde außerdem 200 US-Dollar für internationales Engagement, 160 US-Dollar für ihr Innovationsprogramm, 120 US-Dollar für ihr politisches Programm und etwa 90 US-Dollar für unternehmerisches Engagement ausgeben. Die Auswirkungen von Spenden für Zuchttiere sind spekulativer und langfristiger als der Einfluss von Spenden für andere Oranisation wie Animal Equality. Angesichts des spekulativen Charakters der Auswirkungen von GFI auf Nutztiere, gibt es derzeit keine Kosten-Effektivitäts-Schätzung. Die Meinung von Animal Charity Evaluators ist dennoch, dass Spenden an GFI einen hohen Erwartungswert haben.',
      donationDeficit: 4400000, //'Animal Charity Evalutors schätzt das Potential für zusätzliche finanzielle Förderung auf 1.5 Millionen bis 4.4 Millionen US-Dollar. Zusätzliche Mittel werden verwendet, um weiter zu expandieren, was die Einstellung von Personal in jedem ihrer Programmgebiete und die Erhöhung ihrer Rücklagen einschließt',
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/the-good-food-institute/',
          top: true
        }
      ]
    },
    {
      name: 'ProVeg International',
      thumbnail: 'proveg_international',
      website: 'https://www.proveg.com/',
      donationLink: 'https://www.proveg.com/de/spenden/',
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [ 'Deutschland', 'Europa' ],
      questionaireResults: [ 'animal death' ],
      slogan: 'Appetite for a better world',
      shortDescription: 'ProVeg motiviert Menschen zu einem pflanzlichen Lebensstil und vernetzt bestehende Organisationen weltweit, um Gesundheit zu fördern, Tierleiden zu vermindern, die Umwelt zu schützen und eine gerechtere Verteilung von Nahrungsmitteln zu ermöglichen.',
      longDescription: 'Viele der weltweit dringendsten Probleme haben die individuelle Ernährungsweise eines jeden Einzelnen zur Ursache. ProVeg International motiviert die Bevölkerung durch Aufklärung und Bereitstellung praktischer Informationen zum Umstieg auf eine Ernährung unter Verwendung tierfreier Alternativen. Ziel ist, den Konsum von Tieren als Nahrungsmittel bis 2040 um 50 % zu reduzieren. Damit soll die Gesundheit der Bevölkerung gefördert und gleichzeitig das durch die Nahrungsmittelproduktion entstehende Tierleiden vermindert werden. Neben dem Umweltschutz steht dabei zudem die faire Verteilung der weltweiten Nahrungsmittelressourcen im Fokus. Dazu arbeitet ProVeg mit einflussreichen Multiplikatoren aus Politik, Wirtschaft und Medien zusammen.',
      impact1000: 'Für 1000 Euro kann eine Aufklärungsveranstaltung in einer Schule mit gesunden Snacks und Getränken ausgestattet, ein Sprecher für einen von ProVeg International organisierten Kongress eingeladen und Informationsmaterial für 30 bis 40 Informationsveranstaltungen beschafft werden.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/proveg/',
          top: true
        }
      ]
    },
    {
      name: 'The Humane League',
      thumbnail: 'the_humane_league',
      website: 'https://www.thehumaneleague.org/',
      donationLink: 'https://www.thehumaneleague.org/donate/',
      category: [ 'Tierleid' ],
      cause: [ 'Haltungsbedingungen', 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [ 'Japan', 'Mittelamerika', 'USA', 'Europa' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'Empowering Change. Driving Progress.',
      shortDescription: 'The Humane League will Tierleiden möglichst weitreichend verhindern. Dazu werden mit Humane League Labs die effektivsten Methoden ermittelt. Neben konkreten Kampagnen wird Aufklärungsarbeit in der Bevölkerung betrieben sowie das Wissen um den Tierschutz an Universitäten verbreitet.',
      longDescription: 'Weltweit werden unzählige Tiere für die Nahrungsmittelproduktion unter unnatürlichen und unwürden Bedingungen gehalten, misshandelt und verletzt. Um die Haltungsbedingungen der Tiere zu verbessern und so Schmerzen, Leid, frühzeitiges Sterben, Angst und Schmerz zu verhindern, will The Humane League die Bevölkerung über die Umstände in der industriellen Tierhaltung aufklären. Neben der Bereitstellung von Informationsmaterial und Kampagnen will The Humane League insbesondere auch an Universitäten das Wissen um den Tierschutz verbreiten. Mit Humane League Labs wird untersucht, welche Methoden die effektivsten für die Einflussnahme zur Verbesserung der Haltungsbedingen sind.',
      impact1000: null,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/the-humane-league/',
          top: true
        }
      ]
    }
  ];

  constructor() { }
}
