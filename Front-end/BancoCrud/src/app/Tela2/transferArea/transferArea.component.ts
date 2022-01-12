import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ModalTransferBalanceComponent } from '../modals/modalTransferBalance/modalTransferBalance.component';
import { ModalDepositBalanceComponent } from '../modals/modalDepositBalance/modalDepositBalance.component';
import { ModalDrawBalanceComponent } from '../modals/modalDrawBalance/modalDrawBalance.component';
@Component({
  selector: 'app-transferArea',
  templateUrl: './transferArea.component.html',
  styleUrls: ['./transferArea.component.css']
})
export class TransferAreaComponent implements OnInit {

  @Input() balanceUser: String;
  @Input() id: String;

  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
  
  }

  openDialogTransferBalance(){
    const dialogRef = this.dialog.open(ModalTransferBalanceComponent, {
      width: '800px',
      data: {
        _id: this.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([`/navegar/${this.id}`])
    });
  }

  openDialogDrawBalance(){
    const dialogRef = this.dialog.open(ModalDrawBalanceComponent, {
      width: '600px',
      data: {
        _id: this.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([`/navegar/${this.id}`])
    });
  }

  openDialogDepositBalance(){
    const dialogRef = this.dialog.open(ModalDepositBalanceComponent, {
      width: '600px',
      data: {
        _id: this.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([`/navegar/${this.id}`])
    });
  }

}
