import { Component, OnInit, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //use @ViewChild for DOM elements
  @ViewChild('form',  {static: false}) templateForm: NgForm;
  modelDrivenForm: any;
  rfForm: FormGroup;
  constructor(private fb: FormBuilder) { 
   
  }

  ngOnInit() {
    this.modelDrivenForm= {
      // name: 'Default',
      // email: 'Default'
    };
    // this.rfForm = new FormGroup({
    //   email: new FormControl(),
    //   social: new FormGroup({
    //     facebook: new FormControl(),
    //     twitter: new FormControl()
    //   })
    // });

    this.rfForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      social: this.fb.group({
        facebook: ['', [Validators.required, Validators.minLength(12)]],
        twitter: ''
      })
    });
  }

  // onSubmit(formValue){
  //   throwError('something is wrong');
  // }

  onSubmit(){
    console.log(this.templateForm);
    console.log(this.rfForm);
    
  }




}
