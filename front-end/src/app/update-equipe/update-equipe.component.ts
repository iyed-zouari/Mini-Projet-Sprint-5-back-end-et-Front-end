import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Equipe } from '../model/equipe.model';
import { OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { League } from '../model/league.model';
@Component({
  selector: 'app-update-equipe',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-equipe.component.html',
  styles: ``
})
export class UpdateEquipeComponent implements OnInit {
  currentEquipe = new Equipe();
  leagues!: League[];
  updatedIdLeg!: number;
  constructor(private equipeService: EquipeService, private route: ActivatedRoute, private router: Router) {
    // this.currentEquipe = new Equipe(); // Initialize currentEquipe if needed
  }

  ngOnInit(): void {
    this.equipeService.listeLeagues().subscribe(leages => {
      this.leagues = leages._embedded.leagues;
    });
    this.equipeService.consulterEquipe(this.route.snapshot.params['id']).subscribe(equipe => {
      this.currentEquipe = equipe;
      this.updatedIdLeg = this.currentEquipe.league.idLeg; // Assuming league is not null
    });
  }
  updateEquipe() {
    this.currentEquipe.league = this.leagues.find(league => league.idLeg == this.updatedIdLeg)!;
    this.equipeService.updateEquipe(this.currentEquipe).subscribe(equipe => {
      console.log(equipe);
      this.router.navigate(['/equipes']);
    });
  }


}
