import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCatPageRoutingModule } from './search-cat-routing.module';

import { SearchCatPage } from './search-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCatPageRoutingModule
  ],
  declarations: [SearchCatPage]
})
export class SearchCatPageModule {}
