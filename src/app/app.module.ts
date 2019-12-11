import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule } from '@angular/material';
import { LitteratureComponent } from './litterature/litterature.component';
import { BdhumourComponent } from './bdhumour/bdhumour.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { SciencesComponent } from './sciences/sciences.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PayementComponent } from './payement/payement.component';
import { GrandatlasComponent } from './grandatlas/grandatlas.component';
import { ChateauxComponent } from './chateaux/chateaux.component';
import { AnimalsComponent } from './animals/animals.component';
import { PanthereComponent } from './panthere/panthere.component';
import { SaisonComponent } from './saison/saison.component';
import { WalkingDeadComponent } from './walking-dead/walking-dead.component';
import { ZidaneComponent } from './zidane/zidane.component';
import { TerreComponent } from './terre/terre.component';
import { CardioComponent } from './cardio/cardio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LitteratureComponent,
    BdhumourComponent,
    LoisirsComponent,
    SciencesComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    PayementComponent,
    GrandatlasComponent,
    ChateauxComponent,
    AnimalsComponent,
    PanthereComponent,
    SaisonComponent,
    WalkingDeadComponent,
    ZidaneComponent,
    TerreComponent,
    CardioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }