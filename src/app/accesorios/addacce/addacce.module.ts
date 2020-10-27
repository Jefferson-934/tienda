import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddaccePageRoutingModule } from './addacce-routing.module';

import { AddaccePage } from './addacce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddaccePageRoutingModule
  ],
  declarations: [AddaccePage]
})
export class AddaccePageModule {}
