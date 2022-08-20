import "./App.css";
import {  BrowserRouter,Route, Switch,Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Registration from "./components/Staff/Registration"
import StaffInfo from "./components/Admin/StaffInfo"
 import Login from "./components/Login"
import UserDashboard from "./components/User/Dashboard"
import Property from "./components/User/Property"
import Bill from "./components/User/Bill/Bill";
import PRegistration from "./components/Staff/Property/Registration"

function App() {
  return (
    <>
        
          <Navbar></Navbar>
          <container>
              <div className="content">
                        <Switch>
                            <Route exact path="/" component={Registration}/>
                            <Route exact path="/Register" component={StaffInfo}/>
                            <Route exact path="/about" component={Property}/>
                            <Route exact path="/login" component={UserDashboard}/>
                            <Route exact path="/pregister" component={PRegistration} />
                        </Switch>
              </div>
        </container>
    </>
  );
}
export default App;
