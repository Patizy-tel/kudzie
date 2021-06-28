import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { AuthService } from 'src/app/services';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  Years: any;
  productA: any;
  productB: any;
  productC: any;

 
  constructor(private Auth :AuthService) {
 
  }
  ngOnInit(): void {
 this.getGraphsResults();
  }


  getGraphsResults(){


    this.Auth.getAllGraphs().subscribe((resp:any)=>{

      console.log(resp);
      this.Years =resp.myYears
     this.productA = resp.resultA
     this.productB = resp.resultB
     this.productC = resp.resultC



      this.chartOptions = {
        series: [
          {
            name: "Product A",
            data: this.productA
          },
          {
            name: "Product B",
            data: this.productB
          } ,
          {
            name: "Product C",
            data: this.productC
          }
        ],
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories:this.Years
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };







    })









  }









}

