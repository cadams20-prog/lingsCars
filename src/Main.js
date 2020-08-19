import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Specials from "./Specials";
  import Contact from "./Contact";
  import CarDeal1 from "./CarDeal1";
  import MidSize from "./MidSize";
  import SportCar from "./SportCar";
  import LargeCar from "./LargeCar";
  import Appointment from "./Appointment";
 

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <img style={{position: 'relative', maxWidth: '1455px',maxHieght: '50px',width:'100%',height:'50%'}}src="https://cadams20-prog.github.io/lingsCars/images/homepage1.jpg" />
          <h1 style={{textAlign: 'center'}}>Ling's Cars Leasing Deals</h1>
          <ul className="header">
            <li><NavLink exact to = "/">Home</NavLink></li>
            <li><NavLink to = "/specials">Specials</NavLink></li>
            <li><NavLink to ="/contact">Contact</NavLink></li>
            <li><NavLink to ="/appointment">Appointment</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/specials" component={Specials}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/cardeal1" component={CarDeal1}/>
            <Route path="/midsize" component={MidSize}/>
            <Route path="/sportcar" component={SportCar}/>
            <Route path="/largecar" component={LargeCar}/>
            <Route path="/appointment" component={Appointment}/>
            
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;