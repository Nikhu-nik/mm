import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquirePageRoutingModule } from './enquire-routing.module';

import { EnquirePage } from './enquire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquirePageRoutingModule
  ],
  declarations: [EnquirePage]
})
export class EnquirePageModule {}
