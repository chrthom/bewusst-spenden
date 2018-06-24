import { Component } from '@angular/core';
import { ModalService } from "../../app/services/modal";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private modalService: ModalService) {
    this.modalService;
  }

}
