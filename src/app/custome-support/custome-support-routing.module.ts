import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomeSupportPage } from './custome-support.page';

const routes: Routes = [
  {
    path: '',
    component: CustomeSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomeSupportPageRoutingModule {}
