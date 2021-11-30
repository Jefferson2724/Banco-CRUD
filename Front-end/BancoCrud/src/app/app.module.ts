import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderLoginComponent } from './Tela1/Header-Login/Header-Login.component';
import { TermosComponent } from './Tela1/Termos/Termos.component';
import { CadastroComponent } from './Tela1/Cadastro/Cadastro.component';

import { ContaService } from './services/conta.service';
import { DadosLogin } from './models/dadosLogin';
import { ConfirmarReq } from './models/confirmarReq';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    TermosComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DadosLogin,
    ConfirmarReq,
    ContaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
