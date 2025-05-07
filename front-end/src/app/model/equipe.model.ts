import { League } from "./league.model";
export  class Equipe {
  idEquipe? : number;
  nomEquipe? : string;
  nomTerrain? : string;
  budgetAnnuel? : number;
  dateRealisation? : Date ;
  league! : League;
  }
