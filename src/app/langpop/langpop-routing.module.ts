import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangpopPage } from './langpop.page';

const routes: Routes = [
  {
    path: '',
    component: LangpopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangpopPageRoutingModule {}
