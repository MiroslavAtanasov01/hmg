import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/user-context";

type TCards = {
  image: string;
  alt: string;
  title: string;
  description: string;
  path: string;
}[];

const IMAGE_HEIGHT = 200;

const cards: TCards = [
  {
    image: "/images/players.png",
    alt: "Players",
    title: "Players",
    description: "Check out the players from NBA.",
    path: "/players",
  },
  {
    image: "/images/teams.webp",
    alt: "Teams",
    title: "Teams",
    description: "Get to know the teams.",
    path: "/teams",
  },
  {
    image: "/images/games.webp",
    alt: "Games",
    title: "Games",
    description: "Do you know how many games are there?",
    path: "/games",
  },
  {
    image: "/images/stats.webp",
    alt: "Stats",
    title: "Stats",
    description: "Take a look at the stats.",
    path: "/stats",
  },
];

export const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h5">Hello everyone,</Typography>}
      />
      <CardContent>
        <Typography color="primary">
          Please take a look around. You'll have a lot of fun.
        </Typography>

        <Divider sx={{ marginTop: 4, marginBottom: 5 }} />

        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {cards.map(({ image, alt, title, description, path }, index) => (
            <Grid key={`card-${index}`} item xs={12} md={6}>
              <Card>
                <CardActionArea onClick={() => navigate(`${path}`)}>
                  <CardMedia
                    component="img"
                    height={IMAGE_HEIGHT}
                    image={image}
                    alt={alt}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          {user ? (
            <Grid item xs={12}>
              <Card>
                <CardActionArea onClick={() => navigate(`/favorites`)}>
                  <CardMedia
                    component="img"
                    height={IMAGE_HEIGHT}
                    image="/images/favorites.jpg"
                    alt="Favorites"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Favorites
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Start making your own collection. You'll be able to check
                      the details of your favorite characters.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ) : null}
        </Grid>
      </CardContent>
    </Card>
  );
};
