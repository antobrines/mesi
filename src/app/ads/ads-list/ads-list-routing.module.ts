import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsListPage } from './ads-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsListPageRoutingModule {}
