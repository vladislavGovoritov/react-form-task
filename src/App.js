import React from "react";
import EthernetForm from "./Components/EthernetForm/EthernetForm";
import WirelessForm from "./Components/WirelessForm/WirelessForm";
import {Buttons} from "./Components/Buttons/Buttons";
import "./App.css";

const initialState = {
    ethernetIP:"",
    ethernetSubnet: "",
    ethernetDNS: "",
    wirelessIP: "",
    wirelessSubnet: "",
    wirelessDNS: "",
    errorIP: "",
    errorSubnet: "",
    errorDNS: "",
    wirErrorIP: "",
    wirErrorSubnet: "",
    wirErrorDNS: "",
    selectedOption: "",
    disabled: false,
    wirelessNetworkName:"",
    securityKey:""

}
export default class App extends React.Component {

  state = initialState


 /*  handlerSelectDisbled = () => {
    this.setState({
      isSelectDisabled: true
    })
  } */


  handerOptionChange = (event) => {
    
    this.setState({ selectedOption: event.target.value,
                    disabled: true     
     });
    console.log(event.target.value);
    console.log(this.state.disabled)
  };

  validate = () => {
    let errorIP = "";
    let errorSubnet = "";
    let errorDNS = "";
    let wirErrorIP = "";
    let wirErrorSubnet = "";
    let wirErrorDNS = "";
    if (this.state.ethernetIP === "") {
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

    if (
      errorIP ||
      errorSubnet ||
      errorDNS ||
      wirErrorIP ||
      wirErrorSubnet ||
      wirErrorDNS
    ) {
      this.setState({
        errorIP,
        errorSubnet,
        errorDNS,
        wirErrorIP,
        wirErrorSubnet,
        wirErrorDNS
      });
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

  wirelessNetworkNameHandler = (event) => {
   this.setState({
    wirelessNetworkName: event.target.value
   })
  }
  securityKeyHandler = (event) => {
   this.setState({
    securityKey: event.target.value
   })
  }


  handlerSubmitForm = event => {
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
    event.target.reset()
  };

  render() {
    return (
      <form className="body" onSubmit={this.handlerSubmitForm} >
        <div className="block-left">
          <EthernetForm
            ethernetIP={this.ethernetIP}
            ethernetSubnet={this.ethernetSubnet}
            ethernetDNS={this.ethernetDNS}
            handlerIP={this.handlerIP}
            handlerSubnet={this.handlerSubnet}
            handlerDNS={this.handlerDNS}
            errorIP={this.state.errorIP}
            errorSubnet={this.state.errorSubnet}
            errorDNS={this.state.errorDNS}
            handerOptionChange={this.handerOptionChange}
            disabled={this.disabled}
            
          />
        </div>

        <div className="block-right">
          <WirelessForm
            wirelessIP={this.wirelessIP}
            wirelessSubnet={this.wirelessSubnet}
            wirelessDNS={this.wirelessDNS}
            wirelessHandlerIP={this.wirelessHandlerIP}
            wirelessHandlerSubnet={this.wirelessHandlerSubnet}
            wirelessHandlerDNS={this.wirelessHandlerDNS}
            wirErrorIP={this.state.wirErrorIP}
            wirErrorSubnet={this.state.wirErrorSubnet}
            wirErrorDNS={this.state.wirErrorDNS}
            handerOptionChange={this.handerOptionChange}
            wirelessNetworkName={this.wirelessNetworkName}
            wirelessNetworkNameHandler={this.wirelessNetworkNameHandler}
            securityKey={this.securityKey}
            securityKeyHandler={this.securityKeyHandler}
          />
        </div>
        <Buttons />
      </form>
    );
  }
}
