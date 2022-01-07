import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferArea',
  templateUrl: './transferArea.component.html',
  styleUrls: ['./transferArea.component.css']
})
export class TransferAreaComponent implements OnInit {

  @Input() balanceUser: String;

  constructor() { }

  ngOnInit() {
  
  }


}
