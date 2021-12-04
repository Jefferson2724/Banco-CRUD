import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosConta } from '../models/DadosConta';

@Injectable({
  providedIn: 'root'
})
export class RotasService {
  private readonly url = `${environment.ACC_API}`;

  constructor(
    private dadosConta:DadosConta,
    private httpClient: HttpClient
    ) { }

  getContaTest() {
    return this.dadosConta;
  }

  getContaTestId(){
    return this.dadosConta.id;
  }

  requestDataProfile(cpf) {
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let params:HttpParams;

    this.httpClient.get<any>(`${this.url}/getDataProfile`, {observe: 'response', params: params}).subscribe(
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
