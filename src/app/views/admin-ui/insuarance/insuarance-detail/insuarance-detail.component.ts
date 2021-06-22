import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js';
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexTitleSubtitle
} from "ng-apexcharts";
import io from 'socket.io-client';

const socket = io('https://backendpatientkudzie.herokuapp.com');
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};




@Component({
  selector: 'app-insuarance-detail',
  templateUrl: './insuarance-detail.component.html',
  styleUrls: ['./insuarance-detail.component.scss']
})
export class InsuaranceDetailComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @ViewChild("chart2") chart2: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  dayta =[];
  laybels = [] ;
  loader :boolean = true ;
  tempdayta = [];
  lasttemp:any;
  lastpulse:any


  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "Pulse",
          data:[]
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Pulse",
        align: "left"
      },
      subtitle: {
        text: "Pulse for the  Last Few Days",
        align: "left"
      },
      labels:[],
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };



    
    this.chartOptions2 = {
      series: [
        {
          name: "Temperature",
        color:'red',
          data:[]
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Temperature",
        align: "left"
      },
      subtitle: {
        text: "Temperature for the  Last Few Days",
        align: "left"
      },
      labels:[],
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };

   
  }
  ngOnInit() {
    this.getInfo();
    this.loader = false;
  }



  async getInfo(){
    socket.on('pulse' ,(res)=>{
      this.dayta =res;
    });
    socket.on('_temp' ,(res)=>{
      this.tempdayta =res;
    });
    socket.on('_date' ,(res)=>{
      this.laybels = res ;
  
      this.updateCharts();
     
    });






 





  }

  addData(mylabels ,myData ,mytemp){
    this.chartOptions.labels =mylabels;
    this.chartOptions.series[0].data = myData;
    this.chartOptions2.labels =mylabels;
    this.chartOptions2.series[0].data = mytemp;

  }



  updateCharts(){


    if(this.dayta.length === 0 &&  this.tempdayta.length === 0 && this.laybels.length === 0 ){
  

    }else{
      this.lastpulse=this.dayta.slice(-1);
      this.lasttemp=this.tempdayta.slice(-1);

     this.addData(this.laybels, this.dayta, this.tempdayta);
   
    }
    this.lastpulse=this.dayta.slice(-1);
    this.lasttemp=this.tempdayta.slice(-1);





  }
}
