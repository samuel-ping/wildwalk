// import React from "react";
// import { Router, Route } from "react-router-dom";
// import SideNav, {
//   Toggle,
//   Nav,
//   NavItem,
//   NavIcon,
//   NavText,
// } from "@trendmicro/react-sidenav";
// import PlantList from "./components/tabs/PlantList";
// import PlantCollection from "./components/tabs/PlantCollection";
// import LoginScreen from "./components/tabs/LoginScreen";
// import "@trendmicro/react-sidenav/dist/react-sidenav.css";

// function App() {
//   return (
//     <SideNav
//       onSelect={(selected) => {
//         // Add your code here
//       }}
//     >
//       <SideNav.Toggle />
//       <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="home">
//           <NavIcon>
//             <i className="fa fa-fw fa-home" />
//           </NavIcon>
//           <NavText>Home</NavText>
//         </NavItem>
//         <NavItem eventKey="charts">
//           <NavIcon>
//             <i className="fa fa-fw fa-line-chart" />
//           </NavIcon>
//           <NavText>Charts</NavText>
//           <NavItem eventKey="charts/linechart">
//             <NavText>Line Chart</NavText>
//           </NavItem>
//           <NavItem eventKey="charts/barchart">
//             <NavText>Bar Chart</NavText>
//           </NavItem>
//         </NavItem>
//       </SideNav.Nav>
//     </SideNav>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collection from "./components/tabs/Collection";
import Dashboard from "./components/tabs/Dashboard";
import LoginScreen from "./components/tabs/LoginScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
