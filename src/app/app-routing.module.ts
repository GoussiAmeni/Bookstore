import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BdhumourComponent } from './bdhumour/bdhumour.component';
import { LitteratureComponent } from './litterature/litterature.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bdh', component: BdhumourComponent },
  { path: 'litt', component: LitteratureComponent },
  { path: 'loisir', component: LoisirsComponent },
  { path: 'science', component: SciencesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'payement', component: PayementComponent },
  { path: 'atlas', component: GrandatlasComponent },
  { path: 'chateau', component: ChateauxComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'panth', component: PanthereComponent },
  { path: 'saison', component: SaisonComponent },
  { path: 'walk', component: WalkingDeadComponent },
  { path: 'zidane', component: ZidaneComponent },
  { path: 'terre', component: TerreComponent },
  { path: 'cardio', component: CardioComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }