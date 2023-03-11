import React from 'react'
import FilterTable from './FilterStandings'
import LeagueTable from './LeagueStandings'

function Standings() {
  return (
    <div className="table">
        <div>
            <FilterTable/>
        </div>
            <LeagueTable />
    </div>
  )
}

export default Standings