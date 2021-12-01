import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CadastroConta } from 'src/app/models/cadastroConta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Input() check:boolean;


  constructor(
    private contaService:ContaService,
    private dadosCadastro:CadastroConta) { }

  ngOnInit() {
    
  }

  onSubmit(form:NgForm) {
    if(this.check != true){
      console.log("Confirme o checkBox dos Termos");
      return;
    }

    if(this.validarCampos(form)){
      console.log("Preencha todos os campos !");
      return;
    }

    if (form.value["senha"] != form.value["rep-senha"]){
      console.log("Senhas não coincidem!");
      return;
    }

    this.inserirDadosCadastro(form);

  }

  validarCampos(form:NgForm){

    if(form.value["nome"] == "") {
      return true;
    }else if(form.value["email"] == "") {
      return true;
    }else if(form.value["cep"] == ""){
      return true;
    }else if(form.value["cpf"] == ""){
      return true;
    }else if(form.value["idade"] == ""){
      return true;
    }else if(form.value["senha"] == ""){
      return true;
    }else if(form.value["rep-senha"] == ""){
      return true;
    }

    return false;
  }

  inserirDadosCadastro(form){
    this.dadosCadastro["nome"] = form.value["nome"];
    this.dadosCadastro["email"] = form.value["email"];
    this.dadosCadastro["cep"] = form.value["cep"];
    this.dadosCadastro["cpf"] = form.value["cpf"];
    this.dadosCadastro["idade"] = form.value["idade"];
    this.dadosCadastro["senha"] = form.value["senha"];
  }
}