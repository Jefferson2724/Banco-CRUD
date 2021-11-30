import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfirmarReq } from '../models/confirmarReq';
import { DadosLogin } from '../models/dadosLogin';
import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly url = `${environment.ACC_API}`;

  constructor(
    private httpClient: HttpClient,
    private http: HttpClient) { }

  loginUsuario(dadosUsuario:DadosLogin) {
    let respostaLogin: BehaviorSubject<ConfirmarReq> = new BehaviorSubject(undefined);
    let params:HttpParams;

    this.httpClient.get<ConfirmarReq>(`${this.url}/login`, {observe: 'response', params: params}).subscribe(
      response => {
        respostaLogin.next(response.body);
      },
      error => {
        console.log("Houve algum erro");
        return;
      }
    );
  
    return respostaLogin.asObservable();
  }
}