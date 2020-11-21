import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { ModulrutasComponent } from './modulrutas/modulrutas.component';

@NgModule({
  declarations: [ModulrutasComponent],
  imports: [
    CommonModule,
    RutasRoutingModule
  ]
})
export class RutasModule { }
