import { Component, OnInit } from '@angular/core';
import { DadosConta } from 'src/app/models/DadosConta';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profileName = this.dadosConta.nome;
  saldoAccount = this.dadosConta.saldo;

  constructor(private rotasService: RotasService,
    private dadosConta:DadosConta) { }

  ngOnInit() {
  }


}
