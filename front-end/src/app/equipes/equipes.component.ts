import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-equipes',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.css'
})
export class EquipesComponent implements OnInit {
  equipes!: Equipe[];
  constructor(private equipeService: EquipeService,public authService: AuthService) {

  }

  ngOnInit(): void {
    this.chargerEquipes();
  }
  chargerEquipes(){
    this.equipeService.listeEquipes().subscribe(equipes => {
      this.equipes = equipes;
    });
  }
  supprimerEquipe(equipe: Equipe) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.equipeService.supprimerEquipe(equipe.idEquipe).subscribe(() => {
        console.log("Equipe supprimée");
        this.chargerEquipes();
      });
    }
  }


}
