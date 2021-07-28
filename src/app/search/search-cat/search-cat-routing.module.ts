import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCatPage } from './search-cat.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCatPageRoutingModule {}
