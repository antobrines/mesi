import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },  {
    path: 'search-all',
    loadChildren: () => import('./search-all/search-all.module').then( m => m.SearchAllPageModule)
  },
  {
    path: 'search-cat',
    loadChildren: () => import('./search-cat/search-cat.module').then( m => m.SearchCatPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
