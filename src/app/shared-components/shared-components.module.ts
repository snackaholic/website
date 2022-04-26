import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutmeComponent
  ],
  exports: [
    HeaderComponent,
    AboutmeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
