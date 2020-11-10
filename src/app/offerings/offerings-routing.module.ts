import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferingsPage } from './offerings.page';

const routes: Routes = [
  {
    path: '',
    component: OfferingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferingsPageRoutingModule {}
