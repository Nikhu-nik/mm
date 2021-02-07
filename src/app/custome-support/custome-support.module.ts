import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomeSupportPageRoutingModule } from './custome-support-routing.module';

import { CustomeSupportPage } from './custome-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomeSupportPageRoutingModule
  ],
  declarations: [CustomeSupportPage]
})
export class CustomeSupportPageModule {}
