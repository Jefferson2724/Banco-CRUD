import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DadosLogin } from 'src/app/models/dadosLogin';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-Header-Login',
  templateUrl: './Header-Login.component.html',
  styleUrls: ['./Header-Login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  dadosUsuario: DadosLogin;

  constructor(
    private contaService:ContaService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.value["email"] == "" || form.value["senha"] == ""){
      return;
    }

    this.inserirDadosVar(form)
    this.contaService.loginUsuario(this.dadosUsuario);

    console.log(form);
  }

  inserirDadosVar(form){
    this.dadosUsuario["email"] = form.value["email"];
    this.dadosUsuario["senha"] = form.value["senha"];
  }
}
