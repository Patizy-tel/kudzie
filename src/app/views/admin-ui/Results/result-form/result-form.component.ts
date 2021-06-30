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
      productName:new FormControl('Akribos Securities'),
      income: new FormControl(0, Validators.required),
      expense: new FormControl(0, Validators.required),
      year: new FormControl('', Validators.required),
      productName1:new FormControl('Akribos Realised Gain'),
      income1: new FormControl(0, Validators.required),
      expense1: new FormControl(0, Validators.required),
      productName2:new FormControl('Akribos Wealth'),
      income2: new FormControl(0, Validators.required),
      expense2: new FormControl(0, Validators.required),
     
    });
}

onSubmit() {


 this.childSubmit.emit(this.vendorForm.value)
}

}
