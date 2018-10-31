import { Component, Input, OnChanges } from "@angular/core";
import {FormGroup} from "@angular/forms";


@Component({
 selector: 'datepicker' , 
template: `
<div [formGroup]="form">
   <input bsDatepicker [(ngModel)]="field.value" type="text" class="form-control"  [id]="field.name" [name]="field.name" [formControlName]="field.name"  [placeholder]="field.placeholder"
   [maxDate]="maxDate">
  
 </div> 
 `
})

export class DatePickerComponent implements OnChanges {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    minDate: Date;
    maxDate: Date;

    constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 30);
    this.maxDate.setDate(this.maxDate.getDate());
       }

    ngOnChanges(){
     
        console.log();
        // this.field.value.
      }
}