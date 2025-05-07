import { League } from "./league.model";
export class LeagueWrapped {
  _embedded!: {
    leagues: League[]};
}
