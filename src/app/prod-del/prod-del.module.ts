import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { IonicModule } from '@ionic/angular';

import { ProdDelPageRoutingModule } from './prod-del-routing.module';

import { ProdDelPage } from './prod-del.page';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    NgxDatatableModule,
    FormsModule,
    IonicModule,
    ProdDelPageRoutingModule
  ],
  declarations: [ProdDelPage]
})
export class ProdDelPageModule {}
