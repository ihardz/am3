import { TabsLayoutComponent } from './tabs-layout/tabs-layout.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LayoutRoutingModule
  ],
  declarations: [
    TabsLayoutComponent
  ],
  exports: [
    LayoutRoutingModule
  ]
})
export class LayoutModule {}
