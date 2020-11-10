import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapmodelPageRoutingModule } from './mapmodel-routing.module';

import { MapmodelPage } from './mapmodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapmodelPageRoutingModule
  ],
  declarations: [MapmodelPage]
})
export class MapmodelPageModule {}
