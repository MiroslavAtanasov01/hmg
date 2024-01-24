import { useEffect, useState } from "react";
import dataProvider from "../../../services/dataProvider";
import { Player } from "../types";
import { FavButton } from "../../../components/favButton";
import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { FeatureRow } from "../../../components/featureRow";
import { useParams } from "react-router-dom";
import { useUser } from "../../../context/user-context";

function PlayerPage() {
  const [player, setPlayer] = useState<Player>();
  const { id } = useParams();
  const { user } = useUser();

  useEffect(() => {
    dataProvider<Player>(`players/${id}`)
      .then((data) => {
        setPlayer(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div style={{ margin: "20px" }}>
      {player ? (
        <Stack gap={2}>
          <Grid display="flex" justifyContent="space-between" pb={3}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              {`Player > ${player?.first_name} ${player?.last_name}`}
            </Typography>
            {user ? (
              <FavButton
                id={id}
                resource={"players"}
                name={player?.first_name}
              />
            ) : null}
          </Grid>

          <FeatureRow title="First Name" value={player?.first_name} />
          <FeatureRow title="Last Name" value={player?.last_name} />
          <FeatureRow title="Height feet" value={player?.height_feet} />
          <FeatureRow title="Height Inches" value={player?.height_inches} />
          <FeatureRow title="Position" value={player?.position} />
          <FeatureRow title="Weight pounds" value={player?.weight_pounds} />
          <FeatureRow title="Team" value={player?.team?.full_name} />
        </Stack>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}

export default PlayerPage;
