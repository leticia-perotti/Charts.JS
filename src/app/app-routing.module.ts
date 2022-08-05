import { PolarComponent } from './graficos/polar/polar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { AreaComponent } from './graficos/area/area.component';
import { BarrasComponent } from './graficos/barras/barras.component';
import { BubbleComponent } from './graficos/bubble/bubble.component';
import { ColunasComponent } from './graficos/colunas/colunas.component';
import { LinhasComponent } from './graficos/linhas/linhas.component';
import { MixedComponent } from './graficos/mixed/mixed.component';
import { PizzaComponent } from './graficos/pizza/pizza.component';
import { RadarComponent } from './graficos/radar/radar.component';
import { ScatterComponent } from './graficos/scatter/scatter.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'bem-vindo',  component: BemVindoComponent},
  { path: 'inicial/barras', component: BarrasComponent},
  { path: 'inicial/linhas', component: LinhasComponent},
  { path: 'inicial/pizza', component: PizzaComponent},
  { path: 'inicial/colunas', component: ColunasComponent},
  { path: 'inicial/areas', component: AreaComponent},
  { path: 'inicial/bubble', component: BubbleComponent},
  { path: 'inicial/mixed', component: MixedComponent},
  { path: 'inicial/polar', component: PolarComponent},
  { path: 'inicial/radar', component: RadarComponent},
  { path: 'inicial/scatter', component: ScatterComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
