import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelProdPageRoutingModule } from './del-prod-routing.module';

import { DelProdPage } from './del-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelProdPageRoutingModule
  ],
  declarations: [DelProdPage]
})
export class DelProdPageModule {}
