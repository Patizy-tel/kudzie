import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent implements OnInit {


  @Input()errorMessage : Error;
  @Input() dialog :Boolean = false
    @Input()btnState$ : ClrLoadingState;
    @Input() loading :Boolean = false;
    @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
    public vehicleForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.createVehicleForm();
}

private createVehicleForm() {
    this.vehicleForm = new FormGroup({
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
        .emit(this.vehicleForm.value);
}

}
