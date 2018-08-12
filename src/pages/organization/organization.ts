import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Organization } from "../../app/model/organization";
import { Chart, MapChart } from "angular-highcharts";
import { MapsService } from "../../app/services/maps";
import { DataService } from "../../app/services/data";

@Component({
  selector: 'page-organization',
  templateUrl: 'organization.html'
})
export class OrganizationPage implements OnInit {
  organization: Organization;
  chart: Chart;
  worldmap: MapChart;

  constructor(private navCtrl: NavController,
              private params: NavParams,
              private mapsService: MapsService,
              private dataService: DataService) {
    this.organization = this.params.get('o');
  }

  ngOnInit() {
    let organizationsOfSameCategory = this.dataService.organizations
      .filter(o => o.donationDeficit)
      .filter(o => o.category.filter(c => c == this.organization.category[0]).length)
      .sort((a, b) => a.name > b.name ? 1 : -1);
    this.chart = new Chart({
      chart: {
        type: 'bar'
      },
      colors: ['#0c869b', '#9b0c4a'],
      credits: {
        enabled: false
      },
      title: {
        text: 'Spendendefizit'
      },
      subtitle: {
        text: 'aller empfohlenden NGOs aus der Kategorie ' + this.organization.category[0]
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
          name: 'Spendendefizit',
          data: organizationsOfSameCategory.map(o => o.name == this.organization. name ? 0 : o.donationDeficit)
        },
        {
          name: 'Spendendefizit',
          data: organizationsOfSameCategory.map(o => o.name == this.organization. name ? o.donationDeficit: 0)
        }
      ],
      tooltip: {
        valueSuffix: ' €'
      },
      xAxis: {
        categories: organizationsOfSameCategory.map(o => o.name),
        title: {
          text: null
        }
      },
      yAxis: {
        title: {
          text: 'Spendendefizit in €'
        }
      }
    });

    let countriesOfRegions = [].concat.apply([], this.organization.regions.map(r => this.mapsService.regionMapping[r])).filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    }).map(c => [c.toLowerCase(), 1]);
    console.log(JSON.stringify(countriesOfRegions)); //
    this.worldmap = new MapChart({
      credits: {
        enabled: false
      },
      title: {
        text: 'Aktionsgebiete'
      },
      subtitle: {
        text: 'in denen ' + this.organization.name + ' tätig ist'
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Aktionsgebiet',
        data: countriesOfRegions,
        mapData: this.mapsService.worldmap
      }]
    });
  }

  dismiss() {
    this.navCtrl.pop();
  }
}
