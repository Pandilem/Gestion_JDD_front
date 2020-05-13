import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Observable, of} from 'rxjs';

interface Error {
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private snackBar: MatSnackBar) { }

  /**
   * Afficher la boite contenant les messages
   * @param message Le message à afficher
   * @param action Le texte du bouton qui ferme la boite
   * @param error True si c'est un message d'erreur ou False sinon
   */
  openSnackBar(message: string, action: string, error: boolean) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: error ? 'error-dialog' : 'success-dialog'
    });
  }

  /**
   * Gérer les messages d'erreurs
   * @param message Le message à afficher
   */
  handleError(message?: string) {
    return (e: Error): Observable<any> => {
      this.openSnackBar(message || e.error, 'Ok', true);
      return of([]);
    };
  }

  /**
   * Gérer les messages positifs
   * @param message Le message à afficher
   */
  handleSuccess(message?: string) {
    return (response): Observable<any> => {
      this.openSnackBar(message || response, 'Ok', false);
      return of([]);
    };
  }
}
