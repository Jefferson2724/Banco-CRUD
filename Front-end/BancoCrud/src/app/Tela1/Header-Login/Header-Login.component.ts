import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  dataLogin: DadosLogin = new DadosLogin();

  constructor(
    private contaService:ContaService,
    private rotasService:RotasService,
    private router:Router,
    private activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm){
    if(form.value["email"] == "" || form.value["senha"] == ""){
      return;
    }

    this.inserirDadosVar(form);
    let idUser = this.contaService.loginUser(this.dataLogin);

    console.log(form);
    this.navegarPerfil(idUser);
  }

  inserirDadosVar(form){
    this.dataLogin["email"] = form.value["email"];
    this.dataLogin["senha"] = form.value["senha"];
  }

  validateCheckBox(check){
    console.log(check)
    this.checkValue = check;
  }

  navegarPerfil(idUser){
    this.router.navigate([`/navegar/${idUser}`])
  }
}
