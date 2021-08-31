import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

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
  constructor(public basketS: BasketService) { }

  ngOnInit() {
    this.updateData();
  }

  updateData(){
    const basketAll= this.basketS.getBasket();
    this.basket = basketAll.basketElements;
    this.basketSold = basketAll.basketElementsSold;
  }
}
