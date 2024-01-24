import { Route, Navigate, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import { useUser } from "../context/user-context";
import PlayersPage from "../pages/players";
import PlayerPage from "../pages/players/player";
import FavoritesPage from "../pages/favorites";
import ProfilePage from "../pages/profile";
import TeamsPage from "../pages/teams";
import TeamPage from "../pages/teams/team";
import GamesPage from "../pages/games";
import GamePage from "../pages/games/game";
import StatsPage from "../pages/stats";

const AppRoutes = () => {
  const { user } = useUser();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/players" element={<PlayersPage />} />
      <Route path="/players/:id" element={<PlayerPage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/teams/:id" element={<TeamPage />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/games/:id" element={<GamePage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route
        path="/favorites"
        element={user ? <FavoritesPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={user ? <ProfilePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <RegisterPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
