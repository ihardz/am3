import { TabsLayoutComponent } from './tabs-layout/tabs-layout.component';
import { PATHS } from '@am3/shared';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const REDIECT_ROUTE = {
  path: '',
  redirectTo: PATHS.NEWS,
  pathMatch: 'full'
}

const ROUTES: Routes = [  
  REDIECT_ROUTE,
  { path: PATHS.NEWS, loadChildren: ()=>import('@am3/news').then(x=>x.NewsModule) },
  { path: PATHS.ACCOUNT, loadChildren: ()=>import('@am3/account').then(x=>x.AccountModule) },
  { path: PATHS.METERS, loadChildren: ()=>import('@am3/meter').then(x=>x.MeterModule) },
];


const ROOT: Routes = [
  { 
    path: '',
    component: TabsLayoutComponent,
    children: ROUTES
  },
  REDIECT_ROUTE
]

@NgModule({
  imports: [RouterModule.forChild(ROOT)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}