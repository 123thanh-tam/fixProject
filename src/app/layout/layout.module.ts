import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { MyHeaderComponent } from './my-header/my-header.component';

const components = [LayoutComponent, MyHeaderComponent, CarouselComponent];
@NgModule({
  imports: [CommonModule, RouterOutlet],
  declarations: [...components],
  exports: [LayoutComponent],
})
export class LayoutModule {}
