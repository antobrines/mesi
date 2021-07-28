import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public message = '';
  public user;
  public form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.getUserInformation();
    this.form = this.fb.group({
      last_name: '',
      first_name: '',
      email: '',
      phone_number: '',
      image: '',
    });
  }

  getUserInformation() {
    const token = localStorage.getItem('token');
    const header = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };
    const requestOptions = {
      headers: new HttpHeaders(header),
    };

    this.http.get('http://127.0.0.1:8000/user', requestOptions).subscribe(
      (data) => {
        this.user = data;
        this.updateForm(data);
      }
    );
  }

  updateForm(data) {
    this.form.get('last_name').setValue(data.last_name);
    this.form.get('first_name').setValue(data.first_name);
    this.form.get('email').setValue(data.email);
    this.form.get('phone_number').setValue(data.phone_number);
  }

  submit() {
    const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
    const body = this.form.getRawValue();
    delete body.email;
    this.http.post('http://127.0.0.1:8000/user/' + this.user.id, body, { headers }).subscribe((result: any) => {
      this.updateForm(result.data);
      this.message = result.message;
    });
  }
}