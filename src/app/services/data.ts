import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  organizations = [
    // Armut
    {
      name: 'Against Malaria Foundation',
      thumbnail: 'against_malaria_foundation',
      website: 'https://www.againstmalaria.com',
      donationLink: 'https://www.againstmalaria.com/Donation.aspx',
      category: [ 'Armut' ],
      cause: [ 'Lebenssicherung' ],
      impactDirection: 'reaktiv',
      regions: ['Afrika'],
      questionaireResults: ["human death"],
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
      name: 'Schistosomiasis Control Initiative',
      thumbnail: 'schistosomiasis_control_initiative',
      website: 'http://www.imperial.ac.uk/schistosomiasis-control-initiative',
      donationLink: 'http://www.imperial.ac.uk/schistosomiasis-control-initiative/donate/',
      category: [ 'Armut' ],
      cause: [ 'Globale Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: ['Afrika'],
      questionaireResults: ["human death"],
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
      name: 'END Fund',
      thumbnail: 'end_fund',
      website: 'https://end.org/',
      donationLink: 'https://end.org/engage/invest',
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: ['Afrika'],
      questionaireResults: ["human health"],
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
      name: 'Evidence Action\'s No Lean Season',
      thumbnail: 'evidence_action',
      website: 'https://www.evidenceaction.org/beta-no-lean-season/#intro-no-lean-season',
      donationLink: 'https://effektiveraltruismus.de/spenden/',
      donationLinkDirect: '',
      category: ['Armut'],
      cause: ['Gesundheit', 'Lebensstandard'],
      impactDirection: 'reactive',
      regions: ['Asien'],
      questionaireResults: ['poverty'],
      slogan: 'Eine einfache Fahrkarte genügt, um saisonale Armut zu vermindern.',
      shortDescription: 'No Lean Season verringert saisionale Armut in ländlichen Region, indem sie Arbeitsmobilität ermöglicht und so Einkommen erhöht.',
      longDescription: 'Saisonale Armut ensteht in der Zeit zwischen Saat und Ernte in denen es wenig Jobs gibt, die Nahrungvorräte ausgehen und es so zu Mangelernährung insbesondere von Schwangeren und kleinen Kindern kommt. No Lean Season unterstützt teilnehmende Haushalte mit $20, um eine Reise zu städtischen Gebieten in der Umgebung möglich zu machen, die in dieser Zeit mehr Jobs bieten.',
      impact1000: 'Studien der Universität Yale haben ergeben, dass diese saisonalen Arbeitsmöglichkeiten in jedem Haushalt durschnittlich eine Mahlzeit pro Kopf mehr an Tag möglich machen.',
      donationDeficit: '??? pro Jahr?',
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
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz', 'Biotechnologie', "Nukleartechnologie", "Klimaschutz" ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: ["existential risk"],
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
      questionaireResults: ["human knowledge"],
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
      regions: ["Ozeanien", "Südamerika", "Afrika"],
      questionaireResults: ["environment"],
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
      category: [ 'Existenzrisiken', "Meta" ],
      cause: [ 'Künstliche Intelligenz', "Biotechnologie", "Strategie" ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: ["existential risk"],
      slogan: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      shortDescription: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      longDescription: 'Mehr Text... ungefähr 3-5 Sätze.',
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
      impactDirection: 'aktiv',
      regions: ['Weltweit, hauptsächlich Afrika'],
      questionaireResults: ["evaluation"],
      slogan: 'High impact giving opportunities that are supported by in-depth charity research.',
      shortDescription: 'GiveWell is a nonprofit dedicated to finding outstanding giving opportunities and publishing the full details of their analysis to help donors decide where to give. Their current primary focus is on improving life in the developing world.',
      longDescription: 'Unlike charity evaluators that focus solely on financials, assessing administrative or fundraising costs, GiveWell conduct in-depth research aiming to determine how much good a given program accomplishes (in terms of lives saved, lives improved, etc.) per dollar spent. Rather than try to rate as many charities as possible, they focus on the few charities that stand out most in order to find and confidently recommend high-impact giving opportunities.',
      evaluators: []
    },
    {
      name: 'ImpactMatters',
      thumbnail: 'impactmatters',
      website: 'https://www.impactm.org',
      category: [ 'Meta' ],
      cause: [ 'Evaluation' ],
      impactDirection: 'aktiv',
      regions: ['Weltweit'],
      questionaireResults: ["evaluation"],
      slogan: 'Auditing nonprofits to rigorously estimate their philanthropic impact',
      shortDescription: 'ImpactMatters conducts “impact audits” of nonprofits to rigorously estimate their philanthropic impact, compelling them and their funders to make evidence-based decisions.',
      longDescription: 'Even the best run nonprofits can benefit from an outside perspective on how to increase their accountability and impact. ImpactMatters provide an objective, independent estimate of the impact and cost of the nonprofit, and then provide the nonprofit with specific, actionable guidance on how to improve evaluation and data systems. If the nonprofit agrees to publication, ImpactMatters issues a report, which includes estimates of impact and cost, ratings of the quality of evidence undergirding those estimates and ratings of monitoring systems and data protocols. The impact audit team then issues a private management letter outlining ways that the auditee can improve its effectiveness.',
      evaluators: []
    },
    {
      name: 'Innovations for Poverty Action',
      thumbnail: 'innovations_for_poverty_action',
      website: 'https://www.poverty-action.org',
      donationLink: 'https://www.poverty-action.org/monthly-donation',
      category: [ 'Meta' ],
      cause: [ 'Evaluation' ],
      impactDirection: 'aktiv',
      regions: ['Weltweit'],
      questionaireResults: ["evaluation"],
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
      name: 'Future of Humanity Institute',
      thumbnail: 'future_of_humanity_institute',
      website: 'https://www.fhi.ox.ac.uk',
      donationLink: 'https://www.campaign.ox.ac.uk/page.aspx?pid=2698&id=c53701e8-0645-489a-828d-e709be7c7e2f',
      category: [ 'Meta' ],
      cause: [ 'Strategie' ],
      impactDirection: 'aktiv',
      regions: ['Weltweit'],
      questionaireResults: ["strategy"],
      slogan: 'Investigating what we can do now to ensure a long flourishing future.',
      shortDescription: 'The Future of Humanity Institute is a multidisciplinary research institute at the University of Oxford. Academics at FHI bring the tools of mathematics, philosophy and social sciences to bear on big-picture questions about humanity and its prospects.',
      longDescription: 'The Future of Humanity Institute is a research institute at the university of Oxford. Using tools from mathematics, philosophy and social sciences, the researchers try to identify and understand potential major threats to humanity and strategies for avoiding them. Such threats include drastic climate change, nuclear warfare and nuclear terrorism, molecular nanotechnology, and artificial general intelligence ',
      evaluators: []
    },
    {
      name: 'Copenhagen Consensus Center',
      thumbnail: 'copenhagen_consensus_center',
      website: 'http://www.copenhagenconsensus.com',
      donationLink: 'http://www.copenhagenconsensus.com/make-donation',
      category: [ 'Meta' ],
      cause: [ 'Strategie' ],
      impactDirection: 'aktiv',
      regions: ['Weltweit'],
      questionaireResults: ["strategy"],
      slogan: 'Expert advice to do the most good.',
      shortDescription: 'The Copenhagen Consensus Center is a think tank that researches the smartest solutions for the biggest problems facing the world, advising policy-makers and philanthropists how to spend their money most effectively.',
      longDescription: 'The Copenhagen Consensus Center is a US non-profit think tank, founded and headed by Bjørn Lomborg.[2] The Center organizes the Copenhagen Consensus, a conference of prominent economists held every four years, where potential solutions to global issues are examined and prioritized using cost-benefit analysis. Recently, the Copenhagen Consensus Center has refocused its efforts into nationally oriented research, and is currently working extensively in Haiti and Bangladesh, while also planning expansion to India, where it is partnering with high profile and influential organisations.',
      evaluators: []
    },
    {
      name: 'Centre for Effective Altruism',
      thumbnail: 'centre_for_effective_altruism',
      website: 'https://www.centreforeffectivealtruism.org',
      donationLink: 'https://www.centreforeffectivealtruism.org/donate/',
      category: [ 'Meta' ],
      cause: [ 'Outreach' ],
      impactDirection: 'aktiv',
      regions: ['Weltweit'],
      questionaireResults: ["outreach"],
      slogan: 'Growing and maintaining the Effective Altruism movement',
      shortDescription: 'The Centre for Effective Altruism acts as a springboard for the effective altruism community. It aims to promote and strengthen effective altruism as an idea and a community, help figure out how best to advance the wellbeing of all, and inspire people to take action based on that knowledge.',
      longDescription: 'The Centre for Effective Altruism runs and coordinates a variety of projects aimed at supporting and growing the effective altruism community. It supports local groups, funds research, runs conferences, produces a newsletter and collates and produces effective altruism-related content online. It also provides grants to new projects within that community, together with organisational support to help them grow and develop quickly. ',
      evaluators: []
    },
    {
      name: '80,000 hours',
      thumbnail: '80000_hours',
      website: 'https://80000hours.org',
      donationLink: 'https://80000hours.org/support-us/donate/',
      category: [ 'Meta' ],
      cause: [ 'Outreach' ],
      impactDirection: 'aktiv',
      regions: ['Weltweit'],
      questionaireResults: ["outreach"],
      slogan: 'Helping as many people as possible lead high-impact careers',
      shortDescription: '80,000 hours provides career advice for talented young people who want to have a social impact.',
      longDescription: '80,000 hours does in-depth research into how graduates can make the biggest difference possible with their careers, both through overall career choice and within a given field. Based on this, they provide an online career guide with supporting articles and tools; in-person advice including a workshop and one-on-one follow up; and links to a global community of people who want to work together to have the greatest possible positive impact.',
      evaluators: []
    },
    {
      name: 'Stiftung für Effektiven Altruismus',
      thumbnail: 'ea_stiftung',
      website: 'https://ea-stiftung.org',
      donationLink: 'https://ea-stiftung.org/spenden/',
      category: [ 'Meta' ],
      cause: [ 'Outreach' ],
      impactDirection: 'aktiv',
      regions: ['Deutschland'],
      questionaireResults: ["outreach"],
      slogan: 'Die Philosophie des Effektiven Altruismus weiterentwickeln, verbreiten und umsetzen',
      shortDescription: 'Die Stiftung für Effektiven Altruismus trägt zum nachhaltigen Wachstum der Bewegung des Effektiven Altruismus bei. Dabei streben sie eine Welt ohne extremes Leid an. Um die Philosophie des Effektiven Altruismus weiterzuentwickeln, zu verbreiten und umzusetzen, verfolgen sie Projekte in drei Bereichen: Forschung, Community und Philanthropie.',
      longDescription: 'Die Stiftung für Effektiven Altruismus versucht eine Gemeinschaft von außerordentlich engagierten Menschen aufzubauen, die ihr Leben für andere einsetzen wollen und sich der Komplexität der Herausforderung bewusst sind. Sie stellen Infrastruktur in Form von Veranstaltungen und Lokalgruppen bereit, damit die Bewegung nachhaltig wachsen kann und die Kernideen des Effektiven Altruismus erhalten bleiben. In der Öffentlichkeit wollen sie den Effektiven Altruismus in all seinen Nuancen darstellen, um eine konstruktive Diskussion darüber zu ermöglichen.',
      evaluators: []
    }

    // Politik
    // Tierleid
  ];

  constructor() { }
}
