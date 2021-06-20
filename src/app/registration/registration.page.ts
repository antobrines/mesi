import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit{

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) {}

  myForm: FormGroup;  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      last_name:['', [Validators.required]],
      first_name:['', [Validators.required]],
      email:['', [Validators.required,Validators.email]],
      password: ['', [Validators.required], Validators.minLength(6)],
      password_confirmation: ['', [Validators.required],  Validators.minLength(6)],
      phone_number:'',
      profile_image: ['']
    }, { 
      validator: ConfirmedValidator('password', 'password_confirmation')
    })
  }
  get f(){
    return this.myForm.controls;
  }

 onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.myForm.get('profile_image').setValue(file);
  }
}
   
onSubmit() {
  var formData = new FormData();
  formData.append('last_name', this.myForm.get('last_name').value);
  formData.append('first_name', this.myForm.get('first_name').value);
  formData.append('email', this.myForm.get('email').value);
  formData.append('password', this.myForm.get('password').value);
  formData.append('password_confirmation', this.myForm.get('password_confirmation').value);
  formData.append('phone_number', this.myForm.get('phone_number').value);
  formData.append('profile_image', this.myForm.get('profile_image').value);
console.log(formData);
  this.httpClient.post<any>('http://127.0.0.1:8000/new/user', formData).subscribe(
    (result: any) => {

      this.router.navigate(['/login']);
    },
    error => {
      (err) => console.log(err)
    }
  );
  }
}



