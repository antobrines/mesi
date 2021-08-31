import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.page.html',
  styleUrls: ['./ads-list.page.scss'],
})
export class AdsListPage implements OnInit {
  public products = null;
  
  constructor(private http: HttpClient,private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    const token = localStorage.getItem('token');
    const header = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };
    const requestOptions = {
      headers: new HttpHeaders(header),
    };

    this.http.get('http://mesiback/userads', requestOptions).subscribe(
      (data:any) => {
        this.products = data.data;
      }
    );
  }

}
