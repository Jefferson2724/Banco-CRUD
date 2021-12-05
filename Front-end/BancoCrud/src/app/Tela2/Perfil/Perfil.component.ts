import { Component, OnInit } from '@angular/core';
import { DadosConta } from 'src/app/models/DadosConta';
import { RotasService } from 'src/app/services/rotas.service';
import { MatDialog } from '@angular/material';
import { ModalEditPerfilComponent } from '../modalEditPerfil/modalEditPerfil.component';
import { ModalDeleteProfileComponent } from '../modal-delete-profile/modal-delete-profile.component';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profileName = this.dadosConta.nome;
  saldoAccount = this.dadosConta.saldo;
  emailAccount = this.dadosConta.email;
  animal:String;


  constructor(
    private rotasService: RotasService,
    private dadosConta:DadosConta,
    private dialog: MatDialog,
    ) { }

  ngOnInit() {
  }

  openDialogEditProfile() {
    const dialogRef = this.dialog.open(ModalEditPerfilComponent, {
      width: '600px',
      data: {
        email: this.emailAccount
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  openDialogDeleteProfile() {
    const dialogRef = this.dialog.open(ModalDeleteProfileComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}