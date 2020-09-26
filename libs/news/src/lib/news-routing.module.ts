import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsComponent } from './pages';

const ROUTES: Routes = [
    { path: '', component: NewsComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NewsRoutingModule {

}