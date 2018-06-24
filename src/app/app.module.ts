import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { EADonationApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { SearchPage } from "../pages/search/search";

import { DataService } from "./services/data";
import { ModalService } from "./services/modal";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrganizationPage } from "../pages/organization/organization";
import { PrivacyPage } from "../pages/privacy/privacy";

@NgModule({
  declarations: [
    EADonationApp,
    AboutPage,
    ContactPage,
    OrganizationPage,
    PrivacyPage,
    QuestionnairePage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(EADonationApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    EADonationApp,
    AboutPage,
    ContactPage,
    OrganizationPage,
    PrivacyPage,
    QuestionnairePage,
    SearchPage
  ],
  providers: [
    DataService,
    ModalService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
