import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dataAccountProfile } from '../models/DadosConta';
import { ModalDelete } from '../models/modalDelete';
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
    return this.httpClient.get<ModalDelete[]>(`${this.url}/allUsers`);
  
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

  deleteUser(cpf){
    let respostaLogin: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let params:HttpParams;

    this.httpClient.delete<any>(`${this.url}/deleteUser`, {observe: 'response', params: params}).subscribe(
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
}
