import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  title: String;
  lista: String[] = ['maças', 'laranjas', 'peras'];
  flag: Boolean = false;

  constructor() {

    this.title = "Título da minha aplicação"
    
    setTimeout(() => {
      this.flag = true;
    }, 5000)

  }

  teste(){
    console.log("Realizando teste")
  }
}
