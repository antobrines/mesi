import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'purchases',
    loadChildren: () => import('./purchases/purchases/purchases.module').then( m => m.PurchasesPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile/menu',
    loadChildren: () => import('./profile/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'profile/informations',
    loadChildren: () => import('./profile/informations/informations.module').then( m => m.InformationsPageModule)
  },
  {
    path: 'profile/change-password',
    loadChildren: () => import('./profile/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'profile/credit-card',
    loadChildren: () => import('./profile/credit-card/credit-card.module').then( m => m.CreditCardPageModule)
  },
  {
    path: 'profile/adresses',
    loadChildren: () => import('./profile/adresses/adresses.module').then( m => m.AdressesPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
