import { AccountRoutingModule } from './account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [
    AccountRoutingModule
  ]
})
export class AccountModule {}
