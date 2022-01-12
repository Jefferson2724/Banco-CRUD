import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalDelete } from 'src/app/models/modalDelete';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-modalTransferBalance',
  templateUrl: './modalTransferBalance.component.html',
  styleUrls: ['./modalTransferBalance.component.css']
})
export class ModalTransferBalanceComponent implements OnInit {
  users:ModalDelete[];

  constructor(
    public dialogRef: MatDialogRef<ModalTransferBalanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService:RotasService,
    ) { }

    ngOnInit() {
      this.getUsersData();
    }
  
    transferBalance(id, balance){
      if(!id || !balance){
        return;
      }
    }
  
    getUsersData(){
      return this.rotasService.getAllUsers()
      .subscribe( dataUsers => this.users = dataUsers);
    }

}
