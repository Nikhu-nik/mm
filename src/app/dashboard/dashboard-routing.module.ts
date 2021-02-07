import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardPage,
    children :[
      // {
      //   path: '',
      //   redirectTo: '/dashboard/home',
      //   pathMatch: 'full'
      // },
      {
        path: 'home',
        loadChildren: ()  => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'postad',
        loadChildren: ()  => import('../postad/postad.module').then( m => m.PostadPageModule)
      },
     
      {
        path: 'ads',
        loadChildren: ()  => import('../ads/ads.module').then( m => m.AdsPageModule)
      },
      {
        path: 'addpro',
        loadChildren: ()  => import('../addpro/addpro.module').then( m => m.AddproPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'test',
        loadChildren: () => import('../test/test.module').then( m => m.TestPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      
    
     
     
     
     

      
      
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
