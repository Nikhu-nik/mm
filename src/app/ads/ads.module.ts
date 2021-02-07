import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule} from "@ngx-translate/core";
import { IonicModule } from '@ionic/angular';

import { AdsPageRoutingModule } from './ads-routing.module';

import { AdsPage } from './ads.page';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    IonicModule,
    AdsPageRoutingModule
  ],
  declarations: [AdsPage]
})
export class AdsPageModule {}
