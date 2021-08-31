import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public categories = null;
  searchName: any;
  public listArrayitems = null;

  //Infinite scroll
  listArray : string[] = [];
  direction = "";
  nextUrl=null;

  constructor(private http: HttpClient) {
    this.appendItems();
  }

  ngOnInit() {
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
