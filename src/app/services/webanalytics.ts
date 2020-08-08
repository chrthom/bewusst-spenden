import { Injectable } from "@angular/core";

declare let gtag: Function;

@Injectable()
export class WebAnalyticsService {
  constructor() {}

  pageView(page: string, title: string) {
    gtag('config', 'UA-174490060-1', {
      'page_path': page
    });
  }

  finishQuestionaire(result: string) {
    gtag('event', 'finish', {
      event_category: 'questionaire',
      event_label: result
    });
  }

  visitCharityWebsite(name: string) {
    gtag('event', 'visit', {
      event_category: 'organization',
      event_label: name
    });
  }

  donateToCharity(name: string) {
    gtag('event', 'donate', {
      event_category: 'organization',
      event_label: name
    });
  }

  donateToCharityViaEAS(name: string) {
    gtag('event', 'donate-eas', {
      event_category: 'organization',
      event_label: name
    });
  }
}
