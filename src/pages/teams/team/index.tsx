import { useEffect, useState } from "react";
import dataProvider from "../../../services/dataProvider";
import { FavButton } from "../../../components/favButton";
import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { FeatureRow } from "../../../components/featureRow";
import { useParams } from "react-router-dom";
import { Team } from "../types";
import { useUser } from "../../../context/user-context";

function TeamPage() {
  const [team, setTeam] = useState<Team>();
  const { id } = useParams();
  const { user } = useUser();

  useEffect(() => {
    dataProvider<Team>(`teams/${id}`)
      .then((data) => {
        setTeam(data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div style={{ margin: "20px" }}>
      {team ? (
        <Stack gap={2}>
          <Grid display="flex" justifyContent="space-between" pb={3}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              {`Team > ${team?.full_name ? team?.full_name : ""}`}
            </Typography>
            {user ? (
              <FavButton id={id} resource={"teams"} name={team?.full_name} />
            ) : null}
          </Grid>
          <FeatureRow title="Height feet" value={team?.city} />
          <FeatureRow title="Height Inches" value={team?.conference} />
          <FeatureRow title="Position" value={team?.abbreviation} />
          <FeatureRow title="Weight pounds" value={team?.division} />
        </Stack>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}

export default TeamPage;
