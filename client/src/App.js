import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs"
import Avionics from "./views/Avionics/Avionics"
import Software from "./views/Software/Software"
import FAQ from "./components/FAQ/FAQ"
import PCB from "./components/Render/Render"
import NotFound from "./views/NotFound/NotFound";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './assets/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Avionics" component={Avionics}></Route>
        <Route exact path="/Software" component={Software}></Route>
        <Route exact path="/AboutUs" component={AboutUs}></Route>
        <Route exact path="/FAQ" component={FAQ}></Route>
        <Route exact path="/Other/PCB" component={PCB}></Route>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
