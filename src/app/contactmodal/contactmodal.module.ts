import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactmodalPageRoutingModule } from './contactmodal-routing.module';

import { ContactmodalPage } from './contactmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactmodalPageRoutingModule
  ],
  declarations: [ContactmodalPage]
})
export class ContactmodalPageModule {}
