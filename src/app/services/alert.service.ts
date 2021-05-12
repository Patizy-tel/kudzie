import { Injectable } from '@angular/core';

import { default as swal,  SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AlertService {

  constructor() { }

  error(text:string) {

    const option: SweetAlertOptions = {
      title: 'Error message',
      text: text,
      icon: 'error',
      confirmButtonText: 'ok'
    };
    swal.fire(option);

  }

  success(text:string) {

    const option: SweetAlertOptions = {
      title: 'Success',
      text: text,
      timer: 3000,
      icon: 'success',
      confirmButtonText: 'Ok'
    };
    swal.fire(option)
      .then(() => { });

  }

  serverError() {

    const option: SweetAlertOptions = {
      title: 'Server Error',
      text: 'Server Error',
      icon: 'error',
      confirmButtonText: 'Ok'
    };
    swal.fire(option);

  }

  confirm(text:string, ) {
    const option: SweetAlertOptions = {
      title: 'Are you sure?',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'cancel'
    };
     return swal.fire(option);
  }
}
