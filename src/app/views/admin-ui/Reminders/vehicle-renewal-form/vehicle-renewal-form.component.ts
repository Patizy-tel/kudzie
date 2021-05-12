import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-vehicle-renewal-form',
  templateUrl: './vehicle-renewal-form.component.html',
  styleUrls: ['./vehicle-renewal-form.component.css']
})
export class VehicleRenewalFormComponent implements OnInit {

  @Input()errorMessage : Error;
  @Input() dialog :Boolean = false
    @Input()btnState$ : ClrLoadingState;
    @Input() loading :Boolean = false;
    @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
    public vendorForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.createProjectForm();
}

private createProjectForm() {
    this.vendorForm = new FormGroup({
      description: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required)
    });
}

onSubmit() {
    this
        .childSubmit
        .emit(this.vendorForm.value);
}

}
