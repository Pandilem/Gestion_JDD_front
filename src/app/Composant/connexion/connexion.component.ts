import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
              private auth: AuthService) { }

  /**
   * Création du formulaire de connexion
   * On défini les champs pseudo et mot de passe comme champs obligatoire
   */
  ngOnInit() {
    this.connexionForm = this.fb.group({
      codeRH: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  /**
   * On vérifie que le login et mdp correspond bien à un utilisatueur
   * @param form Le formulaire de connexion
   */
  onSubmit(form) {
    this.submitted = true;
    if (this.connexionForm.invalid) { return; }
    this.auth.login(form.codeRH, form.motDePasse).subscribe();
  }

  get f() { return this.connexionForm.controls; }

}
