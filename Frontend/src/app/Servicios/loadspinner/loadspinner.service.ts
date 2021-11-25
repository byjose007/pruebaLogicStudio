import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadspinnerService {

  constructor(private spinner: NgxSpinnerService) { }
  ngOnInit() {}

  private _loading: boolean = false;
  loadingStatus: Subject<boolean> = new Subject();

  get loading():boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
    this.spinner.show();
  }

  stopLoading() {
    this.loading = false;
    this.spinner.hide();
  }


}
