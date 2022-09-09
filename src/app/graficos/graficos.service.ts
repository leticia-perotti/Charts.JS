import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  local = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  barras(){
    return this.http.get(this.local+"acessoaonivelsuperior")
  }

  precipitacao(){
    return this.http.get(this.local+"precipitacao")
  }

  producaoIndustrial(){
    return this.http.get(this.local+"producaoindustrial")
  }

  comparacaoempresas(){
    return this.http.get(this.local+"comparacaoempresas")
  }

  vendassorveteria(){
    return this.http.get(this.local+"vendassorveteria")
  }

  populacaopais(){
    return this.http.get(this.local+"populacaopais")
  }

  aplicacoes(){
    return this.http.get(this.local+"aplicacoes")
  }
}
