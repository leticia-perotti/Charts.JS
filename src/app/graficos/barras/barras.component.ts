import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../graficos.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent implements OnInit {
  rows: any = []
  labels: any[] = []
  data2016: any[] = []
  data2018: any[] = []

  constructor(private service: GraficosService) {
    Chart.register(...registerables);
   }

  ngOnInit() {
    this.consultar()
  }

  consultar(){
    this.service.barras().subscribe((data: any) =>{
      this.rows = data

      this.extractLabel()
      this.extractDataset()

      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets:[{
            label: "2016",
            data : this.data2016,
            backgroundColor: "#F4BFBF"
          },
          {
            label: "2016",
            data : this.data2018,
            backgroundColor: "#8CC0DE"
          },
        ]
        }
      });
    })
  }
  extractLabel(){
    this.rows.map((row:any) => {
      this.labels.push(row.descricao)
    })
  }
  extractDataset(){
    this.rows.map((row:any) => {
      this.data2016.push(row.dado2016)
      this.data2018.push(row.dado2018)

    })
  }
}
