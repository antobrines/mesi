import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.page.html',
  styleUrls: ['./credit-card.page.scss'],
})
export class CreditCardPage implements OnInit {
  
  constructor(private _location: Location)  { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
