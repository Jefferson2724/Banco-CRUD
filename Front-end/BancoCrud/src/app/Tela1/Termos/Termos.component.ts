import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Termos',
  templateUrl: './Termos.component.html',
  styleUrls: ['./Termos.component.css']
})
export class TermosComponent implements OnInit {
  textoLoreImpsum: String;
  constructor() { }

  ngOnInit() {
    this.textoLoreImpsum = "sakasdka´dápskdasapsdad" +
    "aodahsioudjhoasdaakd " +
    "asjdnhoasjdoada " +
    "asdjo";
  }

  validCheckbox(){
    debugger;
  }
}
