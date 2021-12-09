import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { RotasService } from 'src/app/services/rotas.service';
import { ModalDelete } from 'src/app/models/modalDelete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-delete-profile',
  templateUrl: './modal-delete-profile.component.html',
  styleUrls: ['./modal-delete-profile.component.css']
})
export class ModalDeleteProfileComponent implements OnInit {
  users:ModalDelete[];

  constructor(
    public dialogRef: MatDialogRef<ModalDeleteProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private rotasService:RotasService,
    ) { }

  ngOnInit() {
    this.getUsersData();
  }

  deleteUser(idDelete){
    this.rotasService.deleteUser(idDelete);
  }

  getUsersData(){
    return this.rotasService.getAllUsers()
    .subscribe( dataUsers => this.users = dataUsers);
  }
}
