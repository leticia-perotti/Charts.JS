import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.scss']
})
export class LinhasComponent implements OnInit {
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

  listar(){
    this.service.precipitacao().subscribe((data: any) => {
      this.rows = data

      this.extractLabel()
      this.extractDataset()

      var myChart = new Chart("myChart", {
        type: 'line',
        data: {
          labels: this.labels,
          datasets:[{
            label: "2016",
            data : this.dado1,
            fill: true,
            backgroundColor: "#F4BFBF8a"
          },
          {
            label: "2016",
            data : this.dado2,
            fill: true,
            backgroundColor: "#8CC0DE8a"
          },
        ]
        }
      });
    })
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

