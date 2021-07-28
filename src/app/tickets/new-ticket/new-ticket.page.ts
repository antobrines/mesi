import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.page.html',
  styleUrls: ['./new-ticket.page.scss'],
})
export class NewTicketPage implements OnInit {

  constructor(private _location: Location) 
  {}

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
