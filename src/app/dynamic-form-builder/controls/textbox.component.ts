import { Component, Input, OnChanges,SimpleChanges } from "@angular/core";
import {FormGroup} from "@angular/forms";


@Component({
 selector: 'textbox' , 
template: `
<div [formGroup]="form">
<input *ngIf="!field.multiline" [attr.type]="field.type" [id]="field.name" class="form-control"   [name]="field.name" [formControlName]="field.name"  [placeholder]="field.placeholder" />
   <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
   rows="5" class="form-control" [placeholder]="field.placeholder" [(ngModel)]="field.value"></textarea>
 </div> 
 `
})

export class TextBoxComponent implements OnChanges {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

    }

    ngOnChanges(){
     
        console.log();
        // this.field.value.
      }
}