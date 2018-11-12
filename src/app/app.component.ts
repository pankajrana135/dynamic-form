import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any;
  formTitle = "Incident Reporting Form";
 
  public fields: any[] = [
    {
      type: 'text',
      rmxtype: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
      validators: [
        Validators.required,
        Validators.maxLength(10)
      ],
      placeholder: 'First Name',
      dataModalObject: 'Event.EventNumber'
    },
    {
      type: 'text',
      rmxtype: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: false,
      validators: [
        Validators.required,
        Validators.maxLength(10)
      ],
      placeholder: '',
      dataModalObject: 'Event.Department'
    },
    {
      type: 'text',
      rmxtype: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
      validators: [
        Validators.required,
        Validators.email
      ],
      placeholder: '',
      dataModalObject: 'Event.Email'
    },
    {
      type: 'date',
      rmxtype: 'date',
      name: 'dateOfBirth',
      label: 'Date of Birth',
      value: '',
      required: true,
      validators: [
        Validators.required,
        Validators.maxLength(10)
      ],
      placeholder: 'mm/dd/yyyy',
      dataModalObject: 'Event.DateOfEvent'
    },
    
    {
      type: 'text',
      rmxtype: 'text',
      name: 'description',
      label: 'Description',
      value: '',
      required: true,
      validators: [
        Validators.required,
        Validators.maxLength(10)
      ],
      placeholder: '',
      multiline: true,
      dataModalObject: 'Event.Description'
    },
   
    {
      type: 'dropdown',
      rmxtype: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      validators: [
        Validators.required,
        Validators.maxLength(10)
      ],
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ],
      dataModalObject: ''
    },
    {
      type: 'text',
      rmxtype: 'entity',
      name: 'employees',
      label: 'Employee',
      value: '',
      required: false,
     
      dataModalObject: 'PiEmployee.PiEid'
    },
    // {
    //  type: 'file',
    //  name: 'picture',
    //  label: 'Picture',
    //  required: true,
    //  onUpload: this.onUpload.bind(this)
   // },
   // {
  //    type: 'radio',
   //   name: 'gender',
  //    label: 'Gender',
  //    value: '',
   //   required: true,
  //    options: [
  //      { key: 'm', label: 'Male' },
   //     { key: 'f', label: 'Female' }
   //   ]
   // },
   // {
   //   type: 'checkbox',
   //   name: 'hobby',
   //   label: 'Hobby',
   //   required: true,
   //   options: [
   //     { key: 'f', label: 'Fishing' },
    //    { key: 'c', label: 'Cooking' }
   //   ]
   // }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
