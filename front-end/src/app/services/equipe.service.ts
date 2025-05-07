import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { League } from '../model/league.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeagueWrapped } from '../model/LeagueWrapped.model';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  apiURL = 'http://localhost:8090/equipes/custom-api';
  apiURLLeg: string = 'http://localhost:8090/equipes/leg';
  equipes!: Equipe[];
  constructor(private http : HttpClient,
              private authService: AuthService) { }



   listeEquipes(): Observable<Equipe[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Equipe[]>(this.apiURL+"/all",{headers:httpHeaders});
   }


    ajouterEquipe(equipe: Equipe): Observable<Equipe> {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.post<Equipe>(this.apiURL+"/addequipe", equipe,{headers:httpHeaders});
    }




    supprimerEquipe(id:number | undefined) {
      const url = `${this.apiURL}/delequipe/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete<void>(url,{headers:httpHeaders});
    }

    rechercherParLeague(idLeague: number): Observable<Equipe[]> {
      const url = `${this.apiURL}/equipesLeg/${idLeague}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Equipe[]>(url,{headers:httpHeaders});
    }

    consulterEquipe(id: number): Observable<Equipe> {
      const url = `${this.apiURL}/getbyid/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Equipe>(url,{headers:httpHeaders});
    }

  updateEquipe(equipe:Equipe):Observable<Equipe> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Equipe>(this.apiURL+"/updateEquipe", equipe, {headers:httpHeaders});
  }

   listeLeagues(): Observable<LeagueWrapped> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<LeagueWrapped>(this.apiURLLeg, {headers:httpHeaders});
  }

  rechercherParNom(nom: string): Observable<Equipe[]> {
    const url = `${this.apiURL}/equipesByName/${nom}`;
    let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Equipe[]>(url, {headers:httpHeaders});
  }
  ajouterLeague(league: League): Observable<League> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<League>(this.apiURLLeg, league, {headers:httpHeaders});}


  /*consulterLeague(id: number): League | undefined {
    return this.leagues.find(league => league.idLeg == id);
  }*/

}
