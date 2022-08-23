import "./App.css";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Registration from "./components/Staff/Registration"
import StaffInfo from "./components/Admin/StaffInfo"
import Login from "./components/Login"
import UserDashboard from "./components/User/Dashboard"
import Property from "./components/User/Property"
import Bill from "./components/User/Bill/Bill";
import PRegistration from "./components/Staff/Property/PRegistration";
import UProperty from "./components/Staff/Property/UProperty"
import Logout from "./components/Logout";

function App() {
  return (
    <>
        
          {/* <Navbar></Navbar>
          <container>
              <div className="content">
                        <Switch>
                            <Route exact path="/" component={Registration}/>
                            <Route exact path="/Register" component={StaffInfo}/>
                            <Route exact path="/about" component={Property}/>
                            <Route exact path="/login" component={UserDashboard}/>
                            <Route exact path="/pregister" component={PRegistration} />
                            <Route exact path="/up" component={UProperty} />
                        </Switch>
              </div>
        </container> */}
      <Navbar role='admin'></Navbar>
      <container>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Registration} />

            {/* Admin Routes */}
            <Route exact path="/adminDashboard" component={LandingPage} />
            <Route exact path="/staffInfo" component={StaffInfo} />
            <Route exact path="/staffRegistration" component={Registration} />

            {/* User Routes */}
            <Route exact path="/userDashboard" component={UserDashboard} />
            <Route exact path="/property" component={Property} />

            <Route exact path="/pregister" component={PRegistration} />
            <Route exact path="/up" component={UProperty} />
            <Route exact path="/logout" component={Logout} />

          </Switch>
        </div>
      </container>

    </>
  );
}
export default App;
