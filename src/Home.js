import React, { Component } from "react";
import { Link } from "react-router-dom";
import {ShakeHorizontal} from "reshake";
class Home extends Component {
    render() {
      return (
          
        <div>
          
          <p style={{fontSize: '14px', textAlign: 'center'}}>
            Ling’s Car is privately owned and has over 50, 000 different makes and models for lease. 
            Daily Specials. Quick online response for quotes, proposals, order and delivery. Offers both Contract Hire and PCP.</p>
           
            <div style={{display: 'flex',justifyContent:'center', alignItems:'center'}}>
              <ShakeHorizontal>
                <Link to ="/cardeal1"><img style={{marginBottom: '0px',position: 'relative',maxWidth:'100px',maxHieght:'50px',width: '100%', height: '100%',paddingLeft:'50px',display: 'inlineblock'}}src="/images/car-937414_640.png"/></Link>
              </ShakeHorizontal>

              <ShakeHorizontal>
                  <Link to ="/midsize">  <img style={{position: 'relative',maxWidth:'70px',maxHieght:'30px',width: '100%', height: '100%', paddingLeft:'50px',display: 'inlineblock'}}src="/images/car-33556_640.png"/></Link>
              </ShakeHorizontal>

              <ShakeHorizontal>
                 <Link to ="/sportcar">  <img style={{position: 'relative',maxWidth:'100px',maxHieght:'75px',width: '100%', height: '100%',paddingLeft:'50px',display: 'inlineblock'}}src="/images/car-1300629_640 1Copy.png" /></Link>
              </ShakeHorizontal>

              <ShakeHorizontal>  
              <Link to ="/largecar"><img style={{position: 'relative',maxWidth:'100px',maxHieght: '50px',width: '100%', height: '100%',paddingLeft:'50px',display: 'inlineblock'}}src="/images/pickup-truck copy.png" /> </Link>
              </ShakeHorizontal>
            </div>
             
            <div style={{display: 'flex',justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize:"1em", marginTop: '0px',position: 'relative',paddingLeft:'38px',display: 'inlineblock'}}>Compact</p>
                <p style={{fontSize:"1em", marginTop: '0px',position: 'relative',paddingLeft:'80px',display: 'inlineblock'}}>Midsize</p>
                <p style={{fontSize:"1em", marginTop: '0px',position: 'relative',paddingLeft:'70px',display: 'inlineblock'}}>Sport Car</p>
                <p style={{fontSize:"1em", marginTop: '0px',position: 'relative',paddingLeft:'88px',display: 'inlineblock'}}>Large</p>
            </div>
            <div> 
               <h2 style={{textAlign:'center'}}>Start leasing today to be Maintenance Free and drive a New Car every couple of years!</h2>
            </div> 
            <div>
             <p style={{fontSize: '9px', textAlign: 'center'}}>
              ABARTH | ALFAROMERO |  AUDI |  BMW | CITRON | DACIA | DS | FIAT | FORD | 
              HYUNDA | HONDA | JAGUAR | JEEP | KIA | LAND | ROVER | LEXUS | MAZDA | MERCEDES | 
              MG | MINI | MITSUBISHI | NISSAN | PUGET | RENAULT | SEAT | SKODO | SMART | SUBARU | SUZUKI | 
              TERRAFUGIA | TOYOTA | VAUXHALL | VOLVO | VW | </p>
            </div>
        </div>
      );
    }
  }
   
  export default Home;