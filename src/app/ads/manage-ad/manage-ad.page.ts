import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-ad',
  templateUrl: './manage-ad.page.html',
  styleUrls: ['./manage-ad.page.scss'],
})
export class ManageAdPage implements OnInit {
  public product = null;

  product_id: number;
  public form: FormGroup;
  public message = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private actRoute: ActivatedRoute, private _location: Location, private router: Router) {
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getProduct();
    
    this.form = this.formBuilder.group({
      name: '',
      description: '',
      stock: '',
      price_ht: '',
      product_image: '',
    });

  }

    backClicked() {
    this._location.back();
  }

  getProduct() {
    this.http.get('http://127.0.0.1:8000/product/' + this.product_id).subscribe((datas: any) => {
      this.product = datas.data;
      this.updateForm(datas.data);
    });
  }

  get f() {
    return this.form.controls;
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('product_image').setValue(file);
    }
  }

  updateForm(data) {
    this.form.get('name').setValue(data.name);
    this.form.get('description').setValue(data.description);
    this.form.get('stock').setValue(data.stock);
    this.form.get('price_ht').setValue(data.price_ht);
  }

  onSubmit() {
    const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
    const body = this.form.getRawValue();
    this.http.post('http://127.0.0.1:8000/product/' + this.product_id, body, { headers }).subscribe((result: any) => {
      this.updateForm(result.data);
      this.message = result.message;
    });
  }

  deleteAd() {
    const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
    this.http.delete('http://127.0.0.1:8000/product/' + this.product_id, { headers }).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['/ads-list']);
    });
  }

}
