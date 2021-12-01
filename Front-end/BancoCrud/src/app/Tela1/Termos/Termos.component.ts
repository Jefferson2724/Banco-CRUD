import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-Termos',
  templateUrl: './Termos.component.html',
  styleUrls: ['./Termos.component.css']
})
export class TermosComponent implements OnInit {
  textoLoreImpsum: String;
  checkBoxTerm: boolean = false;

  @Output() checkBoxValido:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.textoLoreImpsum = "sakasdka´dápskdasapsdad" +
    "aodahsioudjhoasdaakd " +
    "asjdnhoasjdoada " +
    "asdjo";
  }

  validCheckbox(){
    this.checkBoxTerm = !this.checkBoxTerm;
    console.log(this.checkBoxTerm);

    this.checkBoxValido.emit(this.checkBoxTerm);
  }
}
