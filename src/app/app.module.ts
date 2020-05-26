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
import { NavbarComponent } from './navbar/navbar.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavorisComponent } from './favoris/favoris.component';
import { ProfilComponent } from './profil/profil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes =  [
  {path: 'connexion', component: ConnexionComponent},
  {path: '', component: RechercheComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'favoris', component: FavorisComponent}
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
    CardComponent
  ],
    imports: [
        MatToolbarModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        MatIconModule,
        RouterModule.forRoot(routes),
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
