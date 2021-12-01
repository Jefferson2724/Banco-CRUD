import { Component, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkValue:boolean;

  title = 'BancoCrud';

  validarCheckBox(check){
    console.log(check)
    this.checkValue = check;
  }
}
