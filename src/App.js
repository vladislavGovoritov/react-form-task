import React from "react";
import EthernetForm from "./Components/EthernetForm/EthernetForm";
import WirelessForm from "./Components/WirelessForm/WirelessForm";
import Buttons from "./Components/Buttons/Buttons";
import "./App.css";

export default class App extends React.Component {
  state = {
    
      textIP: "",
      textSubnet: "",
      textDNS: ""
  };

  handlerIP = (event) => {
    this.setState({
      wireless:{textIP: event.target.value}
    })
   }
   handlerSubnet = (event) => {
     this.setState({
      wireless:{textSubnet: event.target.value}
     })
   }
 
   handlerDNS = (event) => {
     this.setState({
      wireless:{textDNS: event.target.value}
     })
   }

  handlerSubmitForm = event => {
    event.preventDefault();

    console.log("Success");
  };

  /* handlerIP = event => {
    const val = event.target.value;
    if (typeof val === "string") {
      console.log("error");
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
  }; */



  render() {
    return (
      <form className="body" onSubmit={this.handlerSubmitForm}>
        <div className="block-left">
          <EthernetForm
          handlerIP={this.handlerIP}
          handlerSubnet={this.handlerSubnet}
          handlerDNS={this.handlerDNS} 
          />
        </div>

        <div className="block-right">
          <WirelessForm
          handlerIP={this.handlerIP}
          handlerSubnet={this.handlerSubnet}
          handlerDNS={this.handlerDNS}
           />
        </div>
        <Buttons />
      </form>
    );
  }
}
