import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { logging } from 'selenium-webdriver';
import { DadosLogin } from 'src/app/models/dadosLogin';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContaService } from 'src/app/services/conta.service';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-Header-Login',
  templateUrl: './Header-Login.component.html',
  styleUrls: ['./Header-Login.component.css']
})
export class HeaderLoginComponent implements OnInit {
  checkValue:boolean;
  dataLogin: DadosLogin = new DadosLogin();
  token: String;

  constructor(
    private contaService:ContaService,
    private rotasService:RotasService,
    private router:Router,
    private activeRoute: ActivatedRoute,
    private authentication: AuthenticationService
    ) { }

  ngOnInit() {
    this.authentication.deleteToken();
  }

  onSubmit(form: NgForm){
    if(form.value["email"] == "" || form.value["senha"] == ""){
      return;
    }

    this.inserirDadosVar(form);
    this.authorizationLogin();
  }

  inserirDadosVar(form){
    this.dataLogin["email"] = form.value["email"];
    this.dataLogin["senha"] = form.value["senha"];
  }

  validateCheckBox(check){
    this.checkValue = check;
  }

  navegarPerfil(idUser){
    this.router.navigate([`/navegar/${idUser}`])
  }

  authorizationLogin() {
    this.authentication.authenticationProfile(this.dataLogin).subscribe(
      response => {
        if(response){
          this.dataLogin["_id"] = response.usuario['_id'];
          this.token = response.token;
          this.login();
        }
      }
    )
  }

  login(){
    if(this.token){
      this.contaService.loginUser(this.dataLogin, this.token);
      this.navegarPerfil(this.dataLogin['_id']);
    }
  }
}
