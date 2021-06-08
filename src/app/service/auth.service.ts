import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(formData) {
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'na2VWDUzhgroJSCjaA95XqGnmpvykzx2sGJyUuyx',
      scope: '*'
    };
    // Add .env later for client_secret

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

  get isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    const header = {
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    };
    const requestOptions = {
      headers: new HttpHeaders(header),
    };

    this.http.get('http://127.0.0.1:8000/user', requestOptions).subscribe(
      (result) => {
        console.log(result);
      }
    );
    return true;
  }

}
