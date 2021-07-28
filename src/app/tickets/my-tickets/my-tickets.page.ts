import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.page.html',
  styleUrls: ['./my-tickets.page.scss'],
})
export class MyTicketsPage implements OnInit {
  constructor(private _location: Location) 
  {}

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
