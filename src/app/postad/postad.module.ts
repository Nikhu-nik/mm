import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostadPageRoutingModule } from './postad-routing.module';

import { PostadPage } from './postad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostadPageRoutingModule
  ],
  declarations: [PostadPage]
})
export class PostadPageModule {}
