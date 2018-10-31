import { Component, Input, OnChanges,SimpleChanges } from "@angular/core";
import {FormGroup } from "@angular/forms";


@Component({
 selector: 'time' , 
template: `
<div [formGroup]="form">
<timepicker  [meridians]="meridians"></timepicker>
 </div> 
 `
})

export class TimeComponent implements OnChanges {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    myTime = new Date();
    constructor() {

    }

    ngOnChanges(){
     
        console.log();
        // this.field.value.
      }
}