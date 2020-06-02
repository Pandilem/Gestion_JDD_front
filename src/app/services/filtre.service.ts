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

  putFilter(updateFiltre: Filtre): Observable<Filtre> {
    return this.http.put<Filtre>(`${this.BASE_URL}/update`, updateFiltre)
      .pipe(catchError(this.es.handleError()));
  }
  getFilterByUser(id: number): Observable<Filtre[]> {
    return this.http.get<Filtre[]>(`${this.BASE_URL}/findByUtilisateurId?id=${id}`)
      .pipe(catchError(this.es.handleError()));
  }
  findById(id: number): Observable<Filtre> {
    return this.http.get<Filtre>(`${this.BASE_URL}/findById?id=${id}`)
      .pipe(catchError(this.es.handleError()));
  }
  addFiltre(filtre: any) {
    return this.http.post<Filtre>(`${this.BASE_URL}/new`, filtre)
      .pipe(catchError(this.es.handleError()));
  }
  deleteFiltre(id: number): Observable<void> {
    return this.http.delete(`${this.BASE_URL}/delete?id=${id}`)
      .pipe(catchError(this.es.handleError()));
  }
}
