import './style/Fixtures.css'
import LeagueTable from '../table/LeagueTable';
import FilterTable from '../table/FilterTable';
import logo from '../table/images/premierLeagueLogo.png'




function Fixtures(){
    return(
        <>
                

         <div id="col-1">
            <div className="table">
            <div className='banner'>
            <img className = "logo" src = {logo}/> 
            <p className='titleLogo'>Premier League Table</p>
            </div>
            <p className=''></p>
            <div>
            <FilterTable/>
            </div>
            <LeagueTable />
            </div>
        </div>
        <div id="col-2">
            
            <div className='Fix'>
                PL fixtures
            </div>
        </div>
        </>

    )
}

export default Fixtures;