import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur';
import {catchError} from 'rxjs/operators';
import {ErrorService} from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  BASE_URL = 'http://localhost:8080/api/utilisateurs';

  constructor(private http: HttpClient,
              private es: ErrorService) {
  }

  checkIfCodeRhExists(email: string) {
    return this.http.get(`${this.BASE_URL}/emailExists?email=${email}`);
  }

  updateUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.BASE_URL}/update`, user)
      .pipe(catchError(this.es.handleError()));
  }
  getUserByCodeRH(codeRH: string) {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findBycodeRH?codeRH=${codeRH}`)
      .pipe(catchError(this.es.handleError()));
  }

  getUserById(userId: number) {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findById?id=${userId}`)
      .pipe(catchError(this.es.handleError()));
  }
  storeUser(user: Utilisateur) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  getStoreUser(): Utilisateur {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
