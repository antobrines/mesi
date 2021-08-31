import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private _location: Location) 
  {}

  
  backClicked() {
    this._location.back();
  }

  ngOnInit() {
  }

}
