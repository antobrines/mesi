import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products = null;
  public categories = null;

  //à coller dans la page search-cat


   //à coller dans la page search-cat
  constructor(private http: HttpClient,private actRoute: ActivatedRoute) {
    
  
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.http.get('http://127.0.0.1:8000/products').subscribe((datas: any) => {
      this.products = datas.data.data;
    });
  }

  getCategories() {
    this.http.get('http://127.0.0.1:8000/categories').subscribe((datas: any) => {
      this.categories = datas.data.data;
    });
  }

  

}
