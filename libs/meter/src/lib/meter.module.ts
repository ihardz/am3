import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetersComponent } from './pages';
import { MeterRoutingModule } from './meter-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MeterRoutingModule
  ],
  declarations: [
    MetersComponent
  ],
  exports: [
    MetersComponent
  ]
})
export class MeterModule {}
