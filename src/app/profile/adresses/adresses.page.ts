import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.page.html',
  styleUrls: ['./adresses.page.scss'],
})
export class AdressesPage implements OnInit {

  constructor(private _location: Location)  { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  AddAdress(rue, ville, codepostal,pays,adressetype){

  }
}
