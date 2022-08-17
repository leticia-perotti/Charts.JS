import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  rows : any[] = []
  labels: any[] = []
  dados01 : any[] = []
  dados02 : any[] = []

  constructor(private service: GraficosService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.service.comparacaoempresas().subscribe((data: any) => {
      this.rows = data

      this.extractLabel()
      this.extractDataset()

      var myChart = new Chart("myChart", {
        type: 'radar',
        data: {
          labels: this.labels,
          datasets:[{
            label: "Empresa 01",
            data : this.dados01,
            backgroundColor: '#8CC0DE1a',
            borderColor: '#8CC0DE8a',
            pointBackgroundColor: '#8CC0DE8a',

          },
          {
            label: "Empresa 02",
            data : this.dados02,
            backgroundColor: '#e0b0ff1a',
            borderColor: '#e0b0ffaa',
            pointBackgroundColor: '#e0b0ffaa',
          }
        ]
        }
      });
    })
  }

  extractLabel(){
    this.rows.map((row:any) => {
      this.labels.push(row.dado)
    })
  }
  extractDataset(){
    this.rows.map((row:any) => {
      this.dados01.push(row.empresa1)
      this.dados02.push(row.empresa2  )
    })
  }
}
