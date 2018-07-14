import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Organization } from "../../app/model/organization";
import { Chart, MapChart } from "angular-highcharts";
import { MapsService } from "../../app/services/maps";
import { DataService } from "../../app/services/data";

@Component({
  templateUrl: 'organization.html'
})
export class OrganizationPage {
  organization: Organization;
  chart: Chart;
  worldmap: MapChart;

  constructor(private navCtrl: NavController,
              private params: NavParams,
              private mapsService: MapsService,
              private dataService: DataService) {
    this.organization = this.params.get('o');
    let organizationsOfSameCategory = dataService.organizations
      .filter(o => o.donationDeficit)
      .filter(o => o.category.filter(c => c == this.organization.category[0]).length)
      .sort((a, b) => a.name > b.name ? 1 : -1);
    this.chart = new Chart({
      chart: {
        type: 'bar'
      },
      colors: ['#0c869b', '#9b0c4a'],
      title: {
        text: 'Spendendefizit'
      },
      subtitle: {
        text: 'aller empfohlenden NGOs aus der Kategorie ' + this.organization.category[0]
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [
        {
          data: organizationsOfSameCategory.map(o => o.name == this.organization. name ? 0 : o.donationDeficit)
        },
        {
          data: organizationsOfSameCategory.map(o => o.name == this.organization. name ? o.donationDeficit: 0)
        }
      ],
      xAxis: {
        categories: organizationsOfSameCategory.map(o => o.name),
        title: {
          text: null
        }
      }
    });
    this.worldmap = new MapChart({
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
  }

  dismiss() {
    this.navCtrl.pop();
  }
}
