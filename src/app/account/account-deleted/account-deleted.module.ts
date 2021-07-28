import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountDeletedPageRoutingModule } from './account-deleted-routing.module';

import { AccountDeletedPage } from './account-deleted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDeletedPageRoutingModule
  ],
  declarations: [AccountDeletedPage]
})
export class AccountDeletedPageModule {}
