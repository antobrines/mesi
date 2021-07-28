import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-cat',
  templateUrl: './search-cat.page.html',
  styleUrls: ['./search-cat.page.scss'],
})
export class SearchCatPage implements OnInit {
  products = null;

  category_id: string;
  category_name: string;

  product_name: string;
  product_price_ht: string;

  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private _location: Location) {
    this.category_id = this.actRoute.snapshot.params.id;
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this.getProduct();
    this.getCategory();
  }

  getCategory(){
    this.http.get('http://127.0.0.1:8000/category/' + this.category_id).subscribe((datas: any) => {
      this.category_name = datas.data.name;
      console.log(this.category_id);
    });
  }

  getProduct() {
    this.http.get('http://127.0.0.1:8000/category/' + this.category_id + '/products').subscribe((datas: any) => {
      this.products = datas;
      console.log(this.products);
    });
  }

}
