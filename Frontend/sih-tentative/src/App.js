import "./App.css";
import {  BrowserRouter,Route, Switch,Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Registration from "./components/Staff/Registration"

function App() {
  return (
    <>
        
          <Navbar></Navbar>
          <container>
              <div className="content">
                        <Switch>
                            <Route exact path="/" component={LandingPage}/>
                            <Route exact path="/Register" component={Registration}/>
                        </Switch>
              </div>
        </container>
    </>
  );
}
export default App;
