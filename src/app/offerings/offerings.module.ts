import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferingsPageRoutingModule } from './offerings-routing.module';

import { OfferingsPage } from './offerings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferingsPageRoutingModule
  ],
  declarations: [OfferingsPage]
})
export class OfferingsPageModule {}
