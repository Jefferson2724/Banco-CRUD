import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalsActions } from 'src/app/models/modalsActions';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-modalDrawBalance',
  templateUrl: './modalDrawBalance.component.html',
  styleUrls: ['./modalDrawBalance.component.css']
})
export class ModalDrawBalanceComponent implements OnInit {
  dataDrawAction: ModalsActions = {} as ModalsActions;

  constructor(
    public dialogRef: MatDialogRef<ModalDrawBalanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService:RotasService,
    ) { }

    ngOnInit() {
    }
  
    depositBalance(balance){
      if(!balance){
        return;
      }

      this.dataDrawAction['_id'] = this.data._id;
      this.dataDrawAction['balance'] = balance;

      this.rotasService.drawBalanceUser(this.dataDrawAction)
    }
}
