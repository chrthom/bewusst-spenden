import { Component } from '@angular/core';
import { ContactMessage } from "../../app/model/contactmessage";
import { LoadingController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

  constructor(private loadingCtrl: LoadingController, private http: HttpClient) { }

  send(message: ContactMessage) {
    // TODO: Fix
    /*
    let loader = this.loadingCtrl.create({
      content: 'Deine Nachricht wird gesendet...'
    });
    loader.present();
     */
    const slackWebhookUrl = 'https://hooks.slack.com/services/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';
    let slackMessage: any = {
      text: `Neue Kontaktaufnahme von ${message.person} (${message.mail}).`,
      attachments: [
        {
          author_name: 'Bewusst Spenden',
          author_link: 'bewusstspenden.de',
          author_icon: 'https://bewusstspenden.de/assets/icon/favicon.ico',
          color: 'good',
          text: message.message,
          title: 'Inhalt der Nachricht'
        }
      ]
    };
    if (message.subscribe)
      slackMessage.attachments.push(
        {
          color: 'warning',
          fields: [
            {
              title: 'Name',
              value: message.person,
              short: true
            },
            {
              title: 'E-Mail Addresse',
              value: message.mail,
              short: true
            }
          ],
          text: 'Interessent in den Verteiler für den EA Newsletter aufnehmen',
          title: 'Weitere erforderliche Aktionen'
        }
      );
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      )
    };
    this.http.post(slackWebhookUrl, slackMessage, options).pipe().subscribe(
      o => {
        this.showResponsePage = true;
        //loader.dismissAll(); // TODO: Fix
      }, o => {
        this.showResponsePage = true;
        //loader.dismissAll(); // TODO: Fix
      })
  }
}
