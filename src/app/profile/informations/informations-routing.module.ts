import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationsPage } from './informations.page';

const routes: Routes = [
  {
    path: '',
    component: InformationsPage
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationsPageRoutingModule {}
