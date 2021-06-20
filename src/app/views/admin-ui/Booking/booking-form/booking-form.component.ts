import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  @Input()errorMessage : Error;
  @Input() dialog :Boolean = false
    @Input()btnState$ : ClrLoadingState;
    @Input() loading :Boolean = false;
    @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
    public vendorForm : FormGroup;
  constructor( private notesService :AuthService) { }

  ngOnInit() {
    this.createProjectForm();
}

private createProjectForm() {
    this.vendorForm = new FormGroup({
      details: new FormControl('', Validators.required),
 
    });
}

onSubmit() {

  let id  = sessionStorage.getItem('theid');


    let finalObj = {
       details: this.vendorForm.value.details ,
       patId:id
    }


     this.notesService.postNotes(finalObj).subscribe(resp=>{

       alert('success')
     })
  
}

}
