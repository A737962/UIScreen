/*
   App.js : 
   All the component of the application is rendered over here 
*/

import React from "react";
import Routes from "./Components/Routes";
// import  NavigationBar from './Components/NavigationBar';
import UIHeader from "./Components/UIHeader";
import UIFooter from "./Components/UIFooter";
import CoverageAndBenefits from "./Components/UICoverageAndBenefits";
import DocumentCenter from "./Components/UIDocumentCenter";
import ClaimsCenter from "./Components/UIClaimsCenter";
import HelpCenter from "./Components/UIHelpCenter";
import UIDashboard from "./Components/UIDashboard";
import BeneficiaryManagement from "./Components/UIBeneficiaryManagement/Common/Common";
import BeneficiaryManagementReactTable from "./Components/UIBeneficiaryManagement/Common/CommonReactAccordian";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <>
      <Router>
        <UIHeader />
        {/* <NavigationBar /> */}
        <Switch>
          {/* {Routes.map((route) => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))} */}
          <Route
            exact
            path="/coverageAndBenefits"
            component={CoverageAndBenefits}
          />
          <Route exact path="/documentCenter" component={DocumentCenter} />
          <Route exact path="/claimsCenter" component={ClaimsCenter} />
          <Route exact path="/helpCenter" component={HelpCenter} />
          {/* <Route exact path="/" component={UIDashboard} /> */}
          <Route exact path="/" component={BeneficiaryManagementReactTable} />
        </Switch>
        <UIFooter />
      </Router>
    </>
  );
}
export default App;
