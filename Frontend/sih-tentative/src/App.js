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
import ViewProperty from "./components/Staff/Dashboard/UpdateRequest"
import Rebate from "./components/Admin/Rebate";
import AdminDashboard from './components/Admin/Dashboard'
import Add_Zone from "./components/Admin/Add_Zone";
import TaxRate from "./components/Admin/TaxRate";
import AddTax from "./components/Admin/AddTax";

function App() {
  return (
    <>
      <Navbar ></Navbar>
      <container>
        <div className="content">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />

            {/* Admin Routes */}
            <Route exact path="/adminDashboard" component={AdminDashboard} />
            <Route exact path="/staffInfo" component={StaffInfo} />
            <Route exact path="/rebates" component={Rebate} />
            <Route exact path="/addZone" component={Add_Zone} />
            <Route exact path="/taxRate" component={TaxRate} />
            <Route exact path="/addtax" component={AddTax} />
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

            <Route exact path="/bill/:billid/" component={Bill} />

          </Switch>
        </div>
      </container>

    </>
  );
}
export default App;
