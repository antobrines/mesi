import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  getBasket(){
    const basket = JSON.parse(localStorage.getItem('basket'));
    let basketElements  = [];
    let basketElementsSold = [];
    basket.forEach(element => {
      this.http.get('http://127.0.0.1:8000/product/' + element.id ).subscribe((datas: any) => {
        let data = datas.data;
        if(data.stock > 0 )
          basketElements.push(data);
        else 
        basketElementsSold.push(data);
      });
    });
    const basketAll = {
      'basketElements': basketElements,
      'basketElementsSold': basketElementsSold
    };
    return basketAll;
  }

  addProductBasket(idProduct){
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    const newProduct = {
      id: idProduct
    };

    basket.push(newProduct);
    basket = Array.from(new Set(basket.map(a => a.id)))
    .map(idProduct => {
      return basket.find(a => a.id === idProduct)
    })
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  removeProductBasket(idProduct){
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    basket = basket.filter(x => {
      return x.id != idProduct;
    });

    localStorage.setItem('basket', JSON.stringify(basket));
  }

  testIfStock(idProduct, stock){
    this.http.get('http://127.0.0.1:8000/product/' + idProduct ).subscribe((datas: any) => {
        let data = datas.data;
        if(data.stock <= stock )
          return true;
        else 
          return false;
    });
    
  }
}
