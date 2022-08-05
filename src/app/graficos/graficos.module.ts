import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterComponent } from './scatter/scatter.component';
import { PolarComponent } from './polar/polar.component';
import { RadarComponent } from './radar/radar.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MixedComponent } from './mixed/mixed.component';
import { ColunasComponent } from './colunas/colunas.component';
import { LinhasComponent } from './linhas/linhas.component';
import { BubbleComponent } from './bubble/bubble.component';
import { BarrasComponent } from './barras/barras.component';
import { AreaComponent } from './area/area.component';



@NgModule({
  declarations: [
    AreaComponent,
    BarrasComponent,
    BubbleComponent,
    ColunasComponent,
    LinhasComponent,
    MixedComponent,
    PizzaComponent,
    PolarComponent,
    RadarComponent,
    ScatterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AreaComponent,
    BarrasComponent,
    BubbleComponent,
    ColunasComponent,
    LinhasComponent,
    MixedComponent,
    PizzaComponent,
    PolarComponent,
    RadarComponent,
    ScatterComponent
  ]
})
export class GraficosModule { }
