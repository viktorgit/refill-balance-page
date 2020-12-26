import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { RefillBalanceRoutingModule } from './refill-balance-routing.module';
import { RefillBalanceComponent } from './refill-balance.component';
import { RefillBalanceService } from './refill-balance.service';
import { SuccesOrErrorDialog } from './success-or-error-dialog/success-or-error-dialog.component';


@NgModule({
  declarations: [RefillBalanceComponent, SuccesOrErrorDialog],
  imports: [
    CommonModule,
    RefillBalanceRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [SuccesOrErrorDialog],
  providers: [RefillBalanceService]
})
export class RefillBalanceModule { }
