import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public product = null;
  public images = null;

  product_id: string;
  product_name: string;
  product_price_ht: string;
  product_description: string;

  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private _location: Location, public basketS: BasketService) {
    this.product_id = this.actRoute.snapshot.params.id;
  }
  
  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this.getProduct();
    this.getImages();
  }

  getProduct() {
    this.http.get('http://127.0.0.1:8000/product/' + this.product_id).subscribe((datas: any) => {
      this.product_name = datas.data.name;
      this.product_price_ht = datas.data.price_ht;
      this.product_description = datas.data.description;
      console.log(this.product_id);
      console.log(this.product);
    });
  }

  getImages() {
    this.http.get('http://127.0.0.1:8000/product/' + this.product_id + '/image').subscribe((datas: any) => {
      this.images = datas.data.data;
      console.log(this.images);
    });
  }


}
