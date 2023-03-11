import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

function FilterTable(){
    return(
        <>
    <DropdownList
  defaultValue="2022-2023"
  data={["2022-2023", "2021-2022", "2020-2021" ,"2019-2020"]}
/>
</>
    )
}

export default FilterTable;