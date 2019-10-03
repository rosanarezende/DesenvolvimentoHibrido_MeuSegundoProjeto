import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titulo: String;
  numero: number = 0;

  constructor() { 
    this.titulo = "Página de Login"
    this.iniciarContagem();
  }

  iniciarContagem(){
    setInterval(()=>{
      this.numero += 1;
    }, 1000);
  }  

  ngOnInit() {
  }

  realizarLogin(){
    console.log("Realizando Login")
  }
}
