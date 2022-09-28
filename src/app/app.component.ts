import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'charts';

  pesquisa: string = ''

  seleciona(){
    var filter = this.pesquisa.toUpperCase();
    var lis = document.getElementsByTagName('li')!!;
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName('name')[0].innerHTML!!;
        if (name.toUpperCase().indexOf(filter) == 0)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
  }
}
