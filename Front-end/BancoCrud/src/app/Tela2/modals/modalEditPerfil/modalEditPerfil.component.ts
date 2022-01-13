import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalUpdate } from 'src/app/models/modal-update';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-modalEditPerfil',
  templateUrl: './modalEditPerfil.component.html',
  styleUrls: ['./modalEditPerfil.component.css']
})
export class ModalEditPerfilComponent implements OnInit {
  dadosCadastro: ModalUpdate = {} as ModalUpdate;

  @ViewChild('form', {static: true}) fieldForm: ElementRef;
  
  constructor(
    public dialogRef: MatDialogRef<ModalEditPerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService: RotasService,
  ) {}

  ngOnInit(){
    this.viewValuesProfile(this.fieldForm);
  } 

  onSubmit(form: NgForm) {
    if(this.validFields(form)){
      console.log("caindo aq")
      return;
    }

    this.setDataForm(form);

    this.rotasService.editProfile(this.dadosCadastro);
    this.dialogRef.close();
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
    }else if(form.value["password"] == ""){
      return true;
    }

    return false;
  }

  setDataForm(form){
    this.dadosCadastro["name"] = form.value["name"];
    this.dadosCadastro["email"] = form.value["email"];
    this.dadosCadastro["cep"] = form.value["cep"];
    this.dadosCadastro["cpf"] = form.value["cpf"];
    this.dadosCadastro["age"] = form.value["age"];
    this.dadosCadastro["password"] = form.value["password"];

    this.dadosCadastro["_id"] = this.data._id;
  }

  viewValuesProfile(form){

  }
}
