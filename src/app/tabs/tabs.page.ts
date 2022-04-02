import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(public sharedDataService: SharedDataService) {}

  setTitle(s: string) {
    this.sharedDataService.title.next(s);
  }
}
