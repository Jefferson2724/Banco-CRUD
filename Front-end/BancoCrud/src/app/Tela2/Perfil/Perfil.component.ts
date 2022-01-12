import { Component, OnInit } from '@angular/core';
import { dataAccountProfile } from 'src/app/models/DadosConta';
import { RotasService } from 'src/app/services/rotas.service';
import { MatDialog } from '@angular/material';
import { ModalEditPerfilComponent } from '../modals/modalEditPerfil/modalEditPerfil.component';
import { ModalDeleteProfileComponent } from '../modals/modal-delete-profile/modal-delete-profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmarReq } from 'src/app/models/confirmarReq';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {
  name: String;
  balance: String;
  dataUser:dataAccountProfile = {} as dataAccountProfile;
  id: any;
  token: String;

  constructor(
    private rotasService: RotasService,
    private dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService,
    ) { }

  ngOnInit() {
    this.token = this.authentication.getToken();

    if(!this.token){
      this.router.navigate(['/']);
    }

    this.id = this.activeRoute.snapshot.params['id'];
    this.getDataUser(this.id);
  }

  getDataUser(id){
    this.rotasService.getDataUser(this.id).subscribe(
      Response => {
        this.dataUser = Response;
        if(this.dataUser){
          this.insertValuesProfiles(this.dataUser);
        }
      }
    )
  }

  openDialogEditProfile() {
    const dialogRef = this.dialog.open(ModalEditPerfilComponent, {
      width: '600px',
      data: {
        _id: this.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([`/navegar/${this.id}`])
    });
  }

  openDialogDeleteProfile() {
    const dialogRef = this.dialog.open(ModalDeleteProfileComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  insertValuesProfiles(dataUser){
    this.name = dataUser.name;
    this.balance = "5.000.000";
  }

  logout(){
    this.authentication.deleteToken();
    this.router.navigate(['/']);
  }
}