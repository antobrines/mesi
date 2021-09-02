import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  userClaims: any;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  Logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
