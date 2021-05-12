import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-vendors-form',
  templateUrl: './vendors-form.component.html',
  styleUrls: ['./vendors-form.component.css']
})
export class VendorsFormComponent implements OnInit {

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
