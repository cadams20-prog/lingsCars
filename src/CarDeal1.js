import React, { Component } from "react";
 
class CarDeal1 extends Component {
  render() {
    return (
      <div style={{display: 'flex',justifyContent:'center', alignItems:'center'}}>

            <img style={{position: 'relative',maxWidth: '1055',maxHieght: '800',width:'90%',height:'75%' }}src='https://cadams20-prog.github.io/lingsCars/images/backgroundBlue.png'/>
            
            <img style={{position: 'absolute',top: "1000px",left: '300px' }}src='https://cadams20-prog.github.io/lingsCars/images/car-937414_640.png'/>

         <div style={{position: 'absolute',top: "1250px",left: '200px' }}>  

            <p style={{textAlign: 'center', fontSize: '30px',color: '#F9FD34',fontWeight: 'bold'}}>Lease this car today
            <br/>
                    $2000 down $250 a mo.
            <br/> 
                    Car#SDSL12345
            <br/> 
                    Click Here</p>
        </div>   

         <div style={{position: 'absolute',top: "1000px",left: "950px" }}> 
         
            <p style={{textAlign: 'center', fontSize: '40px',color: '#FFF8F8',fontWeight: 'bold'}}>Compact Car<br/>
                Seats 4<br/>
                Automatic<br/>
                Stero<br/>
                Heat and Air<br/>
                Built in naviagtion
            </p>

         </div>

         <div style={{position: 'absolute',top: "1460px",left: "350px" }}> 
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
 
export default CarDeal1;