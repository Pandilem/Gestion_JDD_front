import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurService} from '../services/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: Utilisateur;
  constructor(private userService: UtilisateurService) { }

  ngOnInit() {
    this.user = this.userService.getStoreUser();
   /* const codeRH = sessionStorage.getItem('codeRH');
    this.userService.getUserByCodeRH(codeRH).subscribe(
      user => this.user = user
    );*/
  }

}
