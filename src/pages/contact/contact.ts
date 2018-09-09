import { Component } from '@angular/core';
import { ContactMessage } from "../../app/model/contactmessage";
import { LoadingController } from "ionic-angular";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  message: ContactMessage = {
    person: null,
    mail: null,
    message: null,
    accept: false,
    subscribe: false
  };
  showResponsePage: Boolean = false;

  constructor(private loadingCtrl: LoadingController) { }

  send() {
    setTimeout(() => {
      this.showResponsePage = true;
    }, 1200);
    let loader = this.loadingCtrl.create({
      content: "Deine Nachricht wird gesendet...",
      duration: 1200
    });
    loader.present();
  }
}
