import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services';
import html2canvas from 'html2canvas';

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
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

  constructor(private serci :AuthService) { }

  ngOnInit() {

    this.getAllResults({});
    this.createProjectForm() 
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


     // console.log(resp);
     // console.log('submitess');


     this.accounts =  resp ;
      let ay  = await Math.max.apply(Math, resp.map(function(o) { 
        return o.result; 
      
      }));


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

}
