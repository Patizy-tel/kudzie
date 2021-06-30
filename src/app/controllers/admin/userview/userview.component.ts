import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services';
import html2canvas from 'html2canvas';


import * as jsPDF from 'jspdf';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};



@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],

})
export class UserviewComponent implements OnInit {
  total: any;
  total2: any;
  total3: any;
  levels: any;
  levels2: any;
  levels3: any;
  vendorForm: any;
  bestProduct :any;

  dialog:boolean = false
  accounts: any;
  d1:any;
  d2:any
  d3:any


  p1= [];
  p2= [];
  
   chart: ChartComponent;
  chart1: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;

  constructor(private serci :AuthService) { }

  ngOnInit() {

    this.getAllResults({});
    this.createProjectForm() ;
  this.createChart();
  }


  postResult(result){

    this.serci.postResult(result)
              .subscribe(rsp=>{
                alert('Success')
              } ,err=>{
                alert('Error')
              })
  }


  getAllResults(e){

    
    this.serci.getAllpaitns().subscribe((resp:any) =>{

      console.log(resp);
      this.total = resp.length;
      this.levels= resp

});
this.serci.getAllpaitns2().subscribe((resp:any) =>{

  console.log(resp);
  this.total2 = resp.length;
  this.levels2= resp

})
this.serci.getAllpaitns3().subscribe((resp:any) =>{

  console.log(resp);
  this.total3 = resp.length;
  this.levels3= resp

});


  }


  private createProjectForm() {
    this.vendorForm = new FormGroup({
     
      year: new FormControl('')
    });
}



  onSubmit(){


    this.serci.getReport(this.vendorForm.value.year).subscribe(async (resp:any)=>{



     this.accounts =  resp ;

     this.d1 = resp[0].optimalcompany;
     this.d2 = resp[1].optimalcompany;
     this.d3 = resp[2].optimalcompany;

     console.log(resp)


      await  resp.map(x=>{
       
       
        this.p1.push(x.optimalcompany)
       
       

      });



      await  resp.map(x=>{
        return  this.p2.push(x.optimalMarket)
        
 
 
       })










      let ay  = await Math.max.apply(Math, resp.map(function(o) { 
        return o.optimalcompany; 
      
      }));

      this.createChart()


    console.log(ay)
     let ayb  = await resp.map(function(post, index) {
   
        if(post.result == ay){

          console.log(post);
          
           return  post.productName

        }


      });



      

      this.bestProduct = ayb;

      console.log(this.bestProduct);



    
      this.dialog = true




    })






  }



  
  openPDF():void {
    let data = document.getElementById('statement');

    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new  jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight ,undefined,'FAST')  
      heightLeft -=pageHeight;

      while(heightLeft>=0){
        position =heightLeft - imgHeight;
        
        pdf.addPage();
        pdf.addImage(contentDataURL,'PNG',0,position, imgWidth, imgHeight ,undefined,'FAST');
        heightLeft -= pageHeight;
      }
      pdf.save(`Results`); // Generated PDF   
    }); 
    }





    createChart(){

      this.chartOptions = {
        series: [
          {
            name: "Akribos Securities",
            data: [this.d1]
          },
          {
            name: "Akribos Realised Gain",
            data: [this.d2]
          },
          {
            name: "Akribos Wealth",
            data: [this.d3]
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            this.vendorForm.value.year
           
          ]
        },
        yaxis: {
          title: {
            text: "$"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val 
            }
          }
        
      
  
  }





}



this.chartOptions1 = {
  series: [
    {
      name: "Optimal Company",
      data: this.p1 
    },
    {
      name: "Optimal  Market",
      data: this.p1
    }
  ],
  chart: {
    type: "bar",
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  xaxis: {
    categories: [

      "Akribos Securities" ,  "Akribos Realised Gain",
      "Akribos Wealth"
   
     
    ]
  },
  yaxis: {
    title: {
      text: "$"
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return "$ " + val 
      }
    }
  


}





}






}

  

}
function ViewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

