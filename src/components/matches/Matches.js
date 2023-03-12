import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import banner from "../news/media/pl_rainbow_badge_banner.jpg";
import { CardActionArea, CardHeader, Grid } from "@mui/material";
import matchesMock from "../mockData/matchesMock.json";

function Matches({ props }) {
  return (
    <Card style={{ height: "100%" }} spacing={2}>
      <HeaderCard />
      <CardContent
        sx={{
          flexGrow: 1,
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={1}>
          {matchesMock.map((matches) => (
            <Card
              key={matches.id}
              style={{ width: "100%", border: "none", boxShadow: "none" }}
            >
              <CardHeader
                subheader={"Matchday " + matches.Matchday + " of 38"}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {matches?.Matches?.map((index, match) => (
                  <MatchPost key={index} />
                ))}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

function MatchPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6} xxl={4}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post?.title} placeholder
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post?.date} date
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post?.description} description
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

function HeaderCard(props) {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div style={{ position: "relative" }}>
        <CardMedia
          style={{ height: "150px", objectFit: "fill" }}
          component="img"
          image={banner}
          title="Premier League"
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            top: "3rem",
            left: "30%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography gutterBottom variant="h4" component="h5">
            Matches
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default Matches;
