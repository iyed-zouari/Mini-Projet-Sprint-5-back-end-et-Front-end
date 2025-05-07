import { Component } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { League } from '../model/league.model';
import { EquipeService } from '../services/equipe.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recherche-par-league',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche-par-league.component.html',
  styles: ``
})
export class RechercheParLeagueComponent {
  equipes : Equipe[]=[];
  Idleague! : number;
  leagues : League[]=[];
  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.listeLeagues().subscribe(leg => {
      this.leagues = leg._embedded.leagues;
      console.log(this.leagues);
    });
  }


  onChange(){
  this.equipeService.rechercherParLeague(this.Idleague).subscribe(equipes => {
    this.equipes = equipes;
    console.log(this.equipes)});
  }




}
