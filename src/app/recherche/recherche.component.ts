import { Component, OnInit } from '@angular/core';
import {CriteresService} from '../services/criteres.service';
import {Observable} from 'rxjs';
import {Criteres} from '../model/criteres';
import {InfoContratService} from '../services/info-contrat.service';
import {InfoContrat} from '../model/infoContrat';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  searchWord: string;
  idfiltre: number;
  criteres$: Observable<Criteres[]>;
  jdd$: Observable<InfoContrat[]>;
  constructor(private criteresService: CriteresService,
              private infoContratService: InfoContratService) { }

  ngOnInit() {
    console.log(this.criteresService);
    this.criteres$ = this.criteresService.getAllCriteres();
    console.log(this.criteres$);
  }
  searchFilter() {
    this.criteresService.getCriteresByNomLike(this.searchWord);
  }
  /*searchJdd(idfiltre){
    this.jdd$ = this.infoContratService.findJDDByFiltre();
  }*/
}
