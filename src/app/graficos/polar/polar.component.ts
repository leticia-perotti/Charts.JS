import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.scss']
})
export class PolarComponent implements OnInit {

  rows : any[] = []
  labels: any[] = []
  dado : any[] = []

  constructor(private service: GraficosService) {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.service.populacaopais().subscribe((data: any) => {
      this.rows = data

      this.extractLabel()
      this.extractDataset()

      var myChart = new Chart("myChart", {
        type: 'polarArea',
        data: {
          labels: this.labels,
          datasets:[{
            label: "Empresa 01",
            data : this.dado,
            backgroundColor:
            ['#ADD8E6a9',
             '#87CEEBa9',
             '#87CEFAa9',
             '#00BFFFa9',
             '#1E90FFa9',
             '#4169E1a9',
             '#6495EDa9',
             '#0000CDa9',
             '#00008Ba9',
             '#000080a9',
             '#191970a9'
            ],
            borderColor: 'transparent'

          }
        ]
        }
      });
    })
  }

  extractLabel(){
    this.rows.map((row:any) => {
      this.labels.push(row.ano)
    })
  }
  extractDataset(){
    this.rows.map((row:any) => {
      this.dado.push(row.quantidade)
    })
  }

}
