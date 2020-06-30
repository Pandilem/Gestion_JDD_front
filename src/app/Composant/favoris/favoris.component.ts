import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../../services/utilisateur.service';
import {Utilisateur} from '../../model/utilisateur';
import {FiltreService} from '../../services/filtre.service';
import {Filtre} from '../../model/filtre';
import {Observable} from 'rxjs';
import {InfoContrat} from '../../model/infoContrat';
import {Router} from '@angular/router';
import {InfoContratService} from '../../services/info-contrat.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  user: Utilisateur;
  favoris$: Observable<Filtre[]>;
  constructor(private userService: UtilisateurService,
              private infoContratService: InfoContratService,
              private router: Router,
              private filtreService: FiltreService) { }

  ngOnInit() {
    this.user = this.userService.getStoreUser();
    this.favoris$ = this.filtreService.getFilterByUser(this.user.id);
      }

  searchJdd(id) {
    console.log('searchJDD');
    this.infoContratService.findJDDByFiltre(id).subscribe(jdd => {
      console.log('récup list jdd recherche', jdd);
      this.router.navigate(['/result'], {state: {jdd}});
    });
  }
  deleteFiltre(id) {
    this.filtreService.deleteFiltre(id).subscribe(f => this.ngOnInit());
  }
}
