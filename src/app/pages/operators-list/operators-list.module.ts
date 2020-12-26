import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { OperatorsListRoutingModule } from './operators-list-routing.module';
import { OperatorsListComponent } from './operators-list.component';


@NgModule({
  declarations: [OperatorsListComponent],
  imports: [
    CommonModule,
    OperatorsListRoutingModule,
    MatButtonModule
  ]
})
export class OperatorsListModule { }
