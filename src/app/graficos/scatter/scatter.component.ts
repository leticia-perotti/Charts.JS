import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit {

  rows : any[] = []
  labels : any[] = []
  temperatura : any[] = []
  vendas : any[] = []
  constructor(private service: GraficosService) {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    this.pesquisa()
  }

  pesquisa(){
    this.service.vendassorveteria().subscribe((data: any) => {
      this.rows = data
      console.log(this.rows)

      this.extractLabel()

      var myChart = new Chart("myChart", {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Ponto  venda/temperatura  ',
            data: this.extractDataset(),
            backgroundColor: '#FF0080',
            fill: false,
            borderColor: '#FF0080'
          }]
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            }
          }
        }
      });
    })
  }

  extractLabel(){
    this.rows.map((row:any) => {
      this.temperatura.push(row.temperatura)
    })
  }
  extractDataset(){
    var data: any = []
    var i = 0
    for(i = 0; i< this.rows.length; i++){
      data.push({
        "x" : this.rows[i].temperatura,
        "y": this.rows[i].vendas
      })
    }
    console.log(data)
    return data
  }

}
