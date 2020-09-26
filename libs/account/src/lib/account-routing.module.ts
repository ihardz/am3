import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountComponent } from './pages';

const ROUTES: Routes = [
  { path: '', component: AccountComponent }
];

;@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
