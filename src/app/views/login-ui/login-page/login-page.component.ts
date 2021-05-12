import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    SimpleChanges
} from '@angular/core';
import {ClrLoadingState} from '@clr/angular';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({selector: 'app-login-page', templateUrl: './login-page.component.html', styleUrls: ['./login-page.component.css']})
export class LoginPageComponent implements OnInit {
    @Input()errorMessage : Error;
    @Input()btnState$ : ClrLoadingState;
    @Input() loading :Boolean = false;
    @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
    public loginForm : FormGroup;

    constructor() {}

    ngOnInit() {
        this.createLoginForm();
    }

    private createLoginForm() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        this
            .childSubmit
            .emit(this.loginForm.value);
    }
}
