import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  local = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  barras(){
    return this.http.get(this.local+"/clientes")
  }
}
