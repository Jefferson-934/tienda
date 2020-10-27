import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'caballeros',
        loadChildren: () => import('../caballeros/caballeros.module').then(m => m.CaballerosPageModule)
      },

      {
        path: 'ninos',
        loadChildren: () => import('../ninos/ninos.module').then(m => m.NinosPageModule)
      },
      {
        path: 'accesorios',
        loadChildren: () => import('../accesorios/accesorios.module').then(m => m.AccesoriosPageModule)
      },
     
      {
        path: 'add',
        loadChildren: () => import('../info/add/add.module').then(m => m.AddPageModule)
      },
      {
        path: 'addcaba',
        loadChildren: () => import('../caballeros/addcaba/addcaba.module').then(m => m.AddcabaPageModule)
      },
      {
        path: 'addninos',
        loadChildren: () => import('../ninos/addninos/addninos.module').then(m => m.AddninosPageModule)
      },
      {
        path: 'addacce',
        loadChildren: () => import('../accesorios/addacce/addacce.module').then(m => m.AddaccePageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
