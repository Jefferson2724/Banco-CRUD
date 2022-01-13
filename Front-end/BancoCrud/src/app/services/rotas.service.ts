import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModalsActions } from '../models/modalsActions';
import { ModalTransfer } from '../models/modalTransfer';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RotasService {
  private readonly url = `${environment.ACC_API}`;
  dataUsers;

  constructor(
    private httpClient: HttpClient,
    private authentication: AuthenticationService
    ) { }


  getDataUser(id){
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);

    this.httpClient.get<any>(`${this.url}/user/${id}`, {observe: 'response'}).subscribe(
      response => {
        this.dataUsers = response.body;

        respostaLogin.next(this.dataUsers);
      },
      error => {
        console.log("Houve algum erro");
        return;
      }
    );

    return respostaLogin.asObservable();
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

  getAllUsers() {
    return this.httpClient.get<any>(`${this.url}/user`);
  
  }

  editProfile(form){
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let token = this.authentication.getToken();
    const header = {
      headers: new HttpHeaders({
          'observe': 'response',
          'Authorization': `${token}`
        })
    }
    this.httpClient.put<any>(`${this.url}/updateProfile`, form, header).subscribe(
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

  deleteUser(id){
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let token = this.authentication.getToken();
    const header = {
      headers: new HttpHeaders({
          'observe': 'response',
          'Authorization': `${token}`
        })
    }

    this.httpClient.delete<any>(`${this.url}/deleteUser/${id}`, header ).subscribe(
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

  verifyUser(dataUsers, id){
    return dataUsers.filter(
      user => user._id === id);
  }

  transferBalanceUser(dataTransfer:ModalTransfer){
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let token = this.authentication.getToken();
    const header = {
      headers: new HttpHeaders({
          'observe': 'response',
          'Authorization': `${token}`
        })
      }

    this.httpClient.put<any>(`${this.url}/transfer`, dataTransfer, header ).subscribe(
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

  drawBalanceUser(dataDraw:ModalsActions){
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let token = this.authentication.getToken();
    const header = {
      headers: new HttpHeaders({
          'observe': 'response',
          'Authorization': `${token}`
        })
      }

    this.httpClient.put<any>(`${this.url}/draw`, dataDraw, header).subscribe(
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

  depositBalanceUser(dataDeposit:ModalsActions){
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let token = this.authentication.getToken();
    const header = {
      headers: new HttpHeaders({
          'observe': 'response',
          'Authorization': `${token}`
        })
      }

    this.httpClient.put<any>(`${this.url}/deposit`, dataDeposit, header).subscribe(
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
