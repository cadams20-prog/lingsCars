import React, { Component } from "react";
 
class SportCar extends Component {
  render() {
    return (
      <div style={{display: 'flex',justifyContent:'center', alignItems:'center'}}>

            <img style={{position: 'relative',maxWidth: '1055',maxHieght: '800',width:'90%',height:'75%' }}src='https://cadams20-prog.github.io/lingsCars/images/cityimage21.png'/>
            
            <img style={{position: 'absolute',top: "1000px",left: '430px' }}src='https://cadams20-prog.github.io/lingsCars/images/car-1300629_640 1Copy.png'/>

         <div style={{position: 'absolute',top: "1100px",left: '130px' }}>  

            <p style={{textAlign: 'center', fontSize: '30px',color: '#F9FD34',fontWeight: 'bold'}}>Lease this car today
            <br/>
                    $2000 down $250 a mo.
            <br/> 
                    Car#SPTS1334
            <br/>
                    Click Here</p>
        </div>   

         <div style={{position: 'absolute',top: "100",left: "1020px" }}> 
         
            <p style={{textAlign: 'center', fontSize: '40px',color: '#FFF8F8',fontWeight: 'bold'}}>Sports Car<br/>
                Seats 2<br/>
                Automatic<br/>
                Stero<br/>
                Heat and Air<br/>
                Built in naviagtion
            </p>

            </div>
              <div style={{position: 'absolute',top: "1350px",left: "350px" }}> 
              <p style={{color: '#FFF8F8',fontSize: '9px', textAlign: 'center'}}>
              ABARTH | ALFAROMERO |  AUDI |  BMW | CITRON | DACIA | DS | FIAT | FORD | 
              HYUNDA | HONDA | JAGUAR | JEEP | KIA | LAND | ROVER | LEXUS | MAZDA | MERCEDES | 
              MG | 
              <br/>MINI | MITSUBISHI | NISSAN | PUGET | RENAULT | SEAT | SKODO | SMART | SUBARU | SUZUKI | 
              TERRAFUGIA | TOYOTA | VAUXHALL | VOLVO | VW | </p>

              </div>

         </div> 
    

    );
  }
}
 
export default SportCar;