import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSearchPagePage } from './product-search-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSearchPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSearchPagePageRoutingModule {}
