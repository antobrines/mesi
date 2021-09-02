import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  constructor(private _location: Location)  { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
  
  AddCard(cardnumber, expirationdate, codecvv){
    const body = {
      
    }
}
}