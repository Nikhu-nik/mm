import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcomepage',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
{
  path: 'welcomepage',
  loadChildren: () => import('./welcomepage/welcomepage.module').then( m => m.WelcomepagePageModule)
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
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'product-search',
    loadChildren: () => import('./product-search/product-search.module').then( m => m.ProductSearchPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },

  {
    path: 'postadvert',
    loadChildren: () => import('./postadvert/postadvert.module').then( m => m.PostadvertPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'custome-support',
    loadChildren: () => import('./custome-support/custome-support.module').then( m => m.CustomeSupportPageModule)
  },
  {
    path: 'contactmodal',
    loadChildren: () => import('./contactmodal/contactmodal.module').then( m => m.ContactmodalPageModule)
  },
 

 
  
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup-success',
    loadChildren: () => import('./signup-success/signup-success.module').then( m => m.SignupSuccessPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'slidespage',
    loadChildren: () => import('./slidespage/slidespage.module').then( m => m.SlidespagePageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
