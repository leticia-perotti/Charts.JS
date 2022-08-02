import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { InicialComponentComponent } from './inicial-component/inicial-component.component';

const routes: Routes = [
  { path: '', component: BemVindoComponent},
  { path: 'inicial', component: InicialComponentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
