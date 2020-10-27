import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NinosPage } from './ninos.page';

const routes: Routes = [
  {
    path: '',
    component: NinosPage
  },
  {
    path: 'addninos',
    loadChildren: () => import('./addninos/addninos.module').then( m => m.AddninosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NinosPageRoutingModule {}
