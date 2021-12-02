import { Injectable } from '@angular/core';
import { DadosConta } from '../models/DadosConta';

@Injectable({
  providedIn: 'root'
})
export class RotasService {
  
  
  constructor(private dadosConta:DadosConta) { }

  getContaTest() {
    return this.dadosConta;
  }

  getContaTestId(){
    return this.dadosConta.id;
  }
}
