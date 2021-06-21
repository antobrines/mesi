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
export class RegistrationPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) { }

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      last_name: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required], Validators.minLength(6)],
      password_confirmation: ['', [Validators.required], Validators.minLength(6)],
      phone_number: '',
      profile_image: ['']
    }, {
      validator: ConfirmedValidator('password', 'password_confirmation')
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.get('profile_image').setValue(file);
    }
  }

  onSubmit() {
    this.httpClient.post<any>('http://127.0.0.1:8000/new/user', this.myForm.getRawValue()).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      }
      ,
      (err) => console.log(err)
    );
  }

}

