import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  rows : any[] = []
  labels: any[] = []
  dados : any[] = []

  constructor(private service: GraficosService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.consultar()
  }

  consultar(){
    this.service.aplicacoes().subscribe((data:any) =>{
      this.rows = data

      this.extractDataset()

      var myChart = new Chart("myChart", {
        type: 'bubble',
        data: {
          datasets:[{
            label: "Aplicações",
            data : this.dados,
            backgroundColor: [
              "#FFD700",
              "#FFA500",
              "#B8860B"
            ],
            borderWidth: 0,
          }
        ]
        }
      });

    })
  }

  extractLabel(){
    this.rows.map((row:any) => {
      this.labels.push(row.estado)
    })
  }
  extractDataset(){
    this.rows.map((row:any) => {
      const object = {
        x: row.tecnica,
        y: row.valor,
        r: row.quantidade
      }
      this.dados.push(object)
    })
  }
}
