import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Organization } from "../../app/model/organization";
import { Chart, MapChart } from "angular-highcharts";
import { MapsService } from "../../app/services/maps";

@Component({
  templateUrl: 'organization.html'
})
export class OrganizationPage {
  organization: Organization;

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  worldmap = new MapChart({
    chart: {
      borderWidth: 1
    },
    title: {
      text: 'Aktionsgebiete'
    },
    subtitle: {
      text: 'Demo of drawing all areas in the map, only highlighting partial data'
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Land',
      data: [
        ['is', 1],
        ['no', 1],
        ['se', 1],
        ['dk', 1],
        ['fi', 1]
      ],
      mapData: this.mapsService.worldmap
    }]
  });

  constructor(private navCtrl: NavController, private params: NavParams, private mapsService: MapsService) {
    this.organization = this.params.get('o');
  }

  dismiss() {
    this.navCtrl.pop();
  }
}
