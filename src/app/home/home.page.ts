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

    //Infinite scroll
    listArray : string[] = [];
    direction = "";
    nextUrl=null;

  constructor(private http: HttpClient,private actRoute: ActivatedRoute) {
    this.appendItems();
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
        this.listArray = res.data.data;
      });
    } else {
      this.getProductByName(this.searchName).subscribe( res => {
        this.listArray = res.data.data;
        this.nextUrl=res.data.next_page_url;
        console.log(this.nextUrl);
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


  //infinite scroll
  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    
    this.appendItems();
    
    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    
    this.prependItems();

    this.direction = "scroll up";
  }

  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
      if( _method === 'push'){
        this.http.get(this.nextUrl).subscribe((datas: any) => {
          this.nextUrl = datas.data.next_page_url;
          datas.data.data.forEach(element => {
            this.listArray.push(element);
          });
      })
    }
  }
  
}
