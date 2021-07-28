import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountDeletedPage } from './account-deleted.page';

const routes: Routes = [
  {
    path: '',
    component: AccountDeletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDeletedPageRoutingModule {}
