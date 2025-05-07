import { Routes } from '@angular/router';
import { EquipesComponent } from './equipes/equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { RechercheParLeagueComponent } from './recherche-par-league/recherche-par-league.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeLeaguesComponent } from './liste-leagues/liste-leagues.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { equipeGuard } from './services/equipe.guard';
export const routes: Routes = [
  {path: 'equipes',component: EquipesComponent},
  {path:'add-equipe',component: AddEquipeComponent,canActivate:[equipeGuard]},
  {path:'',redirectTo:'equipes',pathMatch:'full'},
  {path:'updateEquipe/:id',component: UpdateEquipeComponent,canActivate:[equipeGuard]},
  {path:'rechercheParLeague',component:RechercheParLeagueComponent},
  {path:'rechercheParNom',component:RechercheParNomComponent},
  {path:'listeLeagues',component:ListeLeaguesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

];
