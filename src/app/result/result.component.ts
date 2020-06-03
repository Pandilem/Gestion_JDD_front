import { Component, OnInit } from '@angular/core';
import {InfoContrat} from '../model/infoContrat';
import {Filtre} from '../model/filtre';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {loadConfigurationFromPath} from 'tslint/lib/configuration';
import {FiltreService} from '../services/filtre.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';
import {log} from 'util';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  jdds: InfoContrat[];
  flag = false;
  submitted = false;
  form: FormGroup;
  constructor( private router: Router,
               private utilisateurService: UtilisateurService,
               private filtreService: FiltreService,
               private fb: FormBuilder) { }

  ngOnInit() {
    if (this.router.url.startsWith('/recherche')) {
      this.flag = true;
    }
    this.jdds = window.history.state.jdd;
    this.form = this.fb.group({
      nom: ['', Validators.required],
      descriptif: ['', Validators.required]
    });
  }
  addFiltreFavoris(formData) {
    this.submitted = true;
    if (this.form.invalid) { return; }
    this.filtreService.findById(1).subscribe(filtre => {
      const newFiltre = {...filtre, ...formData, utilisateur: {id: this.utilisateurService.getStoreUser().id}};
      delete newFiltre.id;
      this.filtreService.addFiltre(newFiltre).subscribe(f => console.log(f));
    });

  }
  get f() { return this.form.controls; }
}
