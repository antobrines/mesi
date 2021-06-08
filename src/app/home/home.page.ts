import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get('http://127.0.0.1:8000/products').subscribe((datas) => {
      this.products = datas.data.data;
    });
  }

}
