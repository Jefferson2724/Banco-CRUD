import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroConta } from 'src/app/models/cadastroConta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Input() check:boolean;
  dadosCadastro:CadastroConta = {} as CadastroConta;

  constructor(
    private contaService:ContaService,
    private router: Router
    ) { }

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

    if (form.value["password"] != form.value["rep-password"]){
      console.log("Senhas não coincidem!");
      return;
    }

    this.inserirDadosCadastro(form);
    this.registerUser(form);

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
    this.dadosCadastro["name"] = form.value["name"];
    this.dadosCadastro["email"] = form.value["email"];
    this.dadosCadastro["cep"] = form.value["cep"];
    this.dadosCadastro["cpf"] = form.value["cpf"];
    this.dadosCadastro["age"] = form.value["age"];
    this.dadosCadastro["password"] = form.value["password"];
  }

  registerUser(form){
    this.contaService.registerUser(this.dadosCadastro).subscribe(
      response => {
        this.redirectProfile(response);
      },
    )
  }

  redirectProfile(dadosUsuario){
    if(dadosUsuario){
      this.router.navigate([`/navegar/${dadosUsuario._id}`])
    }
  }
}