import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/operators-list/operators-list.module').then(m => m.OperatorsListModule) },
  { path: 'balance', loadChildren: () => import('./pages/refill-balance/refill-balance.module').then(m => m.RefillBalanceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
