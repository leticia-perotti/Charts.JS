import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.scss']
})
export class MixedComponent implements OnInit {

  rows : any[] = []
  labels: any[] = []
  dado1: any[] = []
  dado2: any[] = []

  constructor(private service: GraficosService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.listar()
  }

  buscaPrecipitacao(): any[]{
    this.service.precipitacaoclimograma().subscribe((dados: any) =>{
      return dados
    })
    return []
  }

  buscaTemperatura(){
    this.service.temperaturaclimigrama().subscribe((dados: any) =>{
      return dados
    })
    return []
  }

  async listar(){

    this.dado1 = await this.buscaPrecipitacao();
    this.dado2 = await this.buscaTemperatura();
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets:[{
          type : 'bar',
          label: "Precipitação",
          data : this.buscaPrecipitacao(),
          backgroundColor: "#F4BFBF8a"
        },
        {
          type: 'line',
          label: "Temperatura",
          data : this.buscaTemperatura(),
          fill: true,
          backgroundColor: "#8CC0DE8a"
        },

      ],

      }
    });
  }

  extractLabel(){
    this.rows.map((row:any) => {
      this.labels.push(row.mes)
    })
  }
  extractDataset(){
    this.rows.map((row:any) => {
      this.dado1.push(row.dado1)
      this.dado2.push(row.dado2)

    })
  }

}
