import { Component, OnInit } from '@angular/core';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent implements OnInit {

  constructor(private service: GraficosService) { }

  ngOnInit() {
    this.consultar()
  }

  consultar(){
    this.service.barras().subscribe((data: any) =>{
      console.log(data);
    })
  }

}
