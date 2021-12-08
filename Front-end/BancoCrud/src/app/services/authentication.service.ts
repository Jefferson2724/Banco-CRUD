import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { ConfirmarReq } from '../models/confirmarReq';
import { DadosLogin } from '../models/dadosLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly url = `${environment.ACC_API}`;

  constructor(
    private cookies: CookieService,
    private httpClient: HttpClient,
  ) { }

  authenticationProfile(dataLogin: DadosLogin){
    let dataUserAuth: BehaviorSubject<any> = new BehaviorSubject(undefined);

    this.httpClient.post<any>(`${this.url}/authenticate`, dataLogin, {observe: 'response'}).subscribe(
      response => {
        debugger;
        this.setTokenCookie(response.body.token);
        dataUserAuth.next(response.body);
      },
      error => {
        console.log("Houve algum erro");
        return;
      }
    );

    return dataUserAuth.asObservable();
  }

  setTokenCookie(token){
    this.cookies.set("Authorization", token);
  }

  deleteToken(){
    this.cookies.deleteAll();
  }

  getToken(){
    debugger;
    return this.cookies.get("Authorization");
  }
}
