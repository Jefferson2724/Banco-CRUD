import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { DadosLogin } from 'src/app/models/dadosLogin';

import { ContaService } from 'src/app/services/conta.service';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-Header-Login',
  templateUrl: './Header-Login.component.html',
  styleUrls: ['./Header-Login.component.css']
})
export class HeaderLoginComponent implements OnInit {
  checkValue:boolean;
  dadosInseridos = {
    "email": null,
    "senha": null
  }
  id:any;

  constructor(
    private contaService:ContaService,
    private rotasService:RotasService,
    private router:Router,
    ) { }

  ngOnInit() {
    this.id = this.rotasService.getContaTestId;
  }

  onSubmit(form: NgForm){
    if(form.value["email"] == "" || form.value["senha"] == ""){
      return;
    }

    this.inserirDadosVar(form);
    //this.contaService.loginUsuario(this.dadosUsuario);

    console.log(form);
    this.navegarPerfil();
  }

  inserirDadosVar(form){
    this.dadosInseridos["email"] = form.value["email"];
    this.dadosInseridos["senha"] = form.value["senha"];
  }

  validarCheckBox(check){
    console.log(check)
    this.checkValue = check;
  }

  navegarPerfil(){
    this.router.navigate([`/navegar/${this.id}`])
  }
}
