import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MetersComponent } from './pages';

const ROUTES: Routes = [
    { path: '', component: MetersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class MeterRoutingModule {

}