import { Component, OnInit } from '@angular/core';
import {CriteresService} from '../services/criteres.service';
import {Observable} from 'rxjs';
import {Criteres} from '../model/criteres';
import {InfoContratService} from '../services/info-contrat.service';
import {InfoContrat} from '../model/infoContrat';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {MatListOption} from '@angular/material';
import {Filtre} from '../model/filtre';
import {FiltreService} from '../services/filtre.service';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurService} from '../services/utilisateur.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  searchWord: string;

  selectCrit: Criteres[] = [];
  criteres$: Criteres[];
  tempFiltre: Filtre;
  constructor(private criteresService: CriteresService,
              private filtreService: FiltreService,
              private utilisateurService: UtilisateurService,
              private infoContratService: InfoContratService) { }

  ngOnInit() {
    console.log(this.criteresService);
    this.criteresService.getAllCriteres().subscribe(criteres => this.criteres$ = criteres);
    console.log(this.criteres$);
  }
  searchFilter() {
    this.criteresService.getCriteresByNomLike(this.searchWord).subscribe(criteres => {
      this.criteres$ = criteres;
    });
  }
  onChange(selected: MatListOption[]) {
    selected.forEach( s => {
      if (!this.includeCrit(s.value, this.selectCrit)) {
        this.selectCrit.push(s.value );
      }
    });
    const selectedId = selected.map(s => s.value);
    //const allId = this.criteres$.map( crit => crit.id);
    this.criteres$.forEach( crit => {
      if (!this.includeCrit(crit, selectedId) && this.includeCrit(crit, this.selectCrit)) {
        this.selectCrit.splice(this.selectCrit.indexOf(crit, 1));
      }});
    console.log(this.selectCrit);
  }
  searchJdd() {
    console.log('searchJDD');
    this.utilisateurService.getUserById(1).subscribe(usertemp => {
      console.log('user' , usertemp, usertemp.id);
      this.tempFiltre = {
        id : 1, nom: 'tempFiltre', descriptif: 'Filtre Temporaire de recherche', utilisateur: usertemp,  criteres: this.selectCrit}
      console.log('update front');
      this.filtreService.putFilter(this.tempFiltre).subscribe(filtre => {
        console.log(filtre);
        this.infoContratService.findJDDByFiltre(1).subscribe(jdd => console.log(jdd));
      });
    });
  }
  includeCrit(critere: Criteres, listCrit: Criteres[]) {
    const newList = listCrit.filter(crit => crit.id === critere.id);
    return newList.length > 0;
  }
}
