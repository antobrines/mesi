import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAdPageRoutingModule } from './new-ad-routing.module';

import { NewAdPage } from './new-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewAdPage]
})
export class NewAdPageModule {}
