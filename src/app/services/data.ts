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
      donationKeyEAS: 'AMF',
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
          top: true
        }
      ]
    },
    {
      name: 'Malaria Consortium',
      thumbnail: 'malaria_consortium',
      website: 'https://www.malariaconsortium.org',
      donationLink: 'https://www.malariaconsortium.org/support/donate.htm',
      donationKeyEAS: 'Malaria_Consortium',
      category: [ 'Armut' ],
      cause: [ 'Menschenleben' ],
      impactDirection: 'reaktiv',
      regions: [ 'BD', 'BF', 'KH', 'TD', 'ET', 'GH', 'MZ', 'MM', 'NP', 'NG', 'SN', 'SS', 'TH', 'UG', 'ZM' ],
      questionaireResults: [ 'human death' ],
      slogan: 'Verbesserung der Prävention, Diagnose und Behandlung von vernachlässigten Tropenkrankheiten',
      shortDescription: 'Malaria Consortium ist eine der weltweit führenden Non-Profit-Organisationen, die sich auf die Prävention, Kontrolle und Behandlung von Malaria und anderen übertragbaren Krankheiten in gefährdeten Bevölkerungsgruppen spezialisiert hat.',
      longDescription: 'Malaria Consortium ist eine der weltweit führenden Non-Profit-Organisationen, die sich auf die Prävention, Kontrolle und Behandlung von Malaria und anderen übertragbaren Krankheiten in gefährdeten Bevölkerungsgruppen spezialisiert hat. Sie schaffen maßgeschneiderte, evidenzbasierte Lösungen, die sich positiv auf das Gesundheitssystem und die Wirtschaft insgesamt auswirken.',
      impact1000: 'Mit 1.000€ können ungefähr 150 mit Insektiziden behandelte Netze gekauft, 15000 Malaria-Tests gemacht werden oder 250 Kinder durch Chemoprevention vor Malaria geschützt werden.',
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
      donationKeyEAS: 'SCI',
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [ 'BI', 'CI', 'CD', 'ET', 'LR', 'MG', 'MW', 'MR', 'MZ', 'NE', 'NG', 'SD', 'TZ', 'UG', 'ZM' ],
      questionaireResults: [ 'human health' ],
      slogan: 'Behandlung vernachlässigter Tropenkrankheiten in Subsahara-Afrika',
      shortDescription: 'SCI behandelt Kinder und Erwachsene mit Risiko für Schistosomiasis und durch den Boden übertragene Helminthen (Peitschenwurm, Hakenwurm und Spulwurm), verhindert Anämie, beeinträchtigtes Wachstum und Entwicklung bei Kindern und die Entwicklung von lebensbedrohlichen Zuständen von Blasenkrebs, Nierenfunktionsstörungen oder Leber- und Milzschäden.',
      longDescription: 'SCI unterstützt Gesundheitsministerien in Subsahara-Afrika bei der Bekämpfung und anschließenden Eliminierung von Schistosomiasis und durch den Boden übertragenen Helminthen aus ihrer Bevölkerung unter Verwendung des Medikamentenspendeprogramms der Weltgesundheitsorganisation (WHO) für Praziquantel und Albendazol. 230 Millionen Menschen, ein Drittel der Gesamtbevölkerung Afrikas, benötigen eine regelmäßige jährliche Behandlung von Praziquantel. 400 Millionen Menschen benötigen eine regelmäßige jährliche Behandlung von Albendazol, um diese parasitären Krankheiten aus ihrem Körper zu eliminieren.',
      impact1000: 'Mit 1.000€ können ca. 2000 Menschen behandelt werden.',
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
          top: true
        }
      ]
    },
    {
      name: 'Helen Keller International',
      thumbnail: 'helen_keller_international',
      website: 'http://www.hki.org',
      donationLink: 'http://hekein.convio.net/site/Donation2?df_id=1860&mfc_pref=T&1860.donation=form1&_ga=2.184512229.218491984.1529773877-1415190627.1529773877',
      donationKeyEAS: 'HKI_Vitamin_A',
      category: [ 'Armut' ],
      cause: [ 'Gesundheit' ],
      impactDirection: 'reaktiv',
      regions: [ 'US', 'BF', 'CM', 'CI', 'GN', 'KE', 'ML', 'MZ', 'NE', 'NG', 'SN', 'SL', 'TZ', 'BD', 'KH', 'ID', 'MM', 'NP', 'PH', 'VN' ],
      questionaireResults: [ 'human health' ],
      slogan: 'Prävention von Blindheit und Unterernährung',
      shortDescription: 'Helen Keller International (HKI) bekämpft die Ursachen und Folgen von Blindheit und Mangelernährung durch Programme, die auf Evidenz und Forschung in den Bereichen Sehvermögen, Gesundheit und Ernährung basieren.',
      longDescription: 'Helen Keller International hat es sich zur Aufgabe gemacht, die Sehkraft und das Leben der Schwächsten und Benachteiligten zu retten. Sie bekämpfen die Ursachen und Folgen von Blindheit und Mangelernährung durch Programme, die auf Evidenz und Forschung in den Bereichen Sehvermögen, Gesundheit und Ernährung basieren. Derzeit laufen mehr als 100 Programme in 20 afrikanischen und asiatischen Ländern sowie in den Vereinigten Staaten.',
      impact1000: 'Von 1.000€ können derzeit ca. 1500 Vitamin A Ergänzungsmittel verteilt werden.',
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
      donationKeyEAS: 'END_Fund',
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
      longDescription: 'Der END-Fonds verwaltet Zuschüsse, stellt Finanzmittel bereit und unterstützt staatliche Programme zur Kontrolle und Beseitigung vernachlässigter Tropenkrankheiten, einschließlich der Entwurmung.',
      impact1000: null,
      donationDeficit: 15000000,
      evaluators: [
        {
          evaluator: 'GiveWell',
          link: 'https://www.givewell.org/charities/AMF',
          top: true
        }
      ]
    },
    /* TODO: Replace this organization with another Evidence Actions's program
    {
      name: 'Evidence Action\'s - No Lean Season',
      thumbnail: 'evidence_action_nls',
      website: 'https://www.evidenceaction.org/beta-no-lean-season/#intro-no-lean-season',
      donationLink: 'https://donate.evidenceaction.org/campaign/general-fundraising-page/c139764',
      donationKeyEAS: 'No_Lean_Season',
      category: [ 'Armut' ],
      cause: [ 'Gesundheit', 'Lebensstandard' ],
      impactDirection: 'reaktiv',
      regions: [ 'IN' ],
      questionaireResults: [ 'poverty' ],
      slogan: 'Eine einfache Fahrkarte genügt, um saisonale Armut zu vermindern',
      shortDescription: 'No Lean Season verringert saisionale Armut in ländlichen Region, indem sie Arbeitsmobilität ermöglicht und so Einkommen erhöht.',
      longDescription: 'Sasionale Armut ensteht in der Zeit zwischen Saat und Ernte in denen es wenig Jobs gibt, die Nahrungvorräte ausgehen und es so zu Mangelernährung insbesondere von Schwangeren und kleinen Kindern kommt. No Lean Season unterstützt teilnehmende Haushalte mit $20, um eine Reise zu städtischen Gebieten in der Umgebung möglich zu machen, die in dieser Zeit mehr Jobs bieten. Studien der Universität Yale haben ergeben, dass diese saisonalen Arbeitsmöglichkeiten in jedem Haushalt durschnittlich eine Mahlzeit pro Kopf mehr an Tag möglich machen.',
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
      thumbnail: 'give_directly',
      website: 'https://givedirectly.org/',
      donationLink: 'https://givedirectly.org/give-now',
      donationKeyEAS: 'GiveDirectly',
      category: [ 'Armut' ],
      cause: [ 'Lebensstandard' ],
      impactDirection: 'reaktiv',
      regions: [ 'KE', 'UG' ],
      questionaireResults: [ 'poverty' ],
      slogan: 'Geld direkt an extrem arme Menschen spenden',
      shortDescription: 'GiveDirectly macht extrem arme Gemeinschaften ausfinding, überprüft die individuelle Bedürftigkeit und sendet per Mobiltelefon etwa 1.000$ für ein Jahr an besonders bedürftige Haushalte.',
      longDescription: 'GiveDirectly macht extrem arme Gemeinschaften ausfinding, überprüft die individuelle Bedürftigkeit und sendet per Mobiltelefon etwa 1.000$ für ein Jahr an besonders bedürftige Haushalte. GiveDirectly forscht intensiv daran festzustellen, welche Auswirkungen die Geld-Tranfers auf teilnehmende Haushalte haben. Auf der Website https://live.givedirectly.org/ lässt sich nachvollziehen, was einzelne Individuen mit dem Geld gemacht haben.',
      impact1000: 'GiveDirectly gibt 83% der Spenden direkt an bedürftige Haushalte weiter. Eine Untersuchung zeigt, dass dieses Geld die Nahrungsversorgung, Finanzierung von Bildung und Gesundheit verbessert und nicht für Alkohol oder Tabak ausgegeben wurde. Nach der Eintschätzung von GiveWell hat GiveDirectly verglichen mit anderen besonders effektiven Interventionen wahrscheinlich eine geringere Effektivität. Dafür ist GiveDirectly außerordentlich transparent und hat den direkten Nutzen die Armut zu reduzieren und ist somit in dieser Hinsicht wenig mit Unischerheiten behaftet.',
      donationDeficit: 200000000,
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
      thumbnail: 'pratham',
      website: 'http://pratham.org',
      donationLink: 'http://pratham.org/get-involved/donate',
      donationKeyEAS: null,
      category: [ 'Armut' ],
      cause: [ 'Bildung' ],
      impactDirection: 'reaktiv',
      regions: [ 'IN' ],
      questionaireResults: [ 'education' ],
      slogan: 'Jedes Kind hat ein Anrecht auf Schule und gutes Lernen',
      shortDescription: 'Pratham ist eine innovative Lernorganisation, gegründet 1995 in Indien, um die dortige Qualität der Bildung zu verbessern. Angefangen mit dem Ziel den Kindern in den Slums von Mumbai Bildungszugang zu ermöglichen, ist die Organisation heute zu einer der größten NGOs im Bildungsbereich in Indien gewachsen. ',
      longDescription: 'Der Fokus von Pratham liegt auf qualitative hochwertigen, kostengünstigen und replizierbaren Interventionen, um Lücken im vorhandenen Bildungssystem zu schließen. Programme sind auf die Anforderungen verschiedener Altergruppen angepasst. Dabei Arbeiten sie sowohl direkt mit den Schulen und der Bevölkerung als auch in Zusammenarbeit mit Regierungsstellen, wodurch jedes Jahr Millionen von Menschen erreicht werden können. Kern der Programme bildet der "Unterricht auf dem richtigen Niveau"-Ansatz (engl: Teaching at the Right Level (TaRL)), der nachweislich positive Auswirkungen auf die Lernergebnisse der Kinder hat. Im Kern des Ansatzes werden den Kindern entsprechend ihrem Niveau grundlegende Lernkompetenzen vermittelt, um ihnen ein schnelles Aufholen im "normalen" Unterricht zu ermöglichen. Der Ansatz wird auf zwei Arten umgesetzt, entweder direkt durch Ausbilder der Organisation in "Lerncamps" oder im Rahmen der Regierungspartnerschaftsprogrammen, bei dem staatliche Lehrer den Ansatz im täglichen Unterricht einbauen. Ob der Ansatz auch im Kontext außerhalb Indiens Wirkung zeigt, wird derzeit erprobt.',
      impact1000: 'Je nach Programm gibt es Unterschiede. Als Referenz können aber z.B. 6 Ausbilder je 1 Jahr den Unterricht durch ein "Lerncamp" begleiten.',
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
      thumbnail: 'camfed',
      website: 'https://camfed.org/',
      donationLink: 'https://camfed.org/donate/',
      donationKeyEAS: null,
      category: [ 'Armut' ],
      cause: [ 'Bildung' ],
      impactDirection: 'reaktiv',
      regions: [ 'GH', 'MW', 'ZM', 'TZ', 'ZW' ],
      questionaireResults: [ 'education' ],
      slogan: 'Kampagne für die Bildung von Frauen',
      shortDescription: 'Camfed ist eine internationale gemeinnützige Organisation und wurde 1993 gegründet. Mit dem Ziel Armut und Ungleichheit zu bekämpfen, werden Mädchen beim Schulbesuch und -erfolg unterstützt und junge Frauen  dazu befähigt, sich als Vorkämpferinnen des Wandels zu positionieren. ',
      longDescription: 'Das Programm investiert in Mädchen und Frauen in den ärmsten ländlichen Regionen der Subsahara-Afrika, wo Mädchen mit akuten Benachteilugungen konfrontiert sind. Ziel ist es die Frauen nicht nur als Individuen zu stärken, sondern durch ein Alumni- und Mentorprogramm einen Wandel in den Gemeiden zu bewirken und damit die Aussichten für benachteiligte Menschen zu verbessern. Dazu werden Mädchen auf verschiedenen Bildungsstufen finanziell unterstütz, um ihnen den Bildungszugang zu ermöglichen. Zusätzlich wird Frauen geholfen den Umgang mit Geld zu lernen und kleine Unternehmen zu gründen. Das Absolventen-Netzwerk bringt diese gebildeten jungen Frauen weiter zusammen, um ihnen die Möglichkeiten zu geben weitere Veränderungen auf den Weg zu bringen.',
      impact1000: 'Camfed selbst gibt an mit 1.000€ einem Mädchen ca. 4 Schuljahre finanzieren zu können. Unberücksichtigt bleiben dabei Langzeit- und Netzwerkeffekte.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },

    // Existenzrisiken
    {
      name: 'Future of Life Institute',
      thumbnail: 'future_of_life',
      website: 'https://futureoflife.org',
      donationLink: 'https://futureoflife.org/get-involved/',
      donationKeyEAS: null,
      category: [ 'Existenzrisiken'],
      cause: [ 'Künstliche Intelligenz', 'Biosicherheit', 'Nuklearsicherheit', 'Klimaschutz' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'existential risks', 'catastrophe' ],
      slogan: 'Technologie kann die Menschheit in ein neues führen oder zur Zerstörung führen.',
      shortDescription: 'Future of Life Institute hat sich als Ziel gesetzt, Forschung und andere Initiativen zum Thema Sicherung des Lebens und der Menschheit zu fördern. Dazu gehört das Entwickeln einer positiven Zukunftsvision in Betracht neuer Technologien und großen globalen Herausforderungen.',
      longDescription: 'Future of Life Institute hat sich als Ziel gesetzt, Forschung und andere Initiativen zum Thema Sicherung des Lebens und der Menschheit zu fördern. Dazu gehört das Entwickeln einer positiven Zukunftsvision in Betracht neuer Technologien und großen globalen Herausforderungen. Momentaner Fokus ist die Sicherheit von Technologien im Bereich künstliche Intelligenz, zudem die Minimierung von Risiken durch nukleare Waffen und Biotechnologie.',
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
      thumbnail: 'miri',
      website: 'https://intelligence.org',
      donationLink: 'https://intelligence.org/donate/',
      donationKeyEAS: 'MIRI',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Künstliche Intelligenz' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'existential risks', 'human knowledge' ],
      slogan: 'Mathematische Grundsatzforschung um sicherzustellen, dass mögliche künstliche Superintelligenz eine positive Auswirkung auf die Menschheit hat',
      shortDescription: 'Wenn die Entwicklung künstlicher Intelligenz so schnell wie bisher voranschreitet, könnte künstliche Intelligenz eines Tages Menschen in jedem Bereich an Intelligenz übertreffen. Das Ziel von MIRI ist es, die Grundlagen zu legen, sichere und verlässliche Systeme im Bereich künstlicher Intelligenz zu entwickeln.',
      longDescription: 'Wenn die Entwicklung künstlicher Intelligenz so schnell wie bisher voranschreitet, ist es denkbar, dass künstliche Intelligenz eines Tages Menschen in jedem Bereich an Intelligenz übertreffen könnte. Die meisten AI-Forscher erwarten diese Entwicklung schon in diesem Jahrhundert. Das Ziel von MIRI ist es, die Grundlagen zu legen, sichere und verlässliche Systeme im Bereich künstlicher Intelligenz zu entwickeln. Wichtige Aspekte dieser Forschung sind zum Beispiel Entscheidungstheorie, das Erlernen von Werten und der Umgang mit Unsicherheit.',
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
      thumbnail: 'clean_air_task_force',
      website: 'http://www.catf.us',
      donationLink: 'https://www.paypal.com/donate/?token=F4ZS1oQ2nHM-rUIneslhlDcEGxJQEnO6qUivrfyJRkFJOdtHxm-0EnGNPqJTydOW_n_IKG&country.x=US&locale.x=US',
      donationKeyEAS: 'Clean_Air_Task_Force',
      category: [ 'Existenzrisiken' ],
      cause: [ 'Klimaschutz' ],
      impactDirection: 'reaktiv',
      regions: [ 'US' ],
      questionaireResults: [ 'environment' ],
      slogan: 'Schutz der Welt vor den schlimmsten Auswirkungen des Klimawandels',
      shortDescription: 'Die Clean Air Task Force leistet einen Beitrag zum Schutz vor den schlimmsten Auswirkungen des Klimawandels, indem sie die rasche globale Entwicklung und den Einsatz von CO2-armer Energie und anderen klimaschutzenden Technologien durch Forschung und Analyse, öffentliche Lobbyarbeit und Partnerschaft mit dem Privatsektor beschleunigen.',
      longDescription: 'Die Clean Air Task Force (CATF) ist eine in den USA ansässige Nichtregierungsorganisation, die sich für die Reduzierung von klimaschädlichen und anderen Schadstoffen durch Forschung und Analyse, öffentliche Interessenvertretung und Partnerschaft mit dem Privatsektor einsetzt. Sie wurde 1996 mit dem Ziel gegründet, eine föderale Politik zur Verringerung der durch amerikanische Kohlekraftwerke verursachten Luftverschmutzung einzuführen. Diese Kampagne war sehr erfolgreich und trug dazu bei, dass ein großer Teil der US-Kohleflotte in den Ruhestand ging. Sie haben zahlreiche andere erfolgreiche Kampagnen konzipiert und mitgestaltet, die beim Aufbau von CO2-Kontrollen für den US-amerikanischen Energiesektor helfen, z. B. Vorschriften für Dieselemissionen, Vorschriften für Schiffsemissionen und Vorschriften für Methanemissionen aus der Öl- und Gasproduktion.',
      impact1000: null,
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
      thumbnail: 'coalition_for_rainforest_nations',
      website: 'https://www.rainforestcoalition.org',
      donationLink: 'https://www.rainforestcoalition.org/donations/',
      donationKeyEAS: null,
      category: [ 'Existenzrisiken' ],
      cause: [ 'Klimaschutz' ],
      impactDirection: 'reaktiv',
      regions: [
        'BW', 'CM', 'CF', 'CD', 'GQ', 'GA', 'GM', 'GH', 'KE', 'LS', 'LR', 'MG', 'ML', 'MW', 'MZ', 'NA', 'NG', 'CG', 'SL', 'SD', 'UG', 'ZM', // Africa
        'AR', 'EC', 'GY', 'PY', 'SR', 'UY', // South America
        'BD', 'KH', 'LA', 'MY', 'PK', 'SG', 'TH', 'VN', // Asia
        'DM', 'DO', 'JM', 'LC', // Carribean
        'BZ', 'CR', 'GT', 'HN', 'NI', 'PA', // Central America
        'FJ', 'PG', 'WS', 'SB', 'VU' // Oceania
      ],
      questionaireResults: [ 'environment' ],
      slogan: 'Verantwortungsvolle Verwaltung der letzten großen Regenwälder der Welt',
      shortDescription: 'Die Koalition für die Regenwaldnationen (Coalition for Rainforest Nations oder CfRN) bemühen sich um die verantwortungsvolle Verwaltung der letzten großen Regenwälder der Welt durch innovative Strategien, die soziale, ökonomische und wissenschaftliche Begründungen integrieren, mit dem Ziel ökologische Nachhaltigkeit zu erreichen.',
      longDescription: 'Die CfRN ist eine zwischenstaatliche Organisation von mehr als 50 Regenwaldnationen, die sich für die Förderung der ökologischen Nachhaltigkeit einsetzt und gleichzeitig Möglichkeiten für wirtschaftlichen Fortschritt in den tropisch bewaldeten Entwicklungsländern schafft. Es wurde 2004 vom Premierminister von Papua-Neuguinea und dem Präsidenten von Costa Rica gegründet. Die CfRN-Teilnehmerländer arbeiten freiwillig in gemeinsam entwickelten Initiativen zusammen, die vom CfRN-Sekretariat mit Sitz in New York geleitet werden.',
      impact1000: 'Laut Evaluation von Founders Pledge kann mit 1.000€ die Freisetzung von ca. 8.000 Tonnen CO2 kompensiert werden.',
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
      thumbnail: 'future_of_humanity',
      website: 'https://www.fhi.ox.ac.uk',
      donationLink: 'https://effektiveraltruismus.de/spenden/?purpose=FHI',
      donationKeyEAS: 'FHI',
      category: [ 'Existenzrisiken', 'Meta' ],
      cause: [ 'Künstliche Intelligenz', 'Biosicherheit', 'Makrostrategie' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'existential risks' ],
      slogan: 'Was können wir jetzt tun, um eine lange blühende Zukunft der Menschheit zu sichern?',
      shortDescription: 'Das Future of Humanity Institute ist ein multidisziplinäres Forschungsinstitut an der Universität Oxford. Akademiker am FHI nutzen die Werkzeuge der Mathematik, Philosophie und Sozialwissenschaften in Zusammenhang mit großen Fragen über Zukunft der Menschheit.',
      longDescription: 'Das Future of Humanity Institute ist ein Forschungsinstitut an der Universität Oxford. Mithilfe von Methoden aus Mathematik, Philosophie und Sozialwissenschaften versuchen die Forscher potentielle Hauptbedrohungen für die Menschheit und entsprechende Strategien zu ihrer Vermeidung zu identifizieren. Zu diesen Bedrohungen gehören drastische Klimaänderungen, Atomkrieg und Nuklearterrorismus, molekulare Nanotechnologie und künstliche Intelligenz.',
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

    // Meta
    {
      name: 'GiveWell',
      thumbnail: 'givewell',
      website: 'https://www.givewell.org',
      donationLink: 'https://secure.givewell.org/support-givewell',
      donationKeyEAS: 'GiveWell',
      category: [ 'Meta' ],
      cause: [ 'Wirksamkeitsanalyse' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Forschung zu effektiven Spendenmöglichkeiten',
      shortDescription: 'GiveWell ist eine Non-Profit-Organisation, die sich der Auffindung herausragender Spendenmöglichkeiten widmet und die vollständigen Details ihrer Analyse veröffentlicht, um den Spendern bei der Entscheidung zu helfen, wo sie ihre Spende tätigen möchten. Ihr derzeitiger Schwerpunkt liegt auf der Verbesserung des Lebens in den Entwicklungsländern.',
      longDescription: 'Anders als andere Evaluatoren die sich ausschließlich auf Finanzen konzentrieren und Verwaltungs- oder Fundraising-Kosten ermitteln, führt GiveWell eingehende Untersuchungen durch, um zu ermitteln, wie vielen Menschen ein bestimmtes Programm pro ausgegebenem Dollar wie sehr helfen kann (dazu dienen z. B. Indikatoren wie disability-adjusted life years). Anstatt zu versuchen, so viele Wohltätigkeitsorganisationen wie möglich zu bewerten, konzentrieren sie sich auf die wenigen Wohltätigkeitsorganisationen, die herausragend sind, um besonders wirkungsvolle Spendengelegenheiten zu finden und empfehlen zu können.',
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
      name: 'ImpactMatters',
      thumbnail: 'impactmatters',
      website: 'https://www.impactm.org',
      donationLink: null,
      donationKeyEAS: null,
      category: [ 'Meta' ],
      cause: [ 'Wirksamkeitsanalyse' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Führt Audits von wohltätigen Organisationen durch, um ihre philanthropischen Auswirkungen einzuschätzen',
      shortDescription: 'ImpactMatters führt "Wirksamkeits-Audits" von gemeinnützigen Organisationen durch, um ihre philanthropischen Auswirkungen exakt einzuschätzen und sie und ihre Geldgeber zu evidenzbasierten Entscheidungen anzuregen.',
      longDescription: 'Selbst die am besten geführten gemeinnützigen Organisationen können von einer externen Perspektive profitieren, um die Erfüllung ihrer Rechenschaftspflicht und ihre Wirkung zu verbessern. ImpactMatters liefern eine objektive, unabhängige Schätzung der Auswirkungen und Kosten der jeweiligen gemeinnützigen Organisation und stellt spezifische, umsetzbare Leitlinien zur Verbesserung der Bewertungs- und Datensysteme zur Verfügung. Wenn die gemeinnützige Organisation der Veröffentlichung zustimmt, erstellt ImpactMatters einen Bericht mit Einschätzungen zu Auswirkungen und Kosten, Einstufungen der Qualität der Nachweise dieser Schätzungen und Bewertungen der Überwachungssysteme und Datenprotokolle. Das Impact-Audit-Team gibt dann einen privaten Management-Brief heraus, in dem dargelegt wird, wie die geprüfte Organisation ihre Effektivität verbessern kann.',
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
      name: 'Innovations for Poverty Action',
      thumbnail: 'innovations_for_poverty_action',
      website: 'https://www.poverty-action.org',
      donationLink: 'https://www.poverty-action.org/monthly-donation',
      donationKeyEAS: null,
      category: [ 'Meta' ],
      cause: [ 'Wirksamkeitsanalyse' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Randomisierte kontrollierte Studien von Programmen und Politik für die Armen',
      shortDescription: 'Innovations for Poverty Action führt kontrollierte, stichprobenartig ausgewählte Studien zu Hilfsprogrammen durch. Ihre Studien werden in ähnlicher Weise wie wissenschaftliche Studien druchgeführt, um die Auswirkungen der getesteten Programme zu ermitteln und wirksame Methoden zur Verringerung der Armut zu finden.',
      longDescription: 'Innovations for Poverty Action (IPA) ist eine gemeinnützige Forschungs- und Politikinitiative, die effektive Lösungen für globale Armutsprobleme entdeckt und fördert. Die IPA bringt Forscher und Entscheidungsträger zusammen, um Lösungen und ihre Anwendungen zu entwerfen, diese exakt zu bewerten und zu verfeinern und sicherzustellen, dass die gewonnenen Erkenntnisse dazu genutzt werden, das Leben der Armen in der Welt zu verbessern.',
      impact1000: 'Eine Studie kostet normalerweise zwischen 50.000€ und 500.000€.',
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
      thumbnail: 'centre_for_effective_altruism',
      website: 'https://www.centreforeffectivealtruism.org',
      donationLink: 'https://www.centreforeffectivealtruism.org/donate/',
      donationKeyEAS: 'CEA',
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'institutions' ],
      slogan: 'Förderung und Aufrechterhaltung der Bewegung des Effektiven Altruismus',
      shortDescription: 'Das Zentrum für effektiven Altruismus fördert den effektiven Altruismus als Idee und als Gemeinschaft. Ziel ist es herauszufinden, wie das Wohlergehen aller am besten gefördert werden kann und Menschen dazu zu inspirieren, basierend auf diesem Wissen Maßnahmen zu ergreifen.',
      longDescription: 'Das Zentrum für effektiven Altruismus leitet und koordiniert eine Vielzahl von Projekten, die darauf abzielen, die effektive altruistische Gemeinschaft zu unterstützen und zu fördern. Es unterstützt lokale Gruppen, recherchiert, führt Konferenzen durch, erstellt einen Newsletter und sammelt und produziert effektiv altruismusbezogene Inhalte online. Es bietet auch Zuschüsse für neue Projekte innerhalb dieser Gemeinschaft, zusammen mit organisatorischer Unterstützung, um ihnen bei Wachstum und Entwicklung zu helfen.',
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
      name: '80,000 hours',
      thumbnail: '80000_hours',
      website: 'https://80000hours.org/',
      donationLink: 'https://80000hours.org/support-us/donate/',
      donationKeyEAS: '80000_Hours',
      category: [ 'Meta' ],
      cause: [ 'Öffentlichkeitsarbeit' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Du hast 80.000 Stunden in deiner Karrierelaufbahn, was bewirkst du damit?',
      shortDescription: 'Mit der Wahl der richtigen Karriere kann ein großer Beitrag zur Lösung der drängensten globalen Probleme geleistet werden. 80,000 hours unterstützt Menschen dabei, den richtigen Weg einzuschlagen.',
      longDescription: '80,000 Hours hat es sich zu der Aufgabe gemacht, möglichst viele Menschen darin zu unterstützen eine Karriere mit sehr positiver sozialer Wirkung zu gestalten. Die hauptsächliche Intervention um dies zu erreichen ist Karriereberatung für talentierte junge Leute, die solch eine Karriere anstreben. Diese Beratung gibt es sowohl für jeden online verfügbar als auch in der Form von Workshops, Einzelberatung und einer globalen Community.',
      impact1000: '80,000 Hours betreibt Aufklärungsarbeit, daher ist die Gesamtwirkung nicht besonders genau abzuschätzen. Die Selbstevaluierung von 80,000 Hours hat ergeben, dass mit etwa 7.000€ die Umgestaltung eines Karriereplans dahingehend unterstützt werden konnte, dass eine Person einen sehr hohen positiven sozialen Einfluss hat (z.B. mit einer jährliche Spende von über 100.000€ im Jahr zu effektiven Organisationen).',
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
      thumbnail: 'ea_stiftung',
      website: 'https://ea-stiftung.org',
      donationLink: 'https://ea-stiftung.org/spenden/',
      donationKeyEAS: 'EAF',
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

    // Politik
    {
      name: 'Carnegie Council for Ethics in International Affairs',
      thumbnail: 'carnegie_council',
      website: 'https://www.carnegiecouncil.org',
      donationLink: 'https://www.carnegiecouncil.org/join_us/donate',
      donationKeyEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Werte und Moral' ],
      impactDirection: 'reaktiv',
      regions: [],
      questionaireResults: [ 'values' ],
      slogan: 'Ethik in internationalen Angelegenheiten',
      shortDescription: 'Carnegie Council ist eine unabhängige und überparteiliche Organisation, welche das Ziel verfolgt eine der stärksten Stimmen zum Thema "Ethik in international Angelegenheiten" zu sein. Ihr Fokus liegt auf den Themen "Krieg und Frieden", "globale soziale Gerechtigkeit" und "Religion in der Politik".',
      longDescription: 'Carnegie Council ist eine unabhängige und überparteiliche Organisation, welche das Ziel verfolgt eine der stärksten Stimmen zum Thema "Ethik in international Angelegenheiten" zu sein. Ihr Fokus liegt auf den Themen "Krieg and Frieden", "globale soziale Gerechtigkeit" und "Religion in der Politik". Die Organisation veranstaltet themenorientierte öffentliche Diskussionen und schafft weltweit Möglichkeiten zur Bildung und Informierung für Lehrer, Schüler, Studenten, Journalisten, Menschen die im Bereich intertionale Beziehungen tätig sind, und interessierte Bürger. Ihre wichtigste Publikation ist die vierteljährlich erscheinende wissenschaftliche Zeitschrift Ethics & International Affairs, welche seit 1987 publiziert wird.',
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
      name: 'International Coalition to Stop Crimes against Humanity in North Korea',
      thumbnail: 'icnk',
      website: 'http://stopnkcrimes.org/',
      donationLink: 'http://stopnkcrimes.org/donation.php',
      donationKeyEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Menschenrechte' ],
      impactDirection: 'reactive',
      regions: [ 'KP' ],
      questionaireResults: [ 'human rights' ],
      slogan: 'ICNK setzt sich für die Menschenrechte in Nordkorea ein.',
      shortDescription: 'Das Ziel des ICNK ist es öffentliches und politsches Bewusstsein über die Meschenrechtslage in Nordkorea zu schaffen, so dass gemeinsam gezielt gegen die Menschenrechtverletzungen in Nordkorea vorgegangen wird. Um dies zu erreichen, arbeitet der ICNK eng mit über 40 Organisationen zusammen.',
      longDescription: 'Das Ziel des ICNK ist es öffentliches und politsches Bewusstsein über die Meschenrechtslage in Nordkorea zu schaffen, so dass gemeinsam gezielt gegen die Menschenrechtverletzungen in Nordkorea vorgegangen wird. Ursprünglich war das Ziel der Organisation eine Komission in der UN zu etablieren, welche die Menschrechtsverletzungen in Nordkorea untersucht. 2013 gelang dies, seitdem arbeitet der ICNK weiterhin an der Aufklärung über die Menschrechtsverletzungen in Nordkorea und die Vernetzung seiner Mitgliederorganisationen (z.B. mit der Organisation von Koferenzen). Über 40 Organisationen arbeiten eng mit dem ICNK zusammen, so z.B. Human Rights Watch.',
      impact1000: 'Genaue Abschätzungen über die Effektivität der Arbeit des ICNK sind aufgrund der politischen und gesellschaftlichen Unabwägbarkeiten nicht möglich. Für die Effektivität des ICNK spricht, dass in Nordkorea extrem schwerwiegende Meschensrechtsverletzungen begangen werden, und somit durch seine Arbeit besonderes schwerwiegendes Leid verhindert werden kann. Als globale Koordinationsplattform hat der ICNK gute Möglichkeiten die Effektivität der Interventionen seiner Mitgliederorganisationen durch verbesserte Zusammenarbeit zu erhöhen.',
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Bewusst Spenden',
          link: 'http://bewusstspenden.de',
          top: false
        }
      ]
    },

    // Tierleid
    {
      name: 'Animal Equality International',
      thumbnail: 'animal_equality',
      website: 'https://www.animalequality.de/',
      donationLink: 'https://www.animalequality.de/spenden',
      donationKeyEAS: null,
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben', 'Haltungsbedingungen' ],
      impactDirection: 'reaktiv',
      regions: [ 'IN', 'US', 'IT', 'DE', 'ES', 'GB', 'MX', 'BR' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'Wir arbeiten für eine bessere Welt für alle Tiere',
      shortDescription: 'Animal Equality ist eine internationale Organisation, die gemeinsam mit Gesellschaft, Politik und Unternehmen daran arbeitet, Grausamkeit in der Massentierhaltung zu beenden.',
      longDescription: 'Animal Equality ist eine internationale Organisation, die gemeinsam mit Gesellschaft, Politik und Unternehmen daran arbeitet, Grausamkeit in der Massentierhaltung zu beenden. Sie treten als internationale Organisation für Werte wie Mitgefühl und Gerechtigkeit ein und glauben an eine Gesellschaft, in der diese Werte verbreitet und gelebt werden. Sie bilden die Basis ihrer Arbeit. Mit innovativen Projekten und Kampagnen decken sie die grausamsten Praktiken der Tierindustrie auf und arbeiten daran, diese abzuschaffen. Dabei behalten sie das große Ziel stets vor Augen: Tierleid zu verhindern.',
      impact1000: 'Hilft dabei: Durchschnittliche 5000 Tiere in der Massentierhaltung vor Leid zu bewahren oder durch Online-Kampagnen mehr als 900.000 Menschen über die Zustände in der Massentierhaltung zu informieren. oder finanziert 26 iAnimal Aktionen innerhalb des Virtual-Reality-Projects, durch das zahlreiche Menschen einen authentischen Einblick in das Leben der Tiere in der Massentierhaltung bekommen.',
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
      name: 'The Good Food Institut',
      thumbnail: 'good_food_institute',
      website: 'https://www.gfi.org/',
      donationLink: 'https://www.gfi.org/donate',
      donationKeyEAS: 'GFI',
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'animal death' ],
      slogan: 'Erzeugung eines gesunden, tiergerechten und nachhaltigen Nahrungsangebots',
      shortDescription: 'The Good Food Institut arbeitet mit Wissenschaftlern, Investoren und Entrepreneuren zusammen, mit dem Fokus auf "clean meat" und pflanzliche Nahrungsalternativen zu tierischen Produkten.',
      longDescription: 'The Good Food Institute (GFI) arbeitet daran, die Tierzuchtbranche zu verändern, indem es die Entwicklung von wettbewerbsfähigen Alternativen zu tierischem Fleisch, Milchprodukten und Eiern fördert. GFI sucht nach Unternehmern und Wissenschaftlern, die Start-ups in dem Marktsektor pflanzlichen und kultivierten Fleisches fördern oder beitreten. Sie bieten geschäftliche, rechtliche, wissenschaftliche und strategische Leitlinien für Unternehmen und betreiben politische (regulatorische und gesetzliche) Arbeit, um das Feld für pflanzliche und zelluläre Produkte auf dem Markt zu ebnen. GFI baut Beziehungen zu Restaurantketten, Lebensmittelgeschäfte und Foodservice-Unternehmen auf, um pflanzliche Alternativen zu Tierprodukten zu verbessern und zu fördern. Schließlich arbeitet GFI mit Fördereinrichtungen, Unternehmen und Regierungen zusammen, um Ressourcen für die Forschung in der synthetischen und pflanzlichen Biologie und Gewebetechnologie zu mobilisieren.',
      impact1000: 'Eine Spende unterstützt GFI-Programme und hilft beim Aufbau ihrer Rücklagen für den Betriebsablauf, die für die Aufrechterhaltung der Betriebskontinuität benötigt werden. Von einer durchschnittlichen Spende von 1.000 US-Dollar, würde GFI etwa 220 US-Dollar für sein Wissenschafts- und Technologieprogramm und etwa 200 US-Dollar für den Aufbau seiner Rücklagen für den Betriebsablauf ausgeben. GFI würde außerdem 200 US-Dollar für internationales Engagement, 160 US-Dollar für ihr Innovationsprogramm, 120 US-Dollar für ihr politisches Programm und etwa 90 US-Dollar für unternehmerisches Engagement ausgeben. Die Auswirkungen von Spenden für Zuchttiere sind spekulativer und langfristiger als der Einfluss von Spenden für andere Oranisation wie Animal Equality. Angesichts des spekulativen Charakters der Auswirkungen von GFI auf Nutztiere, gibt es derzeit keine Kosten-Effektivitäts-Schätzung. Die Meinung von Animal Charity Evaluators ist dennoch, dass Spenden an GFI einen hohen Erwartungswert haben.',
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
      name: 'ProVeg International',
      thumbnail: 'proveg_international',
      website: 'https://www.proveg.com/',
      donationLink: 'https://www.proveg.com/de/spenden/',
      donationKeyEAS: null,
      category: [ 'Tierleid' ],
      cause: [ 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'animal death' ],
      slogan: 'Appetite for a better world',
      shortDescription: 'ProVeg motiviert Menschen zu einem pflanzlichen Lebensstil und vernetzt bestehende Organisationen weltweit, um Gesundheit zu fördern, Tierleiden zu vermindern, die Umwelt zu schützen und eine gerechtere Verteilung von Nahrungsmitteln zu ermöglichen.',
      longDescription: 'Viele der weltweit dringendsten Probleme haben die individuelle Ernährungsweise eines jeden Einzelnen zur Ursache. ProVeg International motiviert die Bevölkerung durch Aufklärung und Bereitstellung praktischer Informationen zum Umstieg auf eine Ernährung unter Verwendung tierfreier Alternativen. Ziel ist, den Konsum von Tieren als Nahrungsmittel bis 2040 um 50 % zu reduzieren. Damit soll die Gesundheit der Bevölkerung gefördert und gleichzeitig das durch die Nahrungsmittelproduktion entstehende Tierleiden vermindert werden. Neben dem Umweltschutz steht dabei zudem die faire Verteilung der weltweiten Nahrungsmittelressourcen im Fokus. Dazu arbeitet ProVeg mit einflussreichen Multiplikatoren aus Politik, Wirtschaft und Medien zusammen.',
      impact1000: 'Für 1.000€ kann eine Aufklärungsveranstaltung in einer Schule mit gesunden Snacks und Getränken ausgestattet, ein Sprecher für einen von ProVeg International organisierten Kongress eingeladen und Informationsmaterial für 30 bis 40 Informationsveranstaltungen beschafft werden.',
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
      donationKeyEAS: 'The_Humane_League',
      category: [ 'Tierleid' ],
      cause: [ 'Haltungsbedingungen', 'Tierleben' ],
      impactDirection: 'proaktiv',
      regions: [ 'MX', 'GB', 'JP', 'US' ],
      questionaireResults: [ 'animal suffering' ],
      slogan: 'Empowering Change - Driving Progress',
      shortDescription: 'The Humane League will Tierleiden möglichst weitreichend verhindern. Dazu werden mit Humane League Labs die effektivsten Methoden ermittelt. Neben konkreten Kampagnen wird Aufklärungsarbeit in der Bevölkerung betrieben sowie das Wissen um den Tierschutz an Universitäten verbreitet.',
      longDescription: 'Weltweit werden unzählige Tiere für die Nahrungsmittelproduktion unter unnatürlichen und unwürden Bedingungen gehalten, misshandelt und verletzt. Um die Haltungsbedingungen der Tiere zu verbessern und so Leid und frühzeitiges Sterben zu verhindern, will The Humane League die Bevölkerung über die Umstände in der industriellen Tierhaltung aufklären. Neben der Bereitstellung von Informationsmaterial und Kampagnen will The Humane League insbesondere auch an Universitäten das Wissen um den Tierschutz verbreiten. Im Rahmen der Humane League Labs wird untersucht, welche Methoden die effektivsten für die Einflussnahme zur Verbesserung der Haltungsbedingen sind.',
      impact1000: null,
      donationDeficit: null,
      evaluators: [
        {
          evaluator: 'Animal Charity Evaluators',
          link: 'https://animalcharityevaluators.org/charity-review/the-humane-league/',
          top: true
        }
      ]
    },
    {
      name: 'Transparency International',
      thumbnail: 'transparency',
      website: 'https://www.transparency.org/',
      donationLink: 'https://www.transparency.org/donate',
      donationKeyEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Institutionen' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [ 'institutions' ],
      slogan: 'Die globale Koalition gegen Korruption',
      shortDescription: 'Eine globale Bewegung, die eine Vision teilt: eine Welt, in der Regierung, Wirtschaft, Zivilgesellschaft und das tägliche Leben der Menschen frei von Korruption sind.',
      longDescription: 'Gegründet in 1993, ist die Bewegung heute in über 100 Ländern präsent und arbeitet daran, ein kollektives weltweites Bewusstsein für Korruption und Veränderungen herbeizuführen. Es werden internatinale Antikorruptionskonventionen geschaffen, die Verfolgung korrupter Führer und die Beschlagnahmung ihrer unerlaubt erworbenen Reichtümer unterstützt sowie Unternehmen für ihr Handeln im In- und Ausland verantwortlich gemacht. In mehre als 100 Ländern arbeiten lokale Gruppen mit Partnern aus Politik, Wirtschaft und Zivilgesellschaft zusammen, um wirksame Maßnahmen gegen Korruption zu ergreifen. Politisch unparteiisch wird Wert auf Unanhängigkeit gelegt, sodass Programme und Aktivitäten allein von International Transparency festgelegt werden. Finanzierungsquellen und Ausgaben werden jährlich von einem unabhängigen Auditor transparent gemacht.',
      impact1000: 'Da Transparency International verschiedene Programme in den über 100 Ländern betreibt, ist eine genaue quantitative Beurteilung sehr schwierig.',
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
      name: 'International Institute for Strategic Studies',
      thumbnail: 'iiss',
      website: 'https://www.iiss.org/',
      donationLink: 'https://www.iiss.org/individual-membership',
      donationKeyEAS: null,
      category: [ 'Politik' ],
      cause: [ 'Institutionen' ],
      impactDirection: 'proaktiv',
      regions: [],
      questionaireResults: [],
      slogan: 'Facts. Analysis. Influence.',
      shortDescription: 'Das Internationale Institut für Strategische Studien (IISS) ist ein britisches Forschungsinstitut (oder Think Tank) auf dem Gebiet internationaler Angelegenheiten. IISS ist die weltweit führende internationale Autorität in globalen Sicherheitsfragen und bietet Fakten und Analysen zu einer breiten Palette von internationalen Sicherheits- und politischen Risikofragen.',
      longDescription: 'Das Internationale Institut für Strategische Studien (IISS) ist ein britisches Forschungsinstitut (oder Think Tank) auf dem Gebiet internationaler Angelegenheiten. Das Internationale Institut für Strategische Studien (IISS) ist die weltweit führende internationale Autorität in globalen Sicherheitsfragen und bietet Fakten und Analysen zu einer breiten Palette von internationalen Sicherheits- und politischen Risikofragen. Das IISS mit Hauptsitz in London hat Büros in Washington, Singapur und Bahrain. Gremium und Mitarbeiter des Instituts sind international und kommt aus mehr als 90 Ländern. Das IISS ist eine wichtige Quelle für genaue, objektive Informationen zu internationalen strategischen Fragen für Politiker, Diplomaten, Außenpolitiker, internationale Unternehmen, Ökonomen, Militärs, Verteidigungskommentatoren, Journalisten, Wissenschaftler und die informierte Öffentlichkeit. Das Institut ist unabhängig und keiner Regierung oder irgendeiner politischen bzw. anderen Organisation verpflichtet. Das IISS forscht mit einer zukunftsorientierten Politikorientierung und legt besonderen Wert darauf, neue Perspektiven in strategische Diskussionen zu bringen. Die Arbeit des Instituts beruht auf der Einschätzung verschiedener politischer, wirtschaftlicher und sozialer Probleme, die Instabilität verursachen, sowie auf Faktoren, die zu internationaler Zusammenarbeit führen können. Sie bringt jährlich Verteidigungsminister, Außenminister und nationale Sicherheitsberater in verschiedenen Formaten privat und öffentlich zusammen, um die internationale Sicherheitspolitik zu diskutieren und zu gestalten. Jedes Jahr finden in Europa, Nordamerika, dem Nahen Osten und Asien sowie in Lateinamerika und Afrika einflussreiche Veranstaltungen statt. IISS-Publikationen werden von wichtigen Entscheidungsträgern gelesen und werden innerhalb der Regierungen auf Kabinettsebene kommentiert. Die Bandbreite der IISS-Publikationen, ihre Gestaltungskraft und die starke internationale Politik des Instituts machen das IISS zu einem wichtigen Akteur in der globalen strategischen Debatte.',
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
  ];

  getByName(name: string): Organization {
    let foundOrganisation = this.organizations.filter(o => o.thumbnail == name);
    if (foundOrganisation.length == 1) return foundOrganisation[0];
    else return null;
  }

  constructor() {}
}
