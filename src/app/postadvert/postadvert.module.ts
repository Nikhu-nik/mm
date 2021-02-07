import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { TranslateModule} from "@ngx-translate/core";
import { IonicModule } from '@ionic/angular';

import { PostadvertPageRoutingModule } from './postadvert-routing.module';

import { PostadvertPage } from './postadvert.page';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PostadvertPageRoutingModule
  ],
  declarations: [PostadvertPage]
})
export class PostadvertPageModule {}
