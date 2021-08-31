import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Temp from "./Components/weather/temp";

function App() {
  return (
    <Router>
      <Route path="/weather" component={Temp}/>
      <Route path="/" component={Temp} exact />
    </Router>
  );
}

export default App;