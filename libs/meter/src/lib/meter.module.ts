import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetersComponent } from './pages';
import { MeterRoutingModule } from './meter-routing.module';
import { MeterReadingComponent } from './components';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MeterRoutingModule
  ],
  declarations: [
    MetersComponent,
    MeterReadingComponent
  ],
  exports: [
    MetersComponent
  ]
})
export class MeterModule {}
