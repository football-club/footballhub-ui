import { Grid, Paper } from "@mui/material";
import React from "react";
import Matches from "../components/matches/Matches";
import Standings from "../components/standings/Standings";

function Fixtures() {
  return (
    <Paper
      sx={{
        margin: "2rem auto",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Matches />
        </Grid>
        <Grid item xs={12} md={6}>
          <Standings />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Fixtures;
