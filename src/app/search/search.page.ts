import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public categories = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get('http://127.0.0.1:8000/categories').subscribe((datas: any) => {
      this.categories = datas.data.data;
    });
  }

}
