import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  submit() {
    console.log(this.form.getRawValue());
    const formData = this.form.getRawValue();

    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'qUoMM8CnrX50nJ0KOnYoSXusQvaJCGk4Xk59y07t',
      scope: '*'
    };

    this.http.post('http://127.0.0.1:8000/oauth/token', data).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.access_token);
        this.router.navigate(['/profile/menu']);
      },
      error => {
        console.log(error);
        // manage error later
      }
    );
  }

}
