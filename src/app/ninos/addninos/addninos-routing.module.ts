import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddninosPage } from './addninos.page';

const routes: Routes = [
  {
    path: '',
    component: AddninosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddninosPageRoutingModule {}
