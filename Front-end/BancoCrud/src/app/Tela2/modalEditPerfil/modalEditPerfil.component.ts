import { Component, Inject, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-modalEditPerfil',
  templateUrl: './modalEditPerfil.component.html',
  styleUrls: ['./modalEditPerfil.component.css']
})
export class ModalEditPerfilComponent implements OnInit {
  emailAccount:any;
  cpfAccount:any;

  constructor(
    public dialogRef: MatDialogRef<ModalEditPerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService: RotasService,
  ) {}

  ngOnInit(){
    //this.emailAccount = this.rotasService.requestDataProfile(this.data.email);
    this.emailAccount = "teste@TestBed.com";
    this.cpfAccount = "123456789";
  } 

  onSubmit(form: NgForm) {
    if(this.validFields){
      return;
    }

    if (form.value["newPaswwrod"] != form.value["repeatNewPassword"]){
      console.log("Senhas não coincidem!");
      return;
    }

    this.rotasService.editProfile(form.value);
  }

  validFields(form:NgForm){
    if(form.value["name"] == "") {
      return true;
    }else if(form.value["cpf"] == "") {
      return true;
    }else if(form.value["cep"] == ""){
      return true;
    }else if(form.value["email"] == ""){
      return true;
    }else if(form.value["age"] == ""){
      return true;
    }else if(form.value["actualPassword"] == ""){
      return true;
    }else if(form.value["newPassword"] == ""){
      return true;
    }else if(form.value["repeatNewPassword"] == ""){
      return true;
    }

    return false;
  }
}
