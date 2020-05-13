import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Criteres} from '../model/criteres';

@Injectable({
  providedIn: 'root'
})
export class CriteresService {

  BASE_URL = 'http://localhost:8080/api/criteres';
  constructor(private http: HttpClient,
              private es: ErrorService)  {
  }

  /**
   * Obtenir la liste des criteres dont le nom contient le mot fourni
   * @param nom Le mot recherché
   */
  getCriteresByNom(nom: string): Observable<Criteres[]> {
    return this.http.get<Criteres[]>(`${this.BASE_URL}/findByNom?nom=${nom}`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Obtenir la liste de tout les criteres
   */
  getAllCriteres(): Observable<Criteres[]> {
    return this.http.get<Criteres[]>(`${this.BASE_URL}/all`)
      .pipe(catchError(this.es.handleError()));
  }
}
