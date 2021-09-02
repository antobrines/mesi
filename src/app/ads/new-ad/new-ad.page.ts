import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.page.html',
  styleUrls: ['./new-ad.page.scss'],
})
export class NewAdPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private _location: Location, private httpClient: HttpClient, private router: Router) { }

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required], , Validators.minLength(5)],
      stock: ['', [Validators.required]],
      price_ht: ['', [Validators.required]],
      product_image: ['', [Validators.required]]
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.get('product_image').setValue(file);
    }
  }

  backClicked() {
    this._location.back();
  }

  onSubmit() {
    const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
    var formData = new FormData();
    formData.append('name', this.myForm.get('name').value);
    formData.append('description', this.myForm.get('description').value);
    formData.append('stock', this.myForm.get('stock').value);
    formData.append('price_ht', this.myForm.get('price_ht').value);
    formData.append('product_image', this.myForm.get('product_image').value);
    console.log(formData);
    this.httpClient.post('http://127.0.0.1:8000/new/product', formData, { headers }).subscribe((result: any) => {    
        this.router.navigate(['/ads-list']);
      },
      error => {
        (err) => console.log(err)
      }
    )
    ;
  }

}
