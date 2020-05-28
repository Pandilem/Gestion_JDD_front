import {Utilisateur} from './utilisateur';
import {Criteres} from './criteres';


export class Filtre {
  id: number;
  nom: string;
  descriptif: string;
  utilisateur: Utilisateur;
  criteres: Criteres[];
}
