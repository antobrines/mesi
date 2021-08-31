import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  constructor(private _location: Location) 
  {}

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
