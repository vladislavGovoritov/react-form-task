import React from "react";
import EthernetForm from "./Components/EthernetForm/EthernetForm";
import WirelessForm from "./Components/WirelessForm/WirelessForm";
import Buttons from "./Components/Buttons/Buttons";
import "./App.css";

export default class App extends React.Component {
  state = {
  ethernetIP: "",
  ethernetSubnet: "",
  ethernetDNS: "",
  wirelessIP: "",
  wirelessSubnet: "",
  wirelessDNS: "",
  errorIP: "",
  errorSubnet: "",
  errorDNS: "",
  wirErrorIP:"",
  wirErrorSubnet:"",
  wirErrorDNS:""
  }
  

  validate = () => {
    let errorIP = "";
    let errorSubnet = "";
    let errorDNS = "";
    let wirErrorIP = "";
    let wirErrorSubnet = "";
    let wirErrorDNS = "";
    if (this.state.ethernetIP  === "") {
      errorIP = "Поле не может быть пустым";
    }
    if (this.state.ethernetSubnet === "") {
      errorSubnet = "Поле не может быть пустым";
    }
    if (this.state.ethernetDNS === "") {
      errorDNS = "Поле не может быть пустым";
    }
    if (this.state.wirelessIP === "") {
      wirErrorIP = "Поле не может быть пустым";
    }
    if (this.state.wirelessSubnet === "") {
      wirErrorSubnet = "Поле не может быть пустым";
    }
    if (this.state.wirelessDNS === "") {
      wirErrorDNS = "Поле не может быть пустым";
    }

    if (errorIP || errorSubnet || errorDNS || wirErrorIP || wirErrorSubnet ||wirErrorDNS) {
      this.setState({ errorIP, errorSubnet, errorDNS, wirErrorIP, wirErrorSubnet, wirErrorDNS });
      return false;
    }
    
    return true;
  };

  handlerIP = event => {
    this.setState({
      ethernetIP: event.target.value
    });
  };
  handlerSubnet = event => {
    this.setState({
      ethernetSubnet: event.target.value
    });
  };

  handlerDNS = event => {
    this.setState({
      ethernetDNS: event.target.value
    });
  };

  wirelessHandlerIP = event => {
    this.setState({
      wirelessIP: event.target.value
    });
  };
  wirelessHandlerSubnet = event => {
    this.setState({
      wirelessSubnet: event.target.value
    });
  };

  wirelessHandlerDNS = event => {
    this.setState({
      wirelessDNS: event.target.value
    });
  };

  handlerSubmitForm = event => {
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      console.log(this.state);
      this.setState({ethernetIP: "",
      ethernetSubnet: "",
      ethernetDNS: "",
      wirelessIP: "",
      wirelessSubnet: "",
      wirelessDNS: "",
      })
    }
  };

  render() {
    
    return (
      <form className="body" onSubmit={this.handlerSubmitForm} >
        <div className="block-left">
          <EthernetForm
            handlerIP={this.handlerIP}
            handlerSubnet={this.handlerSubnet}
            handlerDNS={this.handlerDNS}
            errorIP={this.state.errorIP}
            errorSubnet={this.state.errorSubnet}
            errorDNS={this.state.errorDNS}
          />
        </div>

        <div className="block-right">
          <WirelessForm
            wirelessHandlerIP={this.wirelessHandlerIP}
            wirelessHandlerSubnet={this.wirelessHandlerSubnet}
            wirelessHandlerDNS={this.wirelessHandlerDNS}
            wirErrorIP={this.state.wirErrorIP}
            wirErrorSubnet={this.state.wirErrorSubnet}
            wirErrorDNS={this.state.wirErrorDNS}
            
          />
        </div>
        <Buttons />
      </form>
    );
  }
}
