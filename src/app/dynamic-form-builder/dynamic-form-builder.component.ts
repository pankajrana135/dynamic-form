import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template:`
    <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form" class="form-horizontal">
    <div *ngFor="let field of fields">
    <field-builder [field]="field" [form]="form"></field-builder>
    </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <button  [disabled]="!form.valid" class="btn btn-primary" (click)="handleclick()">Save</button>
          <strong >Saved all values</strong>
        </div>
      </div>
     
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;

  mytime: Date = new Date();
  meridians = ['12H', '24H'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    let fieldsCtrls = {};
    for (let f of this.fields) {

      if(f.rmxtype=='entity'){
        fieldsCtrls[f.name] =this.formBuilder.array([])
      }
      else if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '',  f.validators)
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }

   // this.form = new FormGroup(fieldsCtrls);

    this.form=this.formBuilder.group(
      fieldsCtrls
    );
  }

  handleclick() {
    console.log(this.fields);
}
}
