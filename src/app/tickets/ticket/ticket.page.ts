import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  constructor(private _location: Location)  { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
