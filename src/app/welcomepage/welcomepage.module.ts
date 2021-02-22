import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomepagePageRoutingModule } from './welcomepage-routing.module';

import { WelcomepagePage } from './welcomepage.page';
import { LoginPage } from '../login/login.page';
import { SignupPage } from '../signup/signup.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    WelcomepagePageRoutingModule
  ],
  declarations: [WelcomepagePage,LoginPage,SignupPage]
})
export class WelcomepagePageModule {}
