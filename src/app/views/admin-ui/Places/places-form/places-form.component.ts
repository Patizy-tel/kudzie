import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { ClrLoadingState } from '@clr/angular';
@Component({
  selector: 'app-places-form',
  templateUrl: './places-form.component.html',
  styleUrls: ['./places-form.component.scss']
})
export class PlacesFormComponent implements OnInit {

  @Input()errorMessage : Error;
  @Input() dialog :Boolean = false
    @Input()btnState$ : ClrLoadingState;
    @Input() loading :Boolean = false;
    @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
    public placeForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.createProjectForm();
}

private createProjectForm() {
    this.placeForm = new FormGroup({
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
        .emit(this.placeForm.value);
}

}
