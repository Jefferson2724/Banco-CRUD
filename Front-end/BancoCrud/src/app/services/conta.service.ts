import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfirmarReq } from '../models/confirmarReq';
import { DadosLogin } from '../models/dadosLogin';
import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { CadastroConta } from '../models/cadastroConta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly url = `${environment.ACC_API}`;

  constructor(
    private httpClient: HttpClient,
    private http: HttpClient) { }

  loginUser(dadosUsuario:DadosLogin) {
    let resLogin: BehaviorSubject<ConfirmarReq> = new BehaviorSubject(undefined);

    this.httpClient.post<ConfirmarReq>(`${this.url}/login`, dadosUsuario, {observe: 'response'}).subscribe(
      response => {
        resLogin.next(response.body);
      },
      error => {
        console.log("Houve algum erro");
        return;
      }
    );
  
    return resLogin.asObservable();
  }

  registerUser(dadosUsuario:CadastroConta){
    let resUser: BehaviorSubject<CadastroConta> = new BehaviorSubject(undefined);

    this.httpClient.post<any>(`${this.url}/user`,dadosUsuario, {observe: 'response'}).subscribe(
      response => {
        resUser.next(response.body);
      },
      error => {        
        console.log("Houve algum erro");
        return;
      }
    );
    return resUser.asObservable();
  }

  conectado(){
    let resLogin: BehaviorSubject<ConfirmarReq> = new BehaviorSubject(undefined);

    this.httpClient.get<any>(`${this.url}/`, {observe: 'response'}).subscribe(
      response => {
        resLogin.next(response.body);
      },
      error => {
        console.log("Houve algum erro");
        return;
      }
    );
  
    return resLogin.asObservable();
  }
}