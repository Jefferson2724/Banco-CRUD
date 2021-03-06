import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderLoginComponent } from './Tela1/Header-Login/Header-Login.component';
import { TermosComponent } from './Tela1/Termos/Termos.component';
import { CadastroComponent } from './Tela1/Cadastro/Cadastro.component';
import { PerfilComponent } from './Tela2/Perfil/Perfil.component';
import { ModalEditPerfilComponent } from './Tela2/modals/modalEditPerfil/modalEditPerfil.component';
import { ModalDeleteProfileComponent } from './Tela2/modals/modal-delete-profile/modal-delete-profile.component';
import { TransferAreaComponent } from './Tela2/transferArea/transferArea.component';
import { ModalDepositBalanceComponent } from './Tela2/modals/modalDepositBalance/modalDepositBalance.component';
import { ModalTransferBalanceComponent } from './Tela2/modals/modalTransferBalance/modalTransferBalance.component';
import { ModalDrawBalanceComponent } from './Tela2/modals/modalDrawBalance/modalDrawBalance.component';

import { ContaService } from './services/conta.service';
import { RotasService } from './services/rotas.service';
import { DadosLogin } from './models/dadosLogin';
import { ConfirmarReq } from './models/confirmarReq';
import { CadastroConta } from './models/cadastroConta';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    TermosComponent,
    CadastroComponent,
    PerfilComponent,
    ModalEditPerfilComponent,
    ModalDeleteProfileComponent,
    TransferAreaComponent,
    ModalDepositBalanceComponent,
    ModalTransferBalanceComponent,
    ModalDrawBalanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatDialogModule 
    ],
  providers: [
    DadosLogin,
    ConfirmarReq,
    ContaService,
    RotasService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalEditPerfilComponent,
    ModalDeleteProfileComponent,
    ModalDepositBalanceComponent,
    ModalTransferBalanceComponent,
    ModalDrawBalanceComponent,

  ]
})
export class AppModule { }
