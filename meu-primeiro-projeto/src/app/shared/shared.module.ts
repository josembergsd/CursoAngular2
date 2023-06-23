import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [HeaderComponent, InputComponent, OutputComponent],
  exports:[HeaderComponent, InputComponent, OutputComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
