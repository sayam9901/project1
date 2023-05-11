import "./App.css";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Summary from "./components/Summary";

function App(props) {
  const [showsummary, setShowsummary] = useState(false);
  function handleSumaary(){
    setShowsummary(true)
  }
  function exitModel (){
    setShowsummary(false)
  }
  return (
    <div className="App">
      {
        showsummary?<Summary exitModel={exitModel}/>:<Hero handleSumaary={handleSumaary}/>
      }
      
      
    </div>
  );
}

export default App;
