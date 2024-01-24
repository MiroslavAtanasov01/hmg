import { useEffect, useState } from "react";
import dataProvider from "../../../services/dataProvider";
import { Game } from "../types";
import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { FeatureRow } from "../../../components/featureRow";
import { useParams } from "react-router-dom";
import { formatDateString } from "../../../utils/formatDate";

function GamePage() {
  const [game, setGame] = useState<Game>();
  const { id } = useParams();

  useEffect(() => {
    dataProvider<Game>(`games/${id}`)
      .then((data) => {
        setGame(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div style={{ margin: "20px" }}>
      {game ? (
        <Stack gap={2}>
          <Grid display="flex" justifyContent="space-between" pb={3}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              {`Game > ${game?.home_team?.full_name} vs  ${game?.visitor_team?.full_name}`}
            </Typography>
          </Grid>

          <FeatureRow title="Status" value={game?.status} />
          <FeatureRow title="Season" value={game?.season} />
          <FeatureRow title="Date" value={formatDateString(game?.date)} />
          <FeatureRow title="Home team" value={game?.home_team?.full_name} />
          <FeatureRow title="Home team score" value={game?.home_team_score} />
          <FeatureRow
            title="Visitor Team"
            value={game?.visitor_team?.full_name}
          />
          <FeatureRow
            title="Visitor team score"
            value={game?.visitor_team_score}
          />
        </Stack>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}

export default GamePage;
