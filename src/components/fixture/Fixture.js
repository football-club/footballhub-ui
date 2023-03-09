import './style/Fixtures.css'
import LeagueTable from '../table/LeagueTable';
import FilterTable from '../table/FilterTable';



function Fixtures(){
    return(
        <>

         <div id="col-1">
            
            <div className="table">
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