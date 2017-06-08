import {Inject, Injectable} from '@angular/core';
/**
 * Created by johnjenkins on 6/8/17.
 * This service is a wrapper for the toastr lib
 */

declare let toastr: any; // declare the toastr global to any any so typescript does not complaing


@Injectable()
export class ToastrService {

  success(message: string, title?: string) {
    console.log(message);
    toastr.success(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
