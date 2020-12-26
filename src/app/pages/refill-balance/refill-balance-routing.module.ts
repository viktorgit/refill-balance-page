import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefillBalanceComponent } from './refill-balance.component';

const routes: Routes = [
  { path: '', component: RefillBalanceComponent },
  { path: ':id', component: RefillBalanceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefillBalanceRoutingModule { }
