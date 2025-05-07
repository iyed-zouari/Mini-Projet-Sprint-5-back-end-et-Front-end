import { Component, EventEmitter, Input, Output } from '@angular/core';
import { League } from '../model/league.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-league',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-league.component.html',
  styles: ``
})
export class UpdateLeagueComponent {
  @Input()
  league !: League;
  @Output()
  leagueUpdated = new EventEmitter<League>();
  @Input()
  ajout!:boolean;
  ngOnInit(): void {
    console.log("ngOnInit du composant",this.league);
}
 saveLeague() {
  this.leagueUpdated.emit(this.league);
 }
}
