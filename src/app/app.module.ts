import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Composant/navbar/navbar.component';
import { RechercheComponent } from './Composant/recherche/recherche.component';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavorisComponent } from './Composant/favoris/favoris.component';
import { ProfilComponent } from './Composant/profil/profil.component';
import { ConnexionComponent } from './Composant/connexion/connexion.component';
import { PageComponent } from './Composant/page/page.component';
import { FooterComponent } from './Composant/footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './Composant/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { ResultComponent } from './Composant/result/result.component';
import {ExtendedModule, FlexLayoutModule, FlexModule} from '@angular/flex-layout';

const routes: Routes =  [
  {path: '', component: ConnexionComponent},
  {path: 'recherche', component: RechercheComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'favoris', component: FavorisComponent},
  {path: 'result', component: ResultComponent},
  {path: 'recherche/result', component: ResultComponent},
  {path: '**', redirectTo: '/recherche'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RechercheComponent,
    FavorisComponent,
    ProfilComponent,
    ConnexionComponent,
    PageComponent,
    FooterComponent,
    CardComponent,
    ResultComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ExtendedModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
