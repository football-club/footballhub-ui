import React from "react";
import Matches from "../components/matches/Matches";
import Standings from "../components/standings/Standings";

function Fixtures() {
  return (
    <>
      <div id="col-1">
        <Standings />
      </div>
      <div id="col-2">
        <Matches />
      </div>
    </>
  );
}

export default Fixtures;
