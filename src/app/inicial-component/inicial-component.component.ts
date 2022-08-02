import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicial-component',
  templateUrl: './inicial-component.component.html',
  styleUrls: ['./inicial-component.component.scss']
})
export class InicialComponentComponent implements OnInit {

  pesquisa: any

  constructor() { }

  ngOnInit(): void {
  }

}
