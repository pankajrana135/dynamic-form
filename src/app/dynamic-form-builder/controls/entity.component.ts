import { Component, Input, OnChanges } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
    selector: 'entity',
    template: `
   <div [formGroup]="form"> 
        <input type="button" value="Add Employee" class="btn btn-primary" (click)="addEmployee()" />
  
        <div [formArrayName]="field.name">
      
        <div *ngFor="let employee of form.controls.employees.controls; let i=index">
        <span><strong> Employee {{i + 1}}</strong></span>
        <div *ngFor="let field of employees">
        <field-builder [field]="field" [form]="empForm"></field-builder>
        </div>
        </div>
 
</div>
    `
})

export class EntityComponent implements OnChanges {
    @Input() field: any = {};
    @Input() form: FormGroup;
    empForm: FormGroup;

    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }



    public employees: any[] = [
        {
            type: 'text',
            rmxtype: 'text',
            name: 'empFirstName',
            label: 'Employee First Name',
            value: '',
            required: false,
            placeholder: 'First Name',
            dataModalObject: 'PiEmployee.PiEntity.FirstName'
        },
        {
            type: 'text',
            rmxtype: 'text',
            name: 'empLastName',
            label: 'Employee Last Name',
            value: '',
            required: false,
            placeholder: 'Last Name',
            dataModalObject: 'PiEmployee.PiEntity.LastName'
        }
    ]

    constructor(private fb: FormBuilder) {
        this.empForm = new FormGroup({
            employees: new FormControl(JSON.stringify(this.employees))
        })
    }
    
    
    ngOnInit() {
        let fieldsCtrls = {};
        for (let f of this.employees) {

            if (f.rmxtype == 'entity') {
                fieldsCtrls[f.name] = this.fb.array([])
            }
            else if (f.type != 'checkbox') {
                fieldsCtrls[f.name] = new FormControl(f.value || '', f.validators)
            } else {
                let opts = {};
                for (let opt of f.options) {
                    opts[opt.key] = new FormControl(opt.value);
                }
                fieldsCtrls[f.name] = new FormGroup(opts)
            }
        }
        this.empForm = this.fb.group(
            fieldsCtrls
        );
    }


    initEmployee() {
        // initialize our address
        return this.fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }


    ngOnChanges() {

        console.log();
        // this.field.value.
    }

    addEmployee() {
        console.log('add employee');
        debugger;
        const control = <FormArray>this.form.controls['employees'];
        control.push(this.initEmployee());

    }
}