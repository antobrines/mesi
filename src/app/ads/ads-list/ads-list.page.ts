import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.page.html',
  styleUrls: ['./ads-list.page.scss'],
})
export class AdsListPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
