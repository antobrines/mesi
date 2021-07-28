import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  constructor(private _location: Location) 
  {}

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
