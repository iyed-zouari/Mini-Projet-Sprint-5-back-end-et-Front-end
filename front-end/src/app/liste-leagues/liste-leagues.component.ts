import { Component } from '@angular/core';
import { League } from '../model/league.model';
import { EquipeService } from '../services/equipe.service';
import { CommonModule } from '@angular/common';
import { UpdateLeagueComponent } from '../update-league/update-league.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-liste-leagues',
  standalone: true,
  imports: [CommonModule,UpdateLeagueComponent],
  templateUrl: './liste-leagues.component.html',
  styles: ``
})
export class ListeLeaguesComponent {
  updatedLeg:League ={"idLeg":0,"nomLeg":""};
  ajout:boolean=true;

  leagues !:League[];
  constructor(private equipeService:EquipeService) {}
  ngOnInit(): void {
    this.equipeService.listeLeagues().
    subscribe(cats => {this.leagues = cats._embedded.leagues;
    console.log(cats);
    });}

    leagueUpdated(league: League) {
      this.equipeService.ajouterLeague(league).subscribe(() => {
        this.chargerLeagues();
      });}

    chargerLeagues() {
      this.equipeService.listeLeagues().subscribe(cats => {this.leagues = cats._embedded.leagues;
        console.log(cats);
        });}
    updateLeg(leg: League) {
      this.updatedLeg = leg;
      this.ajout=false;
    }
}
