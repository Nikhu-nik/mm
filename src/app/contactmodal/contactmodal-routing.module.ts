import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactmodalPage } from './contactmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ContactmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactmodalPageRoutingModule {}
