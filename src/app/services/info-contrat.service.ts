import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './error.service';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Filtre} from '../model/filtre';
import {InfoContrat} from '../model/infoContrat';

@Injectable({
  providedIn: 'root'
})
export class InfoContratService {

  BASE_URL = 'http://localhost:8080/api/infoContrat';
  constructor(private http: HttpClient,
              private es: ErrorService)  {
  }

  findJDDByFiltre( idFiltre: number): Observable<InfoContrat[]> {
    return this.http.get<InfoContrat[]>(`${this.BASE_URL}/findJDD?id_Filtre=${idFiltre}`)
      .pipe(catchError(this.es.handleError()));
  }
}
