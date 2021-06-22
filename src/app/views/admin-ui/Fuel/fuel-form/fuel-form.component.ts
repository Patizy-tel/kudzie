import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-fuel-form',
  templateUrl: './fuel-form.component.html',
  styleUrls: ['./fuel-form.component.scss']
})
export class FuelFormComponent implements OnInit {

  @Input()errorMessage : Error;
  @Input() dialog :Boolean = false
    @Input()btnState$ : ClrLoadingState;
    @Input() loading :Boolean = false;
    @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
    public vendorForm : FormGroup;
  constructor( private sendIt: AuthService) { }

  ngOnInit() {
    this.createProjectForm();
}

private createProjectForm() {
    this.vendorForm = new FormGroup({

      msg: new FormControl('', Validators.required)
    });
}

onSubmit() {


  let finalDet = {

    msg:this.vendorForm.value.msg,
    email:sessionStorage.getItem('theemail')

  } 
   this.sendIt.postEmail(finalDet).subscribe(resp=>{

    alert('Done sending Email')
   })
}

}
