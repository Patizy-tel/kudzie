import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { AuthService } from 'src/app/services';

@Component({
  selector:'app-result',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent implements OnInit {


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
      productName:new FormControl(''),
      income: new FormControl('', Validators.required),
      expense: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required)
    });
}

onSubmit() {


 this.childSubmit.emit(this.vendorForm.value)
}

}
