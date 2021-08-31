import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsListPageRoutingModule } from './ads-list-routing.module';

import { AdsListPage } from './ads-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsListPageRoutingModule
  ],
  declarations: [AdsListPage]
})
export class AdsListPageModule {}
