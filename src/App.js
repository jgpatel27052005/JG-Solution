import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Technologies from "./Components/Technologies";
import Team from "./Components/Team";
import About from "./Components/About";
import Contact from "./Components/Contact";
import appd from './Components/appd'
import webd from "./Components/webd"
import webde from "./Components/webde"
import Privacy from "./Components/Privacy";
import tnc from "./Components/tnc";
import Refund from "./Components/Refund";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Technologies" Component={Technologies} />
          <Route exact path="Team" Component={Team} />
          <Route exact path="/Contact" Component={Contact} />
          <Route exact path="/About" Component={About} />

          <Route exact path="/App-development" Component={appd} />
          <Route exact path="Web-development" Component={webd} />
          <Route exact path="/Web-designing" Component={webde} />
          <Route exact path="/Privacy" Component={Privacy} />
          <Route exact path="/Terms-&-Condition" Component={tnc} />
          <Route exact path="/Refund" Component={Refund} />
 
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
