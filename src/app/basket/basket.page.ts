import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  basket = [];
  basketSold = [];
  total = 0;
  values = [];
  constructor(public basketS: BasketService, private _location: Location) { }

  ngOnInit() {
    this.updateData();
  }

  backClicked() {
    this._location.back();
  }


  updateData(){
    const basketAll= this.basketS.getBasket();
    this.basket = basketAll.basketElements;
    this.basketSold = basketAll.basketElementsSold;
  }
}
