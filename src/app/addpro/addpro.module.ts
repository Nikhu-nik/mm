import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproPageRoutingModule } from './addpro-routing.module';

import { AddproPage } from './addpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddproPageRoutingModule
  ],
  declarations: [AddproPage]
})
export class AddproPageModule {}
