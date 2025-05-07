import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { SearchFilterPipe } from '../search-filter.pipe';
@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule,CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {
  nomEquipe! : string;
  equipes!: Equipe[];
  allEquipes! : Equipe[];
  searchTerm!: string;
  constructor(private equipeService: EquipeService) { }
  ngOnInit(): void {
    this.equipeService.listeEquipes().subscribe(equipes => {
      this.equipes = equipes;
      this.allEquipes = equipes;
      console.log(this.equipes);
    });
  }

  onKeyUp(filterText: string) {
    this.equipes = this.allEquipes.filter(equipe => (equipe.nomEquipe ?? '').toLowerCase().includes(filterText.toLowerCase()));
  }



  rechercherEquipes() {
    if (this.nomEquipe) {
      this.equipeService.rechercherParNom(this.nomEquipe).subscribe(equipes => {
        this.equipes = equipes;
        console.log(this.equipes);
      });
    }
    else {
      this.equipeService.listeEquipes().subscribe(equipes => {
        this.equipes = equipes;
        console.log(this.equipes);
      });
    }
  }

}
