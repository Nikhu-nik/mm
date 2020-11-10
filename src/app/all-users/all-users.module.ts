import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { IonicModule } from '@ionic/angular';

import { AllUsersPageRoutingModule } from './all-users-routing.module';

import { AllUsersPage } from './all-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    AllUsersPageRoutingModule
  ],
  declarations: [AllUsersPage]
})
export class AllUsersPageModule {}
