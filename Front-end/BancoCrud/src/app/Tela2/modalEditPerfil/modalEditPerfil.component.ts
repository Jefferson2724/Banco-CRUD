import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-modalEditPerfil',
  templateUrl: './modalEditPerfil.component.html',
  styleUrls: ['./modalEditPerfil.component.css']
})
export class ModalEditPerfilComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalEditPerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService: RotasService,
  ) {}

  ngOnInit(){
    
  } 

  onSubmit(form: NgForm) {
    if(this.validFields){
      return;
    }

    if (form.value["newPaswwrod"] != form.value["repeatNewPassword"]){
      console.log("Senhas não coincidem!");
      return;
    }

    this.rotasService.requestDataProfile(form.value["cpf"]);
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
