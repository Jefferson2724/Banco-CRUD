import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modalEditPerfil',
  templateUrl: './modalEditPerfil.component.html',
  styleUrls: ['./modalEditPerfil.component.css']
})
export class ModalEditPerfilComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalEditPerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(){
    
  } 
}
