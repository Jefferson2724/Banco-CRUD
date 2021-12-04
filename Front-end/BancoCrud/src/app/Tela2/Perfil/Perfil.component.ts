import { Component, OnInit } from '@angular/core';
import { DadosConta } from 'src/app/models/DadosConta';
import { RotasService } from 'src/app/services/rotas.service';
import { MatDialog } from '@angular/material';
import { ModalEditPerfilComponent } from '../modalEditPerfil/modalEditPerfil.component';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profileName = this.dadosConta.nome;
  saldoAccount = this.dadosConta.saldo;
  animal:String;


  constructor(
    private rotasService: RotasService,
    private dadosConta:DadosConta,
    private dialog: MatDialog,
    ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalEditPerfilComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}