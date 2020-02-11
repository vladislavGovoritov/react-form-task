import React   from "react";
import {WirelessFormItem1} from '../WirelessFormItem/WirelessFormItem1'
import {WirelessFormItem2} from '../WirelessFormItem/WirelessFormItem2'
import {WirelessFormItem3} from '../WirelessFormItem/WirelessFormItem3'

import "./WirelessForm.css";

export default function WirelessForm(props)  {
  const  {wirelessIP, wirelessSubnet, wirelessDNS,
          wirelessHandlerIP,wirelessHandlerSubnet,wirelessHandlerDNS,
          wirErrorIP,wirErrorSubnet,wirErrorDNS,
          selectedOption, handerOptionChange,
          wirelessNetworkName, securityKey,
          securityKeyHandler, wirelessNetworkNameHandler
        } = props
    
    return (
      <div>
        <div className="wirDiv">
          <strong>Wireless Settings</strong>
        </div>
        <div className="wForm1">
         <WirelessFormItem1
           wirelessNetworkName={ wirelessNetworkName}
           wirelessNetworkNameHandler={wirelessNetworkNameHandler}
           securityKey={securityKey}
           securityKeyHandler={securityKeyHandler}
         />
        </div>

        <div className="wForm2">
          <label className="label-style">
            <input 
            type="radio" 
            value='option5' 
            defaultChecked={selectedOption ==='option5' } 
            onChange={handerOptionChange}
            name='selected3'
            />
            Obtain an IP address automatically (DHCP/BootP):
          </label>

          <WirelessFormItem2
          wirelessIP={wirelessIP}
          wirelessSubnet={wirelessSubnet}
          wirelessHandlerIP={wirelessHandlerIP}
          wirelessHandlerSubnet={wirelessHandlerSubnet}
          wirErrorIP={wirErrorIP}
          wirErrorSubnet={wirErrorSubnet}
          selectedOption={selectedOption}
          handerOptionChange={handerOptionChange}

          

          />
        </div>

        <div className="wForm3">
          <label className="label-style">
            <input 
            type="radio"
            value='option7' 
            defaultChecked={selectedOption ==='option7' } 
            onChange={handerOptionChange}
            name='selected4'
             />
            Obtain DNS server address automatically:
          </label>

          <WirelessFormItem3
          wirelessDNS={wirelessDNS}
          wirelessHandlerDNS={wirelessHandlerDNS}
          wirErrorDNS={wirErrorDNS}
          selectedOption={selectedOption}
          handerOptionChange={handerOptionChange}
          />
        </div>
      </div>
    );
}
