import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChartModule, HIGHCHARTS_MODULES } from "angular-highcharts";
import * as Highmaps from 'highcharts/modules/map.src';

import { EADonationApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { SearchPage } from "../pages/search/search";
import { OrganizationPage } from "../pages/organization/organization";
import { PrivacyPage } from "../pages/privacy/privacy";

import { DataService } from "./services/data";
import { MapsService } from "./services/maps";
import { ModalService } from "./services/modal";

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
    ChartModule,
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
    MapsService,
    ModalService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ Highmaps ] }
  ]
})
export class AppModule {}
