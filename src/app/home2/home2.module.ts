import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home2PageRoutingModule } from './home2-routing.module';

import { Home2Page } from './home2.page';
import { ProductSearchPage } from '../product-search/product-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home2PageRoutingModule
  ],
  declarations: [Home2Page,ProductSearchPage]
})
export class Home2PageModule {}
