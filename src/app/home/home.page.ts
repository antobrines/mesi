import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products = null;
  public categories = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.http.get('http://mesiback/products').subscribe((datas: any) => {
      this.products = datas.data.data;
    });
  }

  getCategories() {
    this.http.get('http://mesiback/categories').subscribe((datas: any) => {
      this.categories = datas.data.data;
    });
  }

}
