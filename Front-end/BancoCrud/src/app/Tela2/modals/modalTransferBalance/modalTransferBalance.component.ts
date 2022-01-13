import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalDelete } from 'src/app/models/modalDelete';
import { ModalTransfer } from 'src/app/models/modalTransfer';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-modalTransferBalance',
  templateUrl: './modalTransferBalance.component.html',
  styleUrls: ['./modalTransferBalance.component.css']
})
export class ModalTransferBalanceComponent implements OnInit {
  users:ModalDelete[];
  dataTransfer: ModalTransfer = {} as ModalTransfer;

  constructor(
    public dialogRef: MatDialogRef<ModalTransferBalanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService:RotasService,
    ) { }

    ngOnInit() {
      this.getUsersData();
    }
  
    transferBalance(email, balance){
      debugger;
      console.log(this.data);
      if(!email || !balance){
        return;
      }

      this.dataTransfer['_id'] = this.data._id;
      this.dataTransfer['email'] = email;
      this.dataTransfer['balance'] = balance;

      this.rotasService.transferBalanceUser(this.dataTransfer);
    }
  
    getUsersData(){
      return this.rotasService.getAllUsers()
      .subscribe( dataUsers => this.users = dataUsers);
    }

}
