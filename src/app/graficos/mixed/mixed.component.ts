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
      console.log(dados)
      return dados
    })
    return []
  }

  buscaTemperatura(): any[]{
    this.service.temperaturaclimigrama().toPromise().then(res =>  {
      return res
    })
    return []
  }

  async listar(){

    this.dado1 = await this.service.precipitacaoclimograma().toPromise().then();
    this.dado2 = await this.service.temperaturaclimigrama().toPromise().then();

    var dadosPrecipitacao : any[] = []
    var dadosTemperatuta : any[] = []

    this.dado1.forEach(dado => {
      dadosPrecipitacao.push(dado.precipitacao)
    })
    this.dado2.forEach(dado => {
      dadosTemperatuta.push(dado.temperatura)
    })

    var myChart = new Chart("myChart", {
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets:[{
          type : 'bar',
          label: "Precipitação",
          data : dadosPrecipitacao,
          backgroundColor: "#F4BFBF8a"
        },
        {
          type: 'line',
          label: "Temperatura",
          data : dadosTemperatuta,
          backgroundColor: "#8793eb8a",
          borderColor: '#8793eb8a',
          order: 2,
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

}
