import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcabaPageRoutingModule } from './addcaba-routing.module';

import { AddcabaPage } from './addcaba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcabaPageRoutingModule
  ],
  declarations: [AddcabaPage]
})
export class AddcabaPageModule {}
