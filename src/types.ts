import { Game } from "./pages/games/types";
import { Player } from "./pages/players/types";
import { Team } from "./pages/teams/types";

export type ResourcesType = "players" | "games" | "teams" | "stats";

export type TFavorites = {
  id: number | string;
  name: string;
  resource: ResourcesType;
};

export interface DFavorites {
  id: string;
  realId: string | number;
  name: string;
  resource: ResourcesType;
}

export type Data = Player | Team | Game | DFavorites;
