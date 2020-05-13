import { Component, OnInit } from '@angular/core';
import {CriteresService} from '../services/criteres.service';
import {Observable} from 'rxjs';
import {Criteres} from '../model/criteres';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  searchWord: string;
  criteres$: Observable<Criteres[]>;
  constructor(private criteresService: CriteresService) { }

  ngOnInit() {
    this.criteres$ = this.criteresService.getAllCriteres();
    console.log(this.criteres$);
  }
  searchFilter() {
    this.criteresService.getCriteresByNom(this.searchWord);
  }
}
