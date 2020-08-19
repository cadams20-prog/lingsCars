import React, { Component } from "react";
import  './index.css';
import TimeP from "./TimeP";

class Form extends Component {
    state = { carID: '' };
    state = { name: '' };
    state = { address: '' };
    state = { e_address: '' };
    state = { phone: '' };


  render() {
    return (
      <form>
      
          <input 
          type="text" 
          value={this.state.carID}
          onChange={event => this.setState({ name: event.target.value })}
          placeholder="Enter Car ID" 
          required 
        />
        <br/>
        <br/>
    	  <input 
          type="text" 
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
          placeholder="Enter Your Name" 
          required 
        />
        <br/>
        <br/>
          <input 
          type="text" 
          value={this.state.e_address}
          onChange={event => this.setState({ e_address: event.target.value })}
          placeholder="Enter Email Address" 
          required 
        />
        <br/>
        <br/>
          <input 
          type="text" 
          value={this.state.phone}
          onChange={event => this.setState({ phone: event.target.value })}
          placeholder="Enter Phone Number" 
          required 
        />
        <br/>
        <br/>
            <div>
            <TimeP/>
            </div>  
        
        <button>Submit</button>
    	</form>
    );
  }
}
 
export default Form;