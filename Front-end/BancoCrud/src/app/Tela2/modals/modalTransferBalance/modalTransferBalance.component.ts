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
  messageError: String;
  success: boolean;7

  constructor(
    public dialogRef: MatDialogRef<ModalTransferBalanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService:RotasService,
    ) { }

    ngOnInit() {
      this.getUsersData();
    }
  
    transferBalance(email, balance){
      this.messageError = undefined;

      if(!email || !balance){
        this.messageError = "Dados não inseridos, insira os dados e tente novamente !";
        return;
      }

      if(this.data.balance < balance){
        this.messageError = "Seu saldo é insuficiente para completar esta ação";
        return;
      }

      this.dataTransfer['_id'] = this.data._id;
      this.dataTransfer['email'] = email;
      this.dataTransfer['balance'] = balance;

      this.rotasService.transferBalanceUser(this.dataTransfer).subscribe(
        Response => {
            if(Response){
              this.success = true;
            }      
        }
      );
    }
  
    getUsersData(){
      return this.rotasService.getAllUsers()
      .subscribe( dataUsers => this.users = dataUsers);
    }

}
