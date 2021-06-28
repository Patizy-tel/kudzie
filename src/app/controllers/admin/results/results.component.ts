import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

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


  constructor(private serci :AuthService) { }

  ngOnInit() {

    this.getAllResults({})
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

})



  }

}
