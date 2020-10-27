import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaballerosPage } from './caballeros.page';

const routes: Routes = [
  {
    path: '',
    component: CaballerosPage
  },
  {
    path: 'addcaba',
    loadChildren: () => import('./addcaba/addcaba.module').then( m => m.AddcabaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaballerosPageRoutingModule {}
