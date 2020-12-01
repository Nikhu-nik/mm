import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangpopPageRoutingModule } from './langpop-routing.module';

import { LangpopPage } from './langpop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangpopPageRoutingModule
  ],
  declarations: [LangpopPage]
})
export class LangpopPageModule {}
