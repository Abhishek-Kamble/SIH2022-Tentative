import "./App.css";
import {  BrowserRouter,Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
          <div className="content">
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                    </Switch>
          </div>
    </BrowserRouter>
  );
}
export default App;
