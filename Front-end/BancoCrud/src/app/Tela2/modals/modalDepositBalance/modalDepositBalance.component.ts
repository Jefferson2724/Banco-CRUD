import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalDelete } from 'src/app/models/modalDelete';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-modalDepositBalance',
  templateUrl: './modalDepositBalance.component.html',
  styleUrls: ['./modalDepositBalance.component.css']
})
export class ModalDepositBalanceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalDepositBalanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService:RotasService,
    ) { }

    ngOnInit() {
    }
  
    depositBalance(balance){
      if(!balance){
        return;
      }
    }
}
