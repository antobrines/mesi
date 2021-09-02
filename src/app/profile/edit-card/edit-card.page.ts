import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.page.html',
  styleUrls: ['./edit-card.page.scss'],
})
export class EditCardPage implements OnInit {

  constructor(private _location: Location)  { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
    
  EditCard(cardnumber, expirationdate, codecvv){
    const body = {
      
    }
}

}
