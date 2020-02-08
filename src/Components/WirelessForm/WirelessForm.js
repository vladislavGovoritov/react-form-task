import React, { Component } from "react";

import "./WirelessForm.css";

export default class WirelessForm extends Component {
  state = {
    textIP: "",
    textSubnet: "",
    textDNS: ""
  };

  handlerIP = (event) => {
    this.setState({
      textIP: event.target.value
    })
   }
   handlerSubnet = (event) => {
     this.setState({
       textSubnet: event.target.value
     })
   }
 
   handlerDNS = (event) => {
     this.setState({
       textDNS: event.target.value
     })
   }

   
  render() {
    const { textIP, textSubnet, textDNS } = this.state;
    return (
      <div>
        <div className="wirDiv">
          <strong>Wireless Settings</strong>
        </div>
        <div className="wForm1">
          <label className="label-style">
            Enable wifi:
            <input type="checkbox" />
          </label>

          <label className="label-style">
            Wireless Network Name:
            <input type="text" placeholder="Please select" />
          </label>

          <label className="label-style">
            Enable Wireless Security:
            <input type="checkbox" />
          </label>

          <label className="label-style">
            Security Key:
            <input type="text" />
          </label>
        </div>

        <div className="wForm2">
          <label className="label-style">
            <input type="radio" />
            Obtain an IP address automatically (DHCP/BootP):
          </label>

          <label className="label-style">
            <input type="radio" />
            Use the following IP address:
          </label>

          <label className="label-style">
            IP address:
            <input type="text" value={textIP} onChange={this.handlerIP} />
          </label>

          <label className="label-style">
            Subnet mask:
            <input type="text" value={textSubnet} onChange={this.handlerSubnet}/>
          </label>

          <label className="label-style">
            Default Gateway:
            <input type="text" />
          </label>
        </div>

        <div className="wForm3">
          <label className="label-style">
            <input type="radio" />
            Obtain DNS server address automatically:
          </label>

          <label className="label-style">
            <input type="radio" />
            Use the following DS server address:
          </label>

          <label className="label-style">
            Preferred DNS server:
            <input type="text" value={textDNS}  onChange={this.handlerDNS}/>
          </label>

          <label className="label-style">
            Alternative DNS server:
            <input type="text" />
          </label>
        </div>
      </div>
    );
  }
}
