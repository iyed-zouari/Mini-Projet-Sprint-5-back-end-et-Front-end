import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Equipe } from '../model/equipe.model';
import { OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { League } from '../model/league.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-equipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-equipe.component.html',
  styleUrl: './add-equipe.component.css'
})
export class AddEquipeComponent implements OnInit {
  newEquipe: Equipe = new Equipe();
  leagues!: League[] ;
  newIdLeg!: number;
  //newLeague!: League;
  constructor(private equipeService: EquipeService, private router: Router) {
  }

  ngOnInit(): void {
    //this.leagues = this.equipeService.listeLeagues();
    this.equipeService.listeLeagues().subscribe(leags => {
      this.leagues = leags._embedded.leagues;
      console.log(this.leagues);
    });

  }

  addEquipe() {

    this.newEquipe.league = this.leagues.find(league => league.idLeg == this.newIdLeg) !;
    this.equipeService.ajouterEquipe(this.newEquipe).subscribe(equipe=> {
      console.log(equipe);
      this.router.navigate(['/equipes']);
    });

  }

}
