import React from "react";
import EthernetForm from "./Components/EthernetForm/EthernetForm";
import WirelessForm from "./Components/WirelessForm/WirelessForm";
import Buttons from "./Components/buttons/Buttons";
import "./App.css";

export default class App extends React.Component {


  handlerSubmitForm = (event) => {
    event.preventDefault()
    
    console.log('Success')
   
  }
  render() {
    
    return (
      <form className="body" onSubmit={this.handlerSubmitForm}>
        <div className="block-left">
          <EthernetForm />
        </div>

        <div className="block-right">
          <WirelessForm />
        </div>
        <Buttons  />
      </form>
    );
  }
}
