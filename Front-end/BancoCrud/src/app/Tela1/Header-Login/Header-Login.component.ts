import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DadosLogin } from 'src/app/models/dadosLogin';

@Component({
  selector: 'app-Header-Login',
  templateUrl: './Header-Login.component.html',
  styleUrls: ['./Header-Login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  dadosUsuario: DadosLogin;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.value["email"] == "" || form.value["senha"] == ""){
      return;
    }

    this.inserirDadosVar(form)

    console.log(form);
  }

  inserirDadosVar(form){
    this.dadosUsuario["email"] = form.value["email"];
    this.dadosUsuario["senha"] = form.value["senha"];
  }
}
