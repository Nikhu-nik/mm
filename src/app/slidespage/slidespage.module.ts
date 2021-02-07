import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidespagePageRoutingModule } from './slidespage-routing.module';

import { SlidespagePage } from './slidespage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidespagePageRoutingModule
  ],
  declarations: [SlidespagePage]
})
export class SlidespagePageModule {}
