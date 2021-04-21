import {useState, useEffect} from "react"
import Columns from "./components/columns/holdingcolumn";
import HoldingsView from './components/views/holdingsview';


function App() {
  const [holding, setHolding] =  useState([{}]);
    useEffect(() => {
      const getData = () => {
        fetch("https://canopy-frontend-task.now.sh/api/holdings")
            .then(res => res.json())
            .then(res => {setHolding([...res.payload])})
      };
      getData()
    }, [])

  return (
    <div className="App">
      <HoldingsView jsonData = {holding} Columns = {Columns} />
    </div>
  );
}

export default App;
