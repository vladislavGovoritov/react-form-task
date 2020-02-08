import React, { Component } from "react";
import "./EthernetForm.css";

export default class EthernetForm extends Component {
  state = {
    textIP: "",
    textSubnet: "",
    textDNS: "",
    
    
  };
  handlerIP = (event) => {
    const val = event.target.value
   if(typeof val ==='string') {
     console.log('error')
   }
    this.setState({
      textIP: val
    });
    
    
  };
  handlerSubnet = event => {
    this.setState({
      textSubnet: event.target.value
    });
  };

  handlerDNS = event => {
    this.setState({
      textDNS: event.target.value
    });
  };

  render() {
    const { textIP, textSubnet, textDNS } = this.state;

    return (
      <div>
        <div className="eDiv">
          <strong>Ethernet Settings</strong>
        </div>
        <div className="iForm1">
          <label className="label-style">
            <input type="radio" />
            Obtain an IP address automatically(DHCP/BootP)
          </label>

          <label className="label-style">
            <input type="radio" />
            Use the following IP address:
          </label>

          <label className="label-style">
            IP address:{" "}
            <input
              type="text"
              pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
              value={textIP}
              onChange={this.handlerIP}
              minLength='12'
              maxLength='15'
              formNoValidate
              
            />
          </label>

          <label className="label-style">
            Subnet mask:{" "}
            <input
              type="text"
              value={textSubnet}
              onChange={this.handlerSubnet}
            />
          </label>

          <label className="label-style">
            Default Gateway: <input type="text" />
          </label>
        </div>

        <div className="iForm2">
          <label className="label-style">
            <input type="radio" />
            Obtain DNS server address automatically
          </label>

          <label className="label-style">
            <input type="radio" />
            Use the following DS server address:
          </label>

          <label className="label-style">
            Preferred DNS server:{" "}
            <input type="text" value={textDNS} onChange={this.handlerDNS} />
          </label>

          <label className="label-style">
            Alternative DNS server: <input type="text" />
          </label>
        </div>
      </div>
    );
  }
}
