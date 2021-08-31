import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products = null;
  public categories = null;
  searchName: any;
  public items = null;

  constructor(private http: HttpClient,private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  // search products with the search name
  searchProductByName(key: any) {
    this.searchName  = key.target.value;
    if (this.searchName == '') {
      this.getProductByName("!=!?").subscribe( res => {
        this.items = res.data.data;
        console.log(this.searchName);
      });
    } else {
      this.getProductByName(this.searchName).subscribe( res => {
        this.items = res.data.data;
        console.log(this.searchName);
        console.log(this.items);
      });
    }
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

  getProductByName(name: string) {
    return this.http.get('http://127.0.0.1:8000/products/search/'+ name).pipe(map((res: any) => {
        return res;
    }));
}
  
}
