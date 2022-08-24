import "./App.css";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Registration from "./components/Staff/Registration"
import StaffInfo from "./components/Admin/StaffInfo"
import Login from "./components/Login"
import UserDashboard from "./components/User/Dashboard"
import Property from "./components/User/Property"
import StaffDashboard from "./components/Staff/Dashboard/Dashboard"
import Bill from "./components/User/Bill/Bill";
import PRegistration from "./components/Staff/Property/PRegistration";
import UProperty from "./components/Staff/Property/UProperty"
import Logout from "./components/Logout";
import PRegistration from "./components/Staff/Property/Registration";
import ViewProperty from "./components/Staff/Dashboard/UpdateRequest"

function App() {
  return (
    <>
      <Navbar role='admin'></Navbar>
      <container>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Registration} />
            <Route exact path="/login" component={Login} />

            {/* Admin Routes */}
            <Route exact path="/adminDashboard" component={LandingPage} />
            <Route exact path="/staffInfo" component={StaffInfo} />
            <Route exact path="/staffRegistration" component={Registration} />

            {/* User Routes */}
            <Route exact path="/userDashboard" component={UserDashboard} />
            <Route exact path="/property" component={Property} />

            {/* Staff Routes */}
            <Route exact path="/staffDashboard" component={StaffDashboard} />
            <Route exact path="/viewProperty" component={ViewProperty} />
            <Route exact path="/propertyRegistration" component={PRegistration} />

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
