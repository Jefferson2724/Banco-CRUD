import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfirmarReq } from '../models/confirmarReq';
import { DadosLogin } from '../models/dadosLogin';
import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { CadastroConta } from '../models/cadastroConta';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly url = `${environment.ACC_API}`;
  token:String;

  constructor(
    private httpClient: HttpClient,
    private authetication: AuthenticationService
    ) { }

  loginUser(dadosUsuario:DadosLogin, token) {
    const header = {
		headers: new HttpHeaders({
				'observe': 'response',
				'Authorization': `${token}`
			})
    }

    return this.httpClient.post<any>(`${this.url}/login`, dadosUsuario, header).subscribe(
      response => {
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }

  registerUser(dadosUsuario:CadastroConta){
    let resUser: BehaviorSubject<CadastroConta> = new BehaviorSubject(undefined);

    this.httpClient.post<any>(`${this.url}/registerUser`, dadosUsuario, {observe: 'response'}).subscribe(
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