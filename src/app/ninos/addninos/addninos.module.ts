import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddninosPageRoutingModule } from './addninos-routing.module';

import { AddninosPage } from './addninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddninosPageRoutingModule
  ],
  declarations: [AddninosPage]
})
export class AddninosPageModule {}
