import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';
import { BarrasComponent } from './graficos/barras/barras.component';
import { LinhasComponent } from './graficos/linhas/linhas.component';
import { PizzaComponent } from './graficos/pizza/pizza.component';
import { BubbleComponent } from './graficos/bubble/bubble.component';
import { MixedComponent } from './graficos/mixed/mixed.component';
import { PolarComponent } from './graficos/polar/polar.component';
import { RadarComponent } from './graficos/radar/radar.component';
import { ScatterComponent } from './graficos/scatter/scatter.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
