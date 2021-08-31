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
  sum = 10;
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
        this.nextUrl=res.data.next_page_url;
        console.log(res);
        this.listArray = res.data.data;
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

    this.sum += 20;
    this.appendItems();
    
    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    this.sum += 20;
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
    console.log(this.nextUrl);
    
      if( _method === 'push'){
        this.http.get(this.nextUrl).subscribe((datas: any) => {
          datas.data.data.forEach(element => {
            this.listArray.push(element);
          });
          
      })
      
    }
  }
  
//   console.log(this.nextUrl);
//   this.http.get(this.nextUrl).pipe(map((res: any) => {console.log(res);
// this.nextUrl = res.data.data.next_page_url;
// this.listArray.push([i].join(res.data.data));

  }
