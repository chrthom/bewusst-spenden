import { Component } from '@angular/core';
import { ModalService } from "../../app/services/modal";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private modalService: ModalService) {
    this.modalService;
  }

}
