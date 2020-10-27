import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'caballeros',
    loadChildren: () => import('./caballeros/caballeros.module').then( m => m.CaballerosPageModule)
  },
  {
    path: 'ninos',
    loadChildren: () => import('./ninos/ninos.module').then( m => m.NinosPageModule)
  },
  {
    path: 'accesorios',
    loadChildren: () => import('./accesorios/accesorios.module').then( m => m.AccesoriosPageModule)
  },
 
  {
    path: 'add',
    loadChildren: () => import('./info/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'addcaba',
    loadChildren: () => import('./caballeros/addcaba/addcaba.module').then( m => m.AddcabaPageModule)
  },
  {
    path: 'addninos',
    loadChildren: () => import('./ninos/addninos/addninos.module').then( m => m.AddninosPageModule)
  },
  {
    path: 'addacce',
    loadChildren: () => import('./accesorios/addacce/addacce.module').then( m => m.AddaccePageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
