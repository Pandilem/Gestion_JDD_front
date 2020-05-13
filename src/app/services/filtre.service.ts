import { Injectable } from '@angular/core';
import {Filtre} from '../model/filtre';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltreService {

  BASE_URL = 'http://localhost:8080/api/filtre';
  constructor(private http: HttpClient,
              private es: ErrorService)  {
  }

  /**
   * Obtenir la liste des utilisateurs dont le nom contient le mot fourni
   * @param nom Le mot recherché
   */
  getFiltreByNom(nom: string): Observable<Filtre[]> {
    return this.http.get<Filtre[]>(`${this.BASE_URL}/findByNom?nom=${nom}`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Obtenir la liste de tout les filtres
   */
  getAllFiltre(): Observable<Filtre[]> {
    return this.http.get<Filtre[]>(`${this.BASE_URL}/all`)
      .pipe(catchError(this.es.handleError()));
  }
}
