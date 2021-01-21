import { Injectable } from '@angular/core';
import { Organization } from '../model/organization';

@Injectable()
export class DataService {
  private poverty: Organization[] = [
    {
      name: 'Against Malaria Foundation',
      article: 'die',
      thumbnail: 'against_malaria_foundation',
      website: 'https://www.againstmalaria.com',
      donationLink: 'https://www.againstmalaria.com/Donation.aspx',
      donationLinkEAS: 'https://www.effektiv-spenden.org/against-malaria-foundation/',
      category: [ 'Armut' ],
      cause: [ 'Menschenleben' ],
      impactDirection: 'reaktiv',
      regions: [
        'AO', 'BW', 'BF', 'BI', 'KH', 'CM', 'CD', 'ET', 'GA', 'GM', 'GH', 'GN', 'HT', 'IN', 'ID', 'KE', 'LR', 'MG', 'MW',
        'ML', 'MZ', 'NA', 'NP', 'NI', 'NG', 'PG', 'PE', 'PH', 'RW', 'ST', 'SN', 'SL', 'SD', 'TZ', 'TG', 'UG', 'ZM', 'ZW'
      ],
      questionaireResults: [ 'human death' ],
      slogan: 'Mit Moskitonetzen Malaria in Afrika bekämpfen.',
      shortDescription: 'Malaria ist eine der häufigsten Todesursachen von Kindern in Afrika. Mit Insektiziden behandelte Netze können Malaria wirksam verhindern und sind außerdem günstig — etwa 5 Dollar pro Netz.',
      longDescription: 'Die Against Malaria Foundation (AMF) ist eine Hilfsorganisation aus Großbritannien, die sogenannte "long-lasting insecticidal nets" (LLINs) an Bevölkerungsgruppen mit hohem Malaria-Risiko verteilt, hauptsächlich in Subsahara-Afrika. Die Verteilung der Netze geschieht in Partnerschaft mit anderen Organisationen wie z.B. dem Internationalen Roten Kreuz und Malaria Consortium. Zusätzlich zur Verteilung von Netzen erfolgt auch Aufklärungsarbeit zur Prävention von Malaria. Die Verteilung wird in Schriftform, Bild und Video dokumentiert. Es erfolgen ca. 3 Jahre lang halbjährlich Überprüfungen, um die Nutzung der Netze und andere lokale Gegebenheiten zu begutachten.',
      impact1000: 'Mit 1.000€ können ungefähr 250 Netze verteilt werden: Grob geschätzt reicht die Verteilung von 900 Netzen, um ein Leben zu retten.',
      donationDeficit: 130000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/AMF',
          top: true
        },
        {
          evaluator: 'The Life You Can Save',
          link: 'https://www.thelifeyoucansave.org/where-to-donate/against-malaria-foundation',
          top: true
        }
      ]
    },
    {
      name: 'Malaria Consortium',
      article: 'das',
      thumbnail: 'malaria_consortium',
      website: 'https://www.malariaconsortium.org',
      donationLink: 'https://www.malariaconsortium.org/support/donate.htm',
      donationLinkEAS: 'https://www.effektiv-spenden.org/malaria-consortium/',
      category: [ 'Armut' ],
      cause: [ 'Menschenleben' ],
      impactDirection: 'reaktiv',
      regions: [ 'BD', 'BF', 'KH', 'TD', 'ET', 'GH', 'MZ', 'MM', 'NP', 'NG', 'SN', 'SS', 'TH', 'UG', 'ZM' ],
      questionaireResults: [ 'human death' ],
      slogan: 'Verbesserung der Prävention, Diagnose und Behandlung von vernachlässigten Tropenkrankheiten',
      shortDescription: 'Malaria Consortium ist eine der weltweit führenden Non-Profit-Organisationen, die sich auf die Prävention, Kontrolle und Behandlung von Malaria und anderen übertragbaren Krankheiten in gefährdeten Bevölkerungsgruppen spezialisiert hat.',
      longDescription: 'Malaria Consortium ist eine der weltweit führenden Non-Profit-Organisationen, die sich auf die Prävention, Kontrolle und Behandlung von Malaria und anderen übertragbaren Krankheiten in gefährdeten Bevölkerungsgruppen spezialisiert hat. Sie schaffen maßgeschneiderte, evidenzbasierte Lösungen, die sich positiv auf das Gesundheitssystem und die Wirtschaft insgesamt auswirken.',
      impact1000: 'Mit 1.000€ können ungefähr 150 mit Insektiziden behandelte Netze gekauft, 15000 Malaria-Tests gemacht werden oder 250 Kinder durch Chemoprevention vor Malaria geschützt werden.',
      donationDeficit: 36000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/malaria-consortium',
          top: true
        }
      ]
    },
    {
      name: 'SCI Foundation',
      article: 'die',
      thumbnail: 'sci',
      website: 'https://schistosomiasiscontrolinitiative.org',
      donationLink: 'https://schistosomiasiscontrolinitiative.org/get-involved/donate',
      donationLinkEAS: 'https://effektiveraltruismus.de/spenden/?fb_item_id_fix=33723',
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [ 'BI', 'CI', 'CD', 'ET', 'LR', 'MG', 'MW', 'MR', 'NE', 'SD', 'TZ', 'UG' ],
      questionaireResults: [ 'human health' ],
      slogan: 'Behandlung vernachlässigter Tropenkrankheiten in Subsahara-Afrika',
      shortDescription: 'Die  Mission der SCI-Stiftung besteht darin, vernachlässigte Infektionskrankheiten durch die Stärkung wirkungsvoller und umfassender Gesundheitsprogramme zu verhindern und zu behandeln. Durch die SCI-Stiftung werden Kinder und Erwachsene mit Risiko für Schistosomiasis und den Boden übertragene Helminthen (Peitschenwurm, Hakenwurm und Spulwurm) behandelt. Dadurch werden Anämie, beeinträchtigtes Wachstum und Entwicklung bei Kindern und die Entwicklung von lebensbedrohlichen Zuständen von Blasenkrebs, Nierenfunktionsstörungen oder Leber- und Milzschäden verhindert.',
      longDescription: 'Die SCI-Stiftung unterstützt Gesundheitsministerien in Subsahara-Afrika bei der Bekämpfung und anschließenden Eliminierung von Schistosomiasis und durch den Boden übertragenen Helminthen aus ihrer Bevölkerung unter Verwendung des Medikamentenspendeprogramms der Weltgesundheitsorganisation (WHO) für Praziquantel und Albendazol. Weltweit sind 240 Millionen Menschen von Schistosomiasis betroffen und ca. 200.000 Menschen sterben jedes Jahr an Schistosomiasis. Mindestens 90 Prozent der behandlungsbedürftigen Menschen leben in Afrika.',
      impact1000: 'Mit ca. 1.000€ können ca. 3000 Menschen behandelt werden.',
      donationDeficit: 30000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/sci-foundation',
          top: true
        },
        {
          evaluator: 'The Life You Can Save',
          link: 'https://www.thelifeyoucansave.org/best-charities/schistosomiasis-control-initiative/',
          top: true
        }
      ]
    },
    {
      name: 'Helen Keller International',
      article: null,
      thumbnail: 'helen_keller_international',
      website: 'http://www.hki.org',
      donationLink: 'http://hekein.convio.net/site/Donation2?df_id=1860&mfc_pref=T&1860.donation=form1&_ga=2.184512229.218491984.1529773877-1415190627.1529773877',
      donationLinkEAS: null,
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [ 'US', 'BF', 'CM', 'CI', 'GN', 'KE', 'ML', 'MZ', 'NE', 'NG', 'SN', 'SL', 'TZ', 'BD', 'KH', 'ID', 'MM', 'NP', 'PH', 'VN' ],
      questionaireResults: [ 'human health' ],
      slogan: 'Prävention von Blindheit und Unterernährung',
      shortDescription: 'Helen Keller International (HKI) bekämpft die Ursachen und Folgen von Blindheit und Mangelernährung durch Programme, die auf Evidenz und Forschung in den Bereichen Sehvermögen, Gesundheit und Ernährung basieren.',
      longDescription: 'Helen Keller International hat es sich zur Aufgabe gemacht, die Sehkraft und das Leben der Schwächsten und Benachteiligten zu retten. Sie bekämpfen die Ursachen und Folgen von Blindheit und Mangelernährung durch Programme, die auf Evidenz und Forschung in den Bereichen Sehvermögen, Gesundheit und Ernährung basieren. Derzeit laufen mehr als 100 Programme in 20 afrikanischen und asiatischen Ländern sowie in den Vereinigten Staaten.',
      impact1000: 'Mit 1.000€ können derzeit ca. 1000 Vitamin A Ergänzungsmittel verteilt werden. Dies verhindert Vitamin-A-Mangel bedingte schlechte Sehkraft/Blindheit und führt zu einem intakterem Immunsystem, so dass häufige Erkankungen wie Durchfall und Masern seltener schwer verlaufen oder sogar zum Tod führen. Nach einer Schätzung von Givewell kann mit ca. 3000-5000€ statistisch so ein Menschenleben, meist das eines Kindes unter 5.',
      donationDeficit: 3300000,
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
      article: 'der',
      thumbnail: 'end_fund',
      website: 'https://end.org/',
      donationLink: 'https://end.org/engage/invest',
      donationLinkEAS: null,
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [
        'AF', 'IN', 'JE', 'MR', 'ML', 'NE', 'NG', 'SN', 'GW', 'LR', 'CI', 'TD', 'SD', 'CF', 'SD', 'ET', 'SO', 'UG', 'CD',
        'SS', 'CG', 'KE', 'TZ', 'RW', 'BI', 'ZM', 'ZW', 'NA', 'AO'
      ],
      questionaireResults: [ 'human health' ],
      slogan: 'Unterstützung von Entwurmungsprogrammen in Ländern mit niedrigem Einkommen',
      shortDescription: 'Der END-Fonds verwaltet Zuschüsse, stellt Finanzmittel bereit und unterstützt staatliche Programme zur Kontrolle und Beseitigung vernachlässigter Tropenkrankheiten, einschließlich der Entwurmung.',
      longDescription: 'Vernachlässigte Tropenkrankheiten (Neglected Tropical Diseases, NTDs) sind eine Gruppe von parasitären und bakteriellen Infektionskrankheiten, von denen mehr als 1,5 Milliarden Menschen auf der ganzen Welt betroffen sind, die Hälfte davon sind Kinder. Der END Fund konzentriert sich auf die Bereitstellung von NTD-Behandlungen, einschließlich Entwurmung, indem er strategische Investitionen mit hoher Wirkung in NTD-Programme verwaltet, mit Partnern aus Regierung, NGOs, Pharmazie und Wissenschaft zusammenarbeitet sowie eine Gemeinschaft von Aktivisten und Philanthropen aufbaut und einbezieht. Es wird ein systematischer Ansatz verfolgt, um das breite Ökosystem von Interessenvertretern, die an der Beendigung von NTDs arbeiten, zu verstehen, sich mit ihnen auseinanderzusetzen und Einfluss zu nehmen.',
      impact1000: 'Studien zeigen, dass die Behandlung von NTDs die kostenwirksamste Methode ist, um die Anwesenheit von Kindern in der Schule zu verbessern und ihre Lern- und Konzentrationsfähigkeit zu steigern. Mit nur 50 Cent (USD) wird ein Paket von Medikamenten mit rascher Wirkung finanziert, um eine Person gegen die fünf häufigsten NTDs zu behandeln. Mit 1.000 Euro können wir dazu beitragen, über 2.000 Menschen mit Entwurmungsmedikamenten zu versorgen.',
      donationDeficit: 28000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/AMF',
          top: true
        }
      ]
    },
    /* TODO: Replace this organization with another Evidence Actions' program
    {
      name: 'Evidence Action\'s - No Lean Season',
      article: null,
      thumbnail: 'evidence_action_nls',
      website: 'https://www.evidenceaction.org/beta-no-lean-season/#intro-no-lean-season',
      donationLink: 'https://donate.evidenceaction.org/campaign/general-fundraising-page/c139764',
      donationKeyEAS: null,
      category: [ 'Armut' ],
      cause: [ 'Gesundheit', 'Lebensstandard' ],
      impactDirection: 'reaktiv',
      regions: [ 'IN' ],
      questionaireResults: [ 'poverty' ],
      slogan: 'Eine einfache Fahrkarte genügt, um saisonale Armut zu vermindern',
      shortDescription: 'No Lean Season verringert saisionale Armut in ländlichen Region, indem sie Arbeitsmobilität ermöglicht und so Einkommen erhöht.',
      longDescription: 'Sasionale Armut entsteht in der Zeit zwischen Saat und Ernte in denen es wenig Jobs gibt, die Nahrungvorräte ausgehen und es so zu Mangelernährung insbesondere von Schwangeren und kleinen Kindern kommt. No Lean Season unterstützt teilnehmende Haushalte mit $20, um eine Reise zu städtischen Gebieten in der Umgebung möglich zu machen, die in dieser Zeit mehr Jobs bieten. Studien der Universität Yale haben ergeben, dass diese saisonalen Arbeitsmöglichkeiten in jedem Haushalt durschnittlich eine Mahlzeit pro Kopf mehr an Tag möglich machen.',
      impact1000: 'In Haushalt, die an dem Programm teilnehmen, konnte ein Drittel mehr für Nahrung und andere Notwendigkeiten ausgeben werden, pro Person wurden ca. 600 Kalorien mehr am Tag konsumiert.',
      donationDeficit: 0, // Im Dezember 2017 wurde von Good Ventures 11,5 Millionen Dollar zum No Lean Season Programm gegeben, welches das Programm für die nächsten drei Jahre im Wesentlichen finanziert. Zusätzliche Spenden können für Forschung und Erweiterung des Programms genutzt werden.
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
    */
    {
      name: 'GiveDirectly',
      article: null,
      thumbnail: 'give_directly',
      website: 'https://givedirectly.org/',
      donationLink: 'https://givedirectly.org/give-now',
      donationLinkEAS: 'https://www.effektiv-spenden.org/givedirectly/',
      category: [ 'Armut' ],
      cause: [ 'Lebensstandard' ],
      impactDirection: 'reaktiv',
      regions: [ 'KE', 'UG' ],
      questionaireResults: [ 'poverty' ],
      slogan: 'Geld direkt an extrem arme Menschen spenden',
      shortDescription: 'GiveDirectly macht extrem arme Gemeinschaften ausfindig, überprüft die individuelle Bedürftigkeit und sendet per Mobiltelefon etwa 1.000$ für ein Jahr an besonders bedürftige Haushalte.',
      longDescription: 'GiveDirectly macht extrem arme Gemeinschaften ausfindig, überprüft die individuelle Bedürftigkeit und sendet per Mobiltelefon etwa 1.000$ für ein Jahr an besonders bedürftige Haushalte. GiveDirectly forscht intensiv daran festzustellen, welche Auswirkungen die Geld-Tranfers auf teilnehmende Haushalte haben. Auf der Website https://live.givedirectly.org/ lässt sich nachvollziehen, was einzelne Individuen mit dem Geld gemacht haben.',
      impact1000: 'GiveDirectly gibt 83% der Spenden direkt an bedürftige Haushalte weiter. Eine Untersuchung zeigt, dass dieses Geld die Nahrungsversorgung, Finanzierung von Bildung und Gesundheit verbessert und nicht für Alkohol oder Tabak ausgegeben wurde. Nach der Einschätzung von GiveWell hat GiveDirectly verglichen mit anderen besonders effektiven Interventionen wahrscheinlich eine geringere Effektivität. Dafür ist GiveDirectly außerordentlich transparent und hat den direkten Nutzen die Armut zu reduzieren und ist somit in dieser Hinsicht wenig mit Unsicherheiten behaftet.',
      donationDeficit: 450000000,
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
        }
      ]
    },
    {
      name: 'Pratham',
      article: null,
      thumbnail: 'pratham',
      website: 'http://pratham.org',
      donationLink: 'http://pratham.org/get-involved/donate',
      donationLinkEAS: null,
      category: [ 'Armut' ],
      cause: [ 'Bildung' ],
      impactDirection: 'reaktiv',
      regions: [ 'IN' ],
      questionaireResults: [ 'education' ],
      slogan: 'Jedes Kind hat ein Anrecht auf Schule und gute Bildung',
      shortDescription: 'Pratham ist eine innovative Lernorganisation, gegründet 1995 in Indien, um die dortige Qualität der Bildung zu verbessern. Angefangen mit dem Ziel den Kindern in den Slums von Mumbai Bildungszugang zu ermöglichen, ist die Organisation heute zu einer der größten NGOs im Bildungsbereich in Indien gewachsen. ',
      longDescription: 'Der Fokus von Pratham liegt auf qualitativ hochwertigen, kostengünstigen und replizierbaren Interventionen, um Lücken im vorhandenen Bildungssystem zu schließen. Programme sind auf die Anforderungen verschiedener Altersgruppen angepasst. Dabei arbeiten sie sowohl direkt mit den Schulen und der Bevölkerung als auch in Zusammenarbeit mit Regierungsstellen, wodurch jedes Jahr Millionen von Menschen erreicht werden können. Kern der Programme bildet der "Teaching at the Right Level (TaRL)"-Ansatz, der nachweislich positive Auswirkungen auf die Lernergebnisse der Kinder hat. Im Kern des Ansatzes werden den Kindern entsprechend ihrem Niveau grundlegende Lernkompetenzen vermittelt, um ihnen ein schnelles Aufholen im "normalen" Unterricht zu ermöglichen. Der Ansatz wird auf zwei Arten umgesetzt, entweder direkt durch Ausbilder der Organisation in "Lerncamps" oder im Rahmen von Regierungspartnerschaftsprogrammen, bei denen staatliche Lehrer den Ansatz im täglichen Unterricht einbauen. Ob der Ansatz auch im Kontext außerhalb Indiens Wirkung zeigt, wird derzeit erprobt.',
      impact1000: 'Je nach Programm sind die Kosten unterschiedlich. Als Referenz können z.B. mit 1000 € sechs Ausbilder je ein Jahr den Unterricht in Rahmen eines Lerncamps begleiten. Pratham arbeitet mit dem Forschungszentrum J-PAL zusammen, um sicherzustellen, dass die Bildungsinterventionen wirklich erfolgreich und kosteneffektiv sind, was bei vielen anderen Ansätzen nur begrenzt der Fall ist.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },
    {
      name: 'Camfed',
      article: null,
      thumbnail: 'camfed',
      website: 'https://camfed.org/',
      donationLink: 'https://camfed.org/donate',
      donationLinkEAS: null,
      category: [ 'Armut' ],
      cause: [ 'Bildung' ],
      impactDirection: 'reaktiv',
      regions: [ 'GH', 'MW', 'ZM', 'TZ', 'ZW' ],
      questionaireResults: [ 'education' ],
      slogan: 'Kampagne für die Bildung von Frauen',
      shortDescription: 'Camfed ist eine internationale gemeinnützige Organisation und wurde 1993 gegründet. Mit dem Ziel, Armut und Ungleichheit zu bekämpfen, werden Mädchen beim Schulbesuch und -erfolg unterstützt und junge Frauen dazu befähigt, sich als Vorkämpferinnen des Wandels zu positionieren. ',
      longDescription: 'Das Programm investiert in Mädchen und Frauen in den ärmsten ländlichen Regionen der Subsahara-Afrika, wo Mädchen mit akuten Benachteiligungen konfrontiert sind. Ziel ist es die Frauen nicht nur als Individuen zu stärken, sondern durch ein Alumni- und Mentoring-Programm einen Wandel in den Gemeiden zu bewirken und damit die Aussichten für benachteiligte Menschen zu verbessern. Dazu werden Mädchen auf verschiedenen Bildungsstufen finanziell unterstützt, um ihnen den Bildungszugang zu ermöglichen. Zusätzlich wird Frauen geholfen, den Umgang mit Geld zu lernen und kleine Unternehmen zu gründen. Das Absolventen-Netzwerk bringt diese gebildeten jungen Frauen weiter zusammen, um ihnen die Möglichkeiten zu geben, weitere Veränderungen auf den Weg zu bringen.',
      impact1000: 'Camfed selbst gibt an mit 1.000 € einem Mädchen ca. 4 Schuljahre finanzieren zu können. Jedes zusätzliche Schuljahr an Bildung bewirkt statistisch eine deutliche Steigerung (>10%) des späteren Einkommens von Frauen - mehr als bei Männern. Es hat zudem zur Folge, dass die Frauen deutlich weniger ungeplante Schwangerschaften haben, was der Überbevölkerung sowie einem schlechtem Lebensstandard der Kinder und der folgenden Generationen entgegen wirkt. Die University of Camebridge hat in einer Analyse bestätigt, dass trotz des Fokus von Camfed auf die benachteiligsten Mädchen das Bildungsniveaus ähnlich effektiv wie bei vergleichbaren Programmen verbessert wird.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    }
  ];

  private existentialRisks: Organization[] = [
    {
      name: 'Future of Life Institute',
      article: 'das',
      thumbnail: 'future_of_life',
      website: 'https://futureoflife.org',
      donationLink: 'https://futureoflife.org/donate-now',
      donationLinkEAS: null,
      category: [ 'Existenzrisiken'],
      cause: [ 'Künstliche Intelligenz', 'Biosicherheit', 'Nuklearsicherheit', 'Klimaschutz' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'existential risks', 'catastrophe' ],
      slogan: 'Technologie kann die Menschheit in ein neues Zeitalter, oder in die Zerstörung führen.',
      shortDescription: 'Das Future of Life Institute hat sich als Ziel gesetzt, Forschung und andere Initiativen zum Thema Sicherung des Lebens und der Menschheit zu fördern. Dazu gehört das Entwickeln einer positiven Zukunftsvision in Anbetracht neuer Technologien und großen globalen Herausforderungen.',
      longDescription: 'Das Future of Life Institute hat sich als Ziel gesetzt, Forschung und andere Initiativen zum Thema Sicherung des Lebens und der Menschheit zu fördern. Dazu gehört das Entwickeln einer positiven Zukunftsvision in Betracht neuer Technologien und großen globalen Herausforderungen. Momentaner Fokus ist die Sicherheit von Technologien im Bereich künstliche Intelligenz und zudem die Minimierung von Risiken durch nukleare Waffen und Biotechnologie.',
      impact1000: null,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },
    {
      name: 'Machine Intelligence Research Institute',
      article: 'das',
      thumbnail: 'miri',
      website: 'https://intelligence.org',
      donationLink: 'https://intelligence.org/donate',
      donationLinkEAS: 'https://effektiveraltruismus.de/spenden/?fb_item_id_fix=33729',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'existential risks', 'human knowledge'],
      slogan: 'Mathematische Grundsatzforschung um sicherzustellen, dass mögliche künstliche Superintelligenz eine positive Auswirkung auf die Menschheit hat',
      shortDescription: 'Wenn die Entwicklung künstlicher Intelligenz so schnell wie bisher voranschreitet, könnte künstliche Intelligenz eines Tages Menschen in jedem Bereich an Intelligenz übertreffen. Das Ziel von MIRI ist es, die Grundlagen zu legen, sichere und verlässliche Systeme im Bereich künstlicher Intelligenz zu entwickeln.',
      longDescription: 'Wenn die Entwicklung künstlicher Intelligenz so schnell wie bisher voranschreitet, ist es denkbar, dass künstliche Intelligenz eines Tages Menschen in jedem Bereich an Intelligenz übertreffen könnte. Die meisten AI-Forscher erwarten diese Entwicklung schon in diesem Jahrhundert. Das Ziel von MIRI ist es, die Grundlagen dafür zu legen, sichere und verlässliche Systeme im Bereich künstlicher Intelligenz zu entwickeln. Wichtige Aspekte dieser Forschung sind zum Beispiel Entscheidungstheorie, das Erlernen von Werten und der Umgang mit Unsicherheit.',
      impact1000: null,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Effektiver Altruismus',
          link: 'https://effektiveraltruismus.de/organisationen/',
          top: true
        }
      ]
    },
    {
      name: 'Clean Air Task Force',
      article: 'die',
      thumbnail: 'clean_air_task_force',
      website: 'http://www.catf.us',
      donationLink: 'https://www.catf.us/donate',
      donationLinkEAS: 'https://www.effektiv-spenden.org/clean-air-task-force/',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Klimaschutz' ],
      impactDirection: 'reaktiv',
      regions: [ 'US' ],
      questionaireResults: [ 'environment','human knowledge'],
      slogan: 'Schutz der Welt vor den schlimmsten Auswirkungen des Klimawandels',
      shortDescription: 'Die Clean Air Task Force (CATF) leistet einen Beitrag zum Schutz vor den schlimmsten Auswirkungen des Klimawandels. Dazu fördert CATF die rasche globale Entwicklung und den Einsatz von CO2-armer Energie und anderen klimaschutzenden Technologien durch Forschung und Analyse, öffentliche Lobbyarbeit und Partnerschaft mit dem Privatsektor.',
      longDescription: 'Die Clean Air Task Force (CATF) ist eine in den USA ansässige Nichtregierungsorganisation, die sich für die Reduzierung von klimaschädlichen und anderen Schadstoffen durch Forschung und Analyse, öffentliche Interessenvertretung und Partnerschaft mit dem Privatsektor einsetzt. Sie wurde 1996 mit dem Ziel gegründet, eine föderale Politik zur Verringerung der durch amerikanische Kohlekraftwerke verursachten Luftverschmutzung einzuführen. Diese Kampagne war sehr erfolgreich und trug dazu bei, dass ein großer Teil der US-Kohleflotte in den Ruhestand ging. Sie haben zahlreiche andere erfolgreiche Kampagnen konzipiert und mitgestaltet, die beim Aufbau von CO2-Kontrollen für den US-amerikanischen Energiesektor helfen, z. B. Vorschriften für Dieselemissionen, Vorschriften für Schiffsemissionen und Vorschriften für Methanemissionen aus der Öl- und Gasproduktion.',
      impact1000: 'Einer Evaluation von Founder\'s Pledge zufolge ist zu erwarten, dass eine Spende von 1000 € schätzungsweise den Ausstoß von 1000 bis zu 10.000 Tonnen CO2 verhindern kann.',
      donationDeficit: 2000000,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },
    {
      name: 'Coalition for Rainforest Nations',
      article: 'die',
      thumbnail: 'coalition_for_rainforest_nations',
      website: 'https://www.rainforestcoalition.org',
      donationLink: 'https://www.rainforestcoalition.org/donations',
      donationLinkEAS: null,
      category: [ 'Existenzrisiken' ],
      cause: [ 'Klimaschutz' ],
      impactDirection: 'reaktiv',
      regions: [
        'AR', 'GQ', 'BD', 'CL', 'CR', 'CD', 'DO', 'EC', 'GA', 'GH',
        'GT', 'GY', 'HN', 'CM', 'KE', 'CG', 'LS', 'LR', 'MG', 'NI',
        'NG', 'PK', 'PA', 'PY', 'PE', 'SL', 'SR', 'TH', 'UG', 'UY',
        'VN', 'CF', 'MY', 'ID', 'PG'
      ],
      questionaireResults: [ 'environment' ],
      slogan: 'Verantwortungsvolle Verwaltung der letzten großen Regenwälder der Welt',
      shortDescription: 'Die Coalition for Rainforest Nations (CfRN) bemüht sich um die verantwortungsvolle Verwaltung der letzten großen Regenwälder der Welt, indem sie Regierungen und Gemeinschaften dabei unterstützt, nachhaltig mit dem Regenwald umzugehen.',
      longDescription: 'Die CfRN ist eine zwischenstaatliche Organisation von mehr als 50 Regenwaldnationen, die sich für die Förderung der ökologischen Nachhaltigkeit einsetzt und gleichzeitig Möglichkeiten für wirtschaftlichen Fortschritt in den tropisch bewaldeten Entwicklungsländern schafft. Es wurde 2004 vom Premierminister von Papua-Neuguinea und dem Präsidenten von Costa Rica gegründet. Die CfRN-Teilnehmerländer arbeiten freiwillig in gemeinsam entwickelten Initiativen zusammen, die vom CfRN-Sekretariat mit Sitz in New York geleitet werden.',
      impact1000: 'Laut Evaluation von Founder\'s Pledge könnte mit 1.000€ schätzungsweise die Freisetzung von ca. 8.000 Tonnen CO2 verhindert werden. Auf Grund der politischen Unabwägbarkeiten ist diese Einschätzung jedoch mit großer Unsicherheit behaftet, als wahrscheinliche Kostenspanne gibt Founder\'s pledge $0.02-$0.72 pro verhinderter Tonne CO2 an.',
      donationDeficit: 2000000,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },
    {
      name: 'Future of Humanity Institute',
      article: 'das',
      thumbnail: 'future_of_humanity',
      website: 'https://www.fhi.ox.ac.uk',
      donationLink: 'https://effektiveraltruismus.de/spenden/?purpose=FHI',
      donationLinkEAS: null,
      category: [ 'Existenzrisiken', 'Meta' ],
      cause: [ 'Künstliche Intelligenz', 'Biosicherheit', 'Makrostrategie' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'existential risks' ],
      slogan: 'Was können wir jetzt tun, um eine lange blühende Zukunft der Menschheit zu sichern?',
      shortDescription: 'Das Future of Humanity Institute ist ein multidisziplinäres Forschungsinstitut an der Universität Oxford. Die Forscher versuchen potenziell existentielle Bedrohungen für die Menschheit zu identifizieren und entsprechende Strategien zu ihrer Vermeidung zu entwickeln.',
      longDescription: 'Das Future of Humanity Institute ist ein Forschungsinstitut an der Universität Oxford. Mithilfe von Methoden aus Mathematik, Philosophie, Informatik und Sozialwissenschaften versuchen die Forscher, potenziell  existentielle Bedrohungen für die Menschheit zu identifizieren und entsprechende Strategien zu ihrer Vermeidung zu entwickeln. Zu diesen Bedrohungen gehören künstliche Intelligenz, Biotechnologie sowie molekulare Nanotechnologie. Das Future of Humanity Institute gliedert sich zurzeit in vier Forschungsgruppen: Makrostrategie, Centre for the Governance of AI, Technische KI Sicherheit und Biosicherheit.',
      impact1000: null,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Effektiver Altruismus',
          link: 'https://effektiveraltruismus.de/organisationen/',
          top: true
        }
      ]
    }
  ];

  private meta: Organization[] = [
    {
      name: 'The Life You Can Save',
      article: null,
      thumbnail: 'the_life_you_can_save',
      website: 'https://www.thelifeyoucansave.org',
      donationLink: 'https://tlycs.networkforgood.com/causes/3949-the-life-you-can-save',
      donationLinkEAS: null,
      category: [ 'Meta' ],
      cause: [ 'Wirksamkeitsanalyse' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Smart giving, simplified',
      shortDescription: 'The Life You Can Save möchte Menschen dazu anzuregen, gegen extreme Armut zu spenden. Dazu werden in einem sorgfältigen Prozess die effektivsten Organisationen in verschiedenen Bereichen durch ein Team von Experten ausgewählt und auf der Website von The Life You Can Save vorgestellt.',
      longDescription: 'The Life You Can Save macht "intelligentes Spenden einfach", indem es eine Gruppe von gemeinnützigen Organisationen zusammenstellt, die die meisten Leben pro Dollar retten oder verbessern. Ihr Ziel ist es, eine Welt zu schaffen, in der jeder die Möglichkeit hat, sich ein besseres Leben aufzubauen, und in der es kein Leid und keinen Tod durch extreme Armut gibt.',
      impact1000: 'Für jeden Dollar den The Life You Can Save ausgibt, werden $13 Spenden für die von The Life You Can Save empfohlenen Hilfsorganisationen generiert. The Life You Can Save fördert effektive Wohltätigkeitsorganisationen, der Wirkungsrechner: www.thelifeyoucansave.org/impact-calculator kann genutzt werden um zu sehen was das Geld bewirkt.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },
    {
      name: 'GiveWell',
      article: null,
      thumbnail: 'givewell',
      website: 'https://www.givewell.org',
      donationLink: 'https://secure.givewell.org/support-givewell',
      donationLinkEAS: 'https://effektiveraltruismus.de/spenden/?fb_item_id_fix=33722',
      category: [ 'Meta' ],
      cause: [ 'Wirksamkeitsanalyse' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Forschung zu effektiven Spendenmöglichkeiten',
      shortDescription: 'GiveWell ist eine Non-Profit-Organisation, die sich der Auffindung herausragender Spendenmöglichkeiten widmet und die vollständigen Details ihrer Analyse veröffentlicht, um den Spendern bei der Entscheidung zu helfen, wo sie ihre Spende tätigen möchten. Ihr derzeitiger Schwerpunkt liegt auf der Verbesserung des Lebens in Entwicklungsländern.',
      longDescription: 'Anders als andere Evaluatoren die sich ausschließlich auf Finanzen konzentrieren und Verwaltungs- oder Fundraising-Kosten ermitteln, führt GiveWell eingehendere Untersuchungen durch. Dabei untersuchen sie wie viel ein entsprechendes Programm bewirkt (ausgedrückt durch die Anzahl geretter bzw. verbesserter Leben). Anstatt zu versuchen, so viele Wohltätigkeitsorganisationen wie möglich zu bewerten, konzentrieren sie sich auf die wenigen Wohltätigkeitsorganisationen, die herausragend sind, um besonders wirkungsvolle Spendengelegenheiten zu finden.',
      impact1000: 'Eine Spende an GiveWell hilft bei deren Anliegen, exzellente Interventionen im Bereich Global Health und Armut zu identifizieren und Menschen anzuregen, an solche Organisationen zu spenden. Eine genaue Quantifizierung ist schwierig, da die Effektivität von vielen Faktoren abhängt. Ein grober Anhaltspunkt ist der Vergleich zwischen den Ausgaben von Givewell und den getätigten Spenden an andere Organisationen, bei denen Givewell nach eigener Analyse einen Einfluss hatte: Im Jahr 2018 wurden etwa 30 mal mehr Spenden durch Givewell beeinflusst als Givewell Ausgaben hatte. Hierbei können wir leider nicht konkret einschätzen, wie viel dieses Geldes ohne Givewell gespendet worden wäre, oder an welche Organisationen.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Effektiver Altruismus',
          link: 'https://effektiveraltruismus.de/organisationen/',
          top: true
        }
      ]
    },
    {
      name: 'Innovations for Poverty Action',
      article: null,
      thumbnail: 'innovations_for_poverty_action',
      website: 'https://www.poverty-action.org',
      donationLink: 'https://www.poverty-action.org/monthly-donation',
      donationLinkEAS: null,
      category: [ 'Meta' ],
      cause: [ 'Wirksamkeitsanalyse' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: ['human knowledge','poverty'],
      slogan: 'Randomisierte kontrollierte Studien von Programmen und Politik für die Armen',
      shortDescription: 'Innovations for Poverty Action führt kontrollierte, stichprobenartig ausgewählte Studien zu Hilfsprogrammen durch. Ihre Studien werden in ähnlicher Weise wie wissenschaftliche Studien druchgeführt, um die Auswirkungen der getesteten Programme zu ermitteln und wirksame Methoden zur Verringerung der Armut zu finden.',
      longDescription: 'Innovations for Poverty Action (IPA) ist eine gemeinnützige Forschungs- und Politikinitiative, die effektive Lösungen für globale Armutsprobleme entdeckt und fördert. Die IPA bringt Forscher und Entscheidungsträger zusammen, um Lösungen und ihre Anwendungen zu entwerfen, diese exakt zu bewerten und zu verfeinern und sicherzustellen, dass die gewonnenen Erkenntnisse dazu genutzt werden, das Leben der Armen in der Welt zu verbessern.',
      impact1000: 'Eine Studie kostet normalerweise zwischen 50.000€ und 500.000€. Laut Givewell ist die Qualität der ausgeführten Studien mit am besten im Vergleich zu ähnlichen Untersuchungen. IPA hat auch die Organisation Evidence Action hervorgebracht, die das von Givewell als sehr effektiv betrachtete "Deworm the World"-Programm durchführt.',
      donationDeficit: 2000000,
      evaluators: [
        {
          evaluator: 'The Life You Can Save',
          link: 'https://www.thelifeyoucansave.org/where-to-donate/innovations-for-poverty-action',
          top: true
        }
      ]
    },
    {
      name: 'Centre for Effective Altruism',
      article: 'das',
      thumbnail: 'centre_for_effective_altruism',
      website: 'https://www.centreforeffectivealtruism.org',
      donationLink: 'https://www.centreforeffectivealtruism.org/donate',
      donationLinkEAS: 'https://effektiveraltruismus.de/spenden/?fb_item_id_fix=33732',
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'institutions' ],
      slogan: 'Förderung und Aufrechterhaltung der Bewegung des Effektiven Altruismus',
      shortDescription: 'Das Zentrum für effektiven Altruismus fördert den effektiven Altruismus als Idee und als Gemeinschaft. Ziel ist es herauszufinden, wie das Wohlergehen aller am besten gefördert werden kann und Menschen dazu zu inspirieren, basierend auf diesem Wissen Maßnahmen zu ergreifen.',
      longDescription: 'Das Zentrum für effektiven Altruismus leitet und koordiniert eine Vielzahl von Projekten, die darauf abzielen, die effektive altruistische Gemeinschaft zu unterstützen und zu fördern. Es unterstützt lokale Gruppen, recherchiert, führt Konferenzen durch, erstellt einen Newsletter und sammelt und produziert Online-Inhalte. Es bietet auch Zuschüsse für neue Projekte innerhalb dieser Gemeinschaft, zusammen mit organisatorischer Unterstützung, um ihnen bei Wachstum und Entwicklung zu helfen.',
      impact1000: null,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Effektiver Altruismus',
          link: 'https://effektiveraltruismus.de/organisationen/',
          top: true
        }
      ]
    },
    {
      name: '80,000 Hours',
      article: null,
      thumbnail: '80000_hours',
      website: 'https://80000hours.org',
      donationLink: 'https://80000hours.org/support-us/donate',
      donationLinkEAS: 'https://effektiveraltruismus.de/spenden/?fb_item_id_fix=33731',
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Du arbeitest 80.000 Stunden in deiner Karriere, was bewirkst du damit?',
      shortDescription: 'Mit der Wahl der richtigen Karriere kann ein großer Beitrag zur Lösung der drängendsten globalen Probleme geleistet werden. 80,000 Hours unterstützt Menschen dabei, dafür den richtigen Weg einzuschlagen.',
      longDescription: '80,000 Hours hat es sich zur Aufgabe gemacht, möglichst viele Menschen darin zu unterstützen, eine Karriere mit sehr positiver sozialer Wirkung zu gestalten. Die hauptsächliche Intervention um dies zu erreichen, ist Karriereberatung für talentierte junge Leute, die solch eine Karriere anstreben. Diese Beratung gibt es sowohl für jeden online verfügbar als auch in der Form von Workshops, Einzelberatung und einer globalen Community.',
      impact1000: '80,000 Hours betreibt Aufklärungsarbeit, daher ist die Gesamtwirkung nicht besonders genau abzuschätzen. Die Selbstevaluierung von 80,000 Hours hat ergeben, dass mit etwa 7.000€ die Umgestaltung eines Karriereplans dahingehend unterstützt werden konnte, dass eine Person einen sehr hohen positiven Einfluss hat (z.B. mit einer jährliche Spende von über 100.000€ im Jahr zu effektiven Organisationen - wobei natürlich eine erfolgreiche Karriere nicht unbedingt mit sehr hohem Einkommen einhergeht, diese Zahl ist hier nur als Vergleichswert zu sehen).',
      donationDeficit: 500000,
      evaluators: [
        {
          evaluator: 'Effektiver Altruismus',
          link: 'https://effektiveraltruismus.de/organisationen/',
          top: true
        }
      ]
    },
    {
      name: 'Stiftung für Effektiven Altruismus',
      article: 'die',
      thumbnail: 'ea_stiftung',
      website: 'https://ea-stiftung.org',
      donationLink: 'https://ea-stiftung.org/spenden',
      donationLinkEAS: 'https://effektiveraltruismus.de/spenden/?fb_item_id_fix=33728',
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [ 'DE' ],
      questionaireResults: [ 'values' ],
      slogan: 'Die Philosophie des Effektiven Altruismus weiterentwickeln, verbreiten und umsetzen',
      shortDescription: 'Die Stiftung für Effektiven Altruismus trägt zum nachhaltigen Wachstum der Bewegung des Effektiven Altruismus bei. Dabei streben sie eine Welt ohne extremes Leid an. Um die Philosophie des Effektiven Altruismus weiterzuentwickeln, zu verbreiten und umzusetzen, verfolgen sie Projekte in drei Bereichen: Forschung, Community und Philanthropie.',
      longDescription: 'Die Stiftung für Effektiven Altruismus versucht eine Gemeinschaft von außerordentlich engagierten Menschen aufzubauen, die ihr Leben für andere einsetzen wollen und sich der Komplexität der Herausforderung bewusst sind. Sie stellen Infrastruktur in Form von Veranstaltungen und Lokalgruppen bereit, damit die Bewegung nachhaltig wachsen kann und die Kernideen des Effektiven Altruismus erhalten bleiben. In der Öffentlichkeit wollen sie den Effektiven Altruismus in all seinen Nuancen darstellen, um eine konstruktive Diskussion darüber zu ermöglichen.',
      impact1000: null,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Effektiver Altruismus',
          link: 'https://effektiveraltruismus.de/organisationen/',
          top: true
        }
      ]
    },
    {
      name: 'Global Priorities Institute',
      article: 'das',
      thumbnail: 'global_priorities_institute',
      website: 'https://globalprioritiesinstitute.org',
      donationLink: 'https://globalprioritiesinstitute.org/supporting-gpi',
      donationLinkEAS: null,
      category: [ 'Meta' ],
      cause: [ 'Wirksamkeitsanalyse' ],
      impactDirection: 'proaktiv',
      regions: [ 'GB' ],
      questionaireResults: [ ],
      slogan: 'Akademische Grundlagenforschung zur Frage, wie man am besten Gutes tun kann.',
      shortDescription: 'Das Global Priorities Institute ist ein interdisziplinäres Forschungszentrum, welches folgende zentrale Frage beforscht: "Wie sollte man begrenzte Ressourcen nutzen, um soviel Gutes wie möglich zu bewirken?". Dabei beziehen sie sich auf Handlungen welche die gesamte Zukunft der Menschheit beeinflussen.',
      longDescription: 'Das Global Priorities Institute ist ein interdisziplinäres Forschungszentrum, welches folgende zentrale Frage beforscht: "Wie sollte man begrenzte Ressourcen nutzen, um soviel Gutes wie möglich zu bewirken?". Dabei beziehen sie sich auf Handlungen welche die gesamte Zukunft der Menschheit beeinflussen. Erkenntnisse zu dieser Frage werden mit Mitteln der Philosophie und der Wirtschaftswissenschaften gewonnen. Die Vision des Zentrums ist eine Welt, in der globale Prioritäten durch Evidenz und Logik festgelegt werden.',
      impact1000: null ,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    }
  ];

  private political: Organization[] = [
    {
      name: 'Carnegie Council for Ethics in International Affairs',
      article: 'das',
      thumbnail: 'carnegie_council',
      website: 'https://www.carnegiecouncil.org',
      donationLink: 'https://www.carnegiecouncil.org/join_us/donate',
      donationLinkEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Werte und Moral' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: [ 'values' ],
      slogan: 'Ethik in internationalen Angelegenheiten',
      shortDescription: 'Carnegie Council ist eine unabhängige und überparteiliche Organisation, welche das Ziel verfolgt eine der stärksten Stimmen zum Thema "Ethik in internationalen Angelegenheiten" zu sein. Ihr Fokus liegt auf den Themen "Krieg und Frieden", "globale soziale Gerechtigkeit" und "Religion in der Politik".',
      longDescription: 'Carnegie Council ist eine unabhängige und überparteiliche Organisation, welche das Ziel verfolgt eine der stärksten Stimmen zum Thema "Ethik in internationalen Angelegenheiten" zu sein. Ihr Fokus liegt auf den Themen "Krieg and Frieden", "globale soziale Gerechtigkeit" und "Religion in der Politik". Die Organisation veranstaltet themenorientierte öffentliche Diskussionen und schafft weltweit Möglichkeiten zur Bildung und Information für Lehrer, Schüler, Studenten, Journalisten, Menschen die im Bereich internationale Beziehungen tätig sind, sowie andere interessierte Bürger. Ihre wichtigste Publikation ist die vierteljährlich erscheinende wissenschaftliche Zeitschrift Ethics & International Affairs, welche seit 1987 publiziert wird.',
      impact1000: 'Die Wirkung dieser Organisation ist nicht konkret einzuschätzen, da ihre Arbeit indirekte Auswirkungen hat. Wir haben Carnegie Council for Ethics in International Affairs als Organisation ausgewählt, da aus unserer Sicht eine solide ethische Basis politischen Handelns eine der zentralsten Faktoren für die globale Stabilität und Gerechtigkeit ist, und somit auch helfen könnte, existentielle Risiken (z.B. durch Krieg, Klimawandel, etc..) vorzubeugen. Unabhängige Organisationen haben der Organisation zudem ein hohes Maß an Transparenz (s. Charity Navigator) und Qualitätssicherung (TTCSP) bestätigt.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },
    {
      name: 'International Coalition to Stop Crimes against Humanity in North Korea',
      article: 'die',
      thumbnail: 'icnk',
      website: 'http://stopnkcrimes.org',
      donationLink: 'http://stopnkcrimes.org/donation.php',
      donationLinkEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Menschenrechte' ],
      impactDirection: 'reactive',
      regions: [ 'KP' ],
      questionaireResults: [ 'human rights' ],
      slogan: 'ICNK setzt sich für die Menschenrechte in Nordkorea ein.',
      shortDescription: 'Das Ziel des ICNK ist es öffentliches und politsches Bewusstsein über die Menschenrechtslage in Nordkorea zu schaffen, so dass gemeinsam gezielt gegen die Menschenrechtverletzungen in Nordkorea vorgegangen wird. Um dies zu erreichen, arbeitet der ICNK eng mit über 40 Organisationen zusammen.',
      longDescription: 'Das Ziel des ICNK ist es öffentliches und politsches Bewusstsein über die Menschenrechtslage in Nordkorea zu schaffen, sodass gemeinsam gezielt gegen die Menschenrechtverletzungen in Nordkorea vorgegangen wird. Ursprünglich war das Ziel der Organisation eine Komission in der UN zu etablieren, welche die Menschenrechtsverletzungen in Nordkorea untersucht. 2013 gelang dies, seitdem arbeitet der ICNK weiterhin an der Aufklärung über die Menschenrechtsverletzungen in Nordkorea und die Vernetzung seiner Mitgliederorganisationen (z.B. mit der Organisation von Konferenzen). Über 40 Organisationen arbeiten eng mit dem ICNK zusammen, so z.B. Human Rights Watch.',
      impact1000: 'Genaue Abschätzungen über die Effektivität der Arbeit des ICNK sind aufgrund der politischen und gesellschaftlichen Unabwägbarkeiten nicht möglich. Für die Effektivität des ICNK spricht, dass in Nordkorea extrem schwerwiegende Meschensrechtsverletzungen begangen werden - so bezeichnet Human Rights Watch Nordkorea als eine der repressivsten Länder der Welt. Als globale Koordinationsplattform hat der ICNK gute Möglichkeiten, die Effektivität der Interventionen seiner Mitgliederorganisationen durch verbesserte Zusammenarbeit zu erhöhen.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },
    {
      name: 'Transparency International',
      article: null,
      thumbnail: 'transparency',
      website: 'https://www.transparency.org',
      donationLink: 'https://www.transparency.org/donate',
      donationLinkEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Institutionen' ],
      impactDirection: 'proaktiv',
      regions: [
        'AR', 'AM', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BY', 'BE',
        'BJ', 'BA', 'BR', 'BG', 'BI', 'KH', 'CM', 'CA', 'CL', 'CN',
        'CO', 'CR', 'CI', 'CZ', 'CD', 'DK', 'DO', 'SV', 'EE', 'ET',
        'FI', 'FR', 'GE', 'DE', 'GH', 'GR', 'GL', 'GT', 'GY', 'HN',
        'HU', 'IS', 'ID', 'IE', 'IL', 'IT', 'JM', 'JP', 'JO', 'KZ',
        'KE', 'XK', 'KW', 'KG', 'LV', 'LB', 'LR', 'LT', 'MK', 'MG',
        'MW', 'MY', 'MV', 'ML', 'MU', 'MX', 'MD', 'MN', 'ME', 'MA',
        'MZ', 'NP', 'NL', 'NZ', 'NE', 'NG', 'NO', 'PK', 'PS', 'PA',
        'PG', 'PE', 'PL', 'PT', 'CG', 'RO', 'RU', 'RW', 'SN', 'RS',
        'SC', 'SL', 'SK', 'SI', 'US', 'SB', 'ZA', 'KR', 'ES', 'LK',
        'SE', 'CH', 'TW', 'TG', 'TT', 'TN', 'TR', 'UG', 'UA', 'GB',
        'VU','VE', 'VN', 'ZM', 'ZW',
      ],
      questionaireResults: [ 'institutions' ],
      slogan: 'Die globale Koalition gegen Korruption',
      shortDescription: 'Transparency International setzt sich ein globales Bewusstsein für Korruption sowie für mehr Integrität und Transparenz im öffentlichen und privaten Sektor ein',
      longDescription: '1993 gegründet, setzt sich die Bewegung für ein globales Bewusstsein für Korruption sowie für mehr Integrität und Transparenz im öffentlichen und privaten Sektor ein. Um diese Ziele zu erreichen, werden internationale Antikorruptionskonventionen erarbeitet, die Verfolgung korrupter Politiker sowie die Beschlagnahmung ihrer illegal erworbenen Vermögen unterstützt und Unternehmen für ihr Handeln im In- und Ausland verantwortlich gemacht. In über 100 Ländern arbeiten lokale Gruppen mit Partnern aus Politik, Wirtschaft und Zivilgesellschaft zusammen, um wirksame Maßnahmen gegen Korruption zu ergreifen. Die Organisation legt Wert auf politische Unabhängigkeit.',
      impact1000: 'Da Transparency International verschiedene Programme in den über 100 Ländern betreibt und die genauen Wirkung von den Programmen oft schwer abzuschätzen ist, ist eine genaue quantitative Beurteilung sehr schwierig. Schätzungen zufolge gehen bei Auslandshilfen Gelder im zweistelligen Prozent-Bereich durch Korruption oder zweifelhafte Verwendung von Geldern verloren. Zudem ist Transparenz und Integrität Voraussetzung für eine funktionierende Demokratie und eine effektive Lösung globaler Probleme wie dem Klimawandel. Angesicht des Ausmaßes des Problems und der substantielle Erfolge von Transparency International wie die Etablierung des "Übereinkommen der Vereinten Nationen gegen Korruption" erscheinen die jährlichen Ausgaben von ca. 25 Millionen Euro im Jahr relativ gering. Beim Global Go To Think Tank Index Report 2019 wurde Transparency International als die beste Organisation im Bereich "Best Quality Assurance and Integrity Policies and Procedures" sowie "Top Transparency and Good Governance Think Tanks" ausgezeichnet.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    }/*,
    {
      name: 'International Institute for Strategic Studies',
      article: 'das',
      thumbnail: 'iiss',
      website: 'https://www.iiss.org/',
      donationLink: 'https://www.iiss.org/individual-membership',
      donationLinkEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Institutionen' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: ['institutions'],
      slogan: 'Facts. Analysis. Influence.',
      shortDescription: 'Das Internationale Institut für Strategische Studien (IISS) ist ein britisches Forschungsinstitut (oder Think Tank) auf dem Gebiet internationaler Angelegenheiten. IISS ist die weltweit führende Autorität in globalen Sicherheitsfragen und bietet Fakten und Analysen zu einer breiten Palette von internationalen Sicherheitsfragen.',
      longDescription: 'Das IISS ist eine wichtige Quelle für genaue, objektive Informationen zu strategischen Fragen für Politiker, Diplomaten, internationale Unternehmen, Ökonomen, Militärs, Journalisten, Wissenschaftlern und die informierte Öffentlichkeit. Das unabhängige Institut forscht mit einer zukunftsorientierten Politikorientierung und legt besonderen Wert darauf, neue Perspektiven in strategische Diskussionen zu bringen. Die Arbeit des Instituts beruht auf der Einschätzung verschiedener politischer, wirtschaftlicher und sozialer Probleme, die Instabilität verursachen, sowie auf Faktoren, die zu internationaler Zusammenarbeit führen können. IISS-Publikationen werden von wichtigen Entscheidungsträgern gelesen und werden innerhalb der Regierungen auf Kabinettsebene kommentiert. Die Bandbreite der IISS-Publikationen, ihre Gestaltungskraft und die starke internationale Politik des Instituts machen das IISS zu einem wichtigen Akteur in der globalen strategischen Debatte.',
      impact1000: 'Da das IISS verschiedene Programme in vielen verschiedenen Ländern betreibt, ist eine genaue quantitative Beurteilung schwierig.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    }
	  */
  ];

  private animals: Organization[] = [
    {
      name: 'Animal Equality International',
      article: null,
      thumbnail: 'animal_equality',
      website: 'https://www.animalequality.de',
      donationLink: 'https://www.animalequality.de/spenden',
      donationLinkEAS: null, // TODO: Fill correct URL again
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben', 'Haltungsbedingungen' ],
      impactDirection: 'reaktiv',
      regions: [ 'IN', 'US', 'IT', 'DE', 'ES', 'GB', 'MX', 'BR' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'Wir arbeiten für eine bessere Welt für alle Tiere',
      shortDescription: 'Animal Equality ist eine internationale Organisation, die gemeinsam mit Gesellschaft, Politik und Unternehmen daran arbeitet, Grausamkeit in der Massentierhaltung zu beenden.',
      longDescription: 'Animal Equality ist eine internationale Organisation, die gemeinsam mit Gesellschaft, Politik und Unternehmen daran arbeitet, Grausamkeit in der Massentierhaltung zu beenden. Sie treten als internationale Organisation für Werte wie Mitgefühl und Gerechtigkeit ein und glauben an eine Gesellschaft, in der diese Werte verbreitet und gelebt werden. Sie bilden die Basis ihrer Arbeit. Mit innovativen Projekten und Kampagnen decken sie die grausamsten Praktiken der Tierindustrie auf und arbeiten daran, diese abzuschaffen. Dabei behalten sie das große Ziel stets vor Augen: Tierleid zu verhindern.',
      impact1000: 'Mit 1000 Euro können folgende Dinge erreicht werden: Durchschnittlich 5000 Tiere in der Massentierhaltung vor Leid zu bewahren, oder durch Online-Kampagnen mehr als 900.000 Menschen über die Zustände in der Massentierhaltung zu informieren, oder 26 iAnimal Aktionen zu ermöglichen, welche zahlreichen Menschen einen authentischen Einblick in das Leben der Tiere in der Massentierhaltung ermöglicht.',
      donationDeficit: 4200000,
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/animal-equality/',
          top: true
        }
      ]
    },
    {
      name: 'The Good Food Institute',
      article: null,
      thumbnail: 'good_food_institute',
      website: 'https://www.gfi.org',
      donationLink: 'https://www.gfi.org/donate',
      donationLinkEAS: 'https://www.effektiv-spenden.org/the-good-food-institute/',
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'animal death','human knowledge'],
      slogan: 'Erzeugung eines gesunden, tiergerechten und nachhaltigen Nahrungsangebots',
      shortDescription: 'The Good Food Institute (GFI) arbeitet mit Wissenschaftlern, Investoren und Unternehmern zusammen, mit dem Ziel die Entwicklung von "clean meat" und pflanzlichen Nahrungsalternativen zu fördern.',
      longDescription: 'The Good Food Institute (GFI) arbeitet daran, die Tierzuchtbranche zu verändern, indem es die Entwicklung von wettbewerbsfähigen Alternativen zu tierischem Fleisch, Milchprodukten und Eiern fördert. GFI sucht nach Unternehmern und Wissenschaftlern, die Start-ups in dem Marktsektor pflanzlichen und kultivierten Fleisches fördern oder beitreten. Sie bieten geschäftliche, rechtliche, wissenschaftliche und strategische Leitlinien für Unternehmen und betreiben politische (regulatorische und gesetzliche) Arbeit, um das Feld für Fleischersatzprodukte auf dem Markt zu ebnen. GFI baut Beziehungen zu Restaurantketten, Lebensmittelgeschäften und Foodservice-Unternehmen auf, um pflanzliche Alternativen zu Tierprodukten zu verbessern und zu fördern. Schließlich arbeitet GFI mit Fördereinrichtungen, Unternehmen und Regierungen zusammen, um Ressourcen für die Forschung in der synthetischen und pflanzlichen Biologie und Gewebetechnologie zu mobilisieren.',
      impact1000: 'Eine Spende unterstützt GFI-Programme und hilft beim Aufbau ihrer Rücklagen für den Betriebsablauf. Von einer durchschnittlichen Spende von 1.000 US-Dollar, würde GFI etwa 220 US-Dollar für sein Wissenschafts- und Technologieprogramm und etwa 200 US-Dollar für den Aufbau seiner Rücklagen für den Betriebsablauf ausgeben. GFI würde außerdem 200 US-Dollar für internationales Engagement, 160 US-Dollar für ihr Innovationsprogramm, 120 US-Dollar für ihr politisches Programm und etwa 90 US-Dollar für unternehmerisches Engagement ausgeben. Die Auswirkungen von Spenden für GFI sind spekulativer und langfristiger als der Einfluss von Spenden für andere Organisationen gegen Tierleid wie Animal Equality, sie haben jedoch das Potenzial große gesellschaftliche Änderung hin zu einer ethischeren Nahrungsmittelproduktion entscheidend mitzugestalten. Angesichts des Unsicherheit der Auswirkungen von der Arbeit von GFI, gibt es derzeit keine konkrete Schätzung der Kosteneffektivität. Nach Meinung von Animal Charity Evaluators haben Spenden an GFI dennoch einen hohen Erwartungswert.',
      donationDeficit: 4400000,
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/the-good-food-institute/',
          top: true
        }
      ]
    },
    {
      name: 'The Humane League',
      article: null,
      thumbnail: 'the_humane_league',
      website: 'https://www.thehumaneleague.org',
      donationLink: 'https://www.thehumaneleague.org/donate',
      donationLinkEAS: 'https://www.effektiv-spenden.org/the-humane-league/',
      category: [ 'Tierleid' ],
      cause: [ 'Haltungsbedingungen', 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [ 'MX', 'GB', 'JP', 'US' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'Empowering Change - Driving Progress',
      shortDescription: 'The Humane League will Tierleiden möglichst weitreichend verhindern. Dazu werden mit Humane League Labs die effektivsten Methoden ermittelt. Neben konkreten Kampagnen wird Aufklärungsarbeit in der Bevölkerung betrieben sowie das Wissen um den Tierschutz an Universitäten verbreitet.',
      longDescription: 'Weltweit werden unzählige Tiere für die Nahrungsmittelproduktion unter unnatürlichen und unwürdigen Bedingungen gehalten, misshandelt und verletzt. Um die Haltungsbedingungen der Tiere zu verbessern und so Leid und frühzeitiges Sterben zu verhindern, will The Humane League die Bevölkerung über die Umstände in der industriellen Tierhaltung aufklären. Neben der Bereitstellung von Informationsmaterial und Kampagnen will The Humane League insbesondere auch an Universitäten das Wissen um den Tierschutz verbreiten. Im Rahmen der Humane League Labs wird untersucht, welche Methoden die effektivsten für die Einflussnahme zur Verbesserung der Haltungsbedingen sind.',
      impact1000: 'Nach einer Analyse von Animal Charity Evaluators erfüllt The Human League die höchsten Ansprüche hinsichtlich eines systematischen Ansatz zur Überprüfung ihrer Methoden und verwendet die Spenden sehr effektiv. Mit einer Spende von 1000€ könnte potentiell Zehntausenden von Tieren Leid erspart werden.',
      donationDeficit: 2000000,
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/the-humane-league/',
          top: true
        }
      ]
    },
    {
      name: 'Albert Schweizer Stiftung',
      article: 'die',
      thumbnail: 'albert_schweizer_stiftung',
      website: 'https://albert-schweitzer-stiftung.de',
      donationLink: 'https://albert-schweitzer-stiftung.de/helfen/spenden',
      donationLinkEAS: 'https://effektiveraltruismus.de/spenden/?fb_item_id_fix=34302',
      category: [ 'Tierleid' ],
      cause: [ 'Haltungsbedingungen', 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [ 'DE', 'PL' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'Albert Schweizer Stiftung für unsere Mitwelt',
      shortDescription: 'Die Stiftung hat es sich zur Aufgabe gemacht Tierleid zu minimieren. So setzt sie sich für eine vegane Lebensweise ein und versucht die Herstellung von Tierprodukten zu minimieren und Massentierhaltung abzuschaffen.',
      longDescription: 'Die Stiftung hat es sich zur Aufgabe gemacht Tierleid zu minimieren. So setzt sie sich für eine vegane Lebensweise ein und versucht die Herstellung von Tierprodukten zu minimieren und Massentierhaltung abzuschaffen. Sie entwickeln Kampagnen, um Druck auf Unternehmen und Politiker auszuüben und Verbraucher aufzuklären. Weiterhin setzten sie sich rechtlich für bessere Standards ein und sorgen dafür, dass diese umgesetzt werden.',
      impact1000: 'Auf Grund der Fokussierung auf Geflügel und insbesondere Fische, die in besonders großer Anzahl gehalten werden, kann die Albert Schweizer Stiftung potentiell sehr vielen Tieren pro Spende helfen. Nach einer Evaluation von Animal Charity Evaluators können mit einer Spende von 1000 Euro die Haltungsbedinungen von 10.000 Tieren oder auch weitaus mehr verbessert werden, diese Schätzung ist aber mit großer Unsicherheit behaftet.',
      donationDeficit: 560000, // between 560.000$ and 1.900.000$
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/albert-schweitzer-foundation/',
          top: true
        }
      ]
    },
    {
      name: 'Anima International',
      article: null,
      thumbnail: 'anima_international',
      website: 'https://animainternational.org',
      donationLink: 'https://animainternational.org/donate',
      donationLinkEAS: null,
      category: [ 'Tierleid' ],
      cause: [ 'Haltungsbedingungen' ],
      impactDirection: 'proaktiv',
      regions: [ 'PL', 'GB', 'DK', 'LT', 'NW', 'RU', 'UA', 'EE', 'BY' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'For a future free from animal suffering',
      shortDescription: 'Anima nutzt vielfältige rechtliche Möglichkeiten um die Situation von Tieren zu verbessern und eine pflanzlich Ernährung voran zu bringen.',
      longDescription: 'Anima International möchte erreichen, dass Tiere nicht mehr als Produkte gesehen und als solche behandelt werden. Deswegen organisieren sie Kampagnen z.B. gegen Käfighaltung, Konferenzen zum Thema Tierwohl und fordern Gesetzesänderung für besseren Tierschutz. Die Organisation arbeitet Open Source und sieht die internationale Vernetzung als ein Schwerpunkt ihrer Arbeit.',
      impact1000: 'Anima International gibt von einer Spende von 1000€ etwa 312€ für Öffentlichkeitsarbeit aus, nutzt 279€ für Kampagnen, 185€ um seine Kapazitäten zu erweitern, 129€ für die Bewerbung pflanzlicher Produkte und 95€ für rechtliche Unterstützung. Mit einem höheren Budget will Anima International mehr wissenschaftliche Studien publizieren, mehr und größere Kampagnen starten, sowie ihr Programm zur fleischfreien Ernährung auf andere Länder ausweiten. Basierend auf einer Schätzung von Animal Charity Evaluators könnte mit einer Spende von 1000€ potentiell Zehntausenden von Tieren Leid erspart werden.',
      donationDeficit: 370000, // between $0.37 million and $2.5
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/anima/',
          top: true
        }
      ]
    }
  ];

  organizations: Organization[] = [].concat(this.animals, this.existentialRisks, this.meta, this.political, this.poverty).sort((a, b) => a.name.localeCompare(b.name));

  getByName(name: string): Organization {
    let foundOrganisation = this.organizations.filter(o => o.thumbnail == name);
    if (foundOrganisation.length == 1) return foundOrganisation[0];
    else return null;
  }

  constructor() {}
}
