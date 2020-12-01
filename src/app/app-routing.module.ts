import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 //{ path: '', redirectTo: 'login', pathMatch: 'full' },
 {
  path: '',
  loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
},
  {
    path: 'admindashboard',
    loadChildren: () => import('./admindashboard/admindashboard.module').then( m => m.AdmindashboardPageModule)
  },
  
  {
    path: 'all-users',
    loadChildren: () => import('./all-users/all-users.module').then( m => m.AllUsersPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admindashboard',
    loadChildren: () => import('./admindashboard/admindashboard.module').then( m => m.AdmindashboardPageModule)
  },
  {
    path: 'mapmodel',
    loadChildren: () => import('./mapmodel/mapmodel.module').then( m => m.MapmodelPageModule)
  },
  {
    path: 'addpro',
    loadChildren: () => import('./addpro/addpro.module').then( m => m.AddproPageModule)
  },
  {
    path: 'offerings',
    loadChildren: () => import('./offerings/offerings.module').then( m => m.OfferingsPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'partner',
    loadChildren: () => import('./partner/partner.module').then( m => m.PartnerPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'postad',
    loadChildren: () => import('./postad/postad.module').then( m => m.PostadPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
   
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
 
  {
    path: 'prod-del',
    loadChildren: () => import('./prod-del/prod-del.module').then( m => m.ProdDelPageModule)
  },
  {
    path: 'enquire',
    loadChildren: () => import('./enquire/enquire.module').then( m => m.EnquirePageModule)
  },
  {
    path: 'langpop',
    loadChildren: () => import('./langpop/langpop.module').then( m => m.LangpopPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
