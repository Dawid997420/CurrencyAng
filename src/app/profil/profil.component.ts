import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  constructor( private httpService: HttpService, private keycloak:KeycloakService ) {}

  test="";

  getHello() {

    this.httpService.getActualCurrencyByCurrencyCode().subscribe(response=> {

      this.test=response;
    })
  }

  logout() {

    this.keycloak.logout();
  }


}
