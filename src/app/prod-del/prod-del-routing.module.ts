import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdDelPage } from './prod-del.page';

const routes: Routes = [
  {
    path: '',
    component: ProdDelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdDelPageRoutingModule {}
