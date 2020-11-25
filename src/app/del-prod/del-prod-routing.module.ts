import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelProdPage } from './del-prod.page';

const routes: Routes = [
  {
    path: '',
    component: DelProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelProdPageRoutingModule {}
