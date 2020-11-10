import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapmodelPage } from './mapmodel.page';

const routes: Routes = [
  {
    path: '',
    component: MapmodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapmodelPageRoutingModule {}
