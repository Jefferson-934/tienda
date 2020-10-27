import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaballerosPageRoutingModule } from './caballeros-routing.module';

import { CaballerosPage } from './caballeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaballerosPageRoutingModule
  ],
  declarations: [CaballerosPage]
})
export class CaballerosPageModule {}
