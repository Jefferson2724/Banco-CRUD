import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderLoginComponent } from './Tela1/Header-Login/Header-Login.component';
import { TermosComponent } from './Tela1/Termos/Termos.component';
import { CadastroComponent } from './Tela1/Cadastro/Cadastro.component';
import { PerfilComponent } from './Tela2/Perfil/Perfil.component';

import { ContaService } from './services/conta.service';
import { RotasService } from './services/rotas.service';
import { DadosLogin } from './models/dadosLogin';
import { ConfirmarReq } from './models/confirmarReq';
import { CadastroConta } from './models/cadastroConta';
import { DadosConta } from './models/DadosConta';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    TermosComponent,
    CadastroComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    DadosLogin,
    ConfirmarReq,
    ContaService,
    CadastroConta,
    RotasService,
    DadosConta,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
