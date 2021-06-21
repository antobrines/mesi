import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AllModule } from 'src/app/all.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationPage } from 'src/app/registration/registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LoginPage, RegistrationPage]
})
export class LoginPageModule { }
