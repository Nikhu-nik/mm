import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSearchPagePageRoutingModule } from './product-search-page-routing.module';

import { ProductSearchPagePage } from './product-search-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSearchPagePageRoutingModule
  ],
  declarations: [ProductSearchPagePage]
})
export class ProductSearchPagePageModule {}
