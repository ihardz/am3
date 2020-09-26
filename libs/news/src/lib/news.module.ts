import { NewsRoutingModule } from './news-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: [
    NewsRoutingModule
  ]
})
export class NewsModule {}
