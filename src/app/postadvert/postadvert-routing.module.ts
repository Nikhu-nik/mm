import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostadvertPage } from './postadvert.page';

const routes: Routes = [
  {
    path: '',
    component: PostadvertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostadvertPageRoutingModule {}
