import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

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
    this.service.producaoIndustrial().subscribe((data:any) =>{
      this.rows = data

      this.extractLabel()
      this.extractDataset()

      var myChart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: this.labels,
          datasets:[{
            label: "2016",
            data : this.dados,
            backgroundColor: [
              "#FFE4E1",
              "#FFFFE0",
              "#ADD8E6",
              "#E6E6FA",
              "#F0FFF0",
              "#EEE8AA",
              "#FFDAB9",
              "#F0F8FF"
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
      this.dados.push(row.dado)
    })
  }

}
