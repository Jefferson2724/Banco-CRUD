import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  textoLoreImpsum:String;
  @Input() check:any;

  constructor() { }

  ngOnInit() {
    
  }

}
